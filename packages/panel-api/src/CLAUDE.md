# SkyNode Panel API — Codebase Context

## Project Overview

SkyNode is a multi-tenant game server hosting platform. Buyers (tenants) purchase subscriptions to provision game servers (Minecraft, Rust, etc.) on their own VPS infrastructure. The Panel API manages tenants, users, nodes, servers, billing, and provides real-time console/stats via WebSockets.

## Tech Stack

- **Runtime**: Node.js 22 LTS + TypeScript 5.5
- **Framework**: Express 5
- **Database**: Neon PostgreSQL 16 (managed) + Drizzle ORM
- **Cache**: Upstash Redis — sessions, pub/sub, rate limiting
- **Auth**: JWT + argon2 + custom RBAC
- **Payments**: Razorpay + Razorpay Route (split payments)
- **Email**: Resend
- **Real-time**: ws (WebSocket library) — console streaming, live stats
- **Logging**: Winston

## Architecture

- **Monorepo**: npm workspaces (panel-api, dashboard, daemon, shared)
- **Gateway-Ready**: Every module is a self-contained Express router — extractable as standalone microservice
- **Tenant Isolation**: AsyncLocalStorage middleware + RBAC guards

## Key Modules (Express Routers)

| Module | Path | Purpose |
|---|---|---|
| Auth | `/api/v1/auth` | Login, register, JWT tokens, password reset |
| Admin | `/api/v1/admin` | Master admin operations |
| Tenant | `/api/v1/tenant` | Tenant management, branding |
| Node | `/api/v1/nodes` | VPS/node management, daemon registration |
| Nest/Egg | `/api/v1/nests`, `/api/v1/eggs` | Game templates (Pterodactyl-style) |
| Server | `/api/v1/servers` | Server CRUD, start/stop/restart |
| Console | `/api/v1/console` | WebSocket console relay |
| Billing | `/api/v1/billing` | Subscriptions, plans, transactions |
| Analytics | `/api/v1/analytics` | Event tracking |

## Database Schema (Drizzle)

Key tables: `tenants`, `users`, `tenant_branding`, `nodes`, `nests`, `eggs`, `tenant_enabled_eggs`, `hosting_plans`, `servers`, `server_schedules`, `server_logs`, `api_keys`, `subscriptions`, `transactions`, `regional_discounts`, `analytics_events`, `backup_configs`

## API Routes

See `docs/api_routes.md` for full endpoint documentation.

## Development

- **Port**: 4000
- **Env**: `.env.development.local`, `.env.production.local`
- **Commands**: `pnpm dev` (panel-api), `pnpm --filter dashboard dev`

## Important Patterns

- All routes use Zod validation middleware
- Tenant context injected via `tenant-context.ts` middleware using AsyncLocalStorage
- RBAC guards in `middleware/rbac.ts`
- Rate limiting backed by Redis
- WebSocket upgrades handled in `modules/console/routes.ts`

## Importing the files

- See `@docs/feature_checklist.md` for the feature extraction.
- See `@docs/database_schema.md` for Schema Architecture.
- See `@docs/tech_stack.md` for knowing the Tech Stack.
- See `@docs/implementation.md` for knowing the Plan.
