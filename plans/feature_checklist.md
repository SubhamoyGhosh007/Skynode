# SkyNode — Feature Build Order

> Every step builds on the previous one. Complete them in order.
> Check off items as you finish them.

---

## Phase 1: Foundation (Steps 1–8)

### Step 1 — Monorepo & Tooling Setup
- [ ] Initialize npm workspace root with `package.json`
- [ ] Create 4 workspace packages: `panel-api`, `dashboard`, `daemon`, `shared`
- [ ] Setup `tsconfig.base.json` + per-package `tsconfig.json`
- [ ] Configure ESLint + Prettier (Google TS style)
- [ ] Create `.gitignore`, `README.md`
- [ ] Create `docker-compose.yml` (dev: Nginx, Prometheus, Grafana)

### Step 2 — Shared Package
- [ ] Define TypeScript types: `User`, `Tenant`, `Node`, `Server`, `Egg`, `Nest`
- [ ] Define role constants: `MASTER_ADMIN`, `TENANT_ADMIN`, `CUSTOMER`
- [ ] Define permission constants per role
- [ ] Define server status constants: `INSTALLING`, `RUNNING`, `STOPPED`, `ERROR`
- [ ] Create utility: commission calculator `max(amount × 0.10, 400)`
- [ ] Create utility: validators (email, domain, password strength)
- [ ] Create utility: formatters (date, currency, byte sizes)

### Step 3 — Database Schema & Migrations
- [ ] Setup Neon PostgreSQL connection via Drizzle
- [ ] Create Drizzle schema: `tenants` table
- [ ] Create Drizzle schema: `users` table
- [ ] Create Drizzle schema: `tenant_branding` table
- [ ] Create Drizzle schema: `nodes` table
- [ ] Create Drizzle schema: `nests` table
- [ ] Create Drizzle schema: `eggs` table
- [ ] Create Drizzle schema: `tenant_enabled_eggs` table
- [ ] Create Drizzle schema: `hosting_plans` table
- [ ] Create Drizzle schema: `servers` table
- [ ] Create Drizzle schema: `server_schedules` table
- [ ] Create Drizzle schema: `server_logs` table
- [ ] Create Drizzle schema: `api_keys` table
- [ ] Create Drizzle schema: `subscriptions` table
- [ ] Create Drizzle schema: `transactions` table
- [ ] Create Drizzle schema: `regional_discounts` table
- [ ] Create Drizzle schema: `analytics_events` table
- [ ] Create Drizzle schema: `backup_configs` table
- [ ] Setup Row-Level Security policies (users, nodes, servers, transactions)
- [ ] Run initial migration
- [ ] Create seed script (default admin user, default nests + eggs)

### Step 4 — Express API Boilerplate
- [ ] Setup Express 5 app factory (`app.ts`)
- [ ] Configure Winston logger (JSON structured, tenant-tagged)
- [ ] Setup environment variable validation (`env.ts`)
- [ ] Setup Upstash Redis connection
- [ ] Register `cors` middleware
- [ ] Register `cookie-parser` middleware
- [ ] Register `helmet` middleware (security headers)
- [ ] Create Zod validation middleware (`validate.ts`)
- [ ] Register global error handler middleware
- [ ] Setup health check endpoint: `GET /health`
- [ ] Verify API starts and connects to Neon + Upstash

### Step 5 — Authentication System
- [ ] Setup `jsonwebtoken` helpers (sign, verify, access + refresh tokens)
- [ ] Create auth module: `POST /api/v1/auth/register` (register buyer or customer)
- [ ] Create auth module: `POST /api/v1/auth/login` (returns JWT pair)
- [ ] Create auth module: `POST /api/v1/auth/refresh` (rotate refresh token)
- [ ] Create auth module: `POST /api/v1/auth/logout` (invalidate refresh token in Redis)
- [ ] Create auth module: `GET /api/v1/auth/me` (return current user)
- [ ] Create auth module: `POST /api/v1/auth/forgot-password` (send reset email via Resend)
- [ ] Create auth module: `POST /api/v1/auth/reset-password` (verify token + update password)
- [ ] Create auth module: `PATCH /api/v1/auth/change-password`
- [ ] Create auth module: `POST /api/v1/auth/verify-email`
- [ ] Password hashing with argon2
- [ ] Setup Resend email integration (verification, password reset emails)

