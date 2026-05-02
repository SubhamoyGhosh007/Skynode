# SkyNode — Complete API Routes

## Base URL: `https://api.skynode.com/v1`

---

## 1. Authentication (`/auth`)

| # | Method | Endpoint | Body / Params | Response | Access |
|---|---|---|---|---|---|
| 1 | POST | `/auth/register` | `{ email, password, name, role }` | `{ user, tokens }` | Public |
| 2 | POST | `/auth/login` | `{ email, password }` | `{ user, accessToken, refreshToken }` | Public |
| 3 | POST | `/auth/refresh` | `{ refreshToken }` | `{ accessToken, refreshToken }` | Public |
| 4 | POST | `/auth/logout` | `{ refreshToken }` | `{ success }` | Authenticated |
| 5 | GET | `/auth/me` | — | `{ user }` | Authenticated |
| 6 | POST | `/auth/forgot-password` | `{ email }` | `{ message }` | Public |
| 7 | POST | `/auth/reset-password` | `{ token, newPassword }` | `{ success }` | Public |
| 8 | PATCH | `/auth/change-password` | `{ oldPassword, newPassword }` | `{ success }` | Authenticated |
| 9 | POST | `/auth/verify-email` | `{ token }` | `{ success }` | Public |

---

## 2. Master Admin (`/admin`)

### 2.1 Tenant Management

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 10 | GET | `/admin/tenants` | `?page, limit, search, status` | `{ tenants[], total, page }` |
| 11 | GET | `/admin/tenants/:id` | — | `{ tenant, stats }` |
| 12 | POST | `/admin/tenants` | `{ name, email, plan, subdomain }` | `{ tenant }` |
| 13 | PATCH | `/admin/tenants/:id` | `{ name?, plan?, status? }` | `{ tenant }` |
| 14 | DELETE | `/admin/tenants/:id` | — | `{ success }` |
| 15 | POST | `/admin/tenants/:id/suspend` | `{ reason }` | `{ tenant }` |
| 16 | POST | `/admin/tenants/:id/unsuspend` | — | `{ tenant }` |

### 2.2 Nest Management

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 17 | GET | `/admin/nests` | `?page, limit` | `{ nests[], total }` |
| 18 | GET | `/admin/nests/:id` | — | `{ nest, eggs[] }` |
| 19 | POST | `/admin/nests` | `{ name, description, icon }` | `{ nest }` |
| 20 | PATCH | `/admin/nests/:id` | `{ name?, description?, icon? }` | `{ nest }` |
| 21 | DELETE | `/admin/nests/:id` | — | `{ success }` |

### 2.3 Egg Management

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 22 | GET | `/admin/eggs` | `?nestId, page, limit` | `{ eggs[], total }` |
| 23 | GET | `/admin/eggs/:id` | — | `{ egg }` |
| 24 | POST | `/admin/eggs` | `{ nestId, name, dockerImage, startupCmd, installScript, variables[], configParsers }` | `{ egg }` |
| 25 | PATCH | `/admin/eggs/:id` | partial egg fields | `{ egg }` |
| 26 | DELETE | `/admin/eggs/:id` | — | `{ success }` |
| 27 | POST | `/admin/eggs/import` | `{ jsonFile }` (multipart) | `{ egg }` |
| 28 | GET | `/admin/eggs/:id/export` | — | `{ eggJson }` |

### 2.4 Subscriptions & Revenue

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 29 | GET | `/admin/subscriptions` | `?status, page, limit` | `{ subscriptions[], total }` |
| 30 | GET | `/admin/subscriptions/:id` | — | `{ subscription, tenant }` |
| 31 | GET | `/admin/revenue` | `?from, to, groupBy` | `{ totalRevenue, commissions, subscriptionIncome, breakdown[] }` |
| 32 | GET | `/admin/revenue/export` | `?from, to, format` | CSV/JSON file |
| 33 | GET | `/admin/transactions` | `?tenantId, from, to, page` | `{ transactions[], total }` |

