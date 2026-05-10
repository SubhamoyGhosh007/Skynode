# SkyNode — Pages & Google Stitch Prompts

> Copy-paste each prompt into Google Stitch. Every prompt follows a consistent dark-theme, SaaS-modern aesthetic with glassmorphism, gradients, and premium UI.

---

## Shared Design System (Paste this first as context)

```
Design system for "SkyNode" — a cloud hosting management SaaS platform.

Theme: Dark mode, deep navy/slate background (#0f172a), with purple-blue gradient accents (#6366f1 → #8b5cf6). Glass morphism cards with subtle borders. 

Typography: Inter font family. White primary text, slate-400 secondary text.

Components: Rounded corners (12px), subtle shadows, smooth hover transitions, gradient CTAs, status badges (green=online, red=offline, yellow=warning, blue=info).

Icon style: Lucide icons, thin stroke. Sidebar navigation with icons + labels.
```

---

## 1. PUBLIC PAGES

### Page 1 — Landing Page (`/`)

```
Design a modern SaaS landing page for "SkyNode" — a platform that lets VPS owners start their own game server hosting business.

Dark theme (#0f172a background). Hero section with a bold headline "Launch Your Hosting Empire", subtitle "Deploy, manage, and scale game servers across your VPS fleet. Start earning in minutes.", and a purple gradient CTA button "Get Started Free". Show a floating dashboard mockup screenshot.

Features section: 6 feature cards in a 3x2 grid with icons — "One-Click Deploy", "Real-Time Console", "Custom Branding", "Auto Scaling", "Built-in Billing", "24/7 Monitoring". Cards have glass morphism effect.

Pricing section: 3 pricing tiers (Starter $29/mo, Pro $79/mo, Enterprise $199/mo) in cards. Middle card highlighted with "Most Popular" badge and purple border glow.

Testimonials section: 3 testimonial cards with avatar, name, company, quote.

Footer: Logo, links (Product, Company, Legal, Support), social icons, copyright.

Navbar: Logo "SkyNode" on left, links (Features, Pricing, Docs) in center, "Login" and "Get Started" buttons on right.
```

### Page 2 — Pricing (`/pricing`)

```
Design a pricing page for "SkyNode" hosting platform. Dark theme (#0f172a).

Header: "Simple, Transparent Pricing" with subtitle "Start with our free trial. Scale as you grow."

3 pricing tier cards side by side:
- Starter ($29/mo): 5 nodes, 50 servers, basic branding, email support
- Pro ($79/mo): 25 nodes, 500 servers, full white-label, custom domain, priority support — highlighted with purple glow border and "Most Popular" badge
- Enterprise ($199/mo): Unlimited nodes, unlimited servers, dedicated support, SLA, custom integrations

Each card: feature checklist with checkmarks, gradient CTA button.

Below: FAQ accordion section with 6 questions. Regional discount banner: "Based in a developing region? You may qualify for discounted pricing."

Toggle for Monthly/Annual billing at top (annual shows 20% discount badge).
```

### Page 3 — Login (`/login`)

```
Design a login page for "SkyNode" cloud hosting platform. Dark theme.

Centered card (480px wide) with glass morphism effect on a dark gradient background with subtle grid pattern.

Card contains: SkyNode logo at top, "Welcome back" heading, "Sign in to your account" subtitle.

Form fields: Email input with mail icon, Password input with lock icon and show/hide toggle. "Remember me" checkbox and "Forgot password?" link.

Purple gradient "Sign In" button full width. Divider "or continue with". Google and GitHub OAuth buttons.

Bottom: "Don't have an account? Sign up" link.
```

### Page 4 — Register (`/register`)

```
Design a multi-step registration page for "SkyNode". Dark theme.

Step indicator at top: 3 steps — "Account Info" → "Choose Plan" → "Payment". Current step highlighted in purple.

Step 1 (shown): Glass card with form fields — Company Name, Full Name, Email, Password, Confirm Password. "Continue" button.

Step 2: Plan selection (3 cards like pricing page, selectable with radio).

Step 3: Razorpay payment integration area, billing summary card on the right showing selected plan, price, and "Start Free Trial" button.

Left side: Illustration or feature highlights. "Trusted by 500+ hosting companies" with small logos.
```

### Page 5 — Forgot Password (`/forgot-password`)

```
Design a forgot password page for "SkyNode". Dark theme, centered layout.

Glass card (440px wide) with: SkyNode logo, "Reset your password" heading, "Enter your email and we'll send you a reset link" subtitle.

Email input field with mail icon. Purple gradient "Send Reset Link" button.

"Back to login" link below. Subtle lock icon illustration in background.
```

---

## 2. MASTER ADMIN PAGES

### Page 6 — Admin Overview (`/admin`)

```
Design an admin dashboard overview page for "SkyNode" platform. Dark theme.

Left sidebar (240px): SkyNode logo, navigation items with icons — Dashboard, Tenants, Nests & Eggs, Revenue, Discounts, Analytics, Subscriptions, Settings. Active item highlighted with purple background. User avatar and name at bottom.

Main content area:

Top: Welcome message "Good morning, Admin" with current date.

4 stat cards in a row: Total Tenants (156), Active Servers (2,847), Monthly Revenue ($23,450), Active Nodes (89). Each card has an icon, number, label, and a small sparkline chart showing trend.

Below: Two columns.
Left: "Revenue Overview" line chart (last 30 days) with gradient fill under the line.
Right: "Server Distribution" donut chart showing game types (Minecraft 45%, Rust 20%, Discord Bots 15%, Other 20%).

Bottom row: "Recent Tenants" table (name, plan, servers, status, joined date) with 5 rows. "System Health" card showing API uptime, DB latency, active WebSocket connections.
```

### Page 7 — Tenant Management (`/admin/tenants`)

```
Design a tenant management page for "SkyNode" admin panel. Dark theme with sidebar.

Header: "Tenants" title, search bar, filter dropdowns (Status, Plan), "Add Tenant" purple button.

Data table with columns: Tenant Name (with logo), Slug/Domain, Plan (badge), Servers Count, Revenue, Status (active/suspended badge), Actions (view, suspend, delete icons).

Table has alternating row opacity, hover highlight. Pagination at bottom. Show 10 rows.

Status badges: Green for active, red for suspended, yellow for past_due.
```

### Page 8 — Tenant Detail (`/admin/tenants/:id`)

```
Design a tenant detail page. Dark theme.

Top: Breadcrumb (Tenants > IndiaSells). Tenant header card with logo, company name, custom domain, plan badge, status badge, join date. Action buttons: "Suspend", "Change Plan", "Delete" (red).

4 stat cards: Total Servers (45), Active Nodes (3), Monthly Revenue ($1,240), Customers (78).

Tabs below: Overview | Nodes | Servers | Customers | Billing | Activity Log

Overview tab (shown): Left column — tenant info (email, region, subdomain, custom domain). Right column — resource usage chart (memory, CPU across all nodes).

Activity log section: Timeline of recent events with icons (server created, node added, payment received).
```

### Page 9 — Nest Management (`/admin/nests`)

```
Design a nest management page for "SkyNode". Dark theme.

Header: "Nests & Eggs" title, "Create Nest" button.

Nests displayed as expandable accordion cards. Each nest card shows: Icon (game controller, chat bubble, etc.), Nest Name (e.g., "Minecraft"), Description, Egg Count badge.

Expanded nest shows a grid of egg cards inside. Each egg card: game logo, egg name (e.g., "Paper"), Docker image tag, min memory badge. Hover shows "Edit" and "Delete" buttons.

Actions on each nest: Edit, Delete, "Add Egg" button. Import/Export buttons in header.
```

### Page 10 — Egg Editor (`/admin/nests/:nestId/eggs/:eggId`)

```
Design an egg editor page for "SkyNode" admin. Dark theme.

Header: Breadcrumb (Nests > Minecraft > Paper). "Save Changes" and "Export JSON" buttons.

Left side (60%): Form sections in collapsible cards:
1. "Basic Info" — Name, Description, Docker Image input, Logo upload
2. "Startup" — Startup command input (monospace font, code-style), Install script textarea (code editor style with line numbers)
3. "Variables" — Table of config variables (Name, Description, Default, Rules, User Editable toggle). "Add Variable" button.
4. "Config Parsers" — JSON editor for file parsing rules

Right side (40%): Preview card showing how the egg appears to buyers. Requirements badge (Min Memory: 512MB, Min Disk: 1GB).
```

### Page 11 — Revenue & Commissions (`/admin/revenue`)

```
Design a revenue dashboard for "SkyNode" admin. Dark theme.

4 stat cards: Total Revenue ($145,000), Subscription Income ($89,000), Commissions Earned ($56,000), Avg Commission ($7.80).

Main chart: Dual-axis line chart — Revenue (purple line) and Commissions (blue line) over last 12 months. Area fill below lines.

Date range selector at top right. Export button (CSV/PDF).

Below: "Recent Transactions" table — Date, Tenant, Type (subscription/commission), Amount, Status. Filterable by type.

Right column: "Top Earning Tenants" leaderboard — Tenant name, total revenue, commission paid. Top 10 with bar chart visualization.
```

### Page 12 — Regional Discounts (`/admin/discounts`)

```
Design a regional discounts management page. Dark theme.

Header: "Regional Discounts" title, "Add Discount" button.

Table with columns: Region Flag + Name (India, Brazil, etc.), Region Code (IN, BR), Discount Percentage, Status toggle (active/inactive), Actions (edit, delete).

"Add Discount" modal/drawer: Country selector dropdown, discount percentage slider (0-50%), active toggle, Save button.

Info card at top explaining: "Regional discounts are applied to end-customer purchases based on the buyer's registered region."
```

### Page 13 — Platform Analytics (`/admin/analytics`)

```
Design a platform analytics page. Dark theme.

Date range picker at top. Metric selector tabs: Growth | Usage | Revenue | Engagement.

Growth tab (shown):
- Line chart: New Tenants per month (12 months)
- Line chart: New Servers per month
- Bar chart: Signups by region (world map or horizontal bars)

4 metric cards: MAU (Monthly Active Users), Server Uptime (99.7%), Avg Servers per Tenant (18), Customer Retention Rate (87%).

Bottom: "Event Stream" — live-updating list of recent analytics events (server.created, sale.completed, etc.) with timestamps and details.
```

### Page 14 — Subscription Management (`/admin/subscriptions`)

```
Design a subscription management page. Dark theme.

Table with columns: Tenant Name, Plan (Starter/Pro/Enterprise badge), Amount, Status (active/past_due/cancelled badge), Current Period End, Actions.

Filter tabs: All | Active | Past Due | Cancelled.

Summary cards at top: Active Subscriptions (142), MRR ($8,900), Churn Rate (2.3%), Past Due (5).

Click on row expands to show: Razorpay subscription ID, payment history, plan change history.
```

### Page 15 — System Settings (`/admin/settings`)

```
Design a settings page. Dark theme.

Vertical tabs on left: General | Security | Email | API | Maintenance.

General tab (shown): Form fields — Platform Name, Platform URL, Support Email, Default Timezone, Commission Rate (slider 5-20%), Minimum Commission ($5 input).

Each section is a card with a save button. Toggle switches for: Maintenance Mode, Allow Registrations, Require Email Verification.
```

---

## 3. BUYER (TENANT) DASHBOARD PAGES

### Page 16 — Tenant Overview (`/dashboard`)

```
Design a buyer dashboard for a white-labeled hosting panel. Dark theme. Sidebar navigation.

Top: "Welcome back, [Company Name]" with date. 

4 stat cards: Active Servers (23), Online Nodes (3/3), Customers (56), This Month Revenue ($890). Cards have subtle gradient backgrounds and trend arrows.

Left column: "Server Status" — Horizontal stacked bar showing Running (18), Stopped (3), Error (2). "Resource Usage" — Two progress bars for Memory (67%) and Disk (42%).

Right column: "Recent Activity" feed — "Customer John created a Minecraft server", "Node us-east-1 heartbeat restored", etc. with timestamps.

Bottom: "Quick Actions" — 4 action cards: Create Server, Add Node, View Customers, Manage Plans.
```