### Step 6 — RBAC & Tenant Context
- [ ] Create `auth.ts` middleware — JWT verification + user injection
- [ ] Create `rbac.ts` middleware — role-based route guards
- [ ] Create `tenant-context.ts` middleware — resolve tenant from subdomain/custom domain
- [ ] Setup `AsyncLocalStorage` for tenant context propagation
- [ ] Create `rate-limit.ts` middleware — Redis-backed rate limiting
- [ ] Test: Master admin can access admin routes
- [ ] Test: Tenant admin can only access their tenant's data
- [ ] Test: Customer can only access their own servers

### Step 7 — React + Vite Dashboard Boilerplate
- [ ] Initialize Vite with React + TypeScript template
- [ ] Setup `vite.config.ts` with API proxy to `localhost:4000`
- [ ] Setup CSS design system: `globals.css`, `variables.css` (dark theme tokens)
- [ ] Create reusable UI components: Button, Input, Card, Badge, Modal, Table, Spinner
- [ ] Create layout components: PublicLayout, AdminLayout, DashboardLayout, PanelLayout
- [ ] Setup React Router v7 with nested routes (`router.tsx`)
- [ ] Setup SWR config + API fetch wrapper with JWT auto-attach
- [ ] Create auth context + `useAuth` hook
- [ ] Create `AuthGuard` and `RoleGuard` route wrapper components
- [ ] Verify `npm run dev` starts Vite dev server with HMR working

### Step 8 — Public Pages
- [ ] Build Login page (`/login`)
- [ ] Build Register page (`/register`) — multi-step wizard
- [ ] Build Forgot Password page (`/forgot-password`)
- [ ] Build Landing page (`/`) — hero, features, pricing, footer
- [ ] Build Pricing page (`/pricing`) — plan cards, FAQ
- [ ] Connect login/register to auth APIs
- [ ] Test: Full auth flow works end-to-end

---

## Phase 2: Admin & Tenant Management (Steps 9–14)

### Step 9 — Master Admin: Tenant CRUD
- [ ] API: `GET /api/v1/admin/tenants` (list, search, filter, paginate)
- [ ] API: `GET /api/v1/admin/tenants/:id` (detail with stats)
- [ ] API: `POST /api/v1/admin/tenants` (create tenant + branding record)
- [ ] API: `PATCH /api/v1/admin/tenants/:id` (update)
- [ ] API: `DELETE /api/v1/admin/tenants/:id`
- [ ] API: `POST /api/v1/admin/tenants/:id/suspend`
- [ ] API: `POST /api/v1/admin/tenants/:id/unsuspend`
- [ ] UI: Admin Overview page (`/admin`) — stat cards, charts
- [ ] UI: Tenant list page (`/admin/tenants`) — table with search/filter
- [ ] UI: Tenant detail page (`/admin/tenants/:id`) — info, stats, tabs

### Step 10 — Master Admin: Nest & Egg Management
- [ ] API: CRUD for nests (`/api/v1/admin/nests`)
- [ ] API: CRUD for eggs (`/api/v1/admin/eggs`)
- [ ] API: `POST /api/v1/admin/eggs/import` (import egg JSON)
- [ ] API: `GET /api/v1/admin/eggs/:id/export` (export egg JSON)
- [ ] UI: Nest management page (`/admin/nests`) — accordion cards
- [ ] UI: Egg editor page (`/admin/nests/:nestId/eggs/:eggId`) — form + JSON editor
- [ ] Seed default eggs: Minecraft (Paper, Vanilla, Forge), CS2, Rust, Discord Bots, Generic apps
- [ ] Test: Create nest → add egg → import/export egg JSON

### Step 11 — Master Admin: Regional Discounts
- [ ] API: CRUD for regional discounts (`/api/v1/admin/discounts`)
- [ ] UI: Regional discounts page (`/admin/discounts`) — table + add modal
- [ ] Seed default discounts: India (30%), Brazil (25%), etc.