### 2.5 Regional Discounts

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 34 | GET | `/admin/discounts` | — | `{ discounts[] }` |
| 35 | POST | `/admin/discounts` | `{ regionCode, discountPercent, active }` | `{ discount }` |
| 36 | PATCH | `/admin/discounts/:id` | `{ discountPercent?, active? }` | `{ discount }` |
| 37 | DELETE | `/admin/discounts/:id` | — | `{ success }` |

### 2.6 Platform Analytics & Settings

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 38 | GET | `/admin/analytics/overview` | `?from, to` | `{ totalTenants, totalServers, totalRevenue, activeNodes }` |
| 39 | GET | `/admin/analytics/growth` | `?from, to, metric` | `{ dataPoints[] }` |
| 40 | GET | `/admin/analytics/events` | `?type, tenantId, page` | `{ events[], total }` |
| 41 | GET | `/admin/settings` | — | `{ platformSettings }` |
| 42 | PATCH | `/admin/settings` | `{ setting: value }` | `{ platformSettings }` |

---

## 3. Tenant / Buyer (`/tenant`)

### 3.1 Dashboard & Profile

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 43 | GET | `/tenant/dashboard` | — | `{ stats: { totalServers, totalCustomers, revenue, nodeStatus } }` |
| 44 | GET | `/tenant/profile` | — | `{ tenant }` |
| 45 | PATCH | `/tenant/profile` | `{ companyName?, logo?, icon?, supportEmail? }` | `{ tenant }` |

### 3.2 Branding & White-Label

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 46 | GET | `/tenant/branding` | — | `{ branding }` |
| 47 | PATCH | `/tenant/branding` | `{ companyName, logo, icon, primaryColor, customDomain, supportEmail }` | `{ branding }` |
| 48 | POST | `/tenant/branding/verify-domain` | `{ domain }` | `{ dnsRecords[], verified }` |
| 49 | POST | `/tenant/branding/upload-logo` | multipart file | `{ logoUrl }` |

### 3.3 Node Management

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 50 | GET | `/tenant/nodes` | `?page, limit, status` | `{ nodes[], total }` |
| 51 | GET | `/tenant/nodes/:id` | — | `{ node, resourceUsage }` |
| 52 | POST | `/tenant/nodes` | `{ name, fqdn, port, memory, disk, cpuCores, region }` | `{ node, daemonToken }` |
| 53 | PATCH | `/tenant/nodes/:id` | partial node fields | `{ node }` |
| 54 | DELETE | `/tenant/nodes/:id` | — | `{ success }` |
| 55 | POST | `/tenant/nodes/:id/verify` | — | `{ connected, daemonVersion, dockerVersion }` |
| 56 | GET | `/tenant/nodes/:id/stats` | — | `{ cpu, memory, disk, network, uptime }` |
| 57 | GET | `/tenant/nodes/:id/allocations` | — | `{ allocations[] }` |

### 3.4 Server Management

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 58 | GET | `/tenant/servers` | `?nodeId, customerId, status, page` | `{ servers[], total }` |
| 59 | GET | `/tenant/servers/:id` | — | `{ server, node, owner, egg }` |
| 60 | POST | `/tenant/servers` | `{ name, nodeId, eggId, ownerId, memory, disk, cpu, port, envVars }` | `{ server }` |
| 61 | PATCH | `/tenant/servers/:id` | partial server fields | `{ server }` |
| 62 | DELETE | `/tenant/servers/:id` | — | `{ success }` |
| 63 | POST | `/tenant/servers/:id/power` | `{ action: "start"|"stop"|"restart"|"kill" }` | `{ status }` |
| 64 | POST | `/tenant/servers/:id/reinstall` | — | `{ status }` |
| 65 | POST | `/tenant/servers/:id/suspend` | `{ reason }` | `{ server }` |
| 66 | POST | `/tenant/servers/:id/unsuspend` | — | `{ server }` |
| 67 | WS | `/tenant/servers/:id/console` | — | Bidirectional stream |
| 68 | GET | `/tenant/servers/:id/logs` | `?level, from, to, search, page` | `{ logs[], total }` |

