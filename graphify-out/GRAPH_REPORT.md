# Graph Report - Skynode  (2026-05-10)

## Corpus Check
- 40 files · ~40,088 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 178 nodes · 186 edges · 47 communities (30 shown, 17 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1689b5d4`
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
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
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

## God Nodes (most connected - your core abstractions)
1. `Implementation Plan` - 14 edges
2. `WorkerScheduler` - 11 edges
3. `createTransporter()` - 10 edges
4. `Scaling Roadmap` - 8 edges
5. `processEmailMessage()` - 7 edges
6. `User Sign Up Controller` - 7 edges
7. `ApiError` - 6 edges
8. `ApiResponse` - 5 edges
9. `User Model` - 5 edges
10. `Project Folder Structure` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Implementation Plan` --references--> `Tenant Isolation via tenantId`  [EXTRACTED]
  plans/implementation_plan.md → packages/panel-api/src/apps/auth/database/user.db.ts
- `sendWelcomeEmail()` --calls--> `getWelcomeEmailTemplate()`  [INFERRED]
  email-worker/src/services/email.service.ts → mail-service/src/templates/welcome.ts
- `Dashboard Entry HTML` --conceptually_related_to--> `Dashboard Package`  [INFERRED]
  packages/dashboard/index.html → plans/folder_structure.md
- `Dashboard README` --conceptually_related_to--> `React 19 + Vite 6 Frontend`  [INFERRED]
  packages/dashboard/README.md → plans/implementation_plan.md
- `Tenant Model` --semantically_similar_to--> `User Model`  [INFERRED] [semantically similar]
  packages/panel-api/src/database/tenant.db.ts → packages/panel-api/src/apps/auth/database/user.db.ts

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

## Communities (47 total, 17 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (20): API Error Class, API Response Class, Async Handler Middleware, Auth Controller Index, Auth Routes, Database Connector, Express Application, IUser Interface (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (20): Commission Calculation Engine, Dashboard README, Database Schema Design, Docker Compose Configuration, Drizzle ORM, Express 5 API Framework, Express Router Portability, Feature Build Checklist (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.16
Nodes (3): ApiError, ApiResponse, asyncHandler()

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (9): sendEmail(), createTransporter(), getCurrentProvider(), getMailConfig(), initGmailTransporter(), initMailgunTransporter(), initMailTransporter(), initOutlookTransporter() (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.24
Nodes (6): createConsumer(), disconnectConsumer(), subscribeToTopic(), shutdown(), start(), calculateWorkerAllocation()

### Community 6 - "Community 6"
Cohesion: 0.36
Nodes (7): processEmailMessage(), sendBillingNotification(), sendEmailVerification(), sendPasswordResetEmail(), sendServerAlert(), sendWelcomeEmail(), getWelcomeEmailTemplate()

### Community 7 - "Community 7"
Cohesion: 0.36
Nodes (9): Analytics Ingestion Service, Billing Service Extraction, Daemon Hub Service, Gateway Pattern for Service Extraction, Phase 1 Single VPS, Phase 2 Horizontal Scaling, Phase 3 Service Extraction, Phase 4 Kubernetes Orchestration (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (7): Daemon Package (Wings), Dashboard Entry HTML, Dashboard Package, Project Folder Structure, npm Workspaces Monorepo, Panel API Package, Shared Package

### Community 9 - "Community 9"
Cohesion: 0.53
Nodes (4): connectProducer(), getPartitionForPriority(), publishEmailMessage(), publishWelcomeEmail()

### Community 10 - "Community 10"
Cohesion: 0.53
Nodes (4): connectProducer(), getPartitionForPriority(), publishEmailMessage(), publishWelcomeEmail()

## Knowledge Gaps
- **39 isolated node(s):** `SkyNode Project Root`, `Multi-Tenant RLS Strategy`, `API Routes Plan`, `Gateway-Ready Monorepo Architecture`, `Express 5` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Implementation Plan` connect `Community 1` to `Community 0`, `Community 8`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `Tenant Isolation via tenantId` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `SkyNode Project Root`, `Multi-Tenant RLS Strategy`, `API Routes Plan` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._