### Page 17 — Node Management (`/dashboard/nodes`)

```
Design a node management page for a hosting company dashboard. Dark theme.

Header: "Your Nodes" title, "Add Node" purple button.

Node cards in a grid (2 columns). Each card shows:
- Node name and region flag
- Status indicator (green dot = online, red = offline)
- IP address / FQDN
- Resource bars: CPU (45%), Memory (2.4/4 GB), Disk (12/50 GB)
- Server count: "8 servers running"
- Uptime: "14 days, 3 hours"
- Actions: View Details, Settings gear icon

Empty state (if no nodes): Illustration with "Add your first node" message and setup instructions.
```

### Page 18 — Node Detail (`/dashboard/nodes/:id`)

```
Design a node detail page. Dark theme.

Header: Node name, status badge, region flag. "Edit" and "Delete" buttons.

Top row: 4 stat cards — CPU Usage (real-time gauge), Memory Usage (gauge), Disk Usage (gauge), Active Servers (count).

Charts section: Real-time CPU and Memory line charts (last 1 hour, updating live). Toggle: 1h | 6h | 24h | 7d.

Server list on this node: Table with Server Name, Owner, Game/App, Status, CPU, Memory, Actions.

Bottom: Node configuration details card — FQDN, Port, Daemon Version, Docker Version, OS Info, Last Heartbeat timestamp.
```

### Page 19 — Server List (`/dashboard/servers`)

```
Design a server list page for hosting dashboard. Dark theme.

Header: "Servers" title, search bar, filter by (Node, Status, Game), "Create Server" button.

Table columns: Server Name, Game Icon + Type, Customer, Node, Status badge, CPU, Memory, Port, Actions (console, files, power, settings icons).

Each row has a power indicator dot. Running servers have a subtle green glow on the left border.

Bulk action bar appears when checkboxes selected: "Start Selected", "Stop Selected", "Delete Selected".
```

### Page 20 — Server Detail (`/dashboard/servers/:id`)

```
Design a server detail page. Dark theme.

Header: Server name, game icon, status badge. Power buttons: Start (green), Stop (red), Restart (yellow), Kill (dark red).

Tabs: Overview | Console | Files | Logs | Settings | Schedules | Backups

Overview tab:
- Resource usage cards: CPU (23%), Memory (1.2/2 GB), Disk (3.4/10 GB), Network (in/out)
- Server info: Owner name, Node name, Egg type, Port, Docker Container ID, Created date
- Environment variables list (editable for tenant admin)
- Uptime counter
```

### Page 21 — Server Console (`/dashboard/servers/:id/console`)

```
Design a server console page. Dark theme.

Full-width terminal emulator with black background (#000), green monospace text (JetBrains Mono font). 

Top bar: Server name, status badge, connection indicator (green dot = connected).

Terminal output area: Shows server log lines with timestamps. Color-coded: white for info, yellow for warnings, red for errors.

Bottom: Command input bar with "> " prompt, send button. Keyboard shortcut hint: "Press Enter to send".

Right sidebar (collapsible): Quick stats — CPU, Memory, Players online, Uptime. Power action buttons.
```

### Page 22 — Server Files (`/dashboard/servers/:id/files`)

```
Design a file manager page. Dark theme.

Breadcrumb path bar: / > home > server > showing current directory.

Toolbar: Upload button, New File, New Folder, Search, View toggle (list/grid).

File list table: Icon (folder/file type icon), Name, Size, Last Modified, Actions (edit, rename, download, delete, compress).

File editor modal: When clicking a text file, opens a code editor (dark theme, syntax highlighting, line numbers) with Save and Cancel buttons.

Drag-and-drop upload zone when dragging files over the area.
```

### Page 23 — Create Server (`/dashboard/servers/create`)

```
Design a create server wizard. Dark theme.

Step indicator: 1. Select Game → 2. Configuration → 3. Select Node → 4. Assign Customer → 5. Review

Step 1 (shown): Grid of game/application cards with logos — Minecraft (Paper, Vanilla, Forge), CS2, Rust, Discord Bot (Node.js, Python), Custom Docker. Each card shows min requirements. Selected card has purple border glow.

Step 2: Server name input, memory slider, disk slider, CPU limit slider, port input, environment variable overrides.

Step 3: Node selector showing available nodes with remaining capacity bars.

Step 4: Customer selector dropdown, or "Create new customer" option.

Step 5: Summary card with all selections, "Create Server" button.
```

### Page 24 — Customer Management (`/dashboard/customers`)

```
Design a customer management page. Dark theme.

Header: "Customers" title, search bar, "Add Customer" button.

Table: Avatar + Name, Email, Servers Count, Status badge, Joined Date, Total Spent, Actions.

"Add Customer" modal: Name, Email, Password (auto-generate option), "Send welcome email" checkbox.

Click on customer row → expandable detail: list of their servers, recent activity, account status controls.
```

### Page 25 — Hosting Plans (`/dashboard/plans`)

```
Design a hosting plans management page. Dark theme.

Header: "Hosting Plans" — the plans you sell to customers. "Create Plan" button.

Plan cards in grid: Each shows Plan Name, Game icon, Specs (2GB RAM, 10GB Disk, 100% CPU), Price ($5/mo, $13/quarter, $48/year), Active orders count. Edit and Delete buttons.

"Create Plan" modal: Plan name, select egg dropdown, memory/disk/cpu sliders, monthly price input, quarterly/yearly price inputs, description textarea. "Save Plan" button.
```

### Page 26 — Billing & Invoices (`/dashboard/billing`)

```
Design a billing page for tenant. Dark theme.

Top: Current subscription card — Plan name (Pro), price, next billing date, status. "Manage Subscription" and "Update Payment Method" buttons.

Stats row: Total Earnings ($4,560), Commission Paid ($520), Net Earnings ($4,040), This Month ($890).

"Transaction History" table: Date, Customer, Server, Sale Amount, Commission (highlighted in red/orange), Net Amount, Status.

"Invoices" section: List of SkyNode subscription invoices with download PDF button.
```

### Page 27 — Tenant Settings (`/dashboard/settings`)

```
Design a tenant settings page. Dark theme.

Vertical tabs: Branding | Domain | Eggs & Games | Backup Storage | Account

Branding tab (shown):
- Company name input
- Logo upload (drag & drop area with preview)
- Icon/Favicon upload
- Primary color picker
- Secondary color picker
- Support email input
- Custom CSS textarea (advanced)
- Live preview card showing how the brand looks

Domain tab: Current subdomain display (slug.skynode.com), Custom domain input with DNS instructions (CNAME record), "Verify Domain" button, SSL status badge.
```

---

## 4. END CUSTOMER PANEL PAGES

### Page 28 — My Servers (`/panel`)

```
Design a customer server list page for a game hosting panel. Dark theme. Clean, simple layout — this is what end customers see.

Sidebar: Logo (tenant's branding), "My Servers", "API Keys", "Account Settings". Simple navigation.

Server cards in grid: Each card shows Server Name, Game icon and type, Status badge (Running/Stopped), IP:Port for connection, Resource bars (CPU, Memory), "Manage" button.

If server is running: green border glow. Stopped: gray. Error: red pulse animation.

Top: "My Servers" heading, server count badge.
```

### Page 29 — Server Detail (`/panel/servers/:id`)

```
Design a customer server detail page. Dark theme.

Header: Server name, game icon, status. Power buttons: Start, Stop, Restart. Connection info display: IP:Port with copy button.

Tabs: Console | Files | Logs | Settings | Backups | Schedules

Overview section at top: Resource gauges (CPU, Memory, Disk), Uptime counter, Game version, Player count (if applicable).
```

### Page 30 — Server Console (`/panel/servers/:id/console`)

```
Same as Page 21 but without the admin-specific elements. Customer version of console.

Terminal emulator, black background, monospace text. Command input at bottom. 

Simplified sidebar: Just power buttons and basic stats. No environment variable editing.
```

### Page 31 — Server Files (`/panel/servers/:id/files`)

```
Same file manager as Page 22 but customer-scoped. They can only see their server's files.

Breadcrumb, file list, upload, edit text files, create folders. Standard file manager operations.
```

### Page 32 — Server Logs (`/panel/servers/:id/logs`)

```
Design a server logs page. Dark theme.

Filter bar: Level dropdown (All, Info, Warning, Error), date range picker, search input.

Log entries list: Each entry shows timestamp, level badge (color-coded), log message text. Monospace font for log content.

Auto-scroll toggle. "Export Logs" button. Infinite scroll pagination.

Level badges: Blue for info, yellow for warn, red for error.
```

### Page 33 — API Keys (`/panel/api-keys`)

```
Design an API keys management page. Dark theme.

Header: "API Keys" title, "Generate New Key" button.

Table: Key Name, Key Prefix (sk_live_abc...), Server (which server it's scoped to), Scopes (power, console, files badges), Created Date, Expires Date, Last Used, Actions (revoke).

"Generate Key" modal: Key name input, select server dropdown, scope checkboxes (Power Actions, Console Access, File Management, Server Info), expiry date picker.

Warning alert: "API keys are shown only once after creation. Store them securely."

After creation: Modal showing the full key with copy button and "I've saved this key" confirmation.
```

### Page 34 — Account Settings (`/panel/settings`)

```
Design a simple account settings page. Dark theme.

Card sections:
1. "Profile" — Name input, Email input (read-only or changeable), "Save" button
2. "Change Password" — Current password, New password, Confirm password, "Update Password" button
3. "Two-Factor Authentication" — Enable/disable toggle, QR code display area
4. "Sessions" — List of active sessions (device, IP, last active), "Revoke All" button

Clean, minimal design. No sidebar — just centered content cards.
```

---

## 5. MODALS & POPUPS — ADMIN

### Modal A1 — Create Tenant (`/admin/tenants` → "Add Tenant" button)

```
Design a "Create Tenant" modal for SkyNode admin. Dark theme, glass morphism overlay.

Modal (560px wide) with dark backdrop blur. Header: "Add New Tenant" with X close button.

Form fields:
- Company Name input
- Admin Full Name input
- Admin Email input
- Subdomain slug input with ".skynode.com" suffix shown inline
- Plan selector (Starter / Pro / Enterprise radio cards)
- "Send welcome email" checkbox (checked by default)
- Auto-generate password toggle

Footer: "Cancel" text button, "Create Tenant" purple gradient button.

Validation: Inline error messages below each field. Slug uniqueness check with green checkmark or red X shown in real-time.
```

### Modal A2 — Suspend Tenant Confirmation

```
Design a confirmation dialog for suspending a tenant. Dark theme.

Small modal (420px). Warning icon (yellow triangle) at top.

"Suspend Tenant?" heading. Body: "This will immediately suspend all servers and block login for 'IndiaSells' and their 78 customers. This action can be reversed."

Tenant summary: Name, Active Servers (45), Customers (78).

Footer: "Cancel" outline button, "Suspend Tenant" yellow/orange button.
```

### Modal A3 — Delete Tenant Confirmation

```
Design a destructive delete confirmation modal. Dark theme.

Small modal (420px). Red danger icon at top.

"Delete Tenant Permanently?" heading. Body: "This will permanently delete 'IndiaSells', all 45 servers, 78 customer accounts, and billing history. This cannot be undone."

Type-to-confirm: "Type 'IndiaSells' to confirm" input field.

Footer: "Cancel" outline button, "Delete Permanently" red button (disabled until name is typed correctly).
```

### Modal A4 — Change Tenant Plan

```
Design a "Change Plan" modal. Dark theme.

Modal (520px). Header: "Change Plan for IndiaSells".

Current plan shown with a badge: "Pro — $79/mo".

3 plan cards (same as pricing page but smaller): Starter, Pro (current — grayed out), Enterprise. Each shows features and price. Selectable with radio.

"Effective immediately" note. Proration info: "Customer will be charged $120 prorated difference."

Footer: "Cancel", "Change Plan" purple button.
```

### Modal A5 — Create Nest

```
Design a "Create Nest" modal. Dark theme.

Modal (480px). Header: "Create New Nest".

Form fields:
- Nest Name input (e.g., "Minecraft")
- Description textarea
- Icon selector — grid of category icons (game controller, chat bubble, server rack, code brackets, globe, etc.)

Footer: "Cancel", "Create Nest" button.
```