### 3.5 Egg Selection (Tenant picks which eggs to offer)

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 69 | GET | `/tenant/available-eggs` | — | `{ nests[{ nest, eggs[] }] }` |
| 70 | GET | `/tenant/enabled-eggs` | — | `{ enabledEggIds[] }` |
| 71 | POST | `/tenant/enabled-eggs` | `{ eggIds[] }` | `{ success }` |
| 72 | DELETE | `/tenant/enabled-eggs/:eggId` | — | `{ success }` |

### 3.6 Hosting Plans (what tenant sells to customers)

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 73 | GET | `/tenant/plans` | — | `{ plans[] }` |
| 74 | POST | `/tenant/plans` | `{ name, eggId, memory, disk, cpu, priceMonthly, description }` | `{ plan }` |
| 75 | PATCH | `/tenant/plans/:id` | partial plan fields | `{ plan }` |
| 76 | DELETE | `/tenant/plans/:id` | — | `{ success }` |

### 3.7 Customer Management

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 77 | GET | `/tenant/customers` | `?search, page, limit` | `{ customers[], total }` |
| 78 | GET | `/tenant/customers/:id` | — | `{ customer, servers[] }` |
| 79 | POST | `/tenant/customers` | `{ email, name, password }` | `{ customer }` |
| 80 | PATCH | `/tenant/customers/:id` | `{ name?, email?, status? }` | `{ customer }` |
| 81 | DELETE | `/tenant/customers/:id` | — | `{ success }` |
| 82 | POST | `/tenant/customers/:id/suspend` | `{ reason }` | `{ customer }` |

### 3.8 Billing

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 83 | GET | `/tenant/billing` | — | `{ subscription, nextPayment, totalEarnings, totalCommission }` |
| 84 | GET | `/tenant/billing/invoices` | `?page` | `{ invoices[] }` |
| 85 | GET | `/tenant/billing/transactions` | `?from, to, page` | `{ transactions[], total }` |
| 86 | POST | `/tenant/billing/update-payment` | — | `{ razorpayPortalUrl }` |

### 3.9 Backup Storage

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 87 | GET | `/tenant/backup-config` | — | `{ provider, bucket, connected }` |
| 88 | POST | `/tenant/backup-config` | `{ provider, accessKey, secretKey, bucket, region }` | `{ success }` |
| 89 | PATCH | `/tenant/backup-config` | partial fields | `{ success }` |

---

## 4. End Customer (`/customer`)

### 4.1 Servers

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 90 | GET | `/customer/servers` | — | `{ servers[] }` |
| 91 | GET | `/customer/servers/:id` | — | `{ server, egg, resourceUsage }` |
| 92 | POST | `/customer/servers/:id/power` | `{ action }` | `{ status }` |
| 93 | WS | `/customer/servers/:id/console` | — | Bidirectional stream |
| 94 | GET | `/customer/servers/:id/logs` | `?level, from, to, search, page` | `{ logs[], total }` |
| 95 | GET | `/customer/servers/:id/stats` | — | `{ cpu, memory, disk, network }` |

### 4.2 File Manager

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 96 | GET | `/customer/servers/:id/files` | `?path` | `{ files[] }` |
| 97 | GET | `/customer/servers/:id/files/content` | `?path` | `{ content }` |
| 98 | POST | `/customer/servers/:id/files/upload` | multipart file + `?path` | `{ success }` |
| 99 | POST | `/customer/servers/:id/files/create` | `{ path, content }` | `{ success }` |
| 100 | PATCH | `/customer/servers/:id/files/rename` | `{ oldPath, newPath }` | `{ success }` |
| 101 | DELETE | `/customer/servers/:id/files` | `{ path }` | `{ success }` |
| 102 | POST | `/customer/servers/:id/files/compress` | `{ paths[], destination }` | `{ success }` |
| 103 | POST | `/customer/servers/:id/files/decompress` | `{ path }` | `{ success }` |

