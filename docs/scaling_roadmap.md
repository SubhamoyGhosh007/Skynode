# SkyNode — Scaling Roadmap

## Current State: Phase 1 (Day 1 — ~500 servers)

```
┌─────────────────────────────────────────────┐
│         ZAP-Hosting VPS (Single)            │
│                                             │
│  Nginx (:80/:443)                           │
│    ├── Express API       (:4000)  ← 1 proc │
│    ├── React SPA         (static) ← Nginx  │
│    ├── Prometheus        (:9090)            │
│    └── Grafana           (:3001)            │
│                                             │
│  External (managed):                        │
│    ├── Neon PostgreSQL                      │
│    └── Upstash Redis                        │
└─────────────────────────────────────────────┘
```

**Handles:** ~50 tenants, ~500 servers, ~200 concurrent users

**Why this works now:**
- Single Express process with PM2 handles ~15K req/s (sufficient for this scale)
- All modules are Express Routers mounted on one app — simple and debuggable
- Neon/Upstash scale independently (managed)
- WebSocket connections are lightweight (~50KB each)
- Total RAM: ~256MB for API (React SPA is static files, no server process)

---

## Phase 2: Horizontal Scaling (500–5,000 servers)

### When to trigger
- API response times exceed 200ms at p95
- WebSocket connections exceed 5,000 concurrent
- Single VPS CPU consistently above 70%

### What changes

```
┌──────────────────────────────────────────────────────────────┐
│                     VPS #1 (Primary)                         │
│                                                              │
│  Nginx (Load Balancer + SSL)                                 │
│    ├── Round-robin to API instances                          │
│    └── Sticky sessions for WebSocket                         │
│                                                              │
│  Express API Instance #1    (:4000)                          │
│  Express API Instance #2    (:4001)                          │
│  React SPA                  (Nginx static)                   │
│  Prometheus + Grafana                                        │
└──────────────────────────────────────────────────────────────┘

         OR (if VPS maxed out)

┌────────────────────┐    ┌────────────────────┐
│   VPS #1 (API)     │    │   VPS #2 (Web)     │
│                    │    │                    │
│  Nginx (LB)        │    │  React SPA      │
│  Express ×2        │    │  Prometheus        │
│                    │    │  Grafana           │
└────────────────────┘    └────────────────────┘
         ↕                         ↕
   Neon PostgreSQL           Upstash Redis
```

### How to implement

**Step 1 — Run multiple Express processes (PM2 cluster mode):**
```bash
# ecosystem.config.js
module.exports = {
  apps: [{
    name: 'skynode-api',
    script: './dist/index.js',
    instances: 'max',       // Use all CPU cores
    exec_mode: 'cluster',
    env: { NODE_ENV: 'production' }
  }]
}
```

**Step 2 — Nginx upstream config:**
```nginx
upstream skynode_api {
    least_conn;
    server 127.0.0.1:4000;
    server 127.0.0.1:4001;
    server 127.0.0.1:4002;
    server 127.0.0.1:4003;
}

# WebSocket sticky sessions (required)
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}
```

**Step 3 — WebSocket fan-out via Redis:**
```
When user connects to API Instance #1 for console:
  → Instance #1 subscribes to Redis channel: "console:{serverId}"
  → Daemon publishes logs to Redis channel
  → All instances with subscribers receive and forward to their clients
```

This is already built into our architecture because we use Upstash Redis for pub/sub.

### Cost at this phase
- 2nd VPS: ~$10-20/month
- Neon Pro: ~$19/month
- Upstash Pro: ~$10/month
- **Total: ~$40-50/month**

---

## Phase 3: Service Extraction via Gateway (5,000–50,000 servers)

### When to trigger
- 500+ tenants
- Billing/payment processing slows down API
- Daemon WebSocket connections exceed 10,000
- Analytics writes bottleneck the main DB

### The Gateway Pattern

> **This is where the Express Router architecture pays off.** Each module is already a self-contained Express Router. To extract it:
> 1. Copy the router to a new package
> 2. Wrap it in `express().listen(PORT)`
> 3. Update the Gateway routing config
> 4. **Zero business logic changes.**

### What gets extracted

