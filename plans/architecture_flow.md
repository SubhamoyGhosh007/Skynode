# SkyNode — Architecture & Information Flow

## High-Level Architecture

```mermaid
graph TB
    subgraph "Internet"
        BUYER["Buyer (Tenant Admin)"]
        CUST["End Customer"]
        ADMIN["Master Admin (You)"]
    end

    subgraph "SkyNode Cloud — ZAP-Hosting VPS"
        NGINX["Nginx Reverse Proxy<br/>Wildcard SSL + Custom Domains<br/>(Future: API Gateway)"]
        
        subgraph "Docker Compose Stack"
            DASH["React Dashboard (SPA)<br/>:5173 (dev) / static (prod)"]
            API["Express Panel API<br/>:4000"]
        end
        
        NEON["Neon PostgreSQL<br/>(Managed)"]
        UPSTASH["Upstash Redis<br/>(Managed)"]
        RESEND["Resend<br/>(Email API)"]
        RAZORPAY["Razorpay<br/>(Payments)"]
    end

    subgraph "Buyer VPS #1 (e.g. Hetzner)"
        DAEMON1["SkyNode Daemon"]
        DOCKER1["Docker Engine"]
        C1["MC Server"]
        C2["Discord Bot"]
        DAEMON1 --> DOCKER1
        DOCKER1 --> C1
        DOCKER1 --> C2
    end

    subgraph "Buyer VPS #2 (e.g. OVH)"
        DAEMON2["SkyNode Daemon"]
        DOCKER2["Docker Engine"]
        C3["Rust Server"]
        DAEMON2 --> DOCKER2
        DOCKER2 --> C3
    end

    BUYER --> NGINX
    CUST --> NGINX
    ADMIN --> NGINX
    NGINX --> DASH
    NGINX --> API
    DASH -->|"API calls"| API
    API --> NEON
    API --> UPSTASH
    API --> RESEND
    API --> RAZORPAY
    API <-->|"REST + WebSocket"| DAEMON1
    API <-->|"REST + WebSocket"| DAEMON2
```

---

## Gateway-Ready Architecture (Phase 3 Future)

```mermaid
graph TB
    subgraph "Internet"
        CLIENT["All Clients"]
    end

    subgraph "SkyNode Cloud"
        GW["API Gateway<br/>(Nginx / Express Gateway)"]
        
        CORE["Core API Service<br/>(Express :4000)"]
        BILLING["Billing Service<br/>(Express :4001)"]
        DAEMON_HUB["Daemon Hub Service<br/>(Express :4002)"]
        ANALYTICS["Analytics Service<br/>(Express :4003)"]
        DASH["React Dashboard (SPA)<br/>(Nginx static files)"]
    end

    CLIENT --> GW
    GW -->|"/api/v1/auth, admin, tenant, customer"| CORE
    GW -->|"/api/v1/billing/*"| BILLING
    GW -->|"/daemon/*"| DAEMON_HUB
    GW -->|"/api/v1/analytics/*"| ANALYTICS
    GW -->|"/*"| DASH
```

> **Key insight:** Each module is already an Express Router. Extraction = wrap the router in `express().listen()` + update the gateway config. Zero business logic changes.

---

## Information Flow — Every Major Operation

### Flow 1: Buyer Registration & Onboarding

```mermaid
sequenceDiagram
    actor B as Buyer
    participant UI as React Dashboard
    participant API as Panel API
    participant DB as Neon PostgreSQL
    participant R as Razorpay
    participant E as Resend Email

    B->>UI: Fills registration form
    UI->>API: POST /auth/register
    API->>DB: Create user (role: tenant_admin)
    API->>DB: Create tenant + branding record
    API->>R: Create Razorpay Customer
    API->>R: Create Subscription (starter plan)
    R-->>API: Subscription confirmed
    API->>DB: Create subscription record
    API->>E: Send welcome + verification email
    API-->>UI: { user, tokens, tenant }
    UI-->>B: Redirected to /dashboard
```

### Flow 2: Buyer Adds a VPS Node