### 4.3 Backups (uses tenant's backup storage)

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 104 | GET | `/customer/servers/:id/backups` | — | `{ backups[] }` |
| 105 | POST | `/customer/servers/:id/backups` | `{ name }` | `{ backup }` |
| 106 | POST | `/customer/servers/:id/backups/:backupId/restore` | — | `{ status }` |
| 107 | DELETE | `/customer/servers/:id/backups/:backupId` | — | `{ success }` |
| 108 | GET | `/customer/servers/:id/backups/:backupId/download` | — | file stream |

### 4.4 Environment Variables

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 109 | GET | `/customer/servers/:id/env` | — | `{ variables[] }` (only user_editable) |
| 110 | PATCH | `/customer/servers/:id/env` | `{ key: value, ... }` | `{ variables[] }` |

### 4.5 Schedules (cron tasks)

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 111 | GET | `/customer/servers/:id/schedules` | — | `{ schedules[] }` |
| 112 | POST | `/customer/servers/:id/schedules` | `{ name, cron, action, payload }` | `{ schedule }` |
| 113 | PATCH | `/customer/servers/:id/schedules/:schedId` | partial fields | `{ schedule }` |
| 114 | DELETE | `/customer/servers/:id/schedules/:schedId` | — | `{ success }` |

### 4.6 API Keys (scoped to their servers)

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 115 | GET | `/customer/api-keys` | — | `{ apiKeys[] }` |
| 116 | POST | `/customer/api-keys` | `{ name, serverId, scopes[], expiresAt? }` | `{ apiKey, secretKey }` (shown once) |
| 117 | DELETE | `/customer/api-keys/:id` | — | `{ success }` |

### 4.7 Account

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 118 | GET | `/customer/account` | — | `{ user }` |
| 119 | PATCH | `/customer/account` | `{ name?, email? }` | `{ user }` |

---

## 5. Daemon Internal APIs (`/daemon`)

> These are called between Panel ↔ Daemon only, authenticated via daemon token.

| # | Method | Endpoint | Body / Params | Response |
|---|---|---|---|---|
| 120 | POST | `/daemon/handshake` | `{ token, nodeId, systemInfo }` | `{ accepted, config }` |
| 121 | POST | `/daemon/heartbeat` | `{ nodeId, cpu, memory, disk, containers[], uptime }` | `{ ack }` |
| 122 | POST | `/daemon/servers/:id/install` | `{ egg, envVars }` | `{ status }` |
| 123 | POST | `/daemon/servers/:id/power` | `{ action }` | `{ status }` |
| 124 | POST | `/daemon/servers/:id/reinstall` | `{ egg }` | `{ status }` |
| 125 | GET | `/daemon/servers/:id/logs` | `?lines, since` | `{ logs[] }` |
| 126 | POST | `/daemon/servers/:id/command` | `{ command }` | `{ sent }` |
| 127 | WS | `/daemon/ws` | — | Bidirectional (console, stats, events) |
| 128 | GET | `/daemon/servers/:id/files` | `?path` | `{ files[] }` |
| 129 | POST | `/daemon/servers/:id/backup` | `{ destination }` | `{ status }` |
| 130 | POST | `/daemon/servers/:id/restore` | `{ backupId }` | `{ status }` |

---

## 6. Webhooks (`/webhooks`)

| # | Method | Endpoint | Purpose |
|---|---|---|---|
| 131 | POST | `/webhooks/razorpay` | Razorpay payment events |
| 132 | POST | `/webhooks/daemon/:nodeId` | Daemon event callbacks |

---

**Total: 132 API endpoints**
