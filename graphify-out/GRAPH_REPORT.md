# Graph Report - Skynode  (2026-05-14)

## Corpus Check
- 60 files · ~41,299 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 883 nodes · 956 edges · 106 communities (89 shown, 17 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `60c625d6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 96|Community 96]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]
- [[_COMMUNITY_Community 102|Community 102]]
- [[_COMMUNITY_Community 103|Community 103]]
- [[_COMMUNITY_Community 104|Community 104]]
- [[_COMMUNITY_Community 105|Community 105]]

## God Nodes (most connected - your core abstractions)
1. `SkyNode — Pages & Google Stitch Prompts` - 26 edges
2. `Collections & Mongoose Schemas` - 18 edges
3. `SkyNode — Implementation Plan` - 16 edges
4. `Implementation Plan` - 14 edges
5. `3. BUYER (TENANT) DASHBOARD PAGES` - 13 edges
6. `5. MODALS & POPUPS — ADMIN` - 13 edges
7. `6. MODALS & POPUPS — BUYER (TENANT)` - 13 edges
8. `15. MISSING BUYER MODALS` - 13 edges
9. `createTransporter()` - 12 edges
10. `20. UI PRIMITIVE COMPONENTS (`components/ui/`)` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Implementation Plan` --references--> `Tenant Isolation via tenantId`  [EXTRACTED]
  plans/implementation_plan.md → packages/panel-api/src/apps/auth/database/user.db.ts
- `Dashboard Entry HTML` --conceptually_related_to--> `Dashboard Package`  [INFERRED]
  packages/dashboard/index.html → plans/folder_structure.md
- `Dashboard README` --conceptually_related_to--> `React 19 + Vite 6 Frontend`  [INFERRED]
  packages/dashboard/README.md → plans/implementation_plan.md
- `Tenant Model` --semantically_similar_to--> `User Model`  [INFERRED] [semantically similar]
  packages/panel-api/src/database/tenant.db.ts → packages/panel-api/src/apps/auth/database/user.db.ts
- `User Model` --semantically_similar_to--> `User Zod Schema`  [INFERRED] [semantically similar]
  packages/panel-api/src/apps/auth/database/user.db.ts → packages/panel-api/src/apps/auth/zod/user.zod.ts

## Hyperedges (group relationships)
- **SkyNode Monorepo Structure** — pkg_panel_api, pkg_dashboard, pkg_daemon, pkg_shared [EXTRACTED 1.00]
- **Authentication Flow** — auth_routes, user_signup, user_signin, user_signout, user_model, user_zod_schema, async_handler [EXTRACTED 0.95]
- **Error Handling Pattern** — async_handler, api_error, api_response [EXTRACTED 0.95]
- **Multi-Tenancy Architecture** — tenant_model, user_model, tenant_branding_model, tenant_isolation [EXTRACTED 0.90]
- **SkyNode Monorepo Packages** — panel_api_package, dashboard_package, daemon_package, shared_package [EXTRACTED 1.00]
- **Scaling Phases Progression** — phase1_scaling, phase2_scaling, phase3_scaling, phase4_scaling [EXTRACTED 1.00]
- **Phase 3 Extracted Services** — billing_service, daemon_hub, analytics_service, gateway_pattern [EXTRACTED 1.00]
- **Core Tech Stack** — nodejs_runtime, express_framework, postgresql_db, redis_cache, react_frontend, drizzle_orm [EXTRACTED 1.00]
- **Auth and Billing Systems** — jwt_auth, razorpay_payments, commission_engine [EXTRACTED 1.00]
- **Docker Compose Services** — mongodb_service, redis_cache [EXTRACTED 1.00]

## Communities (106 total, 17 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (25): createConsumer(), disconnectConsumer(), getConsumer(), kafka, MessageHandler, PARTITION_PRIORITY_MAP, subscribeToTopic(), connectProducer() (+17 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (40): Additional changes at this scale, Architecture at Phase 3, code:block1 (┌─────────────────────────────────────────────┐), code:block10 (┌─────────────┐   ┌─────────────┐   ┌─────────────┐), code:nginx (# gateway.conf — route-based service splitting), code:block12 (┌───────────────────────────────────────────────────────────), code:sql (-- Partition server_logs by month for fast queries + easy cl), code:block14 (□ API p95 latency > 200ms consistently          → Phase 2 (a) (+32 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (40): 10. `server_schedules`, 11. `server_logs`, 12. `api_keys`, 13. `subscriptions`, 14. `transactions`, 15. `regional_discounts`, 16. `analytics_events`, 17. `backup_configs` (+32 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (17): generateAccessToken(), generateRefreshToken(), verifyAccessToken(), verifyRefreshToken(), refreshAccessToken, userSignIn, userSignOut, userSignUp (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (30): 1. Authentication (`/auth`), 2.1 Tenant Management, 2.2 Nest Management, 2.3 Egg Management, 2.4 Subscriptions & Revenue, 2.5 Regional Discounts, 2.6 Platform Analytics & Settings, 2. Master Admin (`/admin`) (+22 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (27): Commission Calculation Engine, Daemon Package (Wings), Dashboard Entry HTML, Dashboard Package, Dashboard README, Database Schema Design, Docker Compose Configuration, Drizzle ORM (+19 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (25): 3. BUYER (TENANT) DASHBOARD PAGES, code:block17 (Design a buyer dashboard for a white-labeled hosting panel. ), code:block18 (Design a node management page for a hosting company dashboar), code:block19 (Design a node detail page. Dark theme.), code:block20 (Design a server list page for hosting dashboard. Dark theme.), code:block21 (Design a server detail page. Dark theme.), code:block22 (Design a server console page. Dark theme.), code:block23 (Design a file manager page. Dark theme.) (+17 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (25): 5. MODALS & POPUPS — ADMIN, code:block36 (Design a "Create Tenant" modal for SkyNode admin. Dark theme), code:block37 (Design a confirmation dialog for suspending a tenant. Dark t), code:block38 (Design a destructive delete confirmation modal. Dark theme.), code:block39 (Design a "Change Plan" modal. Dark theme.), code:block40 (Design a "Create Nest" modal. Dark theme.), code:block41 (Design a "Create Egg" quick-create modal inside a nest accor), code:block42 (Design an "Import Egg" modal. Dark theme.) (+17 more)

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (25): 6. MODALS & POPUPS — BUYER (TENANT), code:block48 (Design an "Add Node" multi-step modal for SkyNode buyer dash), code:block49 (Design a delete node confirmation modal. Dark theme.), code:block50 (Design a "Create Hosting Plan" modal for tenant. Dark theme.), code:block51 (Design an "Add Customer" modal. Dark theme.), code:block52 (Design a suspend customer confirmation modal. Dark theme.), code:block53 (Design a server reinstall confirmation modal. Dark theme.), code:block54 (Design an environment variables editor panel. Dark theme. Sh) (+17 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (25): 15. MISSING BUYER MODALS, code:block100 (Design an "Edit Hosting Plan" modal. Dark theme.), code:block101 (Design a delete plan confirmation. Dark theme.), code:block102 (Design an "Edit Customer" modal. Dark theme.), code:block103 (Design a delete customer confirmation. Dark theme.), code:block104 (Design a delete server confirmation. Dark theme.), code:block105 (Design a suspend server modal. Dark theme.), code:block106 (Design an unsuspend server modal. Dark theme.) (+17 more)

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (19): docker, getContainerCountByPriority(), getRunningContainers(), scaleWorkers(), startWorker(), stopWorker(), disconnect(), getAdmin() (+11 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (22): code:mermaid (graph TB), code:block10 (┌───────────────────────────────────────────────────────────), code:mermaid (graph TB), code:mermaid (sequenceDiagram), code:mermaid (sequenceDiagram), code:mermaid (sequenceDiagram), code:mermaid (sequenceDiagram), code:mermaid (sequenceDiagram) (+14 more)

### Community 12 - "Community 12"
Cohesion: 0.09
Nodes (23): 20. UI PRIMITIVE COMPONENTS (`components/ui/`), code:block130 (Design a Button component system for SkyNode. Dark theme.), code:block131 (Design an Input component system for SkyNode. Dark theme.), code:block132 (Design a Badge component for SkyNode. Dark theme.), code:block133 (Design a Card component for SkyNode. Dark theme.), code:block134 (Design a Modal component for SkyNode. Dark theme.), code:block135 (Design a Table component for SkyNode. Dark theme.), code:block136 (Design a Tabs component for SkyNode. Dark theme.) (+15 more)

### Community 13 - "Community 13"
Cohesion: 0.19
Nodes (14): EmailService, sendEmail(), transporter, createTransporter(), getCurrentProvider(), getMailConfig(), getTransporter(), initGmailTransporter() (+6 more)

### Community 14 - "Community 14"
Cohesion: 0.1
Nodes (21): 2. MASTER ADMIN PAGES, code:block10 (Design a nest management page for "SkyNode". Dark theme.), code:block11 (Design an egg editor page for "SkyNode" admin. Dark theme.), code:block12 (Design a revenue dashboard for "SkyNode" admin. Dark theme.), code:block13 (Design a regional discounts management page. Dark theme.), code:block14 (Design a platform analytics page. Dark theme.), code:block15 (Design a subscription management page. Dark theme.), code:block16 (Design a settings page. Dark theme.) (+13 more)

### Community 15 - "Community 15"
Cohesion: 0.15
Nodes (20): API Error Class, API Response Class, Async Handler Middleware, Auth Controller Index, Auth Routes, Database Connector, Express Application, IUser Interface (+12 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (17): 24. STANDALONE COMPONENTS & REMAINING PAGES, code:block151 (Design the Terminal component used for server consoles. Dark), code:block152 (Design the FileManager component for server file management.), code:block153 (Design a user dropdown menu triggered by clicking the avatar), code:block154 (Design a tenant-branded login page for end customers. Dark t), code:block155 (Design a first-time onboarding flow for new buyers. Dark the), code:block156 (Design an activity/audit log page. Dark theme with sidebar.), code:block157 (Design a full notifications page. Dark theme with sidebar.) (+9 more)

### Community 17 - "Community 17"
Cohesion: 0.12
Nodes (17): 17. REUSABLE LAYOUT COMPONENTS, code:block115 (Design a sidebar navigation component for SkyNode. Dark them), code:block116 (Design a top navbar component. Dark theme.), code:block117 (Design a notification dropdown panel. Dark theme.), code:block118 (Design a command palette / search overlay. Dark theme.), code:block119 (Design a reusable data table component. Dark theme.), code:block120 (Design loading skeleton states for SkyNode UI elements. Dark), code:block121 (Design a date range picker component. Dark theme.) (+9 more)

### Community 18 - "Community 18"
Cohesion: 0.12
Nodes (15): Backend (panel-api), code:block1 (┌───────────────────────────────────────────────────────────), code:block2 (Phase 1 (Now):     All routers → Single Express app → Nginx ), code:block3 (TODAY (Monolith):), code:block4 (e:\Projects\SkyNode\), Core npm Packages (~22 total), Daemon, Frontend (dashboard) (+7 more)

### Community 19 - "Community 19"
Cohesion: 0.13
Nodes (15): 4. END CUSTOMER PANEL PAGES, code:block29 (Design a customer server list page for a game hosting panel.), code:block30 (Design a customer server detail page. Dark theme.), code:block31 (Same as Page 21 but without the admin-specific elements. Cus), code:block32 (Same file manager as Page 22 but customer-scoped. They can o), code:block33 (Design a server logs page. Dark theme.), code:block34 (Design an API keys management page. Dark theme.), code:block35 (Design a simple account settings page. Dark theme.) (+7 more)

### Community 20 - "Community 20"
Cohesion: 0.13
Nodes (15): 7. MODALS & POPUPS — CUSTOMER PANEL, code:block60 (Design a "Purchase Server" page/flow for end customers. Dark), code:block61 (Design a server creation progress page. Dark theme.), code:block62 (Design an "API Key Created" modal. Dark theme.), code:block63 (Design a revoke API key confirmation modal. Dark theme.), code:block64 (Design a 2FA setup flow modal. Dark theme.), code:block65 (Design a server connection info popup/tooltip. Dark theme.), code:block66 (Design a revoke session confirmation modal. Dark theme.) (+7 more)

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (15): 10. ERROR STATES & SPECIAL PAGES, code:block73 (Design a 404 page for SkyNode. Dark theme.), code:block74 (Design a 500 error page. Dark theme.), code:block75 (Design a maintenance mode page. Dark theme.), code:block76 (Design a tenant suspended page. Dark theme.), code:block77 (Design a password reset page. Dark theme, centered.), code:block78 (Design an email verification page. Dark theme, centered.), code:block79 (Design a tenant-branded storefront landing page. Dark theme ) (+7 more)

### Community 22 - "Community 22"
Cohesion: 0.13
Nodes (15): 14. MISSING ADMIN MODALS, code:block92 (Design an "Edit Nest" modal. Dark theme.), code:block93 (Design a delete nest confirmation. Dark theme.), code:block94 (Design a delete egg confirmation. Dark theme.), code:block95 (Design an "Edit Regional Discount" drawer. Dark theme.), code:block96 (Design an expandable subscription detail row. Dark theme. Th), code:block97 (Design an unsuspend confirmation. Dark theme.), code:block98 (Design an "Edit Tenant" modal. Dark theme.) (+7 more)

### Community 23 - "Community 23"
Cohesion: 0.15
Nodes (12): 10. Logging System, 1. Project Overview, 4. Database Schema (Key Tables), 9. Data Collection & AI Readiness, Analytics Events Table, code:mermaid (erDiagram), code:block7 (Server Container → stdout/stderr), Detailed Reference Documents (+4 more)

### Community 24 - "Community 24"
Cohesion: 0.18
Nodes (10): API Routes, Architecture, Database Schema (Drizzle), Development, Important Patterns, Importing the files, Key Modules (Express Routers), Project Overview (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.18
Nodes (11): 9. EMPTY STATES, code:block68 (Design an empty state for when a buyer has no servers yet. D), code:block69 (Design an empty state for when a buyer has no nodes connecte), code:block70 (Design an empty state for no customers. Dark theme.), code:block71 (Design an empty state for no backups on a server. Dark theme), code:block72 (Design an empty state for no API keys. Dark theme.), Empty State — No API Keys, Empty State — No Backups (+3 more)

### Community 26 - "Community 26"
Cohesion: 0.18
Nodes (11): 1. PUBLIC PAGES, code:block2 (Design a modern SaaS landing page for "SkyNode" — a platform), code:block3 (Design a pricing page for "SkyNode" hosting platform. Dark t), code:block4 (Design a login page for "SkyNode" cloud hosting platform. Da), code:block5 (Design a multi-step registration page for "SkyNode". Dark th), code:block6 (Design a forgot password page for "SkyNode". Dark theme, cen), Page 1 — Landing Page (`/`), Page 2 — Pricing (`/pricing`) (+3 more)

### Community 27 - "Community 27"
Cohesion: 0.18
Nodes (11): 13. MISSING CUSTOMER PANEL TABS & PAGES, code:block87 (Design the Schedules tab for customer server detail page. Da), code:block88 (Design the Backups tab for customer server detail page. Dark), code:block89 (Design a simplified settings tab for customer server detail.), code:block90 (Design a customer registration page with tenant branding. Da), code:block91 (Design an order/purchase history page for end customers. Dar), Page 42 — Customer Registration (`/:tenant-slug/register` or custom domain), Page 43 — Customer Order History (`/panel/orders`) (+3 more)

### Community 28 - "Community 28"
Cohesion: 0.18
Nodes (11): 18. MISSING EMPTY STATES, code:block123 (Design an empty state for no scheduled tasks on a server. Da), code:block124 (Design an empty state for no logs. Dark theme.), code:block125 (Design an empty state for no transaction history. Dark theme), code:block126 (Design an empty state for no tenants on the admin panel. Dar), code:block127 (Design an empty state for no orders on the customer panel. D), Empty State — No Logs, Empty State — No Orders (Customer) (+3 more)

### Community 29 - "Community 29"
Cohesion: 0.18
Nodes (11): 21. LAYOUT WRAPPER COMPONENTS (`components/layout/`), code:block141 (Design a Footer component for SkyNode. Dark theme.), code:block142 (Design the PublicLayout wrapper component. Dark theme.), code:block143 (Design the AdminLayout wrapper component. Dark theme.), code:block144 (Design the DashboardLayout wrapper for buyer/tenant pages. D), code:block145 (Design the PanelLayout wrapper for end-customer pages. Dark ), Component — AdminLayout, Component — DashboardLayout (+3 more)

### Community 30 - "Community 30"
Cohesion: 0.18
Nodes (11): 2.1 Core Runtime & Framework, 2.2 Database, 2.3 Real-Time & Communication, 2.4 Auth & Security, 2.5 Containerisation & Daemon, 2.6 Frontend (Dashboard), 2.7 Payments, 2.8 DevOps / Infra (+3 more)

### Community 31 - "Community 31"
Cohesion: 0.22
Nodes (9): 11. POWER ACTION STATES & INLINE INTERACTIONS, code:block80 (Design power action button states for server management. Dar), code:block81 (Design real-time resource gauge components. Dark theme.), code:block82 (Design a file editor modal overlay. Dark theme.), code:block83 (Design a file upload progress overlay. Dark theme.), Component — File Editor Modal, Component — Power Buttons & States, Component — Real-Time Resource Gauges (+1 more)

### Community 32 - "Community 32"
Cohesion: 0.22
Nodes (9): 16. MISSING CUSTOMER PANEL MODALS, code:block111 (Design a delete backup confirmation. Dark theme.), code:block112 (Design an edit schedule modal for customers. Dark theme.), code:block113 (Same as B22 but customer-scoped. Small confirmation modal.), code:block114 (Design a password change success notification state. Dark th), Modal C10 — Customer Delete Schedule Confirmation, Modal C11 — Customer Password Changed Success, Modal C8 — Delete Backup Confirmation (+1 more)

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (9): Phase 1: Foundation (Steps 1–8), Step 1 — Monorepo & Tooling Setup, Step 2 — Shared Package, Step 3 — Database Schema & Migrations, Step 4 — Express API Boilerplate, Step 5 — Authentication System, Step 6 — RBAC & Tenant Context, Step 7 — React + Vite Dashboard Boilerplate (+1 more)

### Community 34 - "Community 34"
Cohesion: 0.22
Nodes (9): Phase 6: Monitoring, Analytics & Polish (Steps 35–42), Step 35 — Backup System, Step 36 — Prometheus Metrics (Daemon), Step 37 — Analytics Event Collection, Step 38 — Admin Analytics Dashboard, Step 39 — Tenant Statistics Dashboard, Step 40 — Admin Overview Dashboard, Step 41 — Security & Testing (+1 more)

### Community 35 - "Community 35"
Cohesion: 0.36
Nodes (9): Analytics Ingestion Service, Billing Service Extraction, Daemon Hub Service, Gateway Pattern for Service Extraction, Phase 1 Single VPS, Phase 2 Horizontal Scaling, Phase 3 Service Extraction, Phase 4 Kubernetes Orchestration (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.25
Nodes (8): Phase 4: Server Features (Steps 22–28), Step 22 — Server File Manager (SFTP), Step 23 — Server Logging System, Step 24 — Server Environment Variables, Step 25 — Server Schedules (Cron Tasks), Step 26 — Customer API Keys, Step 27 — Tenant Customer Management, Step 28 — Customer Panel (End Customer Pages)

### Community 37 - "Community 37"
Cohesion: 0.25
Nodes (8): Phase 3: Node & Daemon (Steps 15–21), Step 15 — Daemon Scaffold, Step 16 — Daemon ↔ Panel Handshake, Step 17 — Node Management (Tenant), Step 18 — Docker Container Lifecycle, Step 19 — Server Creation, Step 20 — Server Power Actions, Step 21 — Console WebSocket Streaming

### Community 38 - "Community 38"
Cohesion: 0.29
Nodes (7): 12. MISSING SERVER DETAIL TABS — BUYER, code:block84 (Design the Schedules tab on a server detail page for tenant ), code:block85 (Design the Settings tab on a server detail page for tenant a), code:block86 (Design the Logs tab on a server detail page for tenant admin), Tab B-T1 — Server Schedules Tab (`/dashboard/servers/:id` → Schedules tab), Tab B-T2 — Server Settings Tab (`/dashboard/servers/:id` → Settings tab), Tab B-T3 — Server Logs Tab (`/dashboard/servers/:id` → Logs tab)

### Community 39 - "Community 39"
Cohesion: 0.29
Nodes (7): 22. CHART COMPONENTS (`components/charts/`), code:block146 (Design a LineChart component for SkyNode. Dark theme.), code:block147 (Design a DonutChart component for SkyNode. Dark theme.), code:block148 (Design a BarChart component for SkyNode. Dark theme.), Component — BarChart, Component — DonutChart, Component — LineChart

### Community 40 - "Community 40"
Cohesion: 0.29
Nodes (6): 8. TOAST NOTIFICATIONS & INLINE FEEDBACK, code:block1 (Design system for "SkyNode" — a cloud hosting management Saa), code:block67 (Design a toast notification system for SkyNode. Dark theme.), Shared Design System (Paste this first as context), SkyNode — Pages & Google Stitch Prompts, Toast Styles

### Community 41 - "Community 41"
Cohesion: 0.29
Nodes (7): 12. Phased Rollout Plan, Phase 1 — Foundation (Weeks 1–3), Phase 2 — Node & Daemon (Weeks 4–6), Phase 3 — Server Management (Weeks 7–9), Phase 4 — Billing & Commerce (Weeks 10–11), Phase 5 — Monitoring & Analytics (Weeks 12–13), Phase 6 — Polish & Launch (Weeks 14–16)

### Community 42 - "Community 42"
Cohesion: 0.29
Nodes (7): Phase 5: Billing & Commerce (Steps 29–34), Step 29 — Razorpay Integration Setup, Step 30 — Buyer Subscription System, Step 31 — End-Customer Payment Flow, Step 32 — Commission Engine, Step 33 — Revenue Dashboard (Admin), Step 34 — Tenant Billing Dashboard

### Community 43 - "Community 43"
Cohesion: 0.29
Nodes (7): Phase 2: Admin & Tenant Management (Steps 9–14), Step 10 — Master Admin: Nest & Egg Management, Step 11 — Master Admin: Regional Discounts, Step 12 — Master Admin: System Settings, Step 13 — Tenant: Branding & White-Label, Step 14 — Tenant: Egg Selection & Hosting Plans, Step 9 — Master Admin: Tenant CRUD

### Community 44 - "Community 44"
Cohesion: 0.33
Nodes (5): code:js (export default defineConfig([), code:js (// eslint.config.js), Expanding the ESLint configuration, React Compiler, React + TypeScript + Vite

### Community 45 - "Community 45"
Cohesion: 0.33
Nodes (6): 5.1 Authentication APIs, 5.2 Master Admin APIs, 5.3 Tenant (Buyer) APIs, 5.4 Customer APIs, 5.5 Daemon (Wings) Internal APIs, 5. API Catalog

### Community 46 - "Community 46"
Cohesion: 0.33
Nodes (5): code:block1 (e:\Projects\SkyNode\), File Count Summary, Key Structural Changes (Next.js → React + Vite), Key Structural Changes (vs Fastify approach), SkyNode — Project Folder Structure

### Community 48 - "Community 48"
Cohesion: 0.4
Nodes (5): 19. TENANT PROFILE & ACCOUNT PAGES, code:block128 (Design a buyer account settings page. Dark theme with sideba), code:block129 (Design an admin account settings page. Dark theme with sideb), Page 44 — Buyer Account/Profile (`/dashboard/account`), Page 45 — Admin Account/Profile (`/admin/account`)

### Community 49 - "Community 49"
Cohesion: 0.4
Nodes (5): 23. GUARD COMPONENTS & AUTH STATES, code:block149 (Design the AuthGuard loading state — shown while checking if), code:block150 (Design an Unauthorized/Forbidden page shown when a user trie), Component — AuthGuard (Loading State), Component — RoleGuard (Unauthorized Page)

### Community 50 - "Community 50"
Cohesion: 0.4
Nodes (5): 6.1 Public / Marketing, 6.2 Master Admin Dashboard, 6.3 Buyer (Tenant) Dashboard, 6.4 End Customer Panel, 6. Pages & UI Layout

### Community 52 - "Community 52"
Cohesion: 0.5
Nodes (4): 7. Nest & Egg System, code:jsonc ({), Egg JSON Schema, Supported Games/Applications (Initial Set — matching Pterodactyl)

### Community 53 - "Community 53"
Cohesion: 0.5
Nodes (4): 11. Monorepo Structure (Gateway-Ready), code:block8 (skynode/), code:block9 (# To extract billing into its own service:), Service Extraction Pattern (Phase 3+)

### Community 54 - "Community 54"
Cohesion: 0.5
Nodes (4): 8. Commission & Billing Logic, code:block5 (For each end-customer server sale:), code:mermaid (sequenceDiagram), Razorpay Integration Flow

### Community 56 - "Community 56"
Cohesion: 0.67
Nodes (3): Automated Tests, Manual Verification, Verification Plan

### Community 57 - "Community 57"
Cohesion: 0.67
Nodes (3): 3. System Architecture, code:mermaid (graph TB), Key Architectural Decisions

## Knowledge Gaps
- **396 isolated node(s):** `MailServiceConfig`, `transporter`, `EmailService`, `WorkerPriority`, `PARTITION_PRIORITY_MAP` (+391 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SkyNode — Pages & Google Stitch Prompts` connect `Community 40` to `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 12`, `Community 14`, `Community 16`, `Community 17`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 29`, `Community 31`, `Community 32`, `Community 38`, `Community 39`, `Community 48`, `Community 49`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `3. BUYER (TENANT) DASHBOARD PAGES` connect `Community 6` to `Community 40`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `5. MODALS & POPUPS — ADMIN` connect `Community 7` to `Community 40`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `MailServiceConfig`, `transporter`, `EmailService` to the rest of the system?**
  _396 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._