# SkyNode — Ultimate Tech Stack

## Stack at a Glance

```
┌────────────────────────────────────────────────────────────────────┐
│                        SKYNODE TECH STACK                          │
├──────────────┬─────────────────────────────────────────────────────┤
│  RUNTIME     │  Node.js 22 LTS + TypeScript 5.5                   │
├──────────────┼─────────────────────────────────────────────────────┤
│  BACKEND     │  Express 5 (API) + Winston (logging)               │
├──────────────┼─────────────────────────────────────────────────────┤
│  DATABASE    │  Neon PostgreSQL 16 (managed) + Drizzle ORM        │
├──────────────┼─────────────────────────────────────────────────────┤
│  CACHE       │  Upstash Redis (managed) — sessions, pub/sub       │
├──────────────┼─────────────────────────────────────────────────────┤
│  FRONTEND    │  React 19 + Vite 6 + React Router + Vanilla CSS   │
├──────────────┼─────────────────────────────────────────────────────┤
│  REAL-TIME   │  ws (WebSocket library) — console, stats           │
├──────────────┼─────────────────────────────────────────────────────┤
│  AUTH        │  jsonwebtoken + argon2 + custom RBAC               │
├──────────────┼─────────────────────────────────────────────────────┤
│  PAYMENTS    │  Razorpay + Razorpay Route (split payments)        │
├──────────────┼─────────────────────────────────────────────────────┤
│  EMAIL       │  Resend (free tier → upgrade later)                │
├──────────────┼─────────────────────────────────────────────────────┤
│  DAEMON      │  Express (lightweight) + dockerode + ssh2 (SFTP)   │
├──────────────┼─────────────────────────────────────────────────────┤
│  CHARTS      │  Chart.js (lightweight, no D3 bloat)               │
├──────────────┼─────────────────────────────────────────────────────┤
│  MONITORING  │  Prometheus + Grafana (self-hosted on VPS)         │
├──────────────┼─────────────────────────────────────────────────────┤
│  DEVOPS      │  Docker Compose + Nginx + Let's Encrypt + GitHub   │
├──────────────┼─────────────────────────────────────────────────────┤
│  MONOREPO    │  npm workspaces (zero extra tooling)               │
├──────────────┼─────────────────────────────────────────────────────┤
│  GATEWAY     │  Nginx (Phase 1) → Express Gateway (Phase 3+)     │
└──────────────┴─────────────────────────────────────────────────────┘
```

---

## Core npm Packages (~22 total)

### Backend (panel-api)

| Package | Purpose | Why This One |
|---|---|---|
| `express` | HTTP framework | Largest ecosystem, widest middleware support, simplest mental model; easy to extract into microservices later |
| `jsonwebtoken` | JWT auth | Framework-agnostic, handles access + refresh tokens, works identically if extracted to a separate auth service |
| `ws` | WebSockets | Battle-tested, zero-dependency WebSocket library; console streaming, live stats |
| `express-rate-limit` | Rate limiting | Simple middleware, backed by Redis via `rate-limit-redis` for distributed limiting |
| `cors` | CORS headers | Required for React SPA ↔ API cross-origin communication |
| `cookie-parser` | Cookie handling | Refresh token storage |
| `zod` | Request validation | TypeScript-native schema validation; works anywhere, not framework-coupled |
| `drizzle-orm` | Database ORM | Lightest TypeScript ORM, generates raw SQL, no Prisma bloat |
| `drizzle-kit` | Migrations | Schema migrations, introspection, Drizzle Studio |
| `postgres` | PG driver | Lightweight PostgreSQL driver (used by Drizzle) |
| `argon2` | Password hashing | Most secure hashing algorithm, faster than bcrypt |
| `razorpay` | Payments | Subscriptions + Route for split payments (India-friendly) |
| `resend` | Transactional email | Simple API, free tier (3K/month), great DX |
| `winston` | Logging | Most popular Node.js logger, JSON structured, supports multiple transports |
| `helmet` | Security headers | Essential Express middleware for HTTP security headers |

### Frontend (dashboard)

