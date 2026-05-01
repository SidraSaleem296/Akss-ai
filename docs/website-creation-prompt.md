# AKSS AI Website Creation Prompt

## Paste-Ready Master Prompt

```text
Create a premium marketing website for AKSS AI inside this existing React + Vite + Tailwind project.

Brand and business context:
- AKSS AI is a women-led AI product studio based in Pakistan.
- The company builds secure RAG systems, AI chatbots, workflow automations, custom GenAI SaaS products, and UI/UX-led digital tools for growing businesses.
- The site must feel current, cinematic, glassy, premium, and conversion-focused.
- Use the content direction from /Users/sidra.saleem/Documents/Codes/Akss AI/Akss-ai/docs/website-content-doc.md

Core design direction:
- Follow the exact structural rhythm of the provided reference video: a large floating rounded rectangular stage centered on a soft atmospheric background, with each major homepage section feeling like a new scene inside the same premium product film.
- Preserve the same visual architecture as the reference:
  - giant centered floating card
  - thick outer breathing space around the card
  - soft luminous glow around the card edges
  - compact rounded top navigation embedded inside the card
  - alternating dark and light interior scenes
  - large headline-led sections
  - split feature layouts
  - product or capability cards
  - FAQ accordion scene
  - final CTA scene
- Do not copy the original brand content, logo, or product. Translate the layout system into AKSS AI's brand and messaging.

Visual style:
- Blue-led glassmorphism with purple support and teal accents.
- Primary color: #1A237E
- Signature support: #4C2FCF
- Accent: #00A896
- Soft background: #F4F6FA
- Dark neutral: #111827
- Replace the orange glow from the reference with layered midnight blue, indigo, purple, and cyan glow.
- The outer page background should feel atmospheric and cinematic, not flat:
  - dark charcoal to blue-black gradient
  - blurred radial light blooms
  - subtle volumetric glow
  - very soft texture or noise
- The main stage card should feel like a floating glass object:
  - 28px to 40px rounded corners
  - subtle translucent border
  - layered shadows
  - background blur where appropriate
  - restrained internal reflections
- The design should feel high-end and cool, but still readable and business-credible.

Typography:
- Use Sora for headings.
- Use Inter for body copy.
- Large, confident headlines with compact tracking.
- Body text should remain clean and highly legible.

Homepage scene order:

1. Hero scene
- Dark floating card interior.
- Small pill eyebrow.
- Large centered headline using AKSS AI messaging.
- Supporting paragraph.
- Two CTAs.
- Build a custom AKSS AI hero visual inspired by the reference:
  - central AI core or orb
  - connected nodes or capability chips around it
  - animated data lines traveling between nodes
  - subtle spotlight sweep across the top right
- Add an off-card AKSS mark or monogram anchored near the lower-left of the overall canvas, similar to the framing style in the reference.

2. Problem-to-solution scene
- Still inside the floating stage system.
- Use a dark scene with split layout.
- Left side: core pain points businesses face.
- Right side: one or two elevated glass cards showing AKSS AI capabilities, such as secure RAG and workflow automation.
- Add animated connector lines and soft pulse states.

3. Experience or capabilities scene
- Shift into a light scene while keeping the same floating-card composition.
- Centered heading.
- A row of service chips or capability badges.
- Large glass panel below showing a stylized AKSS AI product interface or workflow playground.
- This section should echo the white reference scene but be adapted to AKSS AI.

4. Industries or use-cases scene
- Light scene with a structured grid.
- Show industries like e-commerce, education, clinics, startups, and operations-heavy teams.
- Use elegant visual markers, line maps, or abstract topology instead of generic icons everywhere.

5. Solutions grid scene
- Return to a dark scene.
- Display 6 polished solution cards in a 2x3 grid.
- Cards should feel glossy, slightly elevated, and softly illuminated.
- Keep hover motion subtle and premium.

6. Why AKSS AI scene
- Showcase differentiators:
  - women-led studio
  - custom workflow-first builds
  - human-in-the-loop quality
  - secure-by-design thinking
  - design plus development under one roof
- Use layered cards or staggered columns, not a generic icon list.

7. FAQ scene
- Dark accordion section inside the floating card system.
- Large section heading.
- Spacious rounded accordion items.
- Smooth open/close motion with height animation and opacity fade.

8. Final CTA scene
- Strong closing statement.
- Clear primary CTA.
- The final scene should feel luminous, calm, and high-conviction.

Motion and interaction:
- Use GSAP as the primary animation system.
- Use @gsap/react with useGSAP() for React cleanup and scoping.
- Use ScrollTrigger for scene reveals, pinned transitions where helpful, and scroll-linked glow or parallax behavior.
- Use SplitText for headline reveals where appropriate.
- Build motion intentionally, not noisily.
- Recommended motion ideas:
  - floating card fade and scale entrance
  - split-text headline reveal
  - spotlight sweep across dark panels
  - animated connector lines between nodes
  - chip and card stagger reveals
  - glow parallax on scroll
  - accordion open and close with polished easing
- Respect prefers-reduced-motion.
- Keep performance strong on laptop and mobile.

GSAP implementation guidance:
- Install and register only the plugins actually used.
- Prefer gsap timelines over scattered one-off tweens.
- Scope animations with useGSAP() or gsap.context() so cleanup is automatic in React.
- Use ScrollTrigger for reveal choreography, not for gimmicks.
- Keep scene transitions smooth and deliberate.

Layout and responsiveness:
- Desktop should feel like the reference: a floating large stage centered within a cinematic outer canvas.
- On tablet and mobile, preserve the floating-card identity but simplify spacing and stack content naturally.
- The site must still feel premium on smaller screens, not like a collapsed desktop layout.
- Keep tap targets large and typography controlled.

Creative rules:
- Avoid stock-template SaaS visuals.
- Avoid generic AI cliches like random robot heads, floating binary, or neon overload.
- Avoid flat white sections with no atmosphere.
- Avoid overly purple visuals; blue should lead, purple should support.
- Use glass, glow, depth, and contrast with discipline.

Technical notes:
- Work inside the existing project structure.
- Prefer reusable React sections or components.
- Keep styling maintainable with Tailwind and CSS variables for the brand palette.
- If needed, add a small utility layer for gradients, glow surfaces, and glass panels.
- Use semantic HTML and accessible contrast.

Target outcome:
- The final website should look like a custom high-end AI studio site that borrows the exact cinematic layout logic of the reference video, but is fully re-authored for AKSS AI's brand, business, and messaging.
- It should feel modern enough to impress startup founders and serious enough to win business clients.
```

## Recommended GSAP Stack

- `gsap`
- `@gsap/react`
- `ScrollTrigger`
- `SplitText`

Optional only if genuinely useful:

- `Observer`

## Why These GSAP Pieces Fit

- `ScrollTrigger` is the right choice for scroll-based scene choreography and staged reveals.
- `SplitText` is useful for polished headline entrances and masked text animation.
- `useGSAP()` or `gsap.context()` helps keep React animation setup and cleanup safe.

## Official GSAP References

- GSAP overview: https://gsap.com/docs/v3/
- Installation: https://gsap.com/docs/v3/Installation
- Plugins overview: https://gsap.com/docs/v3/Plugins/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- SplitText: https://gsap.com/docs/v3/Plugins/SplitText/
- `gsap.context()` with React note: https://gsap.com/docs/v3/GSAP/gsap.context%28%29/

## Notes For The Future Coding Pass

- Keep the structure of the floating reference layout.
- Re-author all visuals and content for AKSS AI rather than copying the source site.
- Use the homepage content in `website-content-doc.md` as the main content source.
- If the site is rebuilt page by page later, start with the homepage because the reference language is strongest there.