```mermaid
sequenceDiagram
    actor B as Buyer
    participant UI as Dashboard
    participant API as Panel API
    participant DB as PostgreSQL
    participant D as Daemon on VPS

    B->>UI: Add Node (IP, port, specs)
    UI->>API: POST /tenant/nodes
    API->>API: Generate daemon auth token
    API->>DB: Save node + hashed token
    API-->>UI: { node, daemonToken, installScript }
    UI-->>B: Shows install instructions

    Note over B,D: Buyer SSHs into VPS and runs install script

    B->>D: Runs: curl install.sh | bash
    D->>D: Installs Docker + SkyNode Daemon
    D->>API: POST /daemon/handshake { token, systemInfo }
    API->>DB: Verify token, update node status → online
    API-->>D: { accepted: true, config }
    
    Note over D,API: Daemon starts heartbeat loop (every 30s)
    
    loop Every 30 seconds
        D->>API: POST /daemon/heartbeat { cpu, ram, disk }
        API->>DB: Update node stats
    end
```

### Flow 3: Creating a Game Server

```mermaid
sequenceDiagram
    actor B as Buyer
    participant UI as Dashboard
    participant API as Panel API
    participant DB as PostgreSQL
    participant R as Redis
    participant D as Daemon
    participant DK as Docker Engine

    B->>UI: Create Server (select egg, node, customer, limits)
    UI->>API: POST /tenant/servers
    API->>DB: Validate node capacity (memory, disk)
    API->>DB: Create server record (status: installing)
    API->>R: Publish "server.install" event
    API->>D: POST /daemon/servers/:id/install { egg, envVars }
    
    D->>DK: docker pull [egg.docker_image]
    DK-->>D: Image pulled
    D->>DK: docker create (with limits, ports, volumes)
    DK-->>D: Container created
    D->>DK: Run egg install_script inside container
    DK-->>D: Install complete
    
    D->>API: Webhook: server.installed { containerId }
    API->>DB: Update server (status: stopped, containerId)
    API->>R: Publish "server.installed" event
    API-->>UI: Real-time update via WebSocket
    UI-->>B: Server ready! Start button enabled
```

### Flow 4: Console Streaming (Real-Time)

```mermaid
sequenceDiagram
    actor U as User (Buyer or Customer)
    participant UI as Dashboard
    participant API as Panel API
    participant R as Redis
    participant D as Daemon
    participant DK as Docker

    U->>UI: Opens server console page
    UI->>API: WS connect /tenant/servers/:id/console
    API->>API: Verify JWT + permissions
    API->>D: WS connect /daemon/ws (subscribe: server_id)
    
    D->>DK: docker logs --follow [container]
    
    loop Real-time stream
        DK-->>D: stdout/stderr line
        D-->>API: WS message { serverId, line, level }
        API-->>UI: WS message { line, level, timestamp }
        UI-->>U: Renders in terminal UI
    end

    U->>UI: Types command in console
    UI->>API: WS message { type: "command", data: "say hello" }
    API->>D: WS message { type: "command", serverId, cmd }
    D->>DK: docker exec stdin → write command
```

### Flow 5: End Customer Purchases a Server

```mermaid
sequenceDiagram
    actor EC as End Customer
    participant UI as Customer Panel
    participant API as Panel API
    participant DB as PostgreSQL
    participant RP as Razorpay
    participant D as Daemon

    EC->>UI: Browse hosting plans, select one
    UI->>API: POST /customer/orders { planId }
    API->>DB: Get plan details + tenant's Razorpay linked account
    API->>DB: Check regional discount for customer's region
    API->>API: Calculate: price - discount
    API->>RP: Create Razorpay Order (with route transfer to tenant)
    RP-->>API: { orderId, amount }
    API-->>UI: { orderId, amount, key }
    
    UI->>RP: Razorpay Checkout opens, customer pays
    RP-->>API: Webhook: payment.captured
    
    API->>API: commission = max(amount × 0.10, ₹400)
    API->>DB: Record transaction (sale, commission, net_to_tenant)
    API->>RP: Transfer net_to_tenant to Buyer's linked account
    API->>DB: Create server record
    API->>D: POST /daemon/servers/:id/install
    
    D->>D: Pull image, create container, run install
    D-->>API: server.installed
    API-->>UI: Your server is ready!
```