| Package | Purpose | Why This One |
|---|---|---|
| `react` | UI library | Industry standard, huge ecosystem |
| `vite` | Build tool | Lightning-fast HMR, minimal config, native ESM — no webpack bloat |
| `react-router-dom` | Client routing | Standard React routing, supports nested layouts and route guards |
| `swr` | Data fetching | Lightweight (4KB), auto-revalidation, framework-agnostic |
| `chart.js` | Charts | Small bundle (42KB gzipped), covers all chart types needed |

### Daemon

| Package | Purpose | Why This One |
|---|---|---|
| `express` | HTTP server | Same as panel for consistency; if extracted later, it's already its own Express app |
| `dockerode` | Docker API | Node.js Docker client, container lifecycle management |
| `ssh2` | SFTP server | Built-in file manager without external SFTP dependency |

---

## Gateway-Ready Monorepo Architecture

The monorepo is structured so that **every module is a self-contained Express router**. Today they all mount on a single Express app. Tomorrow, any module can be extracted into its own Express server behind an API Gateway — **zero business logic changes required**.

```
Phase 1 (Now):     All routers → Single Express app → Nginx reverse proxy
Phase 3 (Future):  Each router → Own Express server → API Gateway (Nginx/Express Gateway)
```

### How extraction works

```
TODAY (Monolith):
  express-app
    ├── app.use('/api/v1/auth', authRouter)
    ├── app.use('/api/v1/admin', adminRouter)
    ├── app.use('/api/v1/tenant', tenantRouter)
    ├── app.use('/api/v1/billing', billingRouter)    ← extract this
    └── app.use('/daemon', daemonRouter)             ← extract this

FUTURE (Microservices):
  gateway (Nginx or Express Gateway)
    ├── /api/v1/auth/*     → core-service:4000
    ├── /api/v1/admin/*    → core-service:4000
    ├── /api/v1/tenant/*   → core-service:4000
    ├── /api/v1/billing/*  → billing-service:4001    ← own Express app
    └── /daemon/*          → daemon-hub:4002         ← own Express app
```

---

## Managed Services (Zero Ops)

| Service | Free Tier | Paid Tier | Purpose |
|---|---|---|---|
| **Neon** | 0.5 GB storage, 190 compute hours | From $19/mo | PostgreSQL database |
| **Upstash** | 10K commands/day | From $10/mo | Redis cache + pub/sub |
| **Resend** | 3,000 emails/mo, 100/day | From $20/mo | Transactional emails |
| **Razorpay** | No monthly fee | 2% per txn (India) | Payments + Route split |
| **GitHub** | Free repos, Actions | Free for public | Version control, CI/CD |

---

## What We're NOT Using (And Why)

| Avoided | Reason |
|---|---|
| **Fastify** | Plugin system creates tight coupling; extracting a Fastify plugin into a standalone service requires rewriting. Express routers are portable as-is. |
| **Next.js** | Adds SSR complexity unnecessary for a dashboard SPA; tightly couples frontend to Node.js server; Vite + React Router is lighter, faster HMR, and fully decoupled from the API |
| **NestJS** | Heavy abstraction (decorators, DI), increases package count significantly |
| **Hono** | Great for edge/serverless, but Node.js WebSocket support still maturing |
| **Prisma** | Heavy client (~8MB), slow cold starts, unnecessary abstraction over SQL |
| **TailwindCSS** | Adds build tooling complexity; Vanilla CSS with design tokens is lighter |
| **Socket.io** | Adds 90KB+ overhead; raw `ws` library is sufficient and portable |
| **MongoDB** | No RLS for tenant isolation, relational data needs joins |
| **Firebase** | Vendor lock-in, no RLS, pricing unpredictable at scale |
| **D3.js** | Overkill — Chart.js covers all our chart needs with 10× less code |

---

## Project Structure

```
e:\Projects\SkyNode\
├── packages/
│   ├── panel-api/           # Express API (15 packages)
│   ├── dashboard/           # React + Vite SPA (5 packages)
│   ├── daemon/              # SkyNode Wings (3 packages)
│   └── shared/              # Shared types & utils (0 extra packages)
├── docker-compose.yml       # Dev: Prometheus, Grafana, Nginx
├── package.json             # Workspace root
├── tsconfig.base.json       # Shared TS config
└── .github/workflows/       # CI/CD
```

**Total: ~23 core packages** (vs 50-100+ in a typical full-stack SaaS)
