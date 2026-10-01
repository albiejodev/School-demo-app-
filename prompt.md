NOVA SCHOOL — FINAL VISUAL DESIGN SYSTEM REWORK

IMPORTANT:
This is a UI/UX REWORK, NOT a rebuild.

The existing Next.js application already has working pages, routes, mock data and workflows.

DO NOT remove or rewrite working functionality.

DO NOT create new unnecessary features.

Your primary task is to redesign the VISUAL SYSTEM of the entire application so it looks like a premium, modern, AI-powered SaaS product.

I have attached 3 screenshots for visual reference.

REFERENCE 1 + 2:
These are screenshots of our CURRENT NOVA application.

REFERENCE 3:
This is the visual direction we want.

Do NOT copy the reference dashboard literally.
Use it only to understand the visual quality, composition, card treatment, color usage and hierarchy we want.

==================================================
1. CORE PROBLEM WITH CURRENT UI
==================================================

The current UI is too:

- monochromatic
- flat
- gray/white
- text-heavy
- visually empty
- generic
- similar to a traditional admin/ERP dashboard

It currently looks like:

"school management software"

We want it to look like:

"premium AI-powered school operating system"

The application should immediately feel modern when a principal sees it during a sales demo.

==================================================
2. DESIGN DIRECTION
==================================================

Use ONE consistent design language across the entire application.

Theme:

WHITE + BLUE / INDIGO GRADIENT

The design should feel:

- premium
- clean
- intelligent
- modern
- trustworthy
- slightly futuristic
- professional
- polished

Think:

modern SaaS + AI product + education platform

NOT:

traditional school ERP
generic Bootstrap dashboard
old admin template
cyberpunk AI dashboard

==================================================
3. COLOR SYSTEM
==================================================

Create a GLOBAL design token system.

Do NOT independently choose colors on each page.

Use the same theme everywhere.

Primary:

Deep Indigo
#4338CA

Secondary:

Blue
#2563EB

Soft Blue:

#EFF6FF

Very Light Blue:

#F5F8FF

Background:

#F7F9FC

Surface:

#FFFFFF

Primary text:

#111827

Secondary text:

#64748B

Border:

#E5EAF2

Success:

#16A34A

Warning:

#F59E0B

Danger:

#EF4444

IMPORTANT:

Do not make every component blue.

Approximately:

70% neutral / white
20% blue / indigo
10% semantic colors

Blue and indigo should be used for:

- primary actions
- active states
- important metrics
- AI sections
- selected items
- subtle gradients
- visual accents

==================================================
4. GRADIENT SYSTEM
==================================================

Introduce a subtle premium gradient system.

Examples:

Primary AI gradient:

linear-gradient(
  135deg,
  #EEF2FF 0%,
  #EFF6FF 45%,
  #FFFFFF 100%
)

Primary action gradient:

linear-gradient(
  135deg,
  #4F46E5,
  #2563EB
)

Do NOT use gradients everywhere.

Use gradients strategically for:

- hero sections
- AI cards
- important CTA buttons
- selected/highlighted cards
- empty states where appropriate

The gradients must look soft and expensive.

No neon.

No excessive purple.

No glowing cyberpunk effects.

==================================================
5. TYPOGRAPHY
==================================================

Typography needs to become much sharper.

Use:

Inter

or another premium modern sans-serif.

Use strong hierarchy.

Page titles:

28–32px
font-weight: 600–700

Section titles:

17–20px
font-weight: 600

Body:

14–15px

Secondary:

12–13px

KPI numbers:

28–36px
font-weight: 600–700

IMPORTANT:

Do not make all text bold.

Use font weight intentionally.

Numbers should be visually dominant.

Headings should be crisp.

Secondary text should be muted.

==================================================
6. CARD DESIGN
==================================================

This is one of the biggest changes.

The current cards are too plain.

Cards should have:

- white surface
- subtle border
- soft shadow
- 12–16px radius
- comfortable padding
- clear hierarchy

Example:

background: #FFFFFF

border: 1px solid #E5EAF2

box-shadow:
0 4px 20px rgba(30, 64, 175, 0.06)

DO NOT:

- make every card identical
- use huge rounded rectangles
- use excessive shadows
- put everything inside cards

Use different card treatments depending on importance.

==================================================
7. KPI CARDS
==================================================

The current KPI section is too plain.

Make KPI cards visually attractive but compact.