```
┌──────────────────────────────────────────────────────────────────┐
│                        API Gateway (Nginx)                        │
│  /api/v1/auth/*          → Core API Service (:4000)              │
│  /api/v1/admin/*         → Core API Service (:4000)              │
│  /api/v1/tenant/*        → Core API Service (:4000)              │
│  /api/v1/customer/*      → Core API Service (:4000)              │
│  /api/v1/billing/*       → Billing Service (:4001)  [EXTRACTED]  │
│  /daemon/*               → Daemon Hub Service (:4002) [EXTRACTED]│
│  /api/v1/analytics/*     → Analytics Service (:4003) [EXTRACTED] │
│  /*                      → React SPA (Nginx static files)             │
└──────────────────────────────────────────────────────────────────┘
```

### Service 1: Billing Service
**Why extract:** Payment processing (Razorpay webhooks, commission calculations, subscription management) has different uptime requirements. A payment failure shouldn't crash the whole API.

```
packages/billing-service/    ← NEW package in monorepo
├── src/
│   ├── index.ts             ← express().listen(4001)
│   ├── razorpay/            ← copied from panel-api/modules/webhooks/
│   ├── subscriptions/       ← copied from panel-api/modules/admin/subscriptions/
│   ├── commissions/         ← copied from panel-api/modules/tenant/billing/
│   ├── invoices/
│   └── webhooks/
└── Dockerfile
```

**Communication:** REST API. Core API calls Billing Service for payment operations.

### Service 2: Daemon Hub
**Why extract:** WebSocket connections to 1,000+ daemons are long-lived and memory-intensive. Isolating them prevents a daemon storm from affecting user-facing API.

```
packages/daemon-hub/         ← NEW package in monorepo
├── src/
│   ├── index.ts             ← express().listen(4002)
│   ├── ws-manager.ts        ← copied from panel-api/modules/daemon/ws-handler.ts
│   ├── command-relay.ts
│   ├── stats-collector.ts
│   └── console-proxy.ts
└── Dockerfile
```

**Communication:** Internal REST + Redis pub/sub. Core API publishes commands → Daemon Hub picks them up → forwards to daemon.

### Service 3: Analytics Ingestion (Optional)
**Why extract:** High-write analytics events can be batched and written asynchronously without blocking the main API.

```
packages/analytics-service/  ← NEW package in monorepo
├── src/
│   ├── index.ts             ← express().listen(4003)
│   ├── ingestion.ts         ← receive events via Redis queue
│   ├── batch-writer.ts      ← batch INSERT into PostgreSQL
│   └── aggregator.ts        ← pre-compute dashboard metrics
└── Dockerfile
```

**Communication:** Fire-and-forget via Redis queue. Core API publishes event → Analytics Service consumes and writes.

### Architecture at Phase 3

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ Core API    │   │ Billing     │   │ Daemon Hub  │
│ (Express)   │   │ Service     │   │ Service     │
│ ×2 instances│   │ (Express)   │   │ (Express)   │
│             │   │ ×1 instance │   │ ×1 instance │
└──────┬──────┘   └──────┬──────┘   └──────┬──────┘
       │                 │                 │
       └────────┬────────┘                 │
                │                          │
         ┌──────▼──────┐           ┌───────▼───────┐
         │   Neon PG   │           │ Upstash Redis │
         │  (scaled)   │           │   (scaled)    │
         └─────────────┘           └───────────────┘
```

### Nginx Gateway Config (Phase 3)

```nginx
# gateway.conf — route-based service splitting
upstream core_api {
    least_conn;
    server 127.0.0.1:4000;
    server 127.0.0.1:4001;
}

upstream billing_service {
    server 127.0.0.1:4010;
}

upstream daemon_hub {
    server 127.0.0.1:4020;
}