### Step 12 — Master Admin: System Settings
- [ ] API: `GET/PATCH /api/v1/admin/settings`
- [ ] UI: Settings page (`/admin/settings`) — form with toggles
- [ ] Settings: platform name, commission rate, min commission, maintenance mode

### Step 13 — Tenant: Branding & White-Label
- [ ] API: `GET/PATCH /api/v1/tenant/branding` (company name, logo, colors, email)
- [ ] API: `POST /api/v1/tenant/branding/upload-logo` (file upload)
- [ ] API: `POST /api/v1/tenant/branding/verify-domain` (DNS check)
- [ ] UI: Tenant settings page (`/dashboard/settings`) — branding tab
- [ ] UI: Domain tab — custom domain input, DNS instructions, verify button
- [ ] Nginx config: Dynamic custom domain → tenant resolution

### Step 14 — Tenant: Egg Selection & Hosting Plans
- [ ] API: `GET /api/v1/tenant/available-eggs` (all eggs from admin)
- [ ] API: `GET/POST/DELETE /api/v1/tenant/enabled-eggs` (choose which to offer)
- [ ] API: CRUD for hosting plans (`/api/v1/tenant/plans`)
- [ ] UI: Eggs tab in settings — toggle eggs on/off, custom logos
- [ ] UI: Hosting plans page (`/dashboard/plans`) — plan cards + create modal

---

## Phase 3: Node & Daemon (Steps 15–21)

### Step 15 — Daemon Scaffold
- [ ] Setup daemon Express app (listens on configurable port)
- [ ] Create daemon config: panel URL, auth token, node ID
- [ ] Create `install.sh` one-liner script for buyer VPS setup
- [ ] Daemon auth middleware (verify token against panel)
- [ ] Create `GET /health` endpoint on daemon

### Step 16 — Daemon ↔ Panel Handshake
- [ ] Daemon: `POST /daemon/handshake` — register with panel, send system info
- [ ] Panel: Verify daemon token, update node status to `online`
- [ ] Daemon: Start heartbeat loop (every 30 seconds)
- [ ] Panel: `POST /daemon/heartbeat` — receive CPU, RAM, disk, container stats
- [ ] Panel: Mark node `offline` if no heartbeat for 90 seconds
- [ ] Test: Install daemon → handshake → heartbeat working

### Step 17 — Node Management (Tenant)
- [ ] API: CRUD for nodes (`/api/v1/tenant/nodes`)
- [ ] API: `POST /api/v1/tenant/nodes/:id/verify` (test daemon connectivity)
- [ ] API: `GET /api/v1/tenant/nodes/:id/stats` (live resource stats)
- [ ] API: `GET /api/v1/tenant/nodes/:id/allocations` (port allocations)
- [ ] UI: Node list page (`/dashboard/nodes`) — cards with resource bars
- [ ] UI: Node detail page (`/dashboard/nodes/:id`) — real-time charts, server list
- [ ] UI: Add node flow — show daemon install instructions + token

### Step 18 — Docker Container Lifecycle
- [ ] Daemon: `docker pull` egg's Docker image
- [ ] Daemon: `docker create` container with resource limits (memory, CPU, disk)
- [ ] Daemon: `docker start` / `docker stop` / `docker restart` / `docker kill`
- [ ] Daemon: Run egg `install_script` inside container
- [ ] Daemon: Apply `config_parsers` to modify config files
- [ ] Daemon: Set environment variables from egg + user overrides
- [ ] Daemon: Port mapping and allocation
- [ ] Test: Pull image → create container → start → stop → kill

### Step 19 — Server Creation
- [ ] API: `POST /api/v1/tenant/servers` — validate node capacity, create record, call daemon
- [ ] Daemon: `POST /daemon/servers/:id/install` — full install flow
- [ ] Daemon: Report back installation success/failure
- [ ] API: Update server status (`installing` → `stopped` → `running`)
- [ ] UI: Create server wizard (`/dashboard/servers/create`) — 5-step form
- [ ] UI: Server list page (`/dashboard/servers`) — table with status badges
- [ ] Test: Create server from egg → install on daemon → server ready