### Flow 6: Custom Domain Resolution

```mermaid
sequenceDiagram
    actor V as Visitor
    participant DNS as DNS Provider
    participant NG as Nginx (SkyNode VPS)
    participant API as Panel API
    participant DB as PostgreSQL
    participant DASH as React SPA

    Note over V: Visitor goes to indiasells.com

    V->>DNS: Resolve indiasells.com
    DNS-->>V: CNAME → skynode.com (or A record)
    V->>NG: HTTPS request to indiasells.com
    NG->>NG: Wildcard SSL via Let's Encrypt
    NG->>API: Forward with Host header: indiasells.com
    API->>DB: SELECT * FROM tenants WHERE custom_domain = 'indiasells.com'
    DB-->>API: { tenant_id, branding }
    API->>API: Set tenant context (AsyncLocalStorage)
    API-->>DASH: Serve dashboard with tenant branding
    DASH-->>V: Branded dashboard (IndiaSells logo, colors, name)
```

### Flow 7: Daemon Heartbeat & Monitoring

```mermaid
sequenceDiagram
    participant D as Daemon
    participant DK as Docker Engine
    participant API as Panel API
    participant DB as PostgreSQL
    participant R as Redis

    loop Every 30 seconds
        D->>DK: docker stats (all containers)
        DK-->>D: { cpu, memory, disk per container }
        D->>D: Aggregate node-level stats
        
        D->>API: POST /daemon/heartbeat
        Note right of D: { nodeId, cpu: 45%, memory: 72%,<br/>disk: 31%, containers: [{id, cpu, mem}] }
        
        API->>DB: UPDATE nodes SET memory_used, cpu_used, last_heartbeat
        API->>DB: UPDATE servers SET resource_usage (per container)
        API->>R: PUBLISH node:{nodeId}:stats (for live dashboards)
        API->>DB: INSERT analytics_event (if resource peak)
        API-->>D: { ack: true }
    end

    Note over API: If no heartbeat for 90s → mark node OFFLINE
    API->>DB: UPDATE nodes SET status = 'offline'
    API->>R: PUBLISH alert:node_offline
```

---

## Data Flow Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                        INTERNET LAYER                          │
│  Buyers / Customers / Admin → Nginx (SSL termination)          │
└──────────────────────────┬──────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                      APPLICATION LAYER                          │
│                                                                 │
│  React SPA (Vite)        ←→  Express API                      │
│  • Client-side rendering       • Auth (JWT + RBAC)             │
│  • Tenant-branded UI            • Tenant context isolation     │
│  • Real-time console            • Business logic               │
│  • File manager                 • Commission engine            │
│                                 • WebSocket hub (ws)           │
│                                                                 │
│  Gateway-Ready: Each Express Router = potential microservice   │
└────────────┬────────────────────────┬───────────────────────────┘
             │                        │
┌────────────▼────────┐  ┌────────────▼───────────────────────────┐
│    DATA LAYER       │  │         EXTERNAL SERVICES              │
│                     │  │                                        │
│  Neon PostgreSQL    │  │  Razorpay       → Payments             │
│  • 17 tables        │  │  Resend          → Emails              │
│  • RLS policies     │  │  Upstash Redis   → Cache/PubSub       │
│  • Analytics data   │  │                                        │
└─────────────────────┘  └────────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                    INFRASTRUCTURE LAYER                          │
│                                                                 │
│  Buyer VPS #1          Buyer VPS #2          Buyer VPS #N       │
│  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐  │
│  │ SkyNode      │      │ SkyNode      │      │ SkyNode      │  │
│  │ Daemon       │      │ Daemon       │      │ Daemon       │  │
│  │   ↕ REST/WS  │      │   ↕ REST/WS  │      │   ↕ REST/WS  │  │
│  │ Docker       │      │ Docker       │      │ Docker       │  │
│  │  ├─ Server 1 │      │  ├─ Server 3 │      │  ├─ Server N │  │
│  │  └─ Server 2 │      │  └─ Server 4 │      │  └─ ...      │  │
│  └──────────────┘      └──────────────┘      └──────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```