### Modal A6 — Create Egg (Quick Create)

```
Design a "Create Egg" quick-create modal inside a nest accordion. Dark theme.

Modal (560px). Header: "Add Egg to Minecraft".

Form fields:
- Egg Name input
- Docker Image input (monospace, e.g., "ghcr.io/pterodactyl/yolks:java_17")
- Startup Command input (monospace, code-styled)
- Min Memory input (MB) with slider
- Min Disk input (MB) with slider
- Logo upload area (small drag-and-drop square)

"Advanced settings available after creation" info note.

Footer: "Cancel", "Create Egg" button.
```

### Modal A7 — Import Egg JSON

```
Design an "Import Egg" modal. Dark theme.

Modal (500px). Header: "Import Egg from JSON".

Two options shown as selectable cards:
1. "Upload JSON File" — drag-and-drop zone with file icon
2. "Paste JSON" — expandable textarea with monospace font and line numbers

Below: Preview section showing parsed egg info (name, docker image, variable count) after file is uploaded or JSON pasted. Green checkmark or red error if invalid.

Footer: "Cancel", "Import Egg" button (disabled until valid JSON detected).
```

### Modal A8 — Add Regional Discount

```
Design an "Add Regional Discount" slide-over drawer. Dark theme.

Drawer slides in from right (400px wide). Header: "Add Regional Discount" with X close.

Form fields:
- Country search dropdown with flags (searchable list of countries)
- Region Code auto-filled from selection (e.g., "IN")
- Discount Percentage — slider from 0% to 50% with number input
- Active toggle switch (default ON)

Info box: "This discount applies to all end-customer purchases where the buyer's tenant is registered in this region."

Footer: "Cancel", "Save Discount" button.
```

### Modal A9 — Admin Settings: Security Tab

```
Design the Security tab within admin settings. Dark theme.

Card sections:
1. "JWT Configuration" — Access token expiry (dropdown: 15min/30min/1h), Refresh token expiry (dropdown: 7d/14d/30d)
2. "Password Policy" — Minimum length slider (8-32), Require uppercase toggle, Require numbers toggle, Require special characters toggle
3. "Rate Limiting" — Requests per minute slider (30-300), Login attempts before lockout (3-10), Lockout duration dropdown (5min/15min/1h)
4. "Session Management" — Max concurrent sessions per user (1-10), "Revoke All Sessions" red button

Each section is a glass card with its own "Save" button.
```

### Modal A10 — Admin Settings: Email Tab

```
Design the Email tab within admin settings. Dark theme.

Card sections:
1. "Email Provider" — Provider dropdown (Resend), API Key input (masked), From Email input, From Name input, "Send Test Email" button with status indicator
2. "Email Templates" — List of template cards: Welcome Email, Password Reset, Server Created, Payment Confirmation, Suspension Notice. Each has "Preview" and "Edit" buttons
3. "Notification Rules" — Toggles for: Send email on new tenant signup, Send email on payment failure, Send email on node offline, Daily revenue summary toggle

"Send Test Email" shows inline success/error toast.
```

### Modal A11 — Admin Settings: API Tab

```
Design the API tab within admin settings. Dark theme.

Card sections:
1. "API Configuration" — Base URL display, API version display (v1), CORS allowed origins textarea
2. "Webhook Settings" — Webhook URL input, Webhook secret display (masked with copy button), "Regenerate Secret" button with confirmation, Events checklist: tenant.created, server.created, payment.captured, node.offline
3. "API Rate Limits" — Default rate limit slider, Premium rate limit slider, Burst limit slider

Info card: "Changes to API settings take effect after the next server restart."
```

### Modal A12 — Admin Settings: Maintenance Tab

```
Design the Maintenance tab within admin settings. Dark theme.

Card sections:
1. "Maintenance Mode" — Large toggle switch, "When enabled, all users except admins see a maintenance page." Scheduled maintenance: Start datetime picker, End datetime picker, Custom message textarea
2. "Database" — "Run Migrations" button, Last migration timestamp, "Export Database" button (creates pg_dump), "Cleanup Old Logs" button with retention period dropdown (7d/30d/90d)
3. "System Info" — Read-only display: Node.js version, OS, Total memory, Free disk, Uptime, Active WebSocket connections, Database pool size
```

---

## 6. MODALS & POPUPS — BUYER (TENANT)

### Modal B1 — Add Node (`/dashboard/nodes` → "Add Node" button)

```
Design an "Add Node" multi-step modal for SkyNode buyer dashboard. Dark theme.

Modal (600px). Step indicator: 1. Server Details → 2. Install Daemon → 3. Verify Connection.

Step 1: Form fields — Node Name, FQDN/IP Address input, Daemon Port (default 8443), Region dropdown with flags, Description textarea.

Step 2: Shows copy-paste instructions in a dark code block:
  "Run this on your VPS:"
  curl -sSL https://skynode.com/install.sh | bash -s -- --token=abc123 --panel=https://api.skynode.com
Token displayed with copy button. Note: "Requires root access. Supports Ubuntu 20+, Debian 11+."

Step 3: "Verify Connection" button with loading spinner. Shows: Connected ✓ (green), OS: Ubuntu 22.04, Docker: 24.0.5, Memory: 8 GB, Disk: 100 GB. Or error state with troubleshooting tips.

Footer: "Back" / "Next" / "Add Node" (final step).
```

### Modal B2 — Delete Node Confirmation

```
Design a delete node confirmation modal. Dark theme.

Modal (440px). Red warning icon.

"Delete Node 'us-east-1'?" heading. "This node has 8 running servers. All servers must be migrated or stopped before deletion."

Server summary: Running (5), Stopped (3).

Option: "Force stop all servers on this node" checkbox (unchecked, with warning text).

Footer: "Cancel", "Delete Node" red button.
```

### Modal B3 — Create Hosting Plan (`/dashboard/plans` → "Create Plan")

```
Design a "Create Hosting Plan" modal for tenant. Dark theme.

Modal (580px). Header: "Create Hosting Plan".

Form fields:
- Plan Name input
- Select Egg dropdown (shows only tenant's enabled eggs with game icons)
- Resources section: Memory slider (512MB – 16GB), Disk slider (1GB – 100GB), CPU Limit slider (50% – 400%), I/O Weight slider
- Pricing section: Monthly price input (₹), Quarterly price input, Yearly price input. "Auto-calculate quarterly/yearly" toggle (applies 5%/15% discount)
- Port count input (default 1)
- Description textarea (supports markdown)
- "Featured plan" toggle (highlights on storefront)

Footer: "Cancel", "Create Plan" button.
```

### Modal B4 — Add Customer (`/dashboard/customers` → "Add Customer")

```
Design an "Add Customer" modal. Dark theme.

Modal (480px). Header: "Add Customer".

Form fields:
- Full Name input
- Email input
- Password section: "Auto-generate" toggle (ON by default), Manual password input (hidden when auto-generate on)
- "Send welcome email with login credentials" checkbox (checked by default)

Info note: "The customer will be able to log in at your-slug.skynode.com"

Footer: "Cancel", "Create Customer" button.
```

### Modal B5 — Suspend Customer Confirmation

```
Design a suspend customer confirmation modal. Dark theme.

Modal (420px). Warning icon.

"Suspend Customer?" heading. "This will stop all servers owned by 'John Doe' and block their login access."

Impact summary: Active Servers: 3, Will be stopped: 3.

"Reason for suspension" optional textarea.

Footer: "Cancel", "Suspend Customer" yellow button.
```

### Modal B6 — Server Reinstall Confirmation

```
Design a server reinstall confirmation modal. Dark theme.

Modal (440px). Warning icon.

"Reinstall Server?" heading. "This will completely wipe the server data and reinstall from the egg template. All files, configs, and databases will be permanently deleted."

Server info: Name, Game type, Node.

Type-to-confirm: "Type 'REINSTALL' to confirm" input.

Footer: "Cancel", "Reinstall Server" red button.
```

### Modal B7 — Server Environment Variables Editor

```
Design an environment variables editor panel. Dark theme. Shown as a tab content area within server detail page.

Table of variables: Variable Name (monospace), Description, Current Value (editable input), Default Value (grayed), User Editable badge.

Each row is editable inline. Changed values highlighted with yellow left border.

"Add Custom Variable" row at bottom with name/value inputs.

"Unsaved changes" banner appears when values are modified, with "Save & Restart" and "Discard" buttons. Warning: "Server will restart to apply changes."
```

### Modal B8 — Create Server Schedule

```
Design a "Create Schedule" modal. Dark theme.

Modal (520px). Header: "Create Server Schedule".

Form fields:
- Schedule Name input
- Action dropdown: Restart Server, Stop Server, Send Command, Create Backup
- If "Send Command": Command input field (monospace)
- Cron expression builder: Visual selector for minute/hour/day/month/weekday with preview "Runs every 6 hours" human-readable text
- "Or enter cron manually" toggle → cron input (monospace)
- Active toggle (default ON)
- "Run only when server is online" checkbox

Next run preview: "Next execution: May 1, 2026 at 06:00 AM"

Footer: "Cancel", "Create Schedule" button.
```

### Modal B9 — Backup Configuration (`/dashboard/settings` → Backup Storage tab)

```
Design a backup storage configuration form. Dark theme. Shown as a tab in tenant settings.

Card: "Object Storage Configuration"
- Provider dropdown: AWS S3, Cloudflare R2, MinIO, Backblaze B2
- Endpoint URL input
- Bucket Name input
- Access Key input (masked)
- Secret Key input (masked)
- Region dropdown
- "Test Connection" button with success/error indicator

Card: "Backup Policy"
- Max backups per server slider (1–20)
- Auto-backup frequency dropdown: Disabled, Daily, Every 12h, Every 6h
- Backup retention days slider (7–90)
- Max backup size per server (GB input)

Footer: "Save Configuration" button.
```

### Modal B10 — Server Backups Tab

```
Design the Backups tab content for a server detail page. Dark theme.

Header: "Backups" title, "Create Backup" button, backup count "3/5 backups used".

Backup list cards: Each shows:
- Backup name / timestamp
- Size (245 MB)
- Status badge (completed / in_progress with spinner / failed with red)
- Created by: "Manual" or "Scheduled"
- Actions: Restore, Download, Delete icons

"Create Backup" button shows a progress bar modal during creation: "Creating backup... 45%" with cancel button.

"Restore Backup" confirmation modal: "This will stop the server and replace all files with the backup from May 1, 2026. Current data will be lost." with "Restore" red button.

Empty state: "No backups yet. Create your first backup to protect your server data." with illustration.
```

### Modal B11 — Tenant Settings: Domain Tab

```
Design the Domain tab in tenant settings. Dark theme.

Card 1: "Subdomain"
- Current subdomain display: "indiasells.skynode.com" with copy button and "Visit" link
- Note: "This is your default panel URL."

Card 2: "Custom Domain"
- Custom domain input (e.g., "panel.indiasells.com")
- DNS Instructions card (shown after entering domain):
  "Add this CNAME record to your DNS provider:"
  Table: Type: CNAME, Name: panel, Value: cname.skynode.com, TTL: 3600
- "Verify Domain" button → shows checking spinner → green "Verified ✓" or red "DNS not found — check your records"
- SSL Status: Badge showing "Active" (green) or "Pending" (yellow) or "Failed" (red)

Card 3: "Custom Panel URL"
- Preview: "Your customers will access the panel at: https://panel.indiasells.com"
```

### Modal B12 — Tenant Settings: Eggs & Games Tab

```
Design the Eggs & Games tab in tenant settings. Dark theme.

Header: "Choose which games and applications to offer your customers."

Grid of egg cards (3 columns). Each card shows:
- Game icon/logo
- Egg name (e.g., "Minecraft — Paper")
- Nest name badge (e.g., "Minecraft")
- Min requirements (512MB RAM, 1GB Disk)
- Toggle switch to enable/disable
- Custom display name input (optional override)
- Custom logo upload (small, optional)

Enabled eggs have purple border. Disabled eggs are grayed out.

Search bar at top. Filter by nest dropdown.

Counter: "12 of 24 eggs enabled"
```

