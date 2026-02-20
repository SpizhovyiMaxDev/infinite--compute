# Figma hover states (future implementation)

Reference for hover/interaction states from the Infinite Compute Figma file. Use when adding CSS/JS hover behavior to match design.

**Figma file:** `RNc4r09J1oV0nFPIO47FPF` (Infinite Compute — web)

---

## 1. Any Model section — radar/card hover (node `451-6275`)

**Context:** The “25% Lower TCO” / “Any model. Any agent.” section with the radar visualization.

### Default state
- Gradient background (dark bluish‑purple top → lighter blue bottom), subtle grid texture.
- “25% Lower TCO” badge bottom-left; radar chart card(s) with “Radar”, “0/5 +”, “Companies” / “Technology” tags, “Macro Environment”, “Show Details” button.

### Hover / active overlay state
- **Background:** Section gets a **translucent dark purple overlay**. Existing content (gradient, badge, radar cards) stays visible but **dimmed and blurred** (content pushed to background).
- **Foreground:** Design tokens include **blur effect** `FOREGROUND_BLUR, radius: 5` for the non-focused area.
- **Brought to focus (on top of overlay):**
  - Small **dark blue square** with white outline icon (box/package) near top center.
  - **Headline:** “Any model. Any agent.” (large, white).
  - **Body:** “Deploy OpenAI, Llama, Mistral, DeepSeek, or your own custom models. Kubernetes-native infrastructure with auto-scaling”.
  - **CTA:** “Learn More” — **bright green** button (`surface/accent`: `#13FF89`), slightly rounded, white text; cursor shown over button to indicate hover.

### Tokens (from variable defs)
- `surface/accent`: `#13FF89` (CTA green)
- `text/on-surface`: `#FFFCF8`
- `surface/primary-dark`: `#00002B`
- Effect: `FOREGROUND_BLUR`, radius `5`

### Implementation notes
- Use overlay (e.g. `::before` or a div) with dark purple, reduced opacity, and `backdrop-filter: blur(5px)` (or equivalent) to dim/blur background.
- Ensure CTA stays above overlay and uses `#13FF89` for background on hover.
- Optional: use `aria-expanded` / `aria-pressed` if this is a toggle.

---

## 2. Product tabs — “Explore Platform” button (node `451-6793`)

**Context:** Tabbed product section (Cloud | Inference API | Access). Left panel = image/visual; right panel = copy + partner logos + pagination.

### Tab bar
- **Active tab:** Dark blue/indigo background, white text (e.g. “Inference API”).
- **Inactive tabs:** Light (white/off‑white) background, dark text.

### Left panel (image) — button hover
- **Default:** Image (e.g. house/architecture) with gradient/pixel overlay (darker green‑blue top → bright green bottom). Centered button: “Explore Platform”.
- **Hover:** “Explore Platform” button in **bright green** (same `#13FF89` accent), cursor over button. Clear visual feedback for hover.

### Right panel (content)
- Dark blue/indigo background.
- Category: green square bullet + “Managed Cloud”.
- Heading: “Full Control Without Infrastructure Overhead”.
- Body: “Deploy OpenAI, Llama, Mistral, DeepSeek, or your own custom models. Kubernetes-native infrastructure with auto-scaling” (model names can be links/emphasized).
- Partner logos: 5 placeholders in **2 rows** (2 top, 3 bottom); “MISSION TOP FIVE” style.
- Pagination: “01–03” and “Next →” for next tab/slide.

### Tokens
- `surface/accent`: `#13FF89` (button hover)
- `surface/primary-dark`: `#00002B`, `surface/tertiary-dark`: `#08082D` (dark panels)
- `text/on-surface`: `#FFFCF8`
- `border/on-surface`: `#FFFCF8`

### Implementation notes
- “Explore Platform” hover: background `#13FF89`, ensure contrast for text (e.g. dark text or white depending on design).
- Tab active state: dark background (`#00002B` or `#08082D`), white text.
- Use `aria-selected` on tab buttons; optional `:hover` and `:focus-visible` for keyboard.

---

## Summary table

| Location              | Element              | Hover / state treatment                          | Accent color  |
|-----------------------|----------------------|---------------------------------------------------|---------------|
| Any Model section     | Radar/card area      | Overlay: dim + blur (radius 5); CTA “Learn More”   | `#13FF89`     |
| Any Model section     | “Learn More” CTA     | Green button, cursor feedback                     | `#13FF89`     |
| Product tabs          | “Explore Platform”   | Green button                                      | `#13FF89`     |
| Product tabs          | Tab (active)         | Dark blue/indigo bg, white text                   | —             |

Use these specs when adding hover styles to `AnyModelSection.tsx`, `ProductTabs.tsx`, and related components.

---

## 3. Testimonials section — globe marker hover (node `453-2584`)

**Context:** “Testimonials” section with 3D wireframe globe (left) and stats/CTA panel (right).

### Left panel — globe interaction
- **Visual:** 3D wireframe globe with latitude/longitude grid; landmasses with scattered **green glowing dots**; small bright green **"+"** icons on landmasses (interactive markers).
- **Hover state:** When hovering over a "+" marker, a **dark grey rectangular popup** appears with:
  - **Title:** Location name (e.g. “USA”) in white, larger font.
  - **Data (two columns):** e.g. “Dollars Earned”: “$1.5 Gazzilion”, “Total transactions”: “890,638,541”, “States Served”: “160+”.