Example:

┌─────────────────────────────┐
│ Students              ↗     │
│                             │
│ 1,248                       │
│ +3.2% this month            │
│                             │
│ mini trend                  │
└─────────────────────────────┘

Each KPI can have a subtle colored accent.

For example:

Students:
soft blue

Attendance:
soft green

Academic:
soft indigo

Fees:
soft amber

IMPORTANT:

These are NOT separate page themes.

They are semantic accents inside the SAME global blue/white theme.

Do not make one page purple, another green, another yellow.

==================================================
8. DASHBOARD COMPOSITION
==================================================

The current dashboard has too much empty space and does not feel visually rich enough.

Use a better composition inspired by the third reference image.

Suggested structure:

--------------------------------------------------

HEADER

Good morning, Principal
Here's what needs your attention today.

--------------------------------------------------

AI SCHOOL OVERVIEW
Large premium gradient panel

--------------------------------------------------

KPI ROW
Students | Attendance | Academic | Fees

--------------------------------------------------

MAIN CONTENT

School Performance          AI Insights
large chart                 stacked insight cards

--------------------------------------------------

QUICK ACTIONS

Add Student
Add Teacher
Take Attendance
Create Announcement
Generate AI Report

--------------------------------------------------

RECENT ACTIVITY

--------------------------------------------------

Do NOT simply stack dozens of cards vertically.

Create visual balance.

Use 2-column layouts where appropriate.

==================================================
9. AI VISUAL IDENTITY
==================================================

AI is a major selling point of NOVA.

The AI elements should have a recognizable visual identity.

Create reusable components:

AIInsight
AIAction
AIPanel
AIBadge
AIRecommendation

AI UI should use:

- soft blue/indigo gradient
- subtle AI icon
- small indigo accent
- clean typography
- premium surface

Example:

┌─────────────────────────────────────────────┐
│ ✦ AI INSIGHT                                │
│                                             │
│ Grade 9B attendance has declined 5.8%       │
│ over the last four weeks.                   │
│                                             │
│ 12 students may require attention.          │
│                                             │
│ Review students →                           │
└─────────────────────────────────────────────┘

AI should feel integrated into the product.

Do NOT make it look like a generic ChatGPT clone.

Do NOT use robot illustrations.

Do NOT use emojis.

==================================================
10. SIDEBAR
==================================================

Keep the sidebar clean but improve its visual quality.

Use:

white / very light background

NOVA branding at top.

Navigation grouped as:

OVERVIEW

Dashboard

SCHOOL

Students
Teachers
Attendance

ACADEMICS

Academics

OPERATIONS

Fees
Communication

INTELLIGENCE

AI Assistant

Active item:

soft blue/indigo background
indigo text/icon
subtle left indicator

Do NOT use a different color for each menu item.

==================================================
11. TOP HEADER
==================================================

Create a clean premium header.

Left:

current page title / breadcrumb

Center/left:

search

Right:

notification
profile
role selector

Search should look like a modern floating SaaS search field.

Avoid heavy borders.

==================================================
12. TABLES
==================================================

The current Students table is functional but visually too plain.

Keep the data.

Improve:

- typography
- spacing
- row height
- hover state
- column hierarchy
- status indicators
- header styling

Use subtle horizontal separators.

Avoid boxed cells.

Important information should stand out.

For example:

attendance below 85%
academic average below 70%
high-risk student

Use semantic colors only where useful.

==================================================
13. CHARTS
==================================================

Charts should look premium.

Use Recharts if already being used.

Remove unnecessary:

- grid lines
- labels
- borders
- visual noise

Use:

blue / indigo as the primary chart colors.

Use green/red only for meaningful positive/negative comparison.

Add subtle gradients to chart areas where appropriate.

==================================================
14. QUICK ACTIONS
==================================================

Make quick actions visually attractive.

Example:

+ Add Student

+ Add Teacher

Attendance

Announcement

AI Report

Use compact icon + text blocks.

These should look like actions, not giant cards.

==================================================
15. FEES PAGE
==================================================

Keep the existing Fees functionality.

Redesign it using the new global theme.

Use:

Fees overview

Total collection
₹42.8L

Outstanding
₹6.4L

Collection rate
87.2%

Overdue
18

Then:

Collection chart

Outstanding fees table

AI Collection Insight

Example:

"18 accounts have been overdue for more than 30 days."