---

## 7. MODALS & POPUPS — CUSTOMER PANEL

### Modal C1 — Purchase Server (Customer Storefront)

```
Design a "Purchase Server" page/flow for end customers. Dark theme with tenant branding applied.

Header: Tenant logo + "Choose Your Server"

Plan cards in grid: Each card shows:
- Game icon + name
- Plan name
- Specs: 2GB RAM, 10GB Disk, 100% CPU
- Price: ₹500/mo, ₹1,350/quarter, ₹4,800/year
- Billing period selector (Monthly/Quarterly/Yearly tabs)
- "Buy Now" purple button

Regional discount badge if applicable: "30% regional discount applied" with crossed-out original price.

After clicking "Buy Now" → Razorpay checkout modal opens (standard Razorpay UI). On success → redirect to server creation progress page.
```

### Modal C2 — Server Creation Progress

```
Design a server creation progress page. Dark theme.

Centered card (500px) showing installation steps with animated progress:

Step list with status icons:
1. ✓ Payment confirmed (green check)
2. ✓ Server allocated on node (green check)
3. ◉ Pulling Docker image... (spinning, current)
4. ○ Running install script (pending, grayed)
5. ○ Applying configuration (pending)
6. ○ Starting server (pending)

Overall progress bar: 45%

Estimated time: "~2 minutes remaining"

On completion: Confetti animation, "Your server is ready!" message, server connection info (IP:Port with copy button), "Go to Server" button.

If failed: Red error state with error message, "Contact Support" and "Retry" buttons.
```

### Modal C3 — API Key Created (Show Once)

```
Design an "API Key Created" modal. Dark theme.

Modal (500px). Green success icon.

"API Key Created Successfully" heading.

Key display area: Dark code block showing full API key "sk_live_abc123def456..." with a prominent "Copy" button. Key text is monospace, selectable.

Warning alert (yellow): "This key will only be shown once. Please copy it now and store it securely. You will not be able to view it again."

Key details: Name, Server scope, Scopes list (badges), Expires date.

"I've saved this key" checkbox → enables "Done" button.

Footer: "Done" button (disabled until checkbox checked).
```

### Modal C4 — Revoke API Key Confirmation

```
Design a revoke API key confirmation modal. Dark theme.

Small modal (400px). Warning icon.

"Revoke API Key?" heading. "Any applications using key 'My Discord Bot Key' (sk_live_abc...) will immediately lose access."

Footer: "Cancel", "Revoke Key" red button.
```

### Modal C5 — Enable Two-Factor Authentication

```
Design a 2FA setup flow modal. Dark theme.

Modal (480px). Step indicator: 1. Scan QR → 2. Verify → 3. Save Recovery Codes.

Step 1: QR code displayed (200x200) with "Scan with your authenticator app" instruction. Manual entry code shown below in monospace with copy button. Supported apps listed: Google Authenticator, Authy, 1Password.

Step 2: 6-digit code input (6 separate boxes, auto-focus next). "Verify" button.

Step 3: Recovery codes grid (8 codes in 2 columns, monospace). "Download" and "Copy All" buttons. Warning: "Store these recovery codes in a safe place. Each code can only be used once."

"I've saved my recovery codes" checkbox → enables "Done" button.
```

### Modal C6 — Server Connection Info Popup

```
Design a server connection info popup/tooltip. Dark theme.

Small floating card (350px) triggered by clicking "Connection Info" on a server card.

Shows:
- Server IP: 192.168.1.100 (copy button)
- Port: 25565 (copy button)
- Full address: 192.168.1.100:25565 (copy button, highlighted)
- Game-specific instructions: "Add this server in Minecraft → Multiplayer → Add Server"
- SFTP connection details (if applicable): Host, Port (2022), Username

"Copy Address" large button at bottom. Click-away to dismiss.
```

### Modal C7 — Revoke Session Confirmation

```
Design a revoke session confirmation modal. Dark theme.

Small modal (400px). 

"Revoke This Session?" heading. Session details: Device (Chrome on Windows), IP (192.168.1.1), Last active (2 hours ago).

"You will be logged out of this device immediately."

Footer: "Cancel", "Revoke Session" red button.

For "Revoke All": "Revoke All Sessions?" heading. "You will be logged out of all devices except this one. 4 sessions will be revoked."
```

---

## 8. TOAST NOTIFICATIONS & INLINE FEEDBACK

### Toast Styles

```
Design a toast notification system for SkyNode. Dark theme.

Toast appears top-right, stacks vertically. Auto-dismisses after 5 seconds. Slide-in animation from right.

4 variants:
1. Success (green left border, green check icon): "Server started successfully"
2. Error (red left border, red X icon): "Failed to connect to node — timeout after 10s"
3. Warning (yellow left border, yellow warning icon): "Node 'us-east-1' is running low on memory (92%)"
4. Info (blue left border, blue info icon): "Maintenance scheduled for May 5, 2AM UTC"

Each toast: Dark glass background, icon, title text (bold), description text (muted), X dismiss button. Optional action link: "View Details →".

Progress bar at bottom showing time until auto-dismiss.
```

---

## 9. EMPTY STATES

### Empty State — No Servers

```
Design an empty state for when a buyer has no servers yet. Dark theme.

Centered illustration: Stylized server rack outline with dotted lines (minimal, line-art style in purple/slate).

Heading: "No servers yet"
Subtitle: "Create your first game server to get started. Choose from Minecraft, Rust, CS2, and more."

"Create Server" purple gradient button. Below: "Need help? Read our setup guide →" link.
```

### Empty State — No Nodes

```
Design an empty state for when a buyer has no nodes connected. Dark theme.

Illustration: Cloud with a server icon and a plug/connection icon (disconnected state).

Heading: "Connect your first node"
Subtitle: "Add a VPS node to start deploying servers. You'll need root access and Docker installed."

"Add Node" button. Requirements list: "Ubuntu 20+ or Debian 11+, 2GB+ RAM, Docker installed"
```

### Empty State — No Customers

```
Design an empty state for no customers. Dark theme.

Illustration: People/users outline with a plus icon.

Heading: "No customers yet"
Subtitle: "Share your storefront link or add customers manually. They'll be able to purchase and manage their own servers."

"Add Customer" button and "Copy Storefront Link" secondary button.
```

### Empty State — No Backups

```
Design an empty state for no backups on a server. Dark theme.

Illustration: Shield or cloud-backup icon outline.

Heading: "No backups yet"
Subtitle: "Protect your server data by creating backups. You can restore anytime."

"Create Backup" button. Note: "Requires backup storage to be configured by your hosting provider."
```

### Empty State — No API Keys

```
Design an empty state for no API keys. Dark theme.

Illustration: Key icon outline with code brackets.

Heading: "No API keys"
Subtitle: "Generate API keys to programmatically control your servers. Perfect for Discord bots, automation scripts, and custom integrations."

"Generate API Key" button. "View API Documentation →" link below.
```

---

## 10. ERROR STATES & SPECIAL PAGES

### Page 35 — 404 Not Found

```
Design a 404 page for SkyNode. Dark theme.

Centered layout. Large "404" text in gradient (purple to blue), slightly transparent.

Heading: "Page not found"
Subtitle: "The page you're looking for doesn't exist or has been moved."

"Back to Dashboard" button and "Go Home" link.

Subtle floating particles or grid animation in background.
```

### Page 36 — 500 Internal Error

```
Design a 500 error page. Dark theme.

Centered layout. Warning/alert icon in red.

Heading: "Something went wrong"
Subtitle: "We're having trouble processing your request. Please try again in a moment."

"Try Again" button and "Contact Support" link.

Show error reference ID: "Error ID: ERR-2026-04-30-abc123" in small monospace text.
```

### Page 37 — Maintenance Mode

```
Design a maintenance mode page. Dark theme.

Centered layout. Wrench/gear icon with subtle rotation animation.

Heading: "We'll be right back"
Subtitle: "SkyNode is undergoing scheduled maintenance. Your servers are still running."

If scheduled end time: "Expected back at: 2:30 AM UTC"

Progress bar or animated dots. "Follow @SkyNode for updates" with social links.

Email subscription: "Get notified when we're back" input + "Notify Me" button.
```

### Page 38 — Tenant Suspended Page

```
Design a tenant suspended page. Dark theme.

Centered layout. Red/orange warning icon.

Heading: "Account Suspended"
Subtitle: "Your hosting account has been suspended. This may be due to a billing issue or a terms of service violation."

Info card: Reason (if provided), Suspended since date, Support contact.

"Contact Support" button, "Update Payment Method" secondary button (if billing issue).
```

### Page 39 — Password Reset (`/reset-password/:token`)

```
Design a password reset page. Dark theme, centered.

Glass card (440px). SkyNode logo. "Set New Password" heading.

Form fields: New Password input with strength indicator (weak/medium/strong bar), Confirm Password input.

Password requirements list with real-time check/X icons: 8+ characters, uppercase letter, number, special character.

"Reset Password" button. "Back to login" link.

Success state: Green check, "Password reset successfully! Redirecting to login..." with auto-redirect.
```

### Page 40 — Email Verification (`/verify-email/:token`)

```
Design an email verification page. Dark theme, centered.

Loading state: Spinner with "Verifying your email..." text.

Success state: Green check animation, "Email verified!" heading, "Your account is now active. You can start setting up your hosting business." subtitle, "Go to Dashboard" button.

Error state: Red X icon, "Verification link expired" heading, "This link has expired or is invalid." subtitle, "Resend verification email" button.
```

### Page 41 — Customer Storefront/Landing (`/:tenant-slug` or custom domain)

```
Design a tenant-branded storefront landing page. Dark theme but with tenant's custom accent color applied.

Navbar: Tenant logo (from branding), tenant name, "Login" and "Sign Up" buttons.

Hero section: "[Tenant Name] Game Hosting" heading, "Premium game servers starting at ₹X/mo" subtitle, "View Plans" button.

Plans section: Grid of hosting plan cards (from tenant's configured plans). Each shows game icon, plan name, specs, price, "Order Now" button.

Features section: "Why Choose [Tenant Name]?" — cards for: Instant Setup, 24/7 Uptime, DDoS Protection, Full File Access.

Footer: Powered by SkyNode (small, subtle), tenant's support email, terms links.

Design should respect tenant branding colors — primary color from branding config tints buttons and accents.
```

---

## 11. POWER ACTION STATES & INLINE INTERACTIONS

### Component — Power Buttons & States

```
Design power action button states for server management. Dark theme.

Button group with 4 buttons: Start (green), Stop (red/gray), Restart (amber), Kill (dark red).

States for each button:
- Default: Solid color, icon + label
- Hover: Slight glow, brightness increase
- Active/Loading: Spinner replaces icon, disabled state, "Starting..." text
- Disabled: Grayed out with tooltip "Server is already running"

After clicking Stop/Kill: Inline confirmation appears below buttons: "Are you sure? This will disconnect all players." with "Confirm" and "Cancel" mini-buttons. 3-second countdown on Confirm.

Status transition animation: Badge smoothly transitions from "Running" (green pulse) → "Stopping..." (yellow pulse) → "Stopped" (gray).
```

### Component — Real-Time Resource Gauges

```
Design real-time resource gauge components. Dark theme.

3 circular gauge charts side by side:
- CPU: 67% (gradient green-to-yellow based on value)
- Memory: 1.2 / 2.0 GB (gradient blue-to-purple)
- Disk: 3.4 / 10 GB (solid blue)

Each gauge: Circular arc (270°), current value in center (large), label below, percentage, actual value below label.

Color coding: 0-60% green, 60-80% yellow, 80-100% red.

Subtle pulse animation when values update. Small trend arrow (↑↓) showing direction.
```

### Component — File Editor Modal

```
Design a file editor modal overlay. Dark theme.

Full-screen overlay (90% viewport). Header: File path breadcrumb, file size, last modified, "Save" (Ctrl+S hint) and "Close" buttons.

Editor area: Dark code editor (Monaco-style) with:
- Line numbers (gutter, slightly muted)
- Syntax highlighting (YAML, JSON, properties, shell detected by file extension)
- Current line highlight
- Minimap on right side
- Tab with filename

Bottom status bar: Line/Column indicator, file encoding (UTF-8), language mode, "Modified" indicator with dot.

Unsaved changes: "Save" button gets purple glow. Close shows "Unsaved changes" confirmation.
```