- **Cursor:** White pointer over the "+" icon indicates hover.

### Right panel (static)
- Icon (person/building outline in rounded white border).
- Heading: “Join millions of humans in 160 countries with us”.
- Stats list (same format as popup, two columns).
- **CTAs:** “Learn More” (dark grey button), “Explore Platform” (bright green `#13FF89`).

### Tokens
- `surface/accent`: `#13FF89` (markers, primary CTA)
- `surface/primary-dark`: `#00002B`, `surface/tertiary-dark`: `#08082D`
- `text/on-surface`: `#FFFCF8`, `text/on-surface-secondary`: `#858396`

### Implementation notes
- Use `aria-haspopup="true"` (or tooltip pattern) for "+" markers; show popup on hover/focus with location name and stats.
- Ensure popup is keyboard-dismissable and has `role="tooltip"` or similar.

---

## 4. Hero — carousel “Drag” control (node `447-2046`)

**Context:** Full hero with “Managed Cloud” eyebrow, headline/subtext, and horizontal content panels.

### Content panels (middle)
- **Three horizontal grey panels** (carousel/cards); left and middle fully visible, right partially visible.
- **“Drag” control:** Small white capsule with dark border, left/right arrow icons; **hand cursor** over the right arrow indicates drag/swipe. Implies panels are draggable or navigable (carousel).

### Copy
- Eyebrow: “Managed Cloud”.
- Headline + subtext: “From power to tokens, infrastructure that scales with your ambition. Deploy any model, at any scale, with predictable pricing and zero egress fees.”
- Bottom paragraph: “Deploy OpenAI, Llama, Mistral, DeepSeek, or your own custom models. Kubernetes-native infrastructure with auto-scaling”.
- **CTAs:** “Learn More” (dark blue), “Explore Platform” (green, right arrow icon).

### Background
- Blue gradient (lighter top-left → deeper indigo bottom-right), vertical pixelated/striped texture.

### Implementation notes
- Carousel: support drag (pointer/touch) and arrow clicks; match “Drag” pill styling for future hover (e.g. subtle scale or border on hover).

---

## Product tabs — Inference API tab content (node `451-7424`)

**Context:** Same tabbed section; this frame shows **“Inference API”** as the active tab (for copy and layout reference).

### Tab labels (left to right)
- “Cloud”, “**Metal Access**”, “Inference API”. (Note: “Metal Access” not “Access” in this frame.)

### Inference API tab content
- **Image (left, ~50%):** Server room hallway, dark racks, green/blue activity lights, reflective floor. Alt: “A modern server room hallway with rows of dark racks displaying green and blue activity lights, reflected on a polished, bright floor.”
- **Content (right, ~50%):** Dark blue panel.
  - Category: green square + “Inference API”.
  - Heading: “**Intelligence on Demand**”.
  - Body: “Production-ready endpoints for Llama 3.3, Mistral, DeepSeek, and frontier models. Automatic scaling handles traffic spikes. No GPU management, no surprise bills—just intelligence on demand.” (Llama 3.3, Mistral, DeepSeek as links.)
  - Partner logos: **6 placeholders**, **2 rows × 3 columns**.
  - Pagination: “[02-03]” with “← Prev” and “Next →”.

Use this for `ProductTabs.tsx` copy and to add a “Metal Access” tab variant if the design uses it.

---

## Other frames (reference only)

| Node      | Section / use |
|-----------|----------------|
| `447-1946` | Hero variant — light: “Managed Cloud”, single headline block (“From power to tokens…”), light beige bg `#FBF9F7`, no CTAs. |
| `447-1957` | Hero variant — dark: same copy; top light, lower diagonal gradient (dark → white-blue → blue-black), vertical blurred stripes. |
| `447-1517` | Scale/control blocks: 3 rows — (1) “Multi-Gigawatt Pipeline Across North America” + “Scale” badge; (2) “Factory-Built, Field-Deployed in Weeks” + “Control”; (3) “Vertically Integrated. Completely Controlled.” Dark blue panels, [01-03] pagination. |

---

## Homepage-desktop node index

Nodes documented so far (add more when you have “all Figma design for homepage-desktop” links):

| Node      | Section / component      | Hover / interaction |
|-----------|--------------------------|----------------------|
| `447-3583` | Page (navbar + full page) | —                    |
| `447-3584` | (child)                  | —                    |
| `451-6275` | Any Model                | Overlay + “Learn More” |
| `451-6793` | Product tabs             | “Explore Platform”   |
| `451-7424` | Product tabs             | Inference API tab content |
| `453-2584` | Testimonials             | Globe “+” popup     |
| `447-2046` | Hero                     | Carousel “Drag”      |
| `447-1946` | Hero (light)             | —                    |
| `447-1957` | Hero (gradient)          | —                    |
| `447-1517` | Scale/control blocks     | —                    |

When you have the full set of homepage-desktop frame links, share them and this index can be extended so every section has a node ID for design-to-code and hover specs.
