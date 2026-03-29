# Tilde Website Research
## Comprehensive Research for tilde.fyi Waitlist Landing Page

> Compiled from parallel research agents covering design principles, waitlist best practices, UI libraries, frameworks, and backend architecture. All findings are verbatim from web sources, official documentation, and community analyses. Research date: March 28, 2026.

---

## Table of Contents

1. [Design Principles: Notion & Obsidian](#1-design-principles-notion--obsidian)
2. [Waitlist Page Design & Best Practices](#2-waitlist-page-design--best-practices)
3. [UI Component Libraries: shadcn/ui, Aceternity UI, Magic UI](#3-ui-component-libraries)
4. [Frameworks: Next.js, Three.js/R3F, Framer Motion](#4-frameworks--technologies)
5. [Backend: MongoDB, API Routes, Email, Security](#5-backend--infrastructure)

---

# 1. Design Principles: Notion & Obsidian

## 1.1 Notion's Design Principles

### Visual Language & Philosophy

Notion's visual language is rooted in **radical simplicity and modularity**. Everything in Notion is a "block" -- text, titles, quotes, tables, callouts, boards, images -- composable like LEGO. This block-based paradigm extends to their visual identity: clean, composable, and intentionally restrained.

Their brand philosophy rests on three principles articulated in their own campaign work:
- **"Stay True"** -- Maintain consistency with the original minimalist illustration heritage (Roman Muradov's gestural linework)
- **"Show, Don't Tell"** -- Visuals demonstrate function rather than describing abstract concepts
- **"Move In Closer"** -- Intimate, close-up perspectives that reveal interior thought processes

The tagline **"Think it. Make it."** was distilled from "thousands of nouns, verbs, and adjectives" to capture the essence of ideation-to-execution.

### Typography

**Primary Typeface:** Inter (designed by Rasmus Andersson, 2017)
- Open-source neo-grotesque sans-serif
- Optimized for screen legibility, especially at small sizes
- Tall x-height in "text" optical size for legibility; clean curves in "display" optical size
- True italic variant available

**Font Weights Used:**
- Regular (400) -- body text
- Medium (500) -- UI elements, emphasis
- Bold (700) -- headings, strong emphasis

**Three User-Facing Font Modes:**
| Mode | Font Stack |
|------|-----------|
| Default | Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif |
| Serif | Lyon Text, Georgia, "Times New Roman", serif |
| Mono | iaWriter Mono, Nitti, Menlo, Courier, monospace |

**Typography Scale (from Notionpresso CSS reference + community inspection):**
- Body text: 16px base (standard mode); ~14px in "Small Text" mode
- H1: ~30px (1.875em), bold, significant top margin
- H2: ~24px (1.5em), semi-bold
- H3: ~20px (1.25em), semi-bold
- Line-height: ~1.5 for body text, tighter for headings (~1.3)

**Key CSS Variables (Notionpresso reference):**
```css
--notion-font: system UI font stack;
--notion-max-width: 720px;
--notion-header-height: 45px;
--notion-indent: 27px;
```

### Color Palette

**Brand Colors:**
| Color | Hex | Usage |
|-------|-----|-------|
| Black | #000000 | Primary brand, logo, text |
| White | #FFFFFF | Primary background, logo inverse |

**Light Mode - Application Colors:**

| Element | Default | Gray | Brown | Orange | Yellow | Green | Blue | Purple | Pink | Red |
|---------|---------|------|-------|--------|--------|-------|------|--------|------|-----|
| Text | #373530 | #787774 | #976D57 | #CC782F | #C29343 | #548164 | #487CA5 | #8A67AB | #B35488 | #C4554D |
| Background | #FFFFFF | #F1F1EF | #F3EEEE | #F8ECDF | #FAF3DD | #EEF3ED | #E9F3F7 | #F6F3F8 | #F9F2F5 | #FAECEC |
| Icon | #55534E | #A6A299 | #9F6B53 | #D87620 | #CB912F | #448361 | #337EA9 | #9065B0 | #C14C8A | #D44C47 |

**Dark Mode - Application Colors:**

| Element | Default | Gray | Brown | Orange | Yellow | Green | Blue | Purple | Pink | Red |
|---------|---------|------|-------|--------|--------|-------|------|--------|------|-----|
| Text | #D4D4D4 | #9B9B9B | #A27763 | #CB7B37 | #C19138 | #4F9768 | #447ACB | #865DBB | #BA4A78 | #BE524B |
| Background | #191919 | #252525 | #2E2724 | #36291F | #372E20 | #242B26 | #1F282D | #2A2430 | #2E2328 | #332523 |
| Icon | #D3D3D3 | #7F7F7F | #AA755F | #D9730D | #CA8E1B | #2D9964 | #2E7CD1 | #8D5BC1 | #C94079 | #CD4945 |

### Spacing & Layout Philosophy

**Grid System:** 8px base grid
- All spacing multiples: 8, 16, 24, 32, 40, 48, 56, 64...

**Content Width:**
- Default (centered): ~720px max-width (`--notion-max-width: 720px`)
- Full-width mode: expands to fill available space
- The centered default creates a reading-optimized column width (~65-75 characters per line)

**Sidebar Dimensions:**
- Sidebar width: 224px
- Search bar height: 30px
- Favourites section height: 30px
- Section separator gap: 6px

**Adjacency-Based Spacing System:**
Notion implemented a sophisticated dynamic spacing system where padding between blocks adjusts based on neighboring block types:
- Lists adjacent to other lists: reduced padding ("chunk together neatly")
- Isolated paragraphs/list items: increased breathing room
- Two distinct spacing layers: paragraph spacing (between blocks) and single-line spacing (internal line-height)

### Whitespace Philosophy

- **Generous page margins** by default (centered 720px content area on wide screens)
- **Content breathing room**: the default non-full-width mode is a deliberate choice to optimize reading comfort
- **Block-level spacing** creates visual grouping without explicit dividers
- **Minimal chrome**: the UI disappears when not needed (toolbar appears on hover/selection, sidebar collapses)
- Negative space is treated as a "core tenet" -- sections are separated by whitespace rather than borders or lines

### Icon Style

Notion uses a **dual icon system**:
1. **Native Emoji System**: Default page icons use standard emoji, providing warmth and personality
2. **Custom SVG Icons**: UI controls use simple, monochromatic line icons with consistent stroke weight
3. **Six-dot drag handle** (the "gripper"): appears on hover to the left of any block, signaling drag-and-drop capability
4. **Illustration Style (Brand)**: Roman Muradov's gestural, minimalist linework -- originally black and white, expanded to include "bold yellows, blues, and reds" for marketing campaigns

### Animation & Micro-Interaction Patterns

**Timing:**
- Hover transitions: 200-300ms duration
- Easing: cubic-bezier curves with subtle acceleration/deceleration
- Opacity transitions: 0% to 100% over 0.2-0.3s
- Optional Y-axis movement: translateY(5px) to translateY(0px) for entrance animations

**Key Interactions:**
- **Block hover**: six-dot gripper fades in to the left; subtle background highlight appears
- **Drag and drop**: blocks lift with a slight shadow/elevation effect during drag
- **Sidebar collapse/expand**: smooth slide transition
- **Page transitions**: minimal, near-instant -- content loads inline
- **Toolbar appearance**: fade-in on text selection

### Dark/Light Mode

**Light Mode:**
- Background: #FFFFFF (pure white)
- Default text: #373530 (warm dark gray, NOT pure black)
- Warm, slightly cream-tinted feel overall

**Dark Mode:**
- Background: #191919 (very dark gray, NOT pure black)
- Default text: #D4D4D4 (light gray)
- Colored backgrounds become deeply muted versions of their light counterparts

**Key Design Decision:** Notion uses warm grays rather than pure black/white. The default text color #373530 has a warm brown undertone, and the dark mode background #191919 avoids the harshness of #000000.

### Block & Card Patterns

**Card Design Language:**
- Subtle box-shadow for elevation (Material-inspired but much softer)
- Small border-radius (3-4px range for most UI elements)
- Hover state: slightly increased shadow/elevation
- Content padding follows 8px grid

---

## 1.2 Obsidian's Design Principles

### Dark-First Aesthetic

Obsidian is designed with a **dark-first philosophy**. The default experience is dark mode, reflecting its identity as a "power user" tool for deep thinking. The tagline **"Sharpen your thinking"** communicates the tool's cerebral, private, and permanent nature.

### Color Palette

**Brand Accent Color:**
| Property | Value |
|----------|-------|
| Primary Brand Purple | #8B5CF6 (RGB: 139, 92, 246) |

**Dark Theme (Default) - from Obsidian v1.0.x app.css:**

| CSS Variable | Value | Description |
|-------------|-------|-------------|
| `--background-primary` | #1e1e1e | Main editor background |
| `--background-secondary` | #262626 | Sidebar, secondary panels |
| `--background-modifier-border` | #363636 | Borders, dividers |
| `--text-normal` | #dadada | Primary body text |
| `--text-muted` | #bababa | Secondary text |
| `--text-faint` | #666666 | Tertiary/hint text |
| `--text-accent` | hsl(254, 80%, 68%) | Links, accent text |
| `--interactive-accent` | hsl(254, 80%, 64.2%) | Buttons, active elements |
| `--interactive-accent-hover` | hsl(254, 80%, 71.8%) | Hover state for accent |
| `--accent-h` | 254 | Accent hue (purple/violet) |
| `--accent-s` | 80% | Accent saturation |
| `--accent-l` | 68% | Accent lightness |

**Dark Theme Semantic Colors:**
| Variable | Value |
|----------|-------|
| `--color-red` | #fb464c |
| `--color-green` | #44CF6E |
| `--color-yellow` | #E0DE71 |
| `--color-cyan` | #53DFDD |
| `--color-purple` | #a882ff |
| `--color-pink` | #FA99CD |

**Light Theme Colors:**
| CSS Variable | Value |
|-------------|-------|
| `--background-primary` | #ffffff |
| `--background-secondary` | #f2f3f5 |
| `--text-accent` | #705dcf |
| `--text-normal` | #2e3338 |
| `--interactive-accent` | #7b6cd9 |

### Typography

```css
/* Interface font */
--font-interface-theme: -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

/* Text/Editor font */
--font-text-theme: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif;

/* Monospace font */
--font-monospace-theme: "Source Code Pro", monospace;
```

Base body text: 16px (`--font-text-size: 16px`)

### Graph View Design

- Rendered via **Canvas/WebGL** (not standard DOM/CSS)
- Force-directed layout algorithm positions nodes based on link relationships
- Nodes rendered as circles with size proportional to connection count
- Default node color follows the theme's accent color (purple in dark mode)
- Animated physics simulation -- nodes "settle" into position with spring-like forces

### Transparency & Glassmorphism Effects

**Built-in Translucency:**
| Theme | Opacity |
|-------|---------|
| Light | 0.6 |
| Dark | 0.75 |

Implemented via `backdrop-filter: blur(...)` CSS property.

### Marketing Site Design (obsidian.md)

- Dark background primary aesthetic (#171717 area)
- Purple/indigo accent: #8b5cf6
- Font: Inter with system fallbacks, weights 500/600/700
- Text sizes ranging from 0.75rem to 3.75rem
- Border-radius scale: 0.25rem (sm) to 1.5rem (3xl)
- Transitions: 150-300ms with cubic-bezier easing
- Gradient support using `linear-gradient` with **oklab color space**
- Staggered fade-in animations for hero elements

---

## 1.3 Shared "Premium" DNA

### What Makes Both Feel Clean and Polished

| Quality | How Notion Achieves It | How Obsidian Achieves It |
|---------|----------------------|------------------------|
| **Legibility** | Inter, warm grays, generous line-height | Inter/system fonts, high-contrast dark mode |
| **Focus** | Minimal chrome, centered content column | Dark-first UI, distraction-free editor |
| **Consistency** | 10-color system, 8px grid, block model | CSS variable system, consistent accent hue |
| **Craftsmanship** | Adjacency-based dynamic spacing | Deeply customizable theming engine |
| **Confidence** | Sparse UI implies "we got the defaults right" | Power-user features without clutter |
| **Restraint** | No gradients, minimal shadows in app | Single accent color, no decorative elements |

**Shared Patterns:**
- **Inter typeface** as shared foundation
- **Warm neutrals** over pure black/white (both avoid harsh contrast extremes)
- **Color as signal, not decoration** (restrained palettes)
- **Progressive disclosure** (UI elements appear on hover, sidebars collapse)
- **Whitespace as a first-class design tool**
- **Subtle micro-interactions** (150-300ms, cubic-bezier, opacity transitions)

---

## 1.4 App-to-Landing-Page Translation

**The Amplification Framework:** A marketing page is the app's design language "turned up to 11."

| Dimension | App (Volume: 5) | Marketing (Volume: 11) |
|-----------|-----------------|----------------------|
| **Typography scale** | 14-30px range | 14-64px range |
| **Color saturation** | Muted, functional | Vibrant, emotive |
| **Whitespace** | Optimized for content density | Cinematic, dramatic |
| **Animation** | Functional feedback (200ms) | Storytelling (scroll-driven, staggered, 300-500ms) |
| **Imagery** | Functional UI, icons | Product screenshots with polish |
| **Copy** | Instructional, neutral | Aspirational, benefit-driven |
| **Depth/Shadow** | Flat or minimal elevation | Layered, with obvious depth hierarchy |

### Quick-Reference: Notion Values
```
Brand:          #000000 (black), #FFFFFF (white)
Light BG:       #FFFFFF
Dark BG:        #191919
Light Text:     #373530
Dark Text:      #D4D4D4
Font:           Inter (400, 500, 700)
Content Width:  720px (default centered)
Grid:           8px base
Hover Timing:   200-300ms
```

### Quick-Reference: Obsidian Values
```
Brand Purple:          #8B5CF6
Accent HSL:            hsl(254, 80%, 68%)
Dark BG Primary:       #1e1e1e
Dark BG Secondary:     #262626
Dark Text Normal:      #dadada
Light BG Primary:      #ffffff
Light Text Accent:     #705dcf
Font (Editor):         Inter + system fallback
Base Font Size:        16px
Translucency (Dark):   0.75 opacity
```

---

# 2. Waitlist Page Design & Best Practices

## 2.1 Top Waitlist Page Examples

### Robinhood -- Commission-Free Trading
**The gold standard. 1 million signups before launch with zero marketing budget.**

- **Layout:** Extremely minimal single-page design with a single CTA button. Registration happened directly on the webpage.
- **Copy:** "Commission-free stock trading. Stop paying up to $10 for every trade."
- **CTA:** Single email input field. "Just an email. That's it."
- **Post-Signup:** Users saw their exact queue position and transparent steps to climb higher through referrals. Over 50% of signups came through social referrals.
- **Growth:** Day 1: 10,000. Week 1: 50,000. Year 1: 1 million. Each user brought 3 additional signups.
- **Key Insight:** Real-time ranking created progress tracking and competition; limited access waves generated urgency.

### Superhuman -- Premium Email Client
**180,000+ signups. Grew to over half a million.**

- **Copy:** "The fastest email experience ever made." Specific, benefit-driven claim.
- **Strategy:** Rather than eliminating barriers, Superhuman strategically added them. Each barrier served a purpose: waitlist created scarcity, survey collected product data, onboarding call was an initiation.
- **Premium positioning:** $30/month from day one attracted serious users.
- **Referral FOMO:** Existing customers could refer prospects to skip the waitlist. Constant referral match-making on Twitter and in real life.

### Harry's -- Premium Razors
**100,000 email signups in one week. 77% came from referrals.**

- **Two-page flow:** Page 1 "Harry's is coming" (mystery); Page 2 thank-you with referral opportunities.
- **Referral Tiers:** 5 refs = shaving cream, 10 = razor, 25 = full set, 50 = year supply
- **Results:** ~20,000 people sent ~65,000 referrals. Over 200 reached the 50-referral tier.

### Clubhouse -- Audio-Only Social Network
**10 million+ waitlist signups.**

- **"Velvet Rope" strategy:** Invite-only with 2-invite cap per user.
- **Celebrity amplification:** Elon Musk, Mark Zuckerberg, Oprah hosting rooms.
- **Cautionary Note:** 88% of participants abandoned. Downloads dropped from 10M to 900K in 2 months. Exclusivity drove signups but not retention.

### Other Notable Examples
- **Notion:** Community-driven ambassadors, educational content during waiting period
- **Monzo:** Combined email capture with investment interface, "golden ticket" system
- **Made In:** "GET VIP ACCESS" headline, only requires phone number
- **Miro:** Video-first approach, multiple CTAs at different scroll depths
- **Runway:** Interactive AI-generated visuals as the page's primary content
- **Glossier:** Instagram-style aesthetic, user-generated content as social proof

---

## 2.2 Conversion Rate Benchmarks

| Performance Level | Conversion Rate |
|---|---|
| Poor | Under 10% |
| Average | 10-20% |
| Good | 20-30% |
| Excellent | 30-40% |
| Exceptional | 40%+ |

---

## 2.3 Best Practices

### Email Capture Form Design
- Every additional field reduces conversion by 5-10%. **Stick to email-only.**
- Inline forms convert 30% better than sidebar forms
- Place primary form above the fold, repeat CTAs throughout
- "Get Early Access" beats "Submit" by 200%
- "Reserve My Spot" creates ownership feelings

### Social Proof Elements
1. **Signup counters** -- "Join 47 early adopters" beats no social proof
2. **Testimonials** with photos, names, professions
3. **Logo bars** below the hero section
4. **Press mentions**
5. Place social proof at the decision point -- where the customer decides to click

### Urgency and Scarcity
- Countdown timers for legitimate deadlines increase conversions by 30%
- Urgency tactics can increase rates by up to 332% in top implementations
- 69% of millennials experience FOMO; 60% make impulsive purchases because of it

### Mobile Optimization
- Over 60% of web traffic is mobile
- Large touch-friendly buttons, readable text without zooming
- Fast loading times, single-column layout for forms

---

## 2.4 Ideal Page Structure

### Section 1: Hero (Above the Fold)
- Visitors decide in **3-5 seconds** whether to stay
- Compelling headline + supporting subheadline (1-2 sentences)
- Primary CTA with email field
- Hero image, mockup, or short video
- Optional social proof line

### Section 2: Value Proposition / Benefits
- 3-4 key benefits (not features) with icons
- Focus on outcomes and pain points solved

### Section 3: Product Preview / How It Works
- Screenshots, mockups, or demo video
- 80% of visitors are more likely to read content with visuals
- Scroll-triggered animations show 30% longer session times

### Section 4: Social Proof
- Testimonials, signup counter, logos, press mentions
- Weave throughout, not just one section

### Section 5: Urgency/Scarcity
- Launch date/timeframe, limited spots messaging, queue position preview

### Section 6: Secondary CTA (Bottom)
- Repeat email capture with different copy angle
- "No spam, ever" reassurance

### Section 7: Footer
- Social links, privacy policy, contact info

### The Thank-You Page (CRITICAL)
- **100% view rate** -- the most critical viral conversion point
- Queue position display, unique referral link with sharing buttons
- Pre-written social posts, referral reward tiers, leaderboard
- Add noindex meta tag

---

## 2.5 Copywriting Patterns

### Headline Formulas
| Formula | Example |
|---|---|
| Problem/Solution | "Stop paying $10 per trade. Start investing for free." |
| Benefit-First | "The fastest email experience ever made." |
| Curiosity Gap | "The [category] that [unexpected benefit]" |
| Social Proof | "Join [number] [target audience] already using [product]" |
| Value Proposition | "Commission-free stock trading." |

**Key data:** After testing 150,000+ opt-in headlines, straightforward headlines outperformed creative alternatives **88% of the time.**

### CTA Button Copy (Ranked)
| CTA Text | Why It Works |
|---|---|
| "Get Early Access" | Implies exclusivity + benefit. Beats "Submit" by 200%. |
| "Reserve My Spot" | Creates ownership, increases commitment. |
| "Join the Waitlist" | Clear, direct, sets expectation. |
| "Claim Your Spot" | Urgency + ownership psychology. |

---

## 2.6 Referral/Viral Mechanics

### The Robinhood Model (Queue-Based)
1. User signs up with email only
2. Sees real-time position in queue
3. Receives unique referral link
4. Each referred friend moves referrer up
5. **Result:** 3x viral coefficient, 1M signups, $0 marketing budget

### The Harry's Model (Milestone-Based)
- 5 referrals = free shaving cream, escalating to 50 = year supply
- **Result:** 100K signups in one week, 77% from referrals

### Referral Reward Structures
| Reward Type | Best For |
|---|---|
| Queue advancement | Digital products, SaaS |
| Physical products at milestones | Consumer products |
| Feature access | SaaS, tools |
| Extended trials | Subscription products |
| Status/recognition | Community-driven products |

### Viral Coefficient Targets
- Above 1.0 = exponential growth
- Robinhood achieved 3x
- Referred customers show 37% higher retention, 4x more likely to refer others
- 83% of customers are willing to refer when satisfied

---

## 2.7 Waitlist Tools and Services

| Use Case | Tool | Pricing |
|---|---|---|
| Quick email collection | GetWaitlist | $15/mo |
| One-time cost, under 10K | LaunchList | $19-$79 lifetime |
| Gamified campaigns | KickoffLabs | $19-$199/mo |
| Revenue tracking referrals | Viral Loops | $35-$299/mo |
| Deep customization / beta | Prefinery | Tiered |
| Validation + discovery calls | WaitlistKit | Free-$29/mo |
| SaaS email with native waitlist | Loops | $79/mo |
| Full custom build | Resend (email API) + custom frontend | Free tier |

---

# 3. UI Component Libraries

## 3.1 shadcn/ui

### What It Is

shadcn/ui is a set of beautifully-designed, accessible components and a **code distribution platform**. This is NOT a traditional npm package. You run `npx shadcn@latest add button` and the actual source code gets placed in `components/ui/button.tsx`. You own it, modify it, extend it.

- **Website**: https://ui.shadcn.com
- **License**: MIT
- **Used by**: OpenAI, Sonos, Adobe, Vercel

### How It Works

| Traditional Library | shadcn/ui |
|---|---|
| `npm install package` | `npx shadcn@latest add button` |
| Component in `node_modules` | Component in `components/ui/button.tsx` |
| Cannot modify source | Full source code is yours |
| Updates via `npm update` | Re-run `add --overwrite` |

### Design Philosophy
1. **Open Code** -- Top layer is open for modification
2. **Composition** -- Common, composable interface
3. **Distribution** -- Flat-file schema + CLI
4. **Beautiful Defaults** -- Styled and ready to use
5. **AI-Ready** -- Readable code for AI tools

### Available Components (65+)

Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Drawer, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Input OTP, Item, Kbd, Label, Menubar, Native Select, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (toast), Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip, Typography

Built on **Radix UI** (accessibility) and **Tailwind CSS** (styling).

### Theming System

Uses **CSS variables with OKLCH color model** for perceptual uniformity:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
}
```

### Setup in New Project

```bash
# One-command init
pnpm dlx shadcn@latest init -t next

# Or add to existing project
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card dialog input
```

### Dark Mode Setup (Next.js)

```bash
npm install next-themes
```

```tsx
// components/theme-provider.tsx
"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

```tsx
// app/layout.tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
  {children}
</ThemeProvider>
```

### Best Components for Waitlist Page
- **Card** -- Content containers, feature cards
- **Button** -- CTAs, form submissions
- **Input** -- Email capture
- **Dialog** -- Modal confirmations, success messages
- **Badge** -- Status indicators ("Coming Soon", "Beta")
- **Toast/Sonner** -- Success notifications
- **Navigation Menu** -- Site nav
- **Sheet** -- Mobile nav drawer
- **Carousel** -- Feature showcases, testimonials

---

## 3.2 Aceternity UI

### What It Is

Animation-focused component library with **200+ components** built on React, Next.js, Tailwind CSS, and Motion (Framer Motion). Specializes in dramatic visual effects for landing pages.

- **Website**: https://ui.aceternity.com
- **Pricing**: 200+ free components; $199 lifetime for premium blocks

### How It Differs from shadcn/ui

| Aspect | shadcn/ui | Aceternity UI |
|---|---|---|
| **Focus** | Functional UI primitives | Animated visual effects |
| **Animation** | CSS transitions only | Heavy Framer Motion |
| **Use Case** | Full application UI | Landing pages, hero sections |
| **Complementary?** | Yes -- they work together | Yes |

### Full Component Catalog

**Background & Visual Effects (28 components):**
Dotted Glow Background, Background Ripple, Sparkles, Background Gradient, Gradient Animation, Wavy Background, Background Boxes, Background Beams, Background Beams With Collision, Aurora Background, Meteors, Glowing Stars, Shooting Stars, Vortex, Spotlight, Canvas Reveal Effect, SVG Mask Effect, Tracing Beam, Lamp Effect, Google Gemini Effect, Noise Background, Parallax Hero Images, and more

**Text Components (12):**
Text Generate Effect, Typewriter Effect, Flip Words, Text Hover Effect, Hero Highlight, Colourful Text, Encrypted Text, Text Reveal Card, and more

**Card Components (16):**
3D Card Effect, Evervault Card, Card Stack, Card Hover Effect, Wobble Card, Expandable Card, Card Spotlight, Infinite Moving Cards, Draggable Card, and more

**Scroll & Parallax (5):**
Parallax Scroll, Sticky Scroll Reveal, Macbook Scroll, Container Scroll Animation, Hero Parallax

**Navigation (10):**
Floating Navbar, Sidebar, Floating Dock, Tabs, Bento Grid, and more

**Forms & Inputs (4):**
Signup Form, Placeholders And Vanish Input, File Upload, Gooey Input

### Installation

```bash
npm i motion clsx tailwind-merge
npx shadcn@latest add @aceternity/background-beams-demo
npx shadcn@latest add @aceternity/spotlight
npx shadcn@latest add @aceternity/aurora-background
```

All components require `"use client"` directive.

### Key Code Examples

**Background Beams (Waitlist Hero):**
```tsx
"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function WaitlistHero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <input
          type="text"
          placeholder="your@email.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
```

**Placeholders And Vanish Input (Email Capture):**
```tsx
"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function WaitlistInput() {
  const placeholders = [
    "Enter your email address",
    "Join the waitlist today",
    "Get early access",
  ];
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={(e) => console.log(e.target.value)}
      onSubmit={(e) => { e.preventDefault(); console.log("submitted"); }}
    />
  );
}
```

### Best Components for Waitlist Page

**Hero:** Background Beams, Aurora Background, Spotlight, Lamp Effect, Hero Parallax
**Email Capture:** Placeholders And Vanish Input, Signup Form
**Text:** Text Generate Effect, Flip Words, Typewriter Effect, Colourful Text
**Visual Flair:** Meteors, Sparkles, Shooting Stars
**Navigation:** Floating Navbar
**Social Proof:** Bento Grid, Infinite Moving Cards, Animated Testimonials
**Buttons:** Moving Border, Hover Border Gradient

---

## 3.3 Magic UI

### Overview

**150+ free and open-source animated components.** Built with React, TypeScript, Tailwind CSS, and Motion. Follows the same copy-paste philosophy as shadcn/ui.

- **Website**: https://magicui.design
- **GitHub**: 20.5k+ stars
- **License**: MIT

### Key Components

**Buttons:** Shimmer Button, Shiny Button, Pulsating Button, Rainbow Button, Ripple Button
**Text:** Animated Gradient Text, Aurora Text, Morphing Text, Typing Animation, Word Rotate
**Borders:** Border Beam, Shine Border, Animated Beam
**Cards:** Magic Card, Neon Gradient Card, Bento Grid
**Device Mockups:** Safari, iPhone, Terminal, Android
**Data:** Number Ticker, Animated Circular Progress Bar
**Effects:** Particles, Meteors, Confetti, Globe, Dot Pattern, Grid Pattern, Retro Grid, Flickering Grid, Ripple
**Layout:** Dock, Marquee, File Tree, Avatar Circles, Orbiting Circles

### Installation

```bash
npx shadcn@latest add @magicui/shimmer-button
npx shadcn@latest add @magicui/border-beam
npx shadcn@latest add @magicui/marquee
npx shadcn@latest add @magicui/number-ticker
```

### Aceternity vs Magic UI

| Aspect | Magic UI | Aceternity UI |
|---|---|---|
| **Animation Style** | Subtle, polished micro-interactions | Bold, dramatic, cinematic |
| **Best For** | SaaS marketing, product showcases | Landing pages with "wow factor" |
| **Key Strengths** | Marquee, Number Ticker, Shimmer Buttons | Background effects, 3D cards, Spotlight |

### The Holy Trinity

```
shadcn/ui        = Structure (buttons, forms, cards, dialogs, inputs)
Aceternity UI    = Drama (backgrounds, spotlights, 3D effects, hero sections)
Magic UI         = Polish (shimmer buttons, number tickers, marquees, border beams)
```

All three use the same CLI (`npx shadcn@latest add @library/component`), the same copy-paste model, and React + TypeScript + Tailwind + Motion.

---

# 4. Frameworks & Technologies

## 4.1 Next.js (App Router)

### Latest Version

Next.js **16.2.1** (March 2026). Key evolution:

- **Next.js 15** (Oct 2024): React 19 support, caching changes, Turbopack default dev
- **Next.js 15.5** (Aug 2025): Turbopack builds beta, stable Node.js middleware, typed routes
- **Next.js 16** (Oct 2025): Cache Components with `"use cache"`, stable Turbopack, React Compiler, layout deduplication
- **Next.js 16.2**: ~87% faster startup vs 16.1, 200+ Turbopack fixes

### App Router vs Pages Router

The App Router is the **recommended approach for all new projects**:
- React Server Components by default (smaller bundles, faster loads)
- Nested layouts natively
- Data fetching colocated with components using async/await
- Native Suspense and streaming
- Early adopters report up to 40% faster performance

### Server Components vs Client Components

**Server Components** (default):
- Rendered exclusively on the server
- Code NOT included in JavaScript bundle
- Can directly access databases, file systems
- Best for: data fetching, layout, SEO content, static UI

**Client Components** (opt-in with `"use client"`):
- Required for interactivity or browser APIs
- Use when: `useState`, `useEffect`, `onClick`, event handlers

### Setting Up a New Project

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --turbopack
```

### Static Site Generation for Landing Pages

Pages without dynamic data are automatically statically generated. The landing page itself can be static while having dynamic API routes for waitlist signup -- instant page loads + server-side form handling.

### API Route Handlers for Waitlist

```typescript
// app/api/waitlist/route.ts
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email } = body

  if (!email) {
    return Response.json({ error: 'Email is required' }, { status: 400 })
  }

  // Save to database, send email...

  return Response.json({ message: 'Successfully joined!' }, { status: 201 })
}
```

### Middleware

Executes on every request before route handlers:
- Authentication checks
- A/B testing and feature flags
- Geolocation-based routing
- Rate limiting
- As of Next.js 15.5+: Node.js middleware is stable

### Image Optimization (next/image)

- Serves correctly sized images per device (WebP/AVIF)
- Prevents Cumulative Layout Shift automatically
- Native lazy loading, blur-up placeholders
- Use `priority` for above-the-fold hero images

### Font Optimization (next/font)

```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```
- Self-hosted at build time -- zero external network requests
- Zero layout shift, automatic subsetting

### Metadata & SEO

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Our Waitlist',
  description: 'Be the first to experience our product',
  openGraph: {
    title: 'Join Our Waitlist',
    images: ['/og-image.png'],
  },
}
```

### Deployment

| Option | Best For | Cost at Scale |
|--------|----------|---------------|
| **Vercel** | Zero-config, free tier, edge caching | $2-5K/mo at 500K users |
| **Docker** | Full control, Kubernetes | $200-500/mo at 500K users |
| **Static Export** | Simple CDN hosting | Minimal |

### Partial Prerendering (PPR)

Stable in Next.js 16. Static shell served instantly from edge (<100ms LCP), dynamic parts stream in parallel. Single HTTP request.

---

## 4.2 Three.js / React Three Fiber (R3F)

### What It Is

**Three.js** is a JavaScript library for 3D graphics in the browser using WebGL/WebGPU.

**React Three Fiber (R3F)** is a React renderer for Three.js -- declarative 3D scenes as JSX:

```tsx
"use client"
import { Canvas } from '@react-three/fiber'

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}
```

### Integration with Next.js

R3F requires `"use client"` because Three.js needs browser APIs:

```tsx
// components/Scene.tsx
"use client"
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return <Canvas>{/* 3D content */}</Canvas>
}

// app/page.tsx (Server Component -- works!)
import Scene from '@/components/Scene'
export default function Page() {
  return <><h1>Welcome</h1><Scene /></>
}
```

### Common 3D Effects for Landing Pages

- **Particle Systems**: Atmospheric backgrounds with thousands of floating particles
- **Floating Objects**: Animated shapes with `<Float>` from Drei
- **Animated Backgrounds**: Shader-based gradient meshes, noise-distorted surfaces
- **3D Text**: Extruded text using `<Text3D>` with lighting
- **Globe Visualizations**: Interactive 3D globes with data points
- **Scroll-Based Animations**: Drei's `<ScrollControls>`

### @react-three/drei -- Key Components

**Staging:** Environment, Stars, Sparkles, Float, Sky, Cloud, ContactShadows
**Abstractions:** Text, Text3D, Image, Billboard, GradientTexture, Trail
**Shaders:** MeshDistortMaterial, MeshWobbleMaterial, MeshReflectorMaterial, MeshTransmissionMaterial
**Controls:** OrbitControls, ScrollControls, PresentationControls
**Performance:** PerformanceMonitor, AdaptiveDpr, Preload, BakeShadows, Bvh

### @react-three/postprocessing -- Visual Effects

```tsx
<EffectComposer>
  <Bloom luminanceThreshold={1} intensity={1.5} />
  <Noise opacity={0.02} />
  <Vignette offset={0.1} darkness={1.1} />
</EffectComposer>
```

### Performance on Mobile

- Set different max pixel ratios: 1.5 mobile, 2.0 desktop
- Use `<PerformanceMonitor>` for adaptive quality
- Use `useDetectGPU()` from Drei for device detection
- Use `frameloop="demand"` for on-demand rendering
- LOD with `<Detailed>` for 30-40% frame rate improvement

### Lighter-Weight Alternatives

- **tsParticles**: Particle animations without full 3D
- **Lottie (@lottiefiles/dotlottie-react)**: Vector animations, 80% smaller than GIFs
- **Rive**: Interactive animations with state machines
- **CSS-only 3D**: `perspective`, `transform: rotate3d()` for simple effects
- **Spline**: Web-based 3D design tool exporting to React

---

## 4.3 Framer Motion (now "Motion")

### Important: Rebrand

`framer-motion` was rebranded to **`motion`** in late 2024:

```bash
npm install motion
```

```tsx
import { motion } from "motion/react"  // New
import { motion } from "framer-motion"  // Still works
```

### Core Capabilities

```tsx
// Declarative
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

// Springs
<motion.div animate={{ x: 100 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} />

// Gestures
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />

// Variants (stagger children)
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
```

### Scroll-Triggered Animations

```tsx
// whileInView
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
/>

// Parallax
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 500], [0, 150])
const opacity = useTransform(scrollY, [0, 300], [1, 0])
```

### Page Transitions

```tsx
<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    {children}
  </motion.main>
</AnimatePresence>
```

### Layout Animations

```tsx
<motion.div layout onClick={() => setExpanded(!expanded)} style={{ width: expanded ? 400 : 200 }} />
```

### Best Patterns for Landing Pages

1. **Staggered reveals** with `staggerChildren: 0.1`
2. **Fade-in when visible** with `whileInView` + `viewport={{ once: true }}`
3. **Interactive buttons** with `whileHover` + `whileTap`
4. **Parallax hero** with `useScroll` + `useTransform`

### Performance

- Stick to `transform` and `opacity` for 60fps
- Use `LazyMotion` with `domAnimation` (~15kb) for tree-shaking
- Use `useReducedMotion()` for accessibility

### Integration with Next.js App Router

Every file using Motion must have `"use client"`. Extract animated components into separate Client Component files, import into Server Component pages.

---

# 5. Backend & Infrastructure

## 5.1 MongoDB Atlas Setup

### Creating a Cluster

1. Sign up at mongodb.com/atlas
2. Create a free cluster (M0) -- select AWS/GCP/Azure region closest to users
3. Create a database user with `readWrite` privileges
4. Configure network access (IP whitelist)
5. Get connection string: `mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority`

### Free Tier (M0)

- **512 MB storage** (can store 1 million+ waitlist entries)
- Up to 500 connections
- ~100 operations/second
- No backups, no sharding, no Atlas Search
- One free cluster per project

### Security Best Practices

- Separate database users per environment (dev/staging/prod)
- Least-privilege roles
- Always use `mongodb+srv://` (TLS encrypted)
- Store credentials in environment variables
- Rotate passwords periodically

---

## 5.2 Mongoose with Next.js

### Connection Module (Singleton Pattern)

```typescript
// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

declare global {
  var mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
```

**Important:** Mongoose does NOT support Edge Runtime. Use `export const runtime = 'nodejs'`.

### Waitlist Schema

```typescript
// models/WaitlistEntry.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWaitlistEntry extends Document {
  email: string;
  name?: string;
  position: number;
  referralCode: string;
  referredBy?: string;
  referralCount: number;
  status: 'pending' | 'verified' | 'approved' | 'invited' | 'rejected';
  verificationToken?: string;
  tokenExpiresAt?: Date;
  verifiedAt?: Date;
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const WaitlistEntrySchema = new Schema<IWaitlistEntry>({
  email: {
    type: String, required: true, unique: true, lowercase: true, trim: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'],
  },
  name: { type: String, trim: true, maxlength: 100 },
  position: { type: Number, required: true, unique: true, min: 1 },
  referralCode: { type: String, required: true, unique: true, index: true },
  referredBy: { type: String, default: null, sparse: true, index: true },
  referralCount: { type: Number, default: 0, min: 0 },
  status: {
    type: String, enum: ['pending', 'verified', 'approved', 'invited', 'rejected'],
    default: 'pending', index: true,
  },
  verificationToken: { type: String, select: false },
  tokenExpiresAt: { type: Date, select: false },
  verifiedAt: Date,
  source: { type: String, default: 'website' },
  utmSource: String, utmMedium: String, utmCampaign: String,
  ipAddress: { type: String, select: false },
  userAgent: { type: String, select: false },
  metadata: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

WaitlistEntrySchema.index({ status: 1, createdAt: -1 });
WaitlistEntrySchema.index({ referralCount: -1 });
WaitlistEntrySchema.index({ position: 1 });

const WaitlistEntry: Model<IWaitlistEntry> =
  mongoose.models.WaitlistEntry ||
  mongoose.model<IWaitlistEntry>('WaitlistEntry', WaitlistEntrySchema);

export default WaitlistEntry;
```

---

## 5.3 API Route Handler

```typescript
// app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import WaitlistEntry from '@/models/WaitlistEntry';
import { nanoid } from 'nanoid';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const { email, name, referredBy, source, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Added!' }, { status: 200 });
    }

    // Validate
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const sanitizedEmail = email.toLowerCase().trim();

    // Check duplicate
    const existing = await WaitlistEntry.findOne({ email: sanitizedEmail });
    if (existing) {
      return NextResponse.json({
        error: 'Already on the waitlist',
        position: existing.position,
        referralCode: existing.referralCode,
      }, { status: 409 });
    }

    // Generate code & position
    const referralCode = nanoid(8);
    const lastEntry = await WaitlistEntry.findOne().sort({ position: -1 }).select('position').lean();
    const position = (lastEntry?.position ?? 0) + 1;

    // Validate referral
    let validReferral = referredBy
      ? await WaitlistEntry.findOne({ referralCode: referredBy })
      : null;

    // Create entry
    const entry = await WaitlistEntry.create({
      email: sanitizedEmail,
      name: name?.trim().slice(0, 100),
      referralCode,
      referredBy: validReferral ? referredBy : null,
      position,
      source: source || 'website',
    });

    // Increment referrer count
    if (validReferral) {
      await WaitlistEntry.findByIdAndUpdate(validReferral._id, { $inc: { referralCount: 1 } });
    }

    return NextResponse.json({
      success: true,
      data: { position, referralCode, totalEntries: position },
    }, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json({ error: 'Already on the waitlist' }, { status: 409 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
```

### Zod Validation

```typescript
import { z } from 'zod';

export const waitlistSignupSchema = z.object({
  email: z.string().email().max(254).transform((e) => e.toLowerCase().trim()),
  name: z.string().max(100).transform((n) => n.trim()).optional(),
  referredBy: z.string().max(20).optional().nullable(),
  source: z.enum(['website', 'twitter', 'producthunt', 'referral', 'other']).default('website'),
  honeypot: z.string().max(0).optional(),
});
```

### Rate Limiting (Upstash Redis)

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// 5 requests per 60 seconds per IP
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
  prefix: 'waitlist',
});
```

---

## 5.4 Email Integration

### Resend (Recommended)

```bash
npm install resend
```

- **Free tier:** 3,000 emails/month (permanent)
- Native React Email support (JSX templates)
- Setup time: ~8 minutes
- 96.1% Gmail deliverability

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Tilde <hello@tilde.fyi>',
  to: [email],
  subject: `You're #${position} on the waitlist!`,
  react: WaitlistWelcomeEmail({ name, position, referralCode, referralLink }),
});
```

### Provider Comparison

| Feature | Resend | SendGrid | Nodemailer |
|---------|--------|----------|------------|
| Free tier | 3,000/month forever | 100/day for 60 days | Unlimited (self-hosted) |
| React templates | Native | No | No |
| DX / setup time | ~8 minutes | ~45 minutes | Varies |
| Best for | Modern Next.js apps | Enterprise, high volume | Self-hosted |

### Double Opt-In Flow

1. User signs up -> entry created with `status: 'pending'` + `verificationToken`
2. Verification email sent with unique link
3. User clicks link -> server validates token, sets `status: 'verified'`
4. Welcome email with referral code sent

---

## 5.5 Security

### Environment Variables

```bash
# .env.local -- NEVER commit
MONGODB_URI=mongodb+srv://...
RESEND_API_KEY=re_xxxx
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=AXxxxx
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAA...
TURNSTILE_SECRET_KEY=0x4AAA...
NEXT_PUBLIC_APP_URL=https://tilde.fyi
```

Use `NEXT_PUBLIC_` prefix ONLY for browser-safe values.

### Layered Defense Strategy

1. **Honeypot field** -- catches simple bots, zero user friction
2. **Rate limiting** -- prevents brute force (Upstash Redis)
3. **Cloudflare Turnstile** -- catches sophisticated bots (free, privacy-focused)
4. **Email verification (double opt-in)** -- confirms real humans

### Cloudflare Turnstile (CAPTCHA)

```bash
npm install @marsidev/react-turnstile
```

Frontend: `<Turnstile siteKey={...} onSuccess={setToken} />`

Backend verification:
```typescript
const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
  method: 'POST',
  body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }),
});
const data = await response.json();
return data.success;
```

### NoSQL Injection Prevention

```typescript
// Always validate types
if (typeof email !== 'string') return error;