### Component — Upload Progress Overlay

```
Design a file upload progress overlay. Dark theme.

Shown when files are dragged or upload button clicked.

Drag state: Full file manager area gets dashed purple border with "Drop files here" text and upload icon.

Upload progress: Slide-up panel at bottom showing:
- Each file: filename, size, progress bar (purple), percentage, cancel X button
- Overall: "Uploading 3 files (45%)" header
- Completed files: Green check
- Failed files: Red X with "Retry" button

"Cancel All" link at bottom.
```

---

## 12. MISSING SERVER DETAIL TABS — BUYER

### Tab B-T1 — Server Schedules Tab (`/dashboard/servers/:id` → Schedules tab)

```
Design the Schedules tab on a server detail page for tenant admins. Dark theme.

Header: "Scheduled Tasks" title, "Create Schedule" purple button.

Schedule cards list. Each card shows:
- Schedule name
- Action badge: "Restart" (amber), "Stop" (red), "Command" (blue), "Backup" (green)
- Cron expression in monospace + human-readable text: "*/6 * * *" → "Every 6 hours"
- Next execution: "May 1, 2026 at 06:00 AM"
- Last run: "Apr 30, 2026 at 12:00 PM" with status badge (success/failed)
- Active toggle switch
- Edit (pencil) and Delete (trash) icons

Empty state: "No scheduled tasks. Create automated restarts, backups, or commands."
```

### Tab B-T2 — Server Settings Tab (`/dashboard/servers/:id` → Settings tab)

```
Design the Settings tab on a server detail page for tenant admins. Dark theme.

Card 1: "General"
- Server Name input (editable)
- Server Description textarea
- Docker Image display (read-only, from egg)
- Egg Type display (read-only badge)
- "Save Changes" button

Card 2: "Resource Limits"
- Memory limit slider (current: 2GB, max based on node)
- Disk limit slider (current: 10GB)
- CPU limit slider (current: 100%)
- I/O weight slider
- Swap slider
- "Save & Restart Required" button

Card 3: "Startup"
- Startup command display (monospace, from egg, read-only)
- Startup command override input (optional, monospace)
- "Override resets on reinstall" warning note

Card 4: "Danger Zone" (red border)
- "Reinstall Server" button with warning text
- "Suspend Server" toggle with reason input
- "Transfer Server" button (move to different node) — opens node selector
- "Delete Server" button (red) with type-to-confirm
```

### Tab B-T3 — Server Logs Tab (`/dashboard/servers/:id` → Logs tab)

```
Design the Logs tab on a server detail page for tenant admins. Dark theme.

Filter bar: Level dropdown (All / Info / Warning / Error / Debug), date range picker, search input, "Auto-refresh" toggle (updates every 5s), "Export Logs" button.

Log entries displayed in a scrollable list with monospace font:
- Each entry: Timestamp (muted, small), Level badge (Info=blue, Warn=yellow, Error=red, Debug=gray), Log message text
- Error entries highlighted with subtle red left border
- Clickable to expand full stack trace if available

Pagination: "Load older logs" button at top (reverse chronological). Log count: "Showing 100 of 2,847 logs"

Real-time indicator: Green dot with "Live" label when auto-refresh is on. New logs slide in from top with subtle animation.
```

---

## 13. MISSING CUSTOMER PANEL TABS & PAGES

### Tab C-T1 — Customer Server Schedules (`/panel/servers/:id` → Schedules tab)

```
Design the Schedules tab for customer server detail page. Dark theme. Simplified version of buyer's schedule tab.

Header: "Scheduled Tasks", "Create Schedule" button.

Schedule list: Same as buyer version but fewer action options — only "Restart Server", "Send Command" available (no "Stop" or "Backup" for customers unless tenant allows it).

Each schedule card: Name, Action badge, Cron human-readable, Next run, Active toggle, Edit/Delete.

Note: "Schedules run automatically. Contact support if you need additional task types."
```

### Tab C-T2 — Customer Server Backups (`/panel/servers/:id` → Backups tab)

```
Design the Backups tab for customer server detail page. Dark theme.

Header: "Backups", "Create Backup" button, usage counter: "2/5 backups used".

Backup cards: Same as buyer backup tab (B10) but customer cannot change backup policy — just create, restore, download, delete.

Each backup: Name/timestamp, size, status badge, "Manual" or "Auto" label, Restore/Download/Delete actions.

Progress state when creating: "Creating backup... 67%" progress bar.

Empty state: "No backups yet. Create a backup to protect your server data."
```

### Tab C-T3 — Customer Server Settings (`/panel/servers/:id` → Settings tab)

```
Design a simplified settings tab for customer server detail. Dark theme.

Card 1: "Server Info" (read-only)
- Server Name, Game Type, Node, IP:Port, Created Date
- All fields read-only display (customers cannot rename servers)

Card 2: "Startup Parameters" (editable if egg allows)
- Only "user_editable" environment variables shown as form inputs
- Each variable: Name label, description, input field, default value hint
- "Save & Restart" button with warning: "Server will restart to apply changes"

Card 3: "Connection Details"
- Server Address: IP:Port with copy button
- SFTP Host: IP with copy button
- SFTP Port: 2022 with copy button
- SFTP Username: server UUID with copy button
- "How to connect" expandable guide per game type

Note: No danger zone for customers — they cannot reinstall, suspend, or delete.
```

### Page 42 — Customer Registration (`/:tenant-slug/register` or custom domain)

```
Design a customer registration page with tenant branding. Dark theme with tenant's accent color.

Centered glass card (480px). Tenant logo at top (from branding config), tenant company name.

"Create your account" heading. "Join [Tenant Name] to manage your game servers" subtitle.

Form fields: Full Name, Email, Password, Confirm Password.

"Terms of Service" and "Privacy Policy" checkbox links.

"Create Account" button in tenant's primary color.

"Already have an account? Sign in" link.

Footer: "Powered by SkyNode" small text.
```

### Page 43 — Customer Order History (`/panel/orders`)

```
Design an order/purchase history page for end customers. Dark theme.

Header: "My Orders"

Table: Order ID, Server Name, Plan Name, Amount Paid, Payment Method, Date, Status badge (Paid/Pending/Failed/Refunded).

Click on row → expandable detail showing: Razorpay Payment ID, billing period, server specs, receipt download link.

"Browse Plans" button at top if they want to buy another server.

Empty state: "No orders yet. Purchase a server to get started."
```

---

## 14. MISSING ADMIN MODALS

### Modal A13 — Edit Nest

```
Design an "Edit Nest" modal. Dark theme.

Modal (480px). Header: "Edit Nest — Minecraft".

Same form fields as Create Nest (A5) but pre-filled: Name, Description, Icon selector (current icon highlighted).

Egg count display: "This nest contains 6 eggs"

Footer: "Cancel", "Save Changes" button.
```

### Modal A14 — Delete Nest Confirmation

```
Design a delete nest confirmation. Dark theme.

Small modal (420px). Red danger icon.

"Delete Nest 'Minecraft'?" heading. "This will delete the nest and all 6 eggs inside it. Tenants using these eggs will lose access. Active servers will not be affected but cannot be reinstalled."

Warning box listing affected eggs: Paper, Vanilla, Forge, Spigot, Bungeecord, Waterfall.

Footer: "Cancel", "Delete Nest & All Eggs" red button.
```

### Modal A15 — Delete Egg Confirmation

```
Design a delete egg confirmation. Dark theme.

Small modal (400px). Red danger icon.

"Delete Egg 'Paper'?" heading. "Tenants using this egg will no longer be able to create servers with it. 12 existing servers use this egg."

Impact: "12 servers affected — existing servers will continue running but cannot be reinstalled."

Footer: "Cancel", "Delete Egg" red button.
```

### Modal A16 — Edit Discount

```
Design an "Edit Regional Discount" drawer. Dark theme.

Same layout as Add Discount (A8) but pre-filled. Drawer from right (400px).

Country shown (read-only, with flag): India 🇮🇳
Region Code: IN (read-only)
Discount Percentage slider: currently 30%
Active toggle: currently ON

Usage stats: "This discount has been applied to 45 purchases totaling ₹12,400 in savings."

Footer: "Cancel", "Save Changes" button.
```

### Modal A17 — Subscription Detail Expansion

```
Design an expandable subscription detail row. Dark theme. This is what shows when clicking a row in the Subscription Management table.

Expanded section below the table row with 3 columns:

Column 1: "Subscription Details"
- Razorpay Subscription ID (monospace, copy button)
- Plan: Pro ($79/mo)
- Status: Active (green badge)
- Created: Jan 15, 2026
- Current period: Apr 1 – Apr 30, 2026

Column 2: "Payment History" (last 5 payments)
- Mini table: Date, Amount, Status (Paid/Failed), Razorpay Payment ID

Column 3: "Plan Changes"
- Timeline: "Upgraded from Starter → Pro" (Mar 2026), "Started Starter plan" (Jan 2026)

Actions row: "Cancel Subscription" red link, "Change Plan" link, "View in Razorpay" external link.
```

### Modal A18 — Unsuspend Tenant Confirmation

```
Design an unsuspend confirmation. Dark theme.

Small modal (400px). Green/blue info icon.

"Unsuspend Tenant?" heading. "This will restore access for 'IndiaSells' and their 78 customers. All servers will remain in their current state (stopped servers will not auto-start)."

"Send notification email to tenant" checkbox (checked by default).

Footer: "Cancel", "Unsuspend Tenant" green button.
```

### Modal A19 — Edit Tenant

```
Design an "Edit Tenant" modal. Dark theme.

Modal (520px). Header: "Edit Tenant — IndiaSells".

Form fields (pre-filled):
- Company Name
- Admin Email (read-only, shown as display)
- Subdomain slug input with ".skynode.com" suffix (read-only if custom domain active)
- Status dropdown: Active / Suspended
- Notes textarea (admin-only internal notes)

Footer: "Cancel", "Save Changes" button.

Note: Plan changes use the separate "Change Plan" modal (A4).
```

---

## 15. MISSING BUYER MODALS

### Modal B13 — Edit Node

```
Design an "Edit Node" modal. Dark theme.

Modal (520px). Header: "Edit Node — us-east-1".

Form fields (pre-filled):
- Node Name
- FQDN/IP Address (warning: "Changing this may disconnect the daemon")
- Daemon Port
- Region dropdown
- Description textarea

Connection status indicator: "Connected ✓" (green) or "Disconnected ✗" (red) with last heartbeat timestamp.

"Re-verify Connection" button.

Footer: "Cancel", "Save Changes" button.
```

### Modal B14 — Edit Hosting Plan

```
Design an "Edit Hosting Plan" modal. Dark theme.

Same layout as Create Plan (B3) but pre-filled.

Modal (580px). Header: "Edit Plan — Minecraft Starter".

All fields editable: Name, Egg (cannot change if active orders exist — shown with warning), Resources (Memory/Disk/CPU), Pricing (Monthly/Quarterly/Yearly), Description, Featured toggle.

Active orders count: "23 customers are currently on this plan"

Warning if changing specs: "Changing resource limits will not affect existing servers. Only new servers will use updated limits."

Footer: "Cancel", "Save Changes" button.
```

### Modal B15 — Delete Hosting Plan Confirmation

```
Design a delete plan confirmation. Dark theme.

Small modal (420px). Warning icon.

"Delete Plan 'Minecraft Starter'?" heading. "This plan has 23 active customers. They will keep their existing servers, but no new orders can be placed."

Option: "Archive instead of delete" radio (recommended) vs "Delete permanently" radio.

Footer: "Cancel", "Delete Plan" red button.
```

### Modal B16 — Edit Customer

```
Design an "Edit Customer" modal. Dark theme.

Modal (480px). Header: "Edit Customer — John Doe".

Form fields (pre-filled):
- Full Name
- Email
- Status dropdown: Active / Suspended
- "Reset Password" button (sends reset email)

Server summary: "Owns 3 servers (2 running, 1 stopped)"

Footer: "Cancel", "Save Changes" button.
```

