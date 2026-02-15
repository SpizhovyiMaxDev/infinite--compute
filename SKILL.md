# infinite-compute-hero

> Development skill for Infinite Compute Hero section with React, TypeScript, GSAP animations, and sticky video backgrounds

## Quick Start

Install dependencies:

```bash
npm install gsap lucide-react
```

## Project Structure

```
src/components/
├── sections/BareMetal/sections/Hero/Hero.tsx
└── ui/
    ├── StatCard.tsx
    └── Navigation.tsx
```

## Core Features

### Sticky Video Background

- Video sticks to viewport, syncs playback to scroll
- GSAP ScrollTrigger for scrubbing effect
- 40% opacity with gradient overlay

### Page Load Animations (GSAP Timeline)

1. Badge appears (0.3s delay)
2. Heading spans slide up individually (stagger 0.15s)
3. Buttons fade in (1.0s delay)
4. Bottom stats slide up (1.2s delay)

### Scroll-Triggered Animations

1. Second heading slides up on scroll into view
2. Stats cards (4x) stagger animation on scroll

### Fixed Navigation

- Desktop: horizontal menu
- Mobile: hamburger → slide-in drawer
- Backdrop blur effect

## Code Patterns

### GSAP Setup

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animations here
  }, sectionRef);
  return () => ctx.revert();
}, []);
```

### Video Scroll Sync

```typescript
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: "bottom top",
  onUpdate: (self) => {
    video.currentTime = video.duration * self.progress;
  },
});
```

### Scroll-Triggered Element

```typescript
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});
```

### Accessibility

```typescript
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  gsap.set(elements, { opacity: 1, y: 0 });
  return;
}
```

## TypeScript Types

```typescript
const videoRef = useRef<HTMLVideoElement>(null);
const sectionRef = useRef<HTMLElement>(null);
const headingSpansRef = useRef<(HTMLSpanElement | null)[]>([]);
const statsRef = useRef<(HTMLDivElement | null)[]>([]);
```

## Styling (Tailwind)

### Responsive Text

```typescript
className = "text-[clamp(2.5rem,6vw,5.5rem)]";
```

### Colors

- Primary: `bg-green-400`, `bg-green-500`
- Backgrounds: `bg-black`, `bg-zinc-900`, `bg-zinc-800`
- Text: `text-white`, `text-zinc-200`, `text-zinc-400`

## Common Tasks

### Add Scroll Animation

```typescript
const newRef = useRef<HTMLDivElement>(null);

gsap.from(newRef.current, {
  scrollTrigger: { trigger: newRef.current, start: "top 80%" },
  opacity: 0,
  y: 50,
  duration: 1,
});
```

### Change Video

```typescript
<video ref={videoRef}>
  <source src="/your-video.mp4" type="video/mp4" />
</video>
```

### Adjust Timing

- Delays: Around line 75-100 in Hero.tsx
- Stagger: `stagger: 0.15`
- Duration: `duration: 0.8`
- Easing: `ease: "power3.out"`

## Debugging

### Animations not working

1. Check `npm list gsap`
2. Verify refs attached: `console.log(ref.current)`
3. Check reduced motion is disabled
4. Look for console errors

### Video issues

1. Verify path: `/path/to/video.mp4`
2. Format: MP4 H.264
3. Add handler: `onError={(e) => console.error(e)}`
4. Check duration: `console.log(video.duration)`

## Performance

- Target: 60fps animations
- GPU-accelerated: `transform`, `opacity` only
- Video: < 10MB, 1920x1080, 2-4 Mbps
- Lighthouse: > 90

## Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "lucide-react": "latest"
  }
}
```

## Resources

- GSAP Docs: https://greensock.com/docs/
- ScrollTrigger: https://greensock.com/scrolltrigger/
- Lucide Icons: https://lucide.dev/
- Free Videos: Pexels, Mixkit, Pixabay