server {
    listen 443 ssl;

    # Core API routes
    location /api/v1/ {
        proxy_pass http://core_api;
    }

    # Extracted: Billing routes
    location /api/v1/billing/ {
        proxy_pass http://billing_service;
    }

    # Extracted: Daemon routes
    location /daemon/ {
        proxy_pass http://daemon_hub;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }

    # Frontend (React SPA — static files)
    location / {
        root /var/www/dashboard/dist;
        try_files $uri $uri/ /index.html;   # SPA fallback
    }
}
```

### Cost at this phase
- 3-4 VPS instances: ~$80-150/month
- Neon Scale: ~$69/month
- Upstash Pro: ~$30/month
- **Total: ~$180-250/month**

---

## Phase 4: Container Orchestration (50,000+ servers)

### When to trigger
- 2,000+ tenants
- Managing 10+ containers manually becomes unsustainable
- Need auto-scaling based on traffic patterns
- Require zero-downtime deployments

### Migration to Kubernetes

```
┌───────────────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                              │
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ Core API Pod    │  │ Core API Pod    │  │ Core API Pod    │  │
│  │ (Express)       │  │ (Express)       │  │ (Express)       │  │
│  │ (auto-scaled)   │  │ (auto-scaled)   │  │ (auto-scaled)   │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐                        │
│  │ Billing Pod     │  │ Billing Pod     │  ← scales during       │
│  │ (Express)       │  │ (Express)       │    payment surges       │
│  └─────────────────┘  └─────────────────┘                        │
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ Daemon Hub Pod  │  │ Daemon Hub Pod  │  │ Daemon Hub Pod  │  │
│  │ (Express + ws)  │  │ (Express + ws)  │  │ (Express + ws)  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐                        │
│  │ React SPA Pod   │  │ React SPA Pod   │  ← CDN offloads       │
│  │ (Nginx static)  │  │ (Nginx static)  │    static assets       │
│  └─────────────────┘  └─────────────────┘                        │
│                                                                   │
│  Ingress Controller (Nginx) → Routes by Host + Path              │
│  HPA (Horizontal Pod Autoscaler) → CPU/Memory triggers           │
│  Cert-Manager → Auto SSL for wildcard + custom domains           │
└───────────────────────────────────────────────────────────────────┘
          ↕                    ↕                    ↕
    Neon PG (Enterprise)  Upstash Redis (Enterprise)  CDN (CloudFlare)
```

### Additional changes at this scale
- **CDN:** CloudFlare in front for DDoS protection + static asset caching
- **Separate read replicas:** Neon read replicas for analytics queries
- **Message queue:** Replace Redis pub/sub with dedicated queue (BullMQ or Upstash QStash) for reliability
- **Object storage:** Cloudflare R2 or S3 for file uploads, logos, backups
- **Log aggregation:** ELK Stack or Grafana Loki for centralized logging

---

## Database Scaling Strategy

| Phase | Strategy | Details |
|---|---|---|
| **1** | Single Neon instance | Free/starter tier, shared compute |
| **2** | Neon Pro | Autoscaling compute, 10GB storage |
| **3** | Neon Scale + Read replicas | Writes → primary, reads → replica. Analytics queries on replica. |
| **4** | Neon Enterprise + Partitioning | Table partitioning for `server_logs` and `analytics_events` by month. Connection pooling via PgBouncer. |

### Table partitioning (Phase 3+)
```sql
-- Partition server_logs by month for fast queries + easy cleanup
CREATE TABLE server_logs (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    server_id UUID NOT NULL,
    content TEXT NOT NULL,
    level VARCHAR(10),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
) PARTITION BY RANGE (created_at);

CREATE TABLE server_logs_2026_01 PARTITION OF server_logs
    FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');
```

---

## Redis/Cache Scaling Strategy

| Phase | Strategy |
|---|---|
| **1** | Upstash Free (10K commands/day) |
| **2** | Upstash Pay-as-you-go |
| **3** | Upstash Pro (dedicated, higher throughput) |
| **4** | Upstash Enterprise or self-hosted Redis Cluster |

---

## Scaling Decision Checklist

Use this checklist to decide when to move to the next phase:

```
□ API p95 latency > 200ms consistently          → Phase 2 (add instances)
□ CPU usage > 70% for 24+ hours                 → Phase 2
□ WebSocket connections > 5,000                  → Phase 2
□ Payment webhook processing delays > 5s         → Phase 3 (extract billing)
□ Daemon connections > 1,000                     → Phase 3 (extract daemon hub)
□ Analytics writes slow down API > 50ms          → Phase 3 (extract analytics)
□ Managing 10+ containers manually               → Phase 4 (Kubernetes)
□ Need auto-scaling for traffic spikes            → Phase 4
□ Zero-downtime deployments required              → Phase 4
□ Multi-region deployment needed                  → Phase 4+
```

---

## Summary

| Phase | Tenants | Servers | Architecture | Monthly Cost |
|---|---|---|---|---|
| **1** | 1–50 | 1–500 | Express monolith on 1 VPS | ~$15 |
| **2** | 50–500 | 500–5K | Clustered Express, 2 VPS | ~$50 |
| **3** | 500–2K | 5K–50K | Express microservices + Gateway, 4 VPS | ~$250 |
| **4** | 2K+ | 50K+ | Kubernetes, auto-scaled Express pods | ~$500+ |