### Modal B17 — Delete Customer Confirmation

```
Design a delete customer confirmation. Dark theme.

Modal (440px). Red danger icon.

"Delete Customer 'John Doe'?" heading. "This will permanently delete the customer account. Their 3 servers will be stopped and deleted."

Server impact list:
- Minecraft-1 (Running) → Will be stopped & deleted
- Rust-2 (Running) → Will be stopped & deleted
- Bot-1 (Stopped) → Will be deleted

Type-to-confirm: "Type 'DELETE' to confirm"

Footer: "Cancel", "Delete Customer & Servers" red button.
```

### Modal B18 — Delete Server Confirmation

```
Design a delete server confirmation. Dark theme.

Modal (440px). Red danger icon.

"Delete Server 'MC-Server-1'?" heading. "This will permanently stop and delete the server container, all files, and all backups."

Server info: Name, Game type, Owner, Node, 2 backups.

"This action cannot be undone."

Type-to-confirm: "Type the server name to confirm" input.

Footer: "Cancel", "Delete Server" red button.
```

### Modal B19 — Suspend Server

```
Design a suspend server modal. Dark theme.

Modal (440px). Yellow warning icon.

"Suspend Server?" heading. "The server will be stopped and the customer will be unable to start it or access the console. Files remain intact."

Server info: Name, Owner, Current status.

"Reason for suspension" textarea (optional, visible to customer).

"Send email notification to customer" checkbox (checked).

Footer: "Cancel", "Suspend Server" yellow button.
```

### Modal B20 — Unsuspend Server

```
Design an unsuspend server modal. Dark theme.

Small modal (400px). Green info icon.

"Unsuspend Server?" heading. "The customer will regain full access to manage and start the server."

"Send email notification" checkbox (checked).

Footer: "Cancel", "Unsuspend Server" green button.
```

### Modal B21 — Edit Schedule

```
Design an "Edit Schedule" modal. Dark theme.

Same layout as Create Schedule (B8) but pre-filled.

Modal (520px). Header: "Edit Schedule — Daily Restart".

All fields pre-filled and editable: Name, Action, Cron, Active toggle.

Execution history: Mini table showing last 5 runs — Timestamp, Status (success ✓ / failed ✗), Duration.

Footer: "Cancel", "Save Changes" button.
```

### Modal B22 — Delete Schedule Confirmation

```
Design a delete schedule confirmation. Dark theme.

Small modal (380px). Warning icon.

"Delete Schedule?" heading. "'Daily Restart' will be permanently deleted. The server will no longer auto-restart every 6 hours."

Footer: "Cancel", "Delete Schedule" red button.
```

### Modal B23 — Transfer Server to Different Node

```
Design a "Transfer Server" modal. Dark theme.

Modal (520px). Header: "Transfer Server to Different Node".

Current node display: "us-east-1" with resource usage bars.

Available nodes list: Radio selection of other nodes. Each shows:
- Node name, region flag, status badge
- Available resources: Memory (2.4 GB free), Disk (38 GB free), CPU
- Server count

Warning: "The server will be stopped during transfer. Estimated downtime: 5-15 minutes depending on file size."

Progress (shown during transfer): Step indicators — Stop → Export files → Transfer → Import → Start

Footer: "Cancel", "Transfer Server" button.
```

### Modal B24 — Bulk Server Actions Bar

```
Design a bulk action toolbar for server list. Dark theme.

Shown as a floating bar at bottom of screen when 1+ server checkboxes are selected.

Left: "3 servers selected" with "Clear" link.

Action buttons: "Start All" (green), "Stop All" (red), "Restart All" (amber), "Delete Selected" (red outline).

Confirmation for bulk actions: "Stop 3 servers?" mini-modal with server list preview and "Confirm" button.

Smooth slide-up animation when bar appears. Slide-down when cleared.
```

---

## 16. MISSING CUSTOMER PANEL MODALS

### Modal C8 — Delete Backup Confirmation

```
Design a delete backup confirmation. Dark theme.

Small modal (380px). Warning icon.

"Delete Backup?" heading. "'Backup_2026-04-30' (245 MB) will be permanently deleted from storage."

"This action cannot be undone."

Footer: "Cancel", "Delete Backup" red button.
```

### Modal C9 — Customer Edit Schedule

```
Design an edit schedule modal for customers. Dark theme.

Same as B21 but simplified — fewer action options (only Restart, Send Command).

Modal (480px). Header: "Edit Schedule".

Pre-filled fields: Name, Action, Cron builder, Active toggle.

Footer: "Cancel", "Save Changes" button.
```

### Modal C10 — Customer Delete Schedule Confirmation

```
Same as B22 but customer-scoped. Small confirmation modal.

"Delete Schedule?" heading. "This scheduled task will be removed."

Footer: "Cancel", "Delete" red button.
```

### Modal C11 — Customer Password Changed Success

```
Design a password change success notification state. Dark theme.

Inline success message within the Account Settings page after updating password:

Green success banner at top of the "Change Password" card: Check icon, "Password updated successfully. All other sessions have been logged out."

Auto-dismiss after 5 seconds. Fade-out animation.
```

---

## 17. REUSABLE LAYOUT COMPONENTS

### Component — Sidebar Navigation

```
Design a sidebar navigation component for SkyNode. Dark theme.

Width: 260px (expanded), 72px (collapsed). Toggle button at bottom to collapse/expand.

Top: SkyNode logo (full in expanded, icon-only in collapsed). Tenant branding override — shows tenant's logo if in tenant context.

Navigation items with Lucide icons + labels:
Admin sidebar: Dashboard, Tenants, Nests & Eggs, Revenue, Discounts, Analytics, Subscriptions, Settings
Buyer sidebar: Overview, Nodes, Servers, Customers, Plans, Billing, Settings
Customer sidebar: My Servers, API Keys, Settings

Active item: Purple left border + purple background highlight. Hover: Subtle slate hover.

Bottom: User info section — Avatar (initials or image), Name, Role badge. Click opens dropdown: Profile, Theme toggle, Logout.

Collapsed state: Only icons visible, tooltip on hover showing label. Active indicator is just the purple left border.

Smooth slide transition when collapsing/expanding.
```

### Component — Top Navbar

```
Design a top navbar component. Dark theme.

Height: 64px. Positioned to the right of sidebar.

Left: Breadcrumb trail — "Dashboard > Servers > MC-Server-1" (clickable segments).

Center/Right:
- Search button (opens command palette) with "⌘K" shortcut hint
- Notification bell icon with red badge count (3)
- User avatar dropdown

Mobile: Hamburger menu icon (opens sidebar as overlay), logo centered, user avatar right.
```

### Component — Notification Dropdown

```
Design a notification dropdown panel. Dark theme.

Triggered by bell icon in navbar. Panel (380px wide) slides down from top-right.

Header: "Notifications" title, "Mark all read" link, filter tabs: All | Alerts | System.

Notification list (scrollable):
- Each item: Icon (server/node/payment/system), Title, Description, Timestamp ("2 min ago"), Unread dot (purple)
- Types: "Server 'MC-1' crashed" (red icon), "Node heartbeat restored" (green), "Payment received ₹500" (blue), "Backup completed" (green)
- Click navigates to relevant page

Footer: "View all notifications" link.

Empty state: Bell icon, "No new notifications"
```

### Component — Search Command Palette

```
Design a command palette / search overlay. Dark theme.

Full-screen overlay with centered modal (600px wide). Triggered by ⌘K or search button.

Search input at top (large, autofocused): "Search servers, nodes, customers..." placeholder.

Results grouped by category:
- Servers: Server name, game icon, status badge, node name
- Nodes: Node name, region, status
- Customers: Name, email, server count
- Actions: "Create Server", "Add Node", "View Billing" (shortcut actions)

Keyboard navigation: Arrow keys to navigate, Enter to select, Esc to close.

Recent searches section shown when input is empty.

Highlight matching text in results. Fast, instant search as you type.
```

### Component — Data Table with Pagination

```
Design a reusable data table component. Dark theme.

Features:
- Column headers: Sortable (click to toggle asc/desc, arrow indicator), resizable
- Rows: Alternating subtle opacity, hover highlight with slate background
- Row selection: Checkbox column, bulk actions bar appears when selected
- Expandable rows: Click chevron to expand detail section below row

Filter bar above table: Search input, filter dropdowns (vary by table), "Columns" dropdown to show/hide columns.

Pagination footer: "Showing 1-10 of 247 results", rows per page dropdown (10/25/50/100), page navigation (First, Prev, Page numbers, Next, Last).

Loading state: Skeleton rows (pulsing gray placeholder blocks).

Empty state: Centered message within table body area.
```

### Component — Loading Skeletons

```
Design loading skeleton states for SkyNode UI elements. Dark theme.

Skeleton shapes match the layout of actual content:
- Stat cards: Rounded rectangle skeleton (gray pulse) for number, smaller for label, tiny for sparkline
- Table rows: Row of varying-width rectangles for each column
- Chart area: Large rectangle skeleton
- Sidebar: Column of small rectangles with circle for avatar
- Card grid: Grid of card-shaped rounded rectangles

Pulse animation: Subtle gradient sweep from left to right (dark → slightly lighter → dark). Repeating every 1.5s.

Show for minimum 300ms to avoid flicker. Transition smoothly to real content with fade-in.
```

### Component — Date Range Picker

```
Design a date range picker component. Dark theme.

Trigger: Button showing "Apr 1 – Apr 30, 2026" with calendar icon.

Dropdown panel (540px): Two month calendars side by side (current and next month). Click start date, click end date to select range. Selected range highlighted in purple.

Preset buttons on left side: Today, Last 7 days, Last 30 days, This month, Last month, This quarter, This year, Custom.

Footer: "Cancel" and "Apply" buttons.

Time picker option (toggle): When enabled, adds hour/minute selectors below each date.
```

### Component — Confirmation Dialog (Reusable)

```
Design a reusable confirmation dialog system. Dark theme.

3 variants:

1. Info confirm: Blue icon, neutral actions. "Are you sure?" with "Cancel" / "Confirm" buttons.

2. Warning confirm: Yellow icon, caution styling. Impact summary. "Cancel" / action button in yellow.

3. Destructive confirm: Red icon, danger styling. Impact summary, optional type-to-confirm input. "Cancel" / action button in red (disabled until confirmed).

All variants: Dark glass backdrop, centered modal (400-440px), close on Escape, close on backdrop click (except destructive). Smooth scale-in animation.
```

---

## 18. MISSING EMPTY STATES

### Empty State — No Schedules

```
Design an empty state for no scheduled tasks on a server. Dark theme.

Illustration: Clock/calendar icon outline with a plus icon.

Heading: "No scheduled tasks"
Subtitle: "Automate your server with scheduled restarts, backups, and commands."

"Create Schedule" button. "Learn about cron expressions →" link.
```

### Empty State — No Logs

```
Design an empty state for no logs. Dark theme.

Illustration: Document/scroll icon outline.

Heading: "No logs yet"
Subtitle: "Server logs will appear here once the server has been started."

"Start Server" button if server is stopped.
```

### Empty State — No Transactions

```
Design an empty state for no transaction history. Dark theme.

Illustration: Receipt/invoice icon outline.

Heading: "No transactions yet"
Subtitle: "Transaction history will appear here when customers make purchases."

"View Hosting Plans" secondary link.
```

### Empty State — No Tenants (Admin)

```
Design an empty state for no tenants on the admin panel. Dark theme.

Illustration: Building/company icon outline.

Heading: "No tenants yet"
Subtitle: "Add your first tenant to start managing their hosting business."

"Add Tenant" button.
```

### Empty State — No Orders (Customer)

```
Design an empty state for no orders on the customer panel. Dark theme.

Illustration: Shopping cart icon outline.

Heading: "No orders yet"
Subtitle: "Browse available hosting plans to purchase your first server."

"Browse Plans" button.
```

---

## 19. TENANT PROFILE & ACCOUNT PAGES

### Page 44 — Buyer Account/Profile (`/dashboard/account`)