Actions:

Review overdue accounts
Generate reminders

The AI panel must use the same blue/indigo AI visual language.

==================================================
16. COMMUNICATION PAGE
==================================================

Keep the existing Communication functionality.

Make it visually consistent.

Sections:

Communication overview

Messages sent
Open rate
Scheduled
Pending

Message composer

Audience
Channel
Message

AI writing assistant:

User enters:

"School will remain closed tomorrow due to heavy rain."

AI generates a professional parent announcement.

Show:

Generate with AI

Edit

Use message

Then communication history.

Again:

same white + blue/indigo theme.

==================================================
17. OTHER PAGES
==================================================

Apply the SAME design system to:

Students
Teachers
Attendance
Academics
Fees
Communication
AI Assistant
Student profile
Teacher profile
Modals
Dropdowns
Tables
Forms
Empty states
Toasts

IMPORTANT:

The user should feel like they are inside ONE product.

Not separate mini-applications.

==================================================
18. DO NOT USE PAGE-SPECIFIC THEMES
==================================================

This is extremely important.

Do NOT do:

Students = blue
Teachers = green
Attendance = orange
Fees = yellow
Academics = purple

That makes the product look like an old ERP.

Instead:

ONE NOVA visual identity.

White + blue + indigo.

Semantic colors only when they communicate status.

==================================================
19. MICRO INTERACTIONS
==================================================

Add subtle premium interactions:

- hover elevation
- button transitions
- table row hover
- card hover where appropriate
- smooth dropdowns
- subtle chart animation
- subtle AI panel animation

Keep animations fast and professional.

Do NOT add unnecessary animations everywhere.

==================================================
20. RESPONSIVE
==================================================

Maintain responsive behavior.

Desktop:

sidebar + content

Tablet:

collapsible sidebar

Mobile:

drawer navigation
stacked dashboard
responsive cards
horizontal table scrolling where required

Do not break existing functionality.

==================================================
21. CODE QUALITY
==================================================

Do NOT duplicate styles page-by-page.

Create reusable design primitives/components where appropriate.

For example:

components/ui/

Card
Button
Badge
MetricCard
SectionHeader
AIInsight
AIGradientPanel
DataTable
PageHeader

Create global CSS variables/design tokens.

The goal is:

ONE design system → ALL pages.

==================================================
22. IMPORTANT CONSTRAINT
==================================================

DO NOT add unnecessary data just to make the dashboard look busy.

The reference image has a lot of visual content, but we do NOT want junk data.

Every element must answer one of these questions:

- What is happening?
- What needs attention?
- What can the principal do?
- What did AI discover?
- What action can the principal take?

If an element does not provide useful information, remove it.

==================================================
23. FINAL VISUAL TARGET
==================================================

After the redesign, compare the result against the 3 reference screenshots.

The current NOVA screenshots should feel:

OLD:
flat
monochrome
generic
ERP-like

NEW:
premium
white + blue
visually rich
sharp typography
beautiful cards
clear hierarchy
AI-native
modern SaaS
sales-demo ready

The third reference is mainly a reference for:

- composition
- visual richness
- card styling
- color usage
- typography hierarchy
- overall polish

Do NOT copy its purple theme or its exact layout.

Build NOVA's own identity around:

WHITE + BLUE + INDIGO + SOFT GRADIENTS.

==================================================
24. EXECUTION ORDER
==================================================

Do this in this exact order:

1. Inspect the existing application.
2. Identify the existing global CSS/theme/components.
3. Create the new global design tokens.
4. Update typography.
5. Update sidebar/header.
6. Update reusable cards/buttons/tables/badges.
7. Redesign dashboard.
8. Apply the same system to every existing page.
9. Redesign Fees.
10. Redesign Communication.
11. Verify AI components use the same visual language.
12. Verify responsive layouts.
13. Run npm run build.
14. Fix all errors.
15. Check for inconsistent colors/styles.

DO NOT rebuild existing business logic.

DO NOT remove working features.

DO NOT create fake functionality.

Focus primarily on making the EXISTING PRODUCT look dramatically better.

FINAL REQUIREMENT:

If you have to choose between adding another feature and improving the visual quality of an existing screen, ALWAYS choose visual quality.

The goal of this demo is not to show how many features we have.

The goal is for a school principal to open NOVA and immediately think:

"This looks like a serious modern AI product."