# Graph Report - .  (2026-05-09)

## Corpus Check
- Corpus is ~36,020 words - fits in a single context window. You may not need a graph.

## Summary
- 106 nodes · 92 edges · 35 communities (20 shown, 15 thin omitted)
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Backend Services & Database|Backend Services & Database]]
- [[_COMMUNITY_Auth Controllers & Routes|Auth Controllers & Routes]]
- [[_COMMUNITY_API Utilities & Middleware|API Utilities & Middleware]]
- [[_COMMUNITY_Multi-Tenancy & RBAC|Multi-Tenancy & RBAC]]
- [[_COMMUNITY_Scaling & Microservices|Scaling & Microservices]]
- [[_COMMUNITY_Project Structure & Monorepo|Project Structure & Monorepo]]
- [[_COMMUNITY_Frontend & UI Stack|Frontend & UI Stack]]
- [[_COMMUNITY_Database Connection|Database Connection]]
- [[_COMMUNITY_Architecture Patterns|Architecture Patterns]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
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

## God Nodes (most connected - your core abstractions)
1. `Implementation Plan` - 14 edges
2. `Scaling Roadmap` - 8 edges
3. `User Sign Up Controller` - 7 edges
4. `ApiResponse` - 5 edges
5. `User Model` - 5 edges
6. `Project Folder Structure` - 5 edges
7. `ApiError` - 4 edges
8. `Tenant Model` - 4 edges
9. `Auth Routes` - 4 edges
10. `Async Handler Middleware` - 4 edges

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

## Communities (35 total, 15 thin omitted)

### Community 0 - "Backend Services & Database"
Cohesion: 0.14
Nodes (15): Commission Calculation Engine, Database Schema Design, Docker Compose Configuration, Drizzle ORM, Express 5 API Framework, Express Router Portability, Feature Build Checklist, Implementation Plan (+7 more)

### Community 1 - "Auth Controllers & Routes"
Cohesion: 0.15
Nodes (3): ApiError, ApiResponse, asyncHandler()

### Community 2 - "API Utilities & Middleware"
Cohesion: 0.25
Nodes (11): API Error Class, API Response Class, Async Handler Middleware, Auth Controller Index, Auth Routes, Database Connector, Express Application, Panel API Server Entry (+3 more)

### Community 3 - "Multi-Tenancy & RBAC"
Cohesion: 0.33
Nodes (9): IUser Interface, Multi-Tenancy Pattern, Role-Based Access Control, Tenant Branding Model, Tenant Isolation via tenantId, Tenant Model, User Model, User Sign Up Controller (+1 more)

### Community 4 - "Scaling & Microservices"
Cohesion: 0.36
Nodes (9): Analytics Ingestion Service, Billing Service Extraction, Daemon Hub Service, Gateway Pattern for Service Extraction, Phase 1 Single VPS, Phase 2 Horizontal Scaling, Phase 3 Service Extraction, Phase 4 Kubernetes Orchestration (+1 more)

### Community 5 - "Project Structure & Monorepo"
Cohesion: 0.29
Nodes (7): Daemon Package (Wings), Dashboard Entry HTML, Dashboard Package, Project Folder Structure, npm Workspaces Monorepo, Panel API Package, Shared Package

### Community 6 - "Frontend & UI Stack"
Cohesion: 0.4
Nodes (5): Dashboard README, UI Pages and Design Prompts, React Compiler, React 19 + Vite 6 Frontend, Vite React SWC Plugin

## Knowledge Gaps
- **39 isolated node(s):** `SkyNode Project Root`, `Multi-Tenant RLS Strategy`, `API Routes Plan`, `Gateway-Ready Monorepo Architecture`, `Express 5` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Implementation Plan` connect `Backend Services & Database` to `Multi-Tenancy & RBAC`, `Project Structure & Monorepo`, `Frontend & UI Stack`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Why does `Tenant Isolation via tenantId` connect `Multi-Tenancy & RBAC` to `Backend Services & Database`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `User Sign Up Controller` connect `Multi-Tenancy & RBAC` to `API Utilities & Middleware`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `User Model` (e.g. with `User Sign Up Controller` and `Tenant Model`) actually correct?**
  _`User Model` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `SkyNode Project Root`, `Multi-Tenant RLS Strategy`, `API Routes Plan` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Backend Services & Database` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._