```
Design a buyer account settings page. Dark theme with sidebar.

Card 1: "Personal Info"
- Full Name input
- Email input (verified badge ✓)
- Phone number input (optional)
- "Save Changes" button

Card 2: "Company Info"
- Company name (read-only — change in Branding settings)
- Current Plan badge with "Manage Subscription →" link
- Member since date

Card 3: "Security"
- "Change Password" section: Current, New, Confirm inputs, "Update" button
- "Two-Factor Authentication" section: Enable toggle, setup flow
- "Active Sessions" list with device/IP/time, "Revoke" per-session, "Revoke All" button

Card 4: "Danger Zone"
- "Delete Account" button with warning: "This will cancel your subscription and delete all nodes, servers, customers, and data. This is irreversible."
```

### Page 45 — Admin Account/Profile (`/admin/account`)

```
Design an admin account settings page. Dark theme with sidebar.

Card 1: "Admin Profile"
- Full Name input
- Email input
- "Save Changes" button

Card 2: "Security"
- Change Password section
- Two-Factor Authentication section
- Active Sessions list

Card 3: "Admin API Key"
- "Your Admin API Key" — masked display with copy and regenerate buttons
- Scopes: Full admin access
- Warning: "This key has unrestricted access. Keep it secure."
```

---

## 20. UI PRIMITIVE COMPONENTS (`components/ui/`)

### Component — Button

```
Design a Button component system for SkyNode. Dark theme.

Variants (each shown in a row):
1. Primary: Purple gradient (#6366f1 → #8b5cf6), white text. Hover: brighter glow. Active: pressed scale(0.98).
2. Secondary: Slate-700 background, white text. Hover: slate-600.
3. Danger: Red-600 background. Hover: red-500.
4. Outline: Transparent with slate-500 border, white text. Hover: slate-700 fill.
5. Ghost: Transparent, no border, white text. Hover: slate-800 fill.
6. Link: No background, purple underline text.

Sizes: sm (32px h, 12px text), md (40px h, 14px text), lg (48px h, 16px text).

States: Default, Hover (glow/brightness), Active (scale down), Disabled (40% opacity, no pointer), Loading (spinner icon replaces text, disabled).

All: 12px border-radius, 16px/24px horizontal padding, Inter font, smooth 150ms transitions. Icon support (left or right of label).
```

### Component — Input

```
Design an Input component system for SkyNode. Dark theme.

Base: Slate-800 background, slate-500 border, white text, 12px radius, 40px height. Placeholder text in slate-500.

States:
- Default: Slate-500 border
- Focus: Purple-500 border with purple glow ring (2px)
- Error: Red-500 border with red glow, error message text below in red
- Disabled: Slate-900 background, 50% opacity
- Success: Green-500 border with green check icon

Variants:
1. Text input with optional left icon (mail, lock, search, user)
2. Password input with eye toggle icon (show/hide)
3. Search input with magnifying glass icon and X clear button
4. Number input with +/- stepper buttons
5. Textarea: Same styling, resizable, with optional character count

Labels: Above input in slate-300, 14px. Required fields show red * asterisk. Helper text below in slate-500, 12px.
```

### Component — Badge

```
Design a Badge component for SkyNode. Dark theme.

Variants (color + label):
- Success: Green-900 bg, green-400 text, green-500 border — "Online", "Active", "Paid"
- Danger: Red-900 bg, red-400 text — "Offline", "Suspended", "Failed"
- Warning: Yellow-900 bg, yellow-400 text — "Warning", "Past Due", "Stopping"
- Info: Blue-900 bg, blue-400 text — "Info", "Installing", "Pending"
- Purple: Purple-900 bg, purple-400 text — "Pro", "Admin", "Featured"
- Neutral: Slate-700 bg, slate-300 text — "Stopped", "Draft"

Sizes: sm (20px h, 10px text), md (24px h, 12px text).

Optional: Dot indicator (small circle before text), dismiss X button, count number.

All: Pill shape (full radius), 8px/12px padding, uppercase 10px letter-spacing for sm.
```

### Component — Card

```
Design a Card component for SkyNode. Dark theme.

Base card: Slate-800/50 background with backdrop-blur, 1px slate-700 border, 16px border-radius, 24px padding. Subtle shadow.

Variants:
1. Default: Standard glass card
2. Stat card: Icon (top-left, colored circle bg), large number (28px, white), label (14px, slate-400), optional sparkline chart (bottom), optional trend arrow (green ↑ or red ↓ with percentage)
3. Interactive card: Hover lifts (translateY -2px) with border color change to purple. Click navigates. Cursor pointer.
4. Selectable card: Radio-style — unselected has slate-700 border, selected has purple-500 border with purple glow
5. Danger card: Red-900/20 background, red-800 border — used for "Danger Zone" sections

Header/Body/Footer sections with proper spacing. Collapsible variant with chevron toggle.
```

### Component — Modal

```
Design a Modal component for SkyNode. Dark theme.

Backdrop: Black 60% opacity with backdrop-blur(8px). Click backdrop to close (except destructive modals).

Modal container: Slate-800 background, 1px slate-700 border, 16px radius, centered vertically. Widths: sm (400px), md (520px), lg (640px), xl (800px), full (90vw).

Header: Title (18px, white, bold), X close button (top-right). Optional subtitle below title.

Body: Scrollable if content exceeds 60vh. 24px padding.

Footer: Right-aligned buttons. "Cancel" (ghost/outline), primary action (gradient/danger). 16px top border in slate-700.

Animations: Scale from 0.95 + fade in (150ms ease-out). Backdrop fades in. Close: reverse.

Keyboard: Esc to close, Tab traps focus within modal. Focus first interactive element on open.
```

### Component — Table

```
Design a Table component for SkyNode. Dark theme.

Header row: Slate-700/50 background, slate-400 text (12px, uppercase, letter-spacing). Sortable columns show arrow icon. Click to toggle sort.

Body rows: Transparent background, 1px slate-700/50 bottom border. Hover: slate-800/50 background. Height: 52px.

Cells: 14px text, white. Left-aligned for text, right-aligned for numbers. Truncate with ellipsis if overflow.

Features: Checkbox column (leftmost), expandable row (click chevron to expand detail panel below), action column (rightmost, icon buttons).

Selection: Selected rows get purple-900/20 background with purple left border.

Responsive: Horizontal scroll on mobile with sticky first column.
```

### Component — Tabs

```
Design a Tabs component for SkyNode. Dark theme.

Variants:
1. Underline tabs: Horizontal row, slate-400 text, active tab has white text + purple-500 underline (2px, animated slide). Hover: white text.
2. Pill tabs: Rounded pill buttons in a row. Inactive: slate-700 bg. Active: purple-600 bg, white text. Smooth background slide animation.
3. Vertical tabs: Stacked vertically (used in Settings). Active: purple left border + slate-800 bg.

Tab content area below with smooth fade transition between panels. Lazy-load tab content.

Badge support on tabs: "Alerts (3)" with count badge. Disabled tabs: 50% opacity, no pointer.
```

### Component — Dropdown

```
Design a Dropdown/Select component for SkyNode. Dark theme.

Trigger: Same as Input styling — slate-800 bg, slate-500 border, chevron-down icon right. Shows selected value.

Dropdown panel: Slate-800 bg, slate-700 border, 12px radius, shadow. Max-height 280px, scrollable.

Options: 40px height, 14px text. Hover: slate-700 bg. Selected: purple-600 bg.

Search variant: Search input pinned at top of dropdown for filterable lists (countries, eggs, nodes).

Multi-select variant: Checkboxes next to each option. Selected items shown as badges in trigger. "3 selected" collapsed label.

Group headers: Slate-500 text, 12px uppercase, non-clickable dividers.

Animation: Scale-Y from 0.95 + fade, 150ms.
```

### Component — ProgressBar

```
Design a ProgressBar component for SkyNode. Dark theme.

Base: Slate-700 background track, 8px height, full border-radius.

Fill: Purple gradient (#6366f1 → #8b5cf6) for normal, green for success, yellow for warning (60-80%), red for danger (80-100%).

Variants:
1. Default: Static fill with percentage label right-aligned
2. With label: "2.4 / 4 GB" text below, centered
3. Indeterminate: Animated shimmer stripe (for unknown progress)
4. Stepped: Segmented sections with gaps (e.g., 3 of 5 steps)

Sizes: sm (4px h), md (8px h), lg (12px h).

Smooth width transition (300ms ease) when value changes.
```

### Component — Toggle

```
Design a Toggle/Switch component for SkyNode. Dark theme.

Off state: Slate-600 track (44px × 24px), white circle knob (20px) positioned left.

On state: Purple-600 track, white knob slides right. Smooth 200ms slide transition.

Sizes: sm (36×20, 16px knob), md (44×24, 20px knob).

States: Default, Hover (track lightens), Disabled (40% opacity), Focus (purple ring).

Label: Text to the right of toggle, with optional description text below in slate-500.

Click anywhere on label or toggle to switch.
```

### Component — Spinner

```
Design a Spinner/Loading component for SkyNode. Dark theme.

Variants:
1. Circular spinner: Rotating ring (purple-500 partial arc on slate-700 track). Sizes: sm (16px), md (24px), lg (40px), xl (64px).
2. Dot spinner: 3 bouncing dots in sequence (purple). For inline "loading..." states.
3. Full-page loader: Centered XL spinner with "Loading..." text and SkyNode logo above. Shown during initial app load or major navigation.
4. Button spinner: Tiny (14px) white spinner replacing button text.
5. Skeleton: Pulsing gray rectangles matching content shapes (already covered in Component — Loading Skeletons).

All use CSS animations, no JS. Smooth 1s infinite rotation for circular, 1.4s bounce for dots.
```

---

## 21. LAYOUT WRAPPER COMPONENTS (`components/layout/`)

### Component — Footer

```
Design a Footer component for SkyNode. Dark theme.

Public footer (landing/pricing pages):
- 4 columns: Product (Features, Pricing, Docs, API), Company (About, Blog, Careers), Legal (Terms, Privacy, SLA), Support (Help Center, Status, Contact)
- Bottom bar: SkyNode logo (small), "© 2026 SkyNode. All rights reserved.", social icons (GitHub, Discord, Twitter/X)
- Background: Slate-900, top border in slate-800

Dashboard footer (authenticated pages):
- Minimal single-line footer at bottom of content area: "SkyNode v1.0.0" left, "Need help? Docs · Support" right
- Slate-800/50 background, 40px height

Customer panel footer:
- "Powered by SkyNode" centered, subtle slate-600 text. Tenant's support email link.
```

### Component — PublicLayout

```
Design the PublicLayout wrapper component. Dark theme.

Structure:
- Top: Public Navbar — SkyNode logo left, nav links center (Features, Pricing, Docs), "Login" + "Get Started" buttons right
- Content: Centered max-width (1200px), responsive padding
- Bottom: Full public footer

Mobile: Hamburger menu → slide-in nav drawer from right. Sticky navbar.

Background: #0f172a solid. Subtle grid pattern or radial gradient glow (purple, very faint) behind hero areas.

No sidebar. Clean, marketing-site feel.
```

### Component — AdminLayout

```
Design the AdminLayout wrapper component. Dark theme.

Structure:
- Left: Sidebar (260px) with admin navigation items: Dashboard, Tenants, Nests & Eggs, Revenue, Discounts, Analytics, Subscriptions, Settings
- Top: Navbar with breadcrumbs, search (⌘K), notifications bell, user avatar dropdown
- Center: Content area (flex-1, scrollable, 32px padding)
- Bottom: Minimal dashboard footer

Sidebar highlight color: Purple.
Role badge in sidebar: "Admin" purple badge.

Auth guard: If not authenticated or not admin role → redirect to /login. Show loading spinner during auth check.

Responsive: Below 1024px → sidebar collapses to icon-only (72px). Below 768px → sidebar hidden, hamburger menu in navbar.
```

### Component — DashboardLayout