### Step 20 — Server Power Actions
- [ ] API: `POST /api/v1/tenant/servers/:id/power` (start/stop/restart/kill)
- [ ] API: `POST /api/v1/tenant/servers/:id/reinstall`
- [ ] API: `POST /api/v1/tenant/servers/:id/suspend`
- [ ] Daemon: Execute power actions via Docker API
- [ ] UI: Server detail page (`/dashboard/servers/:id`) — power buttons, info, resource gauges
- [ ] UI: Power button components (Start green, Stop red, Restart yellow, Kill dark red)

### Step 21 — Console WebSocket Streaming
- [ ] Setup `ws` WebSocket server attached to HTTP server
- [ ] Create WebSocket auth middleware (verify JWT on upgrade)
- [ ] API: `WS /api/v1/tenant/servers/:id/console` — auth + proxy to daemon
- [ ] Daemon: `docker logs --follow` capture + stream via WebSocket
- [ ] Daemon: `docker exec stdin` — accept commands from WebSocket
- [ ] Daemon: WS connection to panel (`/daemon/ws`)
- [ ] UI: Terminal component (`Terminal.tsx`) — xterm.js or custom terminal emulator
- [ ] UI: Console page (`/dashboard/servers/:id/console`) — terminal + stats sidebar
- [ ] Test: Open console → see live logs → send command → see response

---

## Phase 4: Server Features (Steps 22–28)

### Step 22 — Server File Manager (SFTP)
- [ ] Daemon: Built-in SFTP server using `ssh2`
- [ ] API: `GET /api/v1/customer/servers/:id/files` — list directory (proxied to daemon)
- [ ] API: `GET /api/v1/customer/servers/:id/files/content` — read file
- [ ] API: `POST /api/v1/customer/servers/:id/files/upload` — upload file
- [ ] API: `POST /api/v1/customer/servers/:id/files/create` — create file/folder
- [ ] API: `PATCH /api/v1/customer/servers/:id/files/rename`
- [ ] API: `DELETE /api/v1/customer/servers/:id/files`
- [ ] API: `POST /api/v1/customer/servers/:id/files/compress`
- [ ] API: `POST /api/v1/customer/servers/:id/files/decompress`
- [ ] UI: File manager component (`FileManager.tsx`) — tree view, breadcrumb
- [ ] UI: Text file editor (code editor with syntax highlighting)
- [ ] UI: Drag-and-drop upload zone
- [ ] UI: Files page (`/dashboard/servers/:id/files`)

### Step 23 — Server Logging System
- [ ] Daemon: Capture container stdout/stderr with timestamps
- [ ] Daemon: Stream logs to panel via WebSocket
- [ ] API: Persist logs to `server_logs` table
- [ ] API: `GET /api/v1/customer/servers/:id/logs` — query with filters (level, date, search)
- [ ] UI: Logs page (`/panel/servers/:id/logs`) — filterable log viewer
- [ ] Implement log retention cleanup (configurable per tenant)

### Step 24 — Server Environment Variables
- [ ] API: `GET /api/v1/customer/servers/:id/env` — get user-editable variables
- [ ] API: `PATCH /api/v1/customer/servers/:id/env` — update variables
- [ ] Daemon: Apply env var changes to container (restart required)
- [ ] UI: Environment variables section on server detail page

### Step 25 — Server Schedules (Cron Tasks)
- [ ] API: CRUD for schedules (`/api/v1/customer/servers/:id/schedules`)
- [ ] Backend: Cron job runner that checks `server_schedules` table
- [ ] Supported actions: `power_restart`, `power_stop`, `command`, `backup`
- [ ] UI: Schedules tab on server detail page — create/edit/delete
- [ ] Test: Create schedule "restart every 6 hours" → verify it fires

### Step 26 — Customer API Keys
- [ ] API: `GET /api/v1/customer/api-keys` — list keys
- [ ] API: `POST /api/v1/customer/api-keys` — generate key (show once)
- [ ] API: `DELETE /api/v1/customer/api-keys/:id` — revoke key
- [ ] API key auth middleware (alternative to JWT for API access)
- [ ] Scopes: `power`, `console`, `files`, `server_info`
- [ ] UI: API keys page (`/panel/api-keys`) — table + generate modal
- [ ] Test: Create key → use key to call power API → verify scopes work