// Use Zod for strict validation
const schema = z.object({ email: z.string().email() });

// Strip MongoDB operators
input.replace(/[\$\.]/g, '');
```

---

## 5.6 Recommended Stack Summary

| Component | Choice | Why |
|-----------|--------|-----|
| **Framework** | Next.js 16 (App Router) | SSG + API routes, Turbopack, React 19 |
| **Styling** | Tailwind CSS | Zero-runtime, utility-first |
| **UI Components** | shadcn/ui + Aceternity + Magic UI | Structure + Drama + Polish |
| **Animations** | Framer Motion (motion) | Scroll-triggered, gestures, springs |
| **3D (optional)** | React Three Fiber + Drei | Particle systems, floating objects |
| **Database** | MongoDB Atlas (Free Tier) | 512MB free, managed |
| **ODM** | Mongoose | Schema validation, TypeScript |
| **Validation** | Zod | Type-safe, reusable schemas |
| **Email** | Resend | React templates, 3K/month free |
| **Rate Limiting** | Upstash Redis | Serverless-compatible |
| **CAPTCHA** | Cloudflare Turnstile | Free, privacy-focused |
| **Referral Codes** | nanoid (customAlphabet) | Tiny, secure, customizable |
| **Deployment** | Vercel | Zero-config, free tier, edge |

---

## Sources

### Design
- [Notion Colors: All Hex Codes](https://matthiasfrank.de/en/notion-colors/)
- [Notion Color Code Hex (Dark/Light Mode)](https://www.notionavenue.co/post/notion-color-code-hex-palette)
- [Obsidian Default Theme Colors](https://publish.obsidian.md/hub/04+-+Guides,+Workflows,+&+Courses/Guides/Default+Obsidian+Theme+Colors)
- [Obsidian CSS Variables](https://docs.obsidian.md/Reference/CSS+variables/Foundations/Colors)
- [Obsidian Typography](https://docs.obsidian.md/Reference/CSS+variables/Foundations/Typography)
- [Notionpresso CSS Structure Guide](https://notionpresso.com/en/docs/customization-guide/css-structure-and-styling)
- [Inter Typeface](https://rsms.me/inter/)

### Waitlist Best Practices
- [Flowjam: 10 High-Converting Pre-Launch Designs](https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours)
- [Moosend: Waitlist Landing Page Examples](https://moosend.com/blog/waitlist-landing-page/)
- [Waitlister: Optimization Guide 2026](https://waitlister.me/growth-hub/guides/waitlist-landing-page-optimization-guide)
- [Viral Loops: Robinhood Case Study](https://viral-loops.com/blog/robinhood-referral-got-1-million-users/)
- [Prefinery: Harry's Pre-Launch Campaign](https://www.prefinery.com/blog/referral-programs/prelaunch-campaign/harrys/)

### UI Libraries
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Aceternity UI Components](https://ui.aceternity.com/components)
- [Magic UI Components](https://magicui.design/docs/components)

### Frameworks
- [Next.js 16 Blog](https://nextjs.org/blog/next-16)
- [React Three Fiber](https://r3f.docs.pmnd.rs/)
- [Drei Documentation](https://drei.docs.pmnd.rs/)
- [Motion for React](https://motion.dev/docs/react)

### Backend
- [Mongoose: Using with Next.js](https://mongoosejs.com/docs/nextjs.html)
- [MongoDB Atlas Free Tier Limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/)
- [Resend: Send with Next.js](https://resend.com/docs/send-with-nextjs)
- [Upstash Rate Limiting](https://upstash.com/blog/nextjs-ratelimiting)
- [Cloudflare Turnstile + Next.js](https://hellokellyco.com/blog/cloudflare-turnstile-nextjs-15)
