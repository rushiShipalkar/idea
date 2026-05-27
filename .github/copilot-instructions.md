<!-- SPECKIT START -->

## Current Implementation Plan

For the IDEIA LLC corporate brochure website feature:

- **Specification**: [specs/001-corporate-brochure-website/spec.md](../specs/001-corporate-brochure-website/spec.md) — 60 FRs, 7 user stories, complete requirements
- **Implementation Plan**: [specs/001-corporate-brochure-website/plan.md](../specs/001-corporate-brochure-website/plan.md) — Technical architecture, project structure, Phase 1 design
- **Research**: [specs/001-corporate-brochure-website/research.md](../specs/001-corporate-brochure-website/research.md) — Technology decisions, best practices, alternatives evaluated
- **Data Model**: [specs/001-corporate-brochure-website/data-model.md](../specs/001-corporate-brochure-website/data-model.md) — Entities, relationships, validation rules, state management
- **Quickstart**: [specs/001-corporate-brochure-website/quickstart.md](../specs/001-corporate-brochure-website/quickstart.md) — Local dev setup, component workflow, troubleshooting
- **Contracts**: [specs/001-corporate-brochure-website/contracts/](../specs/001-corporate-brochure-website/contracts/) — TypeScript type definitions, API schemas, component props
- **Constitution**: [.specify/memory/constitution.md](.specify/memory/constitution.md) — 12 Core Principles governing all development

### Technology Stack

- **Frontend**: React 18+ (functional components, hooks)
- **Styling**: Tailwind CSS v3+ (utility-first only, no custom CSS)
- **Build**: Vite 5.x (fast dev server, optimized builds)
- **State**: Component-level + React hooks (no Redux needed)
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router v6 (optional for v1, anchor-based nav for MVP)
- **Testing**: Vitest + React Testing Library + Playwright
- **Deployment**: Vercel or Netlify (automatic on push to main)
- **TypeScript**: Strict mode enabled

### Development Principles

**Core Mandates** (from Constitution):
1. ✅ Clean, modern, corporate UI — No ornate styling; clarity over decoration
2. ✅ Readability & WCAG AA compliance — 4.5:1 contrast, semantic HTML, keyboard navigation
3. ✅ React + Tailwind best practices — Functional components, utility-first styling only
4. ✅ Fully responsive (mobile-first) — 320px, 768px, 1024px+ breakpoints
5. ✅ Simplicity over complexity — Minimal animations, CSS transitions, no heavy JS
6. ✅ Performance & SEO — Lighthouse ≥90, FCP/LCP ≤2.5s, CLS <0.1
7. ✅ Consistent design system — All tokens in Tailwind config (8px spacing grid)
8. ✅ Trust & security language — Specific claims, no hype, enterprise aesthetic
9. ✅ Component library — Reusable components with TypeScript props, semantic versioning
10. ✅ Brand consistency — Content review gate, visual coherence, aligned CTAs
11. ✅ Analytics foundation — GA4 tracking, conversion events, privacy-compliant
12. ✅ Security & privacy — HTTPS, CSP headers, GDPR/CCPA compliance, form encryption

### Project Structure

```
src/
├── components/
│   ├── common/       # Button, Card, Input, Container, etc.
│   ├── layout/       # Header, Footer, Navigation, MobileMenu
│   ├── sections/     # Hero, About, Services, Leadership, Contact
│   └── features/     # ServiceCard, Form, FeatureCard, etc.
├── pages/            # Home, About, Services, Contact, Privacy, 404
├── hooks/            # useContactForm, useScrollSpy, useMediaQuery
├── utils/            # validation, api, constants, seo, formatters
├── data/             # services, team, nav-links, content
├── types/            # TypeScript interfaces and unions
└── styles/           # globals.css only (minimal, Tailwind via config)
```

### Key Commands

```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Production build
npm run preview          # Preview prod build locally
npm run test             # Run tests
npm run test:accessibility # Accessibility audit
npm run test:e2e         # End-to-end tests
npm run lint             # Lint code
npm run format           # Format code (Prettier)
npm run type-check       # TypeScript check
npm run lighthouse       # Lighthouse audit
```

### Naming Conventions

- **Components**: PascalCase (Button, HeroSection, ContactForm)
- **Hooks**: camelCase with "use" prefix (useContactForm, useScrollSpy)
- **Utilities**: camelCase (formatDate, validateEmail)
- **Constants**: UPPER_SNAKE_CASE (MAX_MESSAGE_LENGTH, API_ENDPOINT)
- **CSS Classes**: Tailwind utilities only (no custom class names except for global styles)

### PR Checklist

Before merging to main:
- [ ] Specification FR(s) addressed — Which requirements does this implement?
- [ ] Responsive design tested — Mobile (320px), tablet (768px), desktop (1024px+)
- [ ] Accessibility checked — Keyboard navigation, screen reader, color contrast
- [ ] Performance validated — Lighthouse score maintained ≥90, Core Web Vitals good
- [ ] TypeScript strict — No `any` types, all props typed
- [ ] Tests pass — Unit + integration tests for component/feature
- [ ] Tailwind only — Zero custom CSS files
- [ ] Aligned with Constitution — Verify against 12 Core Principles

### Important Files

- `specs/001-corporate-brochure-website/` — Specification & plan directory
- `tailwind.config.ts` — Design tokens (colors, spacing, fonts, breakpoints)
- `src/types/` — Centralized TypeScript type definitions
- `src/utils/validation.ts` — Zod schemas for form validation
- `.specify/memory/constitution.md` — 12 Core Principles (must read!)

### Deployment

- **Development**: Push to feature branch, auto-preview on Vercel/Netlify
- **Staging**: Merge to `develop` branch (optional staging environment)
- **Production**: Merge to `main` branch (auto-deploys within 1 minute)

### Getting Started

1. Read the [Quickstart Guide](../specs/001-corporate-brochure-website/quickstart.md)
2. Run `npm install && npm run dev`
3. Review [Constitution](../.specify/memory/constitution.md) core principles
4. Create feature branch: `git checkout -b feature/your-feature`
5. Check [Tasks](../specs/001-corporate-brochure-website/tasks.md) for actionable work items

<!-- SPECKIT END -->