### Step 27 — Tenant Customer Management
- [ ] API: CRUD for customers (`/api/v1/tenant/customers`)
- [ ] API: `POST /api/v1/tenant/customers/:id/suspend`
- [ ] UI: Customer list page (`/dashboard/customers`) — table + add modal
- [ ] UI: Customer detail (expandable row with servers list)
- [ ] Welcome email sent to new customers via Resend

### Step 28 — Customer Panel (End Customer Pages)
- [ ] UI: Customer layout with tenant branding applied
- [ ] UI: My Servers page (`/panel`) — server cards
- [ ] UI: Server detail page (`/panel/servers/:id`) — tabs
- [ ] UI: Console page (`/panel/servers/:id/console`)
- [ ] UI: Files page (`/panel/servers/:id/files`)
- [ ] UI: Logs page (`/panel/servers/:id/logs`)
- [ ] UI: Account settings page (`/panel/settings`)
- [ ] Test: Customer logs in → sees only their servers → can use console + files

---

## Phase 5: Billing & Commerce (Steps 29–34)

### Step 29 — Razorpay Integration Setup
- [ ] Install `razorpay` npm package
- [ ] Create Razorpay client instance with key/secret
- [ ] Setup webhook endpoint: `POST /api/v1/webhooks/razorpay`
- [ ] Webhook signature verification
- [ ] Create Razorpay utility functions in `lib/razorpay.ts` (dashboard)

### Step 30 — Buyer Subscription System
- [ ] API: Create Razorpay subscription on buyer registration
- [ ] API: `GET /api/v1/tenant/billing` — subscription status, next payment
- [ ] API: `GET /api/v1/tenant/billing/invoices` — invoice list
- [ ] Webhook: Handle `subscription.charged`, `subscription.halted`, `subscription.cancelled`
- [ ] Auto-suspend tenant if subscription payment fails
- [ ] UI: Billing page (`/dashboard/billing`) — subscription card, invoices
- [ ] Admin: `GET /api/v1/admin/subscriptions` — view all subscriptions
- [ ] Admin UI: Subscription management page (`/admin/subscriptions`)