```
Design the DashboardLayout wrapper for buyer/tenant pages. Dark theme.

Structure: Same as AdminLayout but with buyer-specific navigation:
- Sidebar items: Overview, Nodes, Servers, Customers, Plans, Billing, Settings
- Sidebar shows tenant's company name + logo at top (from branding config)

Role badge: "Tenant Admin" blue badge.

Tenant context: Banner at top if tenant is in trial: "You have 7 days left in your trial. Upgrade now →" with dismiss X.

Auth guard: If not authenticated or not buyer role → redirect. If tenant is suspended → redirect to /suspended page.

Subscription status indicator in sidebar bottom: Green dot "Active", Yellow "Past Due", Red "Suspended".
```

### Component — PanelLayout

```
Design the PanelLayout wrapper for end-customer pages. Dark theme with tenant branding.

Structure: Same sidebar + navbar pattern but:
- Sidebar: Tenant's logo (from branding), navigation items: My Servers, API Keys, Settings
- Accent color: Uses tenant's primary color (from branding config) instead of default purple for active states, buttons, and highlights
- Navbar: Tenant name in breadcrumb root, no admin-level features

Role badge: "Customer" green badge.

Branding application:
- Sidebar logo: Tenant's uploaded logo
- Primary buttons: Tenant's primary color
- Active nav: Tenant's primary color border/background
- Favicon: Tenant's icon if uploaded

Auth guard: If not authenticated or not customer role → redirect to tenant login page.

Minimal, clean — customers see a simpler interface than buyers.
```

---

## 22. CHART COMPONENTS (`components/charts/`)

### Component — LineChart

```
Design a LineChart component for SkyNode. Dark theme.

Chart.js-based line chart with SkyNode styling.

Background: Transparent (inherits card background). Grid lines: Slate-700/30, horizontal only. Axis labels: Slate-500, 12px.

Line styles:
- Primary: Purple-500 line (2px), purple gradient fill below (20% → 0% opacity top to bottom)
- Secondary: Blue-400 line (2px), blue gradient fill
- Dual-axis: Two lines with two Y-axes (left purple, right blue)

Data points: Small circles (4px) on hover. Tooltip: Dark glass card showing date + value, follows cursor.

Time ranges: Buttons above chart — 1H, 6H, 24H, 7D, 30D, 90D, 1Y. Active button highlighted.

Responsive: Full-width within card, maintains 16:9 aspect ratio. Legend at top-right with colored dots + labels.

Use cases: Revenue over time, CPU/Memory over time, server growth.
```

### Component — DonutChart

```
Design a DonutChart component for SkyNode. Dark theme.

Chart.js doughnut chart.

Ring: 70% cutout ratio. Segments use distinct colors: Purple-500, Blue-500, Emerald-500, Amber-500, Rose-500.

Center: Total count or percentage in large text (24px), label below (14px, slate-400).

Legend: Below or right of chart. Each item: Colored dot, label, value, percentage. Click to toggle segment visibility.

Hover: Segment slightly expands (2px), tooltip shows label + value + percentage.

Animation: Segments animate in clockwise on mount (800ms ease-out).

Use cases: Server distribution by game type, revenue by plan, resource usage breakdown.
```

### Component — BarChart

```
Design a BarChart component for SkyNode. Dark theme.

Chart.js bar chart.

Bars: Purple gradient fill (bottom-to-top), 8px border-radius on top corners. Bar width: 60% of available space.

Horizontal variant: Bars go left-to-right. Used for "Top Tenants by Revenue" leaderboard.

Stacked variant: Multiple datasets stacked. Each segment a different color.

Grid: Horizontal lines only (slate-700/30). Labels: Slate-500, 12px.

Hover: Bar brightens, tooltip shows value. Click: Optional drill-down action.

Animation: Bars grow upward from 0 on mount (600ms).

Use cases: Signups by region, revenue by month, servers by node.
```

---

## 23. GUARD COMPONENTS & AUTH STATES

### Component — AuthGuard (Loading State)

```
Design the AuthGuard loading state — shown while checking if user is authenticated. Dark theme.

Full-page centered: SkyNode logo (subtle pulse animation), "Checking authentication..." text below in slate-500. Circular spinner under text.

Duration: Max 2 seconds. If auth check fails → smooth fade transition to login page.

If auth succeeds → smooth fade transition to requested page content.

No layout chrome (no sidebar/navbar) — just the centered loader on dark background.
```

### Component — RoleGuard (Unauthorized Page)

```
Design an Unauthorized/Forbidden page shown when a user tries to access a page above their role. Dark theme.

Centered layout. Shield/lock icon in amber/yellow.

Heading: "Access Denied"
Subtitle: "You don't have permission to view this page. Contact your administrator if you believe this is an error."

Current role display: "Your role: Customer" badge.
Required role: "Required: Admin" badge.

"Go to Dashboard" button (routes to their appropriate dashboard based on role). "Logout" secondary link.
```

---

## 24. STANDALONE COMPONENTS & REMAINING PAGES

### Component — Terminal (Standalone)

```
Design the Terminal component used for server consoles. Dark theme.

Container: Black background (#000), 1px slate-700 border, 12px radius (top corners only when embedded in a page).

Terminal area (scrollable):
- Font: JetBrains Mono or Fira Code, 13px, line-height 1.5
- Text colors: White (stdout), Red (stderr), Yellow (warnings), Cyan (system messages), Green (success), Gray (timestamps)
- Timestamps: "[14:23:05]" in slate-600 before each line
- Scroll: Auto-scroll to bottom when new content arrives. "Scroll to bottom" button appears when user scrolls up.
- Selection: Standard text selection (highlight in purple-800/50)

Input bar (bottom):
- Dark slate-900 background, "> " prompt in purple
- Monospace input field, full width
- Send button (right, arrow-up icon)
- Enter key sends command
- Command history: Arrow up/down cycles through previous commands

Connection status indicator (top-right corner): Green dot "Connected" / Red "Disconnected" with reconnect attempt counter.

Toolbar (top bar): Server name, status badge, "Clear Console" button, "Download Logs" button. Collapse/expand button if sidebar is present.
```

### Component — FileManager (Standalone)

```
Design the FileManager component for server file management. Dark theme.

Toolbar (top):
- Breadcrumb path: / > home > server > config (each segment clickable)
- Buttons: Upload, New File, New Folder, Search, Compress, View toggle (list/grid)
- "Refresh" button

File list (list view — default):
- Columns: Checkbox, Icon (folder/file-type icon), Name, Size, Last Modified, Actions
- Folder icon: Slate-400 folder icon. File icons: Color-coded by type — .yml/.yaml (green), .json (yellow), .properties (blue), .log (gray), .jar (red), .sh (purple)
- Click folder → navigates into it. Click file → selects it (not opens). Double-click text file → opens editor modal.
- Right-click context menu: Open, Edit, Rename, Download, Copy Path, Compress, Delete

File list (grid view):
- Cards with large icon, filename, size. Folders first, then files alphabetically.

Selection: Click to select, Ctrl+Click multi-select, Shift+Click range select. Selection count: "3 items selected" with actions bar.

Drag-and-drop: Files can be dragged between folders. Drop zone highlights target folder.

Upload zone: When dragging external files, overlay appears: dashed border, "Drop files to upload to /current/path" text.
```

### Component — User Dropdown Menu

```
Design a user dropdown menu triggered by clicking the avatar in the navbar. Dark theme.

Trigger: 36px avatar circle (initials if no image, or user photo). Click opens dropdown.

Dropdown (220px wide, right-aligned):
- User info header: Avatar, Full Name, Email (truncated), Role badge
- Divider
- Menu items with icons: "Profile & Account", "Appearance" (dark/light/system sub-menu), "Keyboard Shortcuts"
- Divider
- "Logout" (red text) with logout icon

Animation: Fade + slide down, 150ms.

Appearance sub-menu: 3 options with icons — Dark (moon), Light (sun), System (monitor). Active option has check mark.
```

### Page 46 — Tenant-Branded Login (`/:tenant-slug/login`)

```
Design a tenant-branded login page for end customers. Dark theme with tenant branding.

Centered glass card (480px). Tenant's logo at top (not SkyNode logo). Tenant company name below logo.

"Sign in to your account" heading. Subtitle: "Manage your [Tenant Name] servers."

Form: Email input, Password input with show/hide toggle. "Remember me" checkbox, "Forgot password?" link.

"Sign In" button using tenant's primary color (from branding config).

"Don't have an account? Sign up" link → goes to /:tenant-slug/register.

Footer: "Powered by SkyNode" small text, subtle.

Key difference from SkyNode login (Page 3): No OAuth buttons, tenant's branding applied, routes to customer panel on success.
```

### Page 47 — Buyer Onboarding Flow (`/dashboard/onboarding`)

```
Design a first-time onboarding flow for new buyers. Dark theme. Full-screen (no sidebar).

Step indicator: 4 steps — Welcome → Connect Node → Create Plan → Launch

Step 1 "Welcome":
- "Welcome to SkyNode, [Name]! 🎉" heading
- "Let's get your hosting business running in 5 minutes." subtitle
- Quick overview: 3 cards showing what you'll do — Connect a VPS, Create a hosting plan, Launch your storefront
- "Let's Go" button

Step 2 "Connect Your First Node":
- Same as Add Node flow (B1) but embedded in page (not modal)
- Shows install command, verify connection
- "Skip for now" link (can add later)

Step 3 "Create Your First Plan":
- Same as Create Plan form (B3) but embedded
- Pre-selects a popular egg (Minecraft Paper)
- "Skip for now" link

Step 4 "You're Ready!":
- Confetti animation
- "Your storefront is live!" with URL: slug.skynode.com (clickable)
- Quick links: "Go to Dashboard", "Add More Nodes", "Customize Branding"
- "Share your storefront" with copy link button

Progress saves — user can close and resume. Show onboarding checklist widget on dashboard until all steps complete.
```

### Page 48 — Activity / Audit Log (`/admin/activity` or `/dashboard/activity`)

```
Design an activity/audit log page. Dark theme with sidebar.

Header: "Activity Log" title, date range picker, export button.

Filter bar: Actor dropdown (All / specific user), Action type dropdown (All / Created / Updated / Deleted / Login / Power), Resource dropdown (All / Servers / Nodes / Customers / Settings).

Activity feed (timeline-style):
- Each entry: Timestamp, Actor avatar + name, Action description, Resource link
- Examples:
  - "John Doe created server 'MC-1' on node us-east-1" (blue create icon)
  - "Admin suspended tenant 'IndiaSells'" (yellow warning icon)
  - "System: Node us-west-2 went offline" (red alert icon)
  - "Jane Smith logged in from 192.168.1.1" (gray login icon)

Entries grouped by date: "Today", "Yesterday", "April 28, 2026".

Click on resource name → navigates to that resource's detail page.

Pagination: Infinite scroll with "Loading more..." spinner.
```

### Page 49 — All Notifications (`/notifications`)

```
Design a full notifications page. Dark theme with sidebar.

Header: "Notifications" title, "Mark all as read" button, "Notification Settings" gear link.

Filter tabs: All | Unread | Alerts | Billing | System.

Notification cards (full-width list):
- Each: Icon (type-colored), Title (bold if unread), Description, Timestamp ("2 hours ago"), "Mark as read" / "Delete" actions
- Unread: Purple left border, slightly brighter background
- Read: Normal styling

Notification types with distinct icons/colors:
- Server alert (red): "Server 'MC-1' crashed — Out of memory"
- Node alert (yellow): "Node us-east-1 CPU at 95%"
- Billing (green): "Payment of ₹500 received from John Doe"
- System (blue): "SkyNode updated to v1.2.0"
- Customer (purple): "New customer 'Jane' registered"

Empty state: "No notifications" with bell icon.

Batch actions: Checkbox per notification, "Delete selected" and "Mark selected as read" appear.
```

### Modal — Export Data

```
Design an Export Data modal for SkyNode. Dark theme. Used across revenue, transactions, logs pages.

Modal (440px). Header: "Export Data".

Format selector (radio cards): CSV, JSON, PDF.

Date range: From date picker, To date picker. Preset: "Same as current view" checkbox.

Columns to include: Checklist of available columns (varies by data type). "Select All" / "Deselect All" links.

Preview: "Will export approximately 247 rows" estimate.

Footer: "Cancel", "Download Export" button.

Progress: On click → button shows spinner, then auto-downloads file. Success toast: "Export downloaded — 247 rows."
```