### Step 31 — End-Customer Payment Flow
- [ ] API: `POST /api/v1/customer/orders` — create Razorpay Order
- [ ] Frontend: Razorpay Checkout integration (open payment modal)
- [ ] Webhook: Handle `payment.captured`
- [ ] On payment success: auto-create server from selected plan
- [ ] UI: Plan selection page for customers (shows tenant's hosting plans)

### Step 32 — Commission Engine
- [ ] Implement commission calculation: `max(sale_amount × 0.10, ₹400)`
- [ ] Apply regional discount before commission calculation
- [ ] Create Razorpay Route transfer to buyer's linked account (minus commission)
- [ ] Record transaction in `transactions` table
- [ ] Test: Customer pays ₹1000 → commission ₹400 → buyer gets ₹600

### Step 33 — Revenue Dashboard (Admin)
- [ ] API: `GET /api/v1/admin/revenue` — total revenue, commissions, breakdown
- [ ] API: `GET /api/v1/admin/revenue/export` — CSV export
- [ ] API: `GET /api/v1/admin/transactions` — transaction list
- [ ] UI: Revenue page (`/admin/revenue`) — charts, tables, top tenants
- [ ] UI: Transaction history with filters

### Step 34 — Tenant Billing Dashboard
- [ ] API: `GET /api/v1/tenant/billing/transactions` — tenant's transactions
- [ ] UI: Transaction history on billing page
- [ ] UI: Earnings summary (total, commission paid, net)
- [ ] UI: Export transaction history

---

## Phase 6: Monitoring, Analytics & Polish (Steps 35–42)

### Step 35 — Backup System
- [ ] API: CRUD for backup config (`/api/v1/tenant/backup-config`) — S3/R2 credentials
- [ ] API: CRUD for backups (`/api/v1/customer/servers/:id/backups`)
- [ ] Daemon: Create server backup (tar.gz of container volume)
- [ ] Daemon: Upload backup to tenant's S3/R2 bucket
- [ ] Daemon: Restore backup from S3/R2
- [ ] UI: Backup storage config in tenant settings
- [ ] UI: Backups tab on server detail — create, restore, download, delete

### Step 36 — Prometheus Metrics (Daemon)
- [ ] Daemon: Expose `/metrics` endpoint (prom-client)
- [ ] Metrics: `active_containers`, `cpu_usage`, `memory_usage`, `disk_usage`
- [ ] Metrics: `websocket_connections`, `api_requests_total`
- [ ] Prometheus config: Scrape daemon metrics
- [ ] Grafana: Import/create dashboard for node monitoring

### Step 37 — Analytics Event Collection
- [ ] Create analytics service in panel API
- [ ] Track events: `server.created`, `server.crashed`, `sale.completed`, `customer.churn`
- [ ] Track events: `node.resource_peak`, `tenant.created`, `login`
- [ ] API: `GET /api/v1/admin/analytics/overview` — aggregate stats
- [ ] API: `GET /api/v1/admin/analytics/growth` — growth metrics
- [ ] API: `GET /api/v1/admin/analytics/events` — event stream

### Step 38 — Admin Analytics Dashboard
- [ ] UI: Analytics page (`/admin/analytics`) — charts and metrics
- [ ] Charts: Tenant growth, server growth, revenue over time
- [ ] Charts: Servers by game type (donut), signups by region
- [ ] Live event stream display

### Step 39 — Tenant Statistics Dashboard
- [ ] API: `GET /api/v1/tenant/dashboard` — tenant-specific stats
- [ ] UI: Tenant overview page (`/dashboard`) — stat cards, charts
- [ ] Charts: Server status distribution, resource usage, recent activity
- [ ] Real-time node status updates via Redis pub/sub

### Step 40 — Admin Overview Dashboard
- [ ] UI: Complete admin overview page (`/admin`) with all widgets
- [ ] Stat cards: Total tenants, servers, revenue, nodes
- [ ] Revenue chart (last 30 days)
- [ ] Server distribution chart
- [ ] Recent tenants table
- [ ] System health indicators

### Step 41 — Security & Testing
- [ ] Verify RLS policies prevent cross-tenant data access
- [ ] API rate limiting tested under load
- [ ] JWT refresh token rotation working correctly
- [ ] Input sanitization on all user inputs (Zod handles this)
- [ ] SQL injection prevention verified (Drizzle ORM parameterized queries)
- [ ] Write unit tests: commission calculation, auth flows
- [ ] Write integration tests: server lifecycle, daemon handshake
- [ ] Write E2E test: full buyer → customer flow

### Step 42 — Documentation & Deployment
- [ ] Write API reference docs (Swagger/OpenAPI via express-openapi or manual)
- [ ] Write daemon setup guide (for buyers)
- [ ] Write custom domain setup guide
- [ ] Write egg authoring guide
- [ ] Write gateway extraction guide (how to split a module into a service)
- [ ] Setup GitHub Actions CI: lint + test on PR
- [ ] Setup GitHub Actions CD: build + deploy to VPS
- [ ] Create production `docker-compose.prod.yml`
- [ ] Setup Nginx production config (wildcard SSL, custom domains, gateway routes)
- [ ] Deploy to ZAP-Hosting VPS
- [ ] Smoke test production deployment

---

## Feature Count Summary

| Phase | Steps | Features |
|---|---|---|
| 1. Foundation | 1–8 | Monorepo, DB, Auth, RBAC, React + Vite shell, public pages |
| 2. Admin & Tenants | 9–14 | Tenant CRUD, nests/eggs, discounts, branding, plans |
| 3. Node & Daemon | 15–21 | Daemon, handshake, Docker lifecycle, server creation, console |
| 4. Server Features | 22–28 | File manager, logs, env vars, schedules, API keys, customer panel |
| 5. Billing | 29–34 | Razorpay, subscriptions, payments, commissions, revenue dashboard |
| 6. Polish & Launch | 35–42 | Backups, monitoring, analytics, security, docs, deployment |
| **Total** | **42 steps** | **~200 individual features** |
