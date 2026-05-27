# Implementation Plan: IDEIA LLC Corporate Brochure Website

**Branch**: `001-corporate-brochure-website` | **Date**: 2026-05-05 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-corporate-brochure-website/spec.md`

**Note**: This plan is complete and ready for task generation via `/speckit.tasks`.

## Summary

Build a production-ready, high-end corporate brochure website for IDEIA LLC using React 18 + Tailwind CSS v3 deployed on Vercel/Netlify. The website targets enterprise CIOs, CISOs, and IT decision-makers with a professional, trust-driven design reflecting security expertise and executive advisory positioning. All 60 functional requirements from the specification must be implemented with strict adherence to WCAG 2.1 AA accessibility, Lighthouse performance ≥90, Core Web Vitals compliance, and the 12 Core Principles defined in the project constitution.

## Technical Context

**Language/Version**: JavaScript (ES2022+) / TypeScript 5.x  
**Framework & Runtime**: React 18.2+, Node.js 18 LTS+  
**Build Tool**: Vite 5.x (fast HMR, optimized production builds)  
**Primary Dependencies**: 
- React Router v6 (for navigation between sections/pages)
- Tailwind CSS v3.4+ (utility-first styling only)
- Framer Motion v10+ (for smooth scroll animations, kept minimal per constitution)
- React Hook Form (for contact form management)
- Zod v3+ (schema validation for form data)
- Helmet/React Helmet Async (for SEO meta tags)
- @vercel/og (for Open Graph image generation, optional)

**Storage**: N/A (static marketing site; contact form data sent to backend service or email)  
**Testing**: 
- Unit tests: Vitest + React Testing Library
- E2E tests: Playwright or Cypress (optional for v1, recommended for v2)
- Accessibility: axe DevTools, WAVE, manual keyboard/screen reader testing
- Performance: Lighthouse CI, Web Vitals monitoring

**Target Platform**: Web (modern browsers: Chrome 120+, Firefox 121+, Safari 17+, Edge 120+)  
**Project Type**: Single-page application (SPA) / Static site generation (SSG) hybrid  
**Performance Goals**: 
- Lighthouse Performance score ≥90
- First Contentful Paint (FCP) ≤2.5s
- Largest Contentful Paint (LCP) ≤2.5s
- Cumulative Layout Shift (CLS) <0.1
- Time to Interactive (TTI) ≤3.5s
- Contact form submission <500ms

**Constraints**: 
- No custom CSS files (Tailwind utilities only)
- No heavy JavaScript animations or transitions
- Mobile-first responsive design (320px minimum)
- Zero external analytics except Google Analytics
- All forms encrypted over HTTPS; no unencrypted data transmission
- Browser back/forward button must work correctly

**Scale/Scope**: 
- Single-page with 7 main sections (Hero, About, Services, Why IDEIA LLC, Leadership, Contact, Footer)
- ~15-20 reusable components
- ~10-15 pages (if multi-page routing used for About, Services detail, etc.)
- Expected 50k-100k monthly unique visitors at maturity
- Mobile users: 50-60% of traffic
- Estimated 3,000-5,000 lines of component code (excluding dependencies)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Constitutional Compliance Verification ✅

All 12 core principles from the project constitution are **FULLY ALIGNED** with this implementation plan:

| Principle | Compliance Status | Evidence |
|-----------|-------------------|----------|
| **I. Clean, Modern, Corporate UI** | ✅ PASS | Tailwind utilities only, minimal animations, premium visual design system |
| **II. Readability & Professional** | ✅ PASS | WCAG 2.1 AA mandatory, typography scale, 4.5:1 color contrast, semantic HTML |
| **III. React + Tailwind Best Practices** | ✅ PASS | React 18+ functional components/hooks, Tailwind v3+ only, zero custom CSS |
| **IV. Fully Responsive Design** | ✅ PASS | Mobile-first approach, 320px-1024px+ breakpoints, 44px touch targets |
| **V. Simplicity Over Complexity** | ✅ PASS | No heavy JS, CSS transitions only, Framer Motion minimal, YAGNI principle |
| **VI. Performance, A11y & SEO** | ✅ PASS | Lighthouse ≥90, Core Web Vitals compliance, keyboard navigation, structured data |
| **VII. Consistent Design System** | ✅ PASS | Tailwind config defines all tokens (colors, spacing 8px grid, typography, shadows) |
| **VIII. Trust, Security & Enterprise** | ✅ PASS | HTTPS enforcement, CSP headers, security-first mindset, no hype language |
| **IX. Design System & Component Library** | ✅ PASS | Reusable component architecture, semantic versioning, documentation required |
| **X. Brand Consistency & Content** | ✅ PASS | Content review gate required, verified claims, CTA alignment, visual consistency |
| **XI. Analytics Foundation** | ✅ PASS | Google Analytics configured, conversion tracking, privacy-compliant monitoring |
| **XII. Security & Privacy by Design** | ✅ PASS | HTTPS + HTTP redirects, CSP/security headers, GDPR/CCPA compliance, form encryption |

**Constitutional Gate Status**: ✅ **ALL PRINCIPLES SATISFIED**

**Re-check After Phase 1**: Design artifacts and component specs fully aligned with principles.

---

## Project Structure

### Documentation (this feature)

```text
specs/001-corporate-brochure-website/
├── spec.md              # Feature specification (60 FRs, 7 user stories)
├── plan.md              # This implementation plan
├── research.md          # Phase 0 output - Research findings and tech decisions
├── data-model.md        # Phase 1 output - Data entities, validation rules, state
├── quickstart.md        # Phase 1 output - Developer setup and getting started guide
├── contracts/           # Phase 1 output - Public API contracts (form schemas, page data)
│   ├── contact-form-schema.ts
│   ├── page-data-types.ts
│   └── component-props.ts
└── checklists/
    └── requirements.md  # Quality validation checklist for specification
```

### Source Code (repository root)

```text
ideia-llc-website/
├── package.json                     # Project metadata, dependencies, scripts
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite build configuration with Tailwind
├── tailwind.config.ts               # Tailwind CSS design tokens (colors, spacing, typography)
├── postcss.config.cjs               # PostCSS for Tailwind processing
├── .env.example                     # Environment variables template
├── .env.local                       # Local environment config (git-ignored)
├── vercel.json or netlify.toml      # Deployment configuration
│
├── src/
│   ├── index.tsx                    # React root entry point
│   ├── App.tsx                      # Root component, routing setup
│   ├── App.css                      # Global styles (minimal, mostly Tailwind)
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── common/
│   │   │   ├── Button.tsx           # CTA button, styled via Tailwind props
│   │   │   ├── Card.tsx             # Reusable card container
│   │   │   ├── Container.tsx        # Max-width content wrapper
│   │   │   ├── SectionWrapper.tsx   # Section styling wrapper
│   │   │   ├── Input.tsx            # Form input with label
│   │   │   ├── TextArea.tsx         # Form textarea
│   │   │   └── LoadingSpinner.tsx   # Loading state indicator
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Sticky navbar with navigation links
│   │   │   ├── Navigation.tsx       # Nav menu (desktop + mobile)
│   │   │   ├── Footer.tsx           # Footer with links and contact info
│   │   │   ├── MobileMenu.tsx       # Mobile hamburger menu
│   │   │   └── SkipLink.tsx         # Accessibility skip-to-main link
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Hero banner with tagline and CTA
│   │   │   ├── AboutSection.tsx     # Company overview and mission
│   │   │   ├── ServicesSection.tsx  # CIO & CISO Advisory + App Dev services
│   │   │   ├── WhyIdeia.tsx         # Differentiators and competitive advantages
│   │   │   ├── LeadershipSection.tsx# Girish Deshmukh profile
│   │   │   ├── ContactSection.tsx   # Contact form and info
│   │   │   └── CTASection.tsx       # Call-to-action promoter section
│   │   │
│   │   └── features/
│   │       ├── ServiceCard.tsx      # Individual service card component
│   │       ├── TestimonialCard.tsx  # Testimonial display (if needed)
│   │       ├── FeatureCard.tsx      # Feature/differentiator card
│   │       ├── ContactForm.tsx      # Contact form with validation
│   │       └── LeadershipCard.tsx   # Executive profile card
│   │
│   ├── pages/                       # Page-level components (if using routing)
│   │   ├── Home.tsx                 # Main landing page
│   │   ├── About.tsx                # Detailed about page (optional)
│   │   ├── Services.tsx             # Services detail page (optional)
│   │   ├── Contact.tsx              # Dedicated contact page (optional)
│   │   ├── NotFound.tsx             # 404 error page
│   │   └── PrivacyPolicy.tsx        # Privacy policy page
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useScrollspy.ts          # Track active nav section on scroll
│   │   ├── useMediaQuery.ts         # Responsive hook for breakpoints
│   │   ├── useContactForm.ts        # Contact form state and validation
│   │   └── useAnalytics.ts          # Google Analytics event tracking
│   │
│   ├── utils/                       # Utility functions
│   │   ├── constants.ts             # App-wide constants (nav links, content text)
│   │   ├── validation.ts            # Form validation schemas (Zod)
│   │   ├── api.ts                   # API client for form submissions
│   │   ├── seo.ts                   # SEO meta tag helpers
│   │   ├── cn.ts                    # Class name utility for Tailwind
│   │   └── formatters.ts            # Text formatting utilities
│   │
│   ├── data/                        # Static content and configuration
│   │   ├── nav-links.ts             # Navigation menu items
│   │   ├── services.ts              # Service offerings data
│   │   ├── team.ts                  # Leadership/team data
│   │   ├── testimonials.ts          # Client testimonials (if used)
│   │   └── faq.ts                   # FAQ data (if used)
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── index.ts                 # Re-export all types
│   │   ├── service.ts               # Service entity types
│   │   ├── contact.ts               # Contact form types
│   │   ├── leader.ts                # Leadership profile types
│   │   └── page.ts                  # Page/section types
│   │
│   ├── styles/                      # Tailwind and global styles (minimal)
│   │   └── globals.css              # Global CSS variables, resets (no component styling)
│   │
│   ├── assets/                      # Static files
│   │   ├── images/
│   │   │   ├── logo.svg             # Company logo
│   │   │   ├── hero-background.webp # Hero section background
│   │   │   ├── icons/               # SVG icons for services, differentiators
│   │   │   └── team/                # Leadership headshots
│   │   │
│   │   ├── fonts/                   # Custom web fonts (if any, else use system fonts)
│   │   └── animations.ts            # Framer Motion animation configs
│   │
│   └── __mocks__/                   # Mock data for testing
│       └── services.ts              # Mock service data
│
├── tests/                           # Test files
│   ├── unit/
│   │   ├── Button.test.tsx          # Unit test for Button component
│   │   ├── Card.test.tsx            # Unit test for Card component
│   │   ├── ContactForm.test.tsx     # Unit test for form validation
│   │   └── utils.test.ts            # Utility function tests
│   │
│   ├── integration/
│   │   ├── navigation.test.tsx      # Nav link navigation flow
│   │   ├── contact-form.test.tsx    # Complete form submission flow
│   │   └── page-rendering.test.tsx  # Full page rendering tests
│   │
│   ├── accessibility/
│   │   ├── keyboard-navigation.test.tsx   # Keyboard navigation
│   │   ├── screen-reader.test.tsx        # Screen reader compatibility
│   │   └── contrast-ratios.test.tsx      # Color contrast verification
│   │
│   ├── e2e/
│   │   ├── homepage.spec.ts         # Homepage E2E tests (Playwright/Cypress)
│   │   ├── contact-flow.spec.ts     # Contact form submission flow
│   │   └── mobile-responsiveness.spec.ts
│   │
│   └── setup.ts                     # Test configuration and utilities
│
├── public/                          # Static public files (served as-is)
│   ├── favicon.ico
│   ├── robots.txt                   # SEO robots configuration
│   ├── sitemap.xml                  # XML sitemap
│   └── _redirects                   # Netlify redirects (if needed)
│
├── .github/
│   ├── workflows/
│   │   ├── test.yml                 # Run tests on PR
│   │   ├── lighthouse.yml           # Lighthouse CI on PR
│   │   └── deploy.yml               # Deploy on merge to main
│   │
│   ├── copilot-instructions.md      # Agent context and development guidance
│   └── prompts/
│       └── speckit.specify.prompt.md
│
├── .specify/                        # SpecKit configuration
│   └── memory/
│       └── constitution.md          # Project constitution (12 Core Principles)
│
├── specs/                           # Feature specifications and plans
│   └── 001-corporate-brochure-website/
│       ├── spec.md
│       ├── plan.md                  # This file
│       ├── research.md
│       ├── data-model.md
│       ├── quickstart.md
│       └── contracts/
│
├── docs/                            # Project documentation
│   ├── ARCHITECTURE.md              # High-level architecture overview
│   ├── DEVELOPMENT.md               # Development workflow and guidelines
│   ├── DEPLOYMENT.md                # Deployment procedures
│   ├── ACCESSIBILITY.md             # WCAG 2.1 AA compliance details
│   └── SEO.md                       # SEO strategy and implementation
│
├── README.md                        # Project overview and quick start
├── CONTRIBUTING.md                  # Contribution guidelines
├── LICENSE                          # Project license
├── .gitignore                       # Git ignore rules
└── package-lock.json or yarn.lock   # Dependency lock file
```

**Structure Decision**: Implemented **Option 1 (Single Project)** with React SPA architecture. The structure uses standard React patterns:
- **Components**: Atomic design (common → layout → sections → features)
- **Pages**: Support for multi-page routing (optional, can start as single-page with anchor navigation)
- **Hooks**: Custom hooks for form handling, scroll tracking, responsive behavior
- **Utils**: Centralized validation, API clients, SEO helpers
- **Data**: Separated static content from components for easy updates
- **Types**: Strong TypeScript typing throughout
- **Tests**: Comprehensive coverage (unit, integration, accessibility, E2E)
- **Docs**: Feature specs, architecture, development guides

---

## Complexity Tracking

| Item | Complexity | Justification |
|------|------------|---------------|
| **Single React SPA** | Low | No microservices, monorepo, or complex architecture needed. Straightforward component-driven design. |
| **Tailwind CSS Only** | Low | No custom CSS files or design systems needed—Tailwind config provides all design tokens. |
| **State Management** | Low | Minimal state (form data, mobile menu, scroll tracking). No Redux, Zustand, or global state library required. |
| **API Integration** | Low | Contact form data sent to simple backend or email service; no complex data fetching. |
| **Performance Optimization** | Medium | Code splitting, lazy loading, image optimization, Lighthouse ≥90 requires attention but achievable with Vite + standard practices. |
| **Accessibility (WCAG 2.1 AA)** | Medium | Requires semantic HTML, ARIA labels, keyboard navigation, screen reader testing—methodical but straightforward. |
| **SEO & Structured Data** | Low | Standard meta tags, JSON-LD schema; Helmet.js handles most of the heavy lifting. |
| **Mobile Responsiveness** | Low | Tailwind breakpoints and mobile-first design; clear responsive patterns already established. |

**Overall Project Complexity**: 🟡 **MEDIUM** — Most complexity comes from strict performance and accessibility requirements, not from architectural complexity. Code quality and testing discipline required more than advanced architecture patterns.

---

## Phase 0: Research & Analysis

> **Output**: `research.md` documenting tech decisions, dependency choices, and best practices identified.

### Research Tasks

All technical context is clear and unambiguous based on the feature specification and constitution. No [NEEDS CLARIFICATION] markers remain. Key research areas completed:

**✅ React 18 + Tailwind CSS Evaluation**
- Decision: React 18+ with functional components and hooks (no class components)
- Framework: Vite 5.x for fast HMR and optimized builds
- Styling: Tailwind CSS v3+ exclusively; zero custom CSS files
- Router: React Router v6 for page navigation (optional for v1 if using anchor-based navigation)
- Rationale: Aligns with constitution, modern best practices, strong TypeScript support, excellent dev experience
- Alternatives evaluated: Next.js (added complexity), Astro (less interactive), Plain CSS (violation of constitution)

**✅ Form Handling & Validation**
- Decision: React Hook Form + Zod for schema validation
- Rationale: Minimal bundle size, declarative validation, strong TypeScript support, easy testing
- Alternatives: Formik (heavier), native form APIs (less DX)

**✅ Animation & Transitions**
- Decision: Minimal use of Framer Motion (smooth scroll only, no fancy effects)
- Rationale: Constitution Principle V (Simplicity Over Complexity) prioritizes accessibility and performance over visual flair
- Alternatives: React Spring (heavyweight), CSS transitions only (acceptable fallback)

**✅ Accessibility & Testing**
- Decision: Jest + React Testing Library for unit/integration tests; Playwright for E2E
- Accessibility testing: axe DevTools, WAVE, manual keyboard/screen reader testing
- Rationale: Industry standard tooling, strong community, comprehensive testing coverage
- Alternatives: Mocha/Chai (older), Cypress (slower than Playwright)

**✅ Deployment & Hosting**
- Decision: Deploy to Vercel or Netlify (both support React, zero-config deployment, CDN optimization)
- Rationale: Automatic performance optimization, preview deployments, instant rollbacks, edge caching
- Alternatives: AWS S3 + CloudFront (more manual setup), custom servers (unnecessary complexity for static site)

**✅ Image Optimization Strategy**
- Decision: WebP format with JPEG/PNG fallbacks, lazy loading via native `loading="lazy"`, responsive images with `srcset`
- Tooling: Vite automatically handles image optimization; optional: next-gen image optimization via Vercel
- Rationale: Core Web Vitals compliance (LCP optimization), automatic format conversion
- Alternatives: Manual image processing (tedious), no optimization (violates performance goals)

**✅ SEO & Meta Tags**
- Decision: Helmet.js for dynamic meta tags, static XML sitemap in `/public/sitemap.xml`, JSON-LD structured data for organization/services
- Rationale: Best practices for enterprise sites, helps CIOs/CISOs find the site via search, Open Graph for social sharing
- Alternatives: Manual meta tag management (error-prone), Next.js SSR (unnecessary for static content)

**✅ Security Headers & HTTPS**
- Decision: Configure Content Security Policy (CSP), X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security
- Hosting configuration: Vercel/Netlify automatically enforce HTTPS; custom headers via `vercel.json` or `netlify.toml`
- Rationale: Enterprise security best practices, aligns with Constitution Principle XII (Security & Privacy)
- Alternatives: Manual server configuration (error-prone)

**✅ Analytics & Monitoring**
- Decision: Google Analytics 4 (GA4) for privacy-compliant tracking; optional: Vercel Web Analytics for Core Web Vitals
- Events to track: Page views, CTA clicks, contact form submissions, conversion funnel
- Rationale: Standard industry tool, GDPR/CCPA compliant with proper consent, integrates with business goals
- Alternatives: Plausible (simpler but less featured), Mixpanel (overkill for marketing site)

### Key Dependencies & Versions

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.15.0",
  "react-hook-form": "^7.45.0",
  "zod": "^3.22.0",
  "framer-motion": "^10.12.0",
  "react-helmet-async": "^2.0.0",
  "tailwindcss": "^3.4.0",
  "vite": "^5.0.0",
  "typescript": "^5.2.0",
  "vitest": "^0.34.0",
  "react-testing-library": "^14.0.0",
  "@playwright/test": "^1.40.0",
  "axios": "^1.6.0",
  "clsx": "^2.0.0"
}
```

### Research Conclusion

✅ **All technical decisions are clear, unambiguous, and aligned with the constitution.** No NEEDS CLARIFICATION markers remain. Ready to proceed to Phase 1 Design.

---

## Phase 1: Design & Contracts

### Data Model

> **Output**: `data-model.md` documenting all entities, their relationships, validation rules, and state management.

#### Key Entities & Relationships

**Page Entity**
```
- url: string (/, /about, /services, etc.)
- title: string (meta title for SEO)
- description: string (meta description)
- content: Section[] (array of section components)
- isPublished: boolean
```

**Section Entity**
```
- id: string (hero, about, services, leadership, contact)
- title: string (display title)
- subtitle?: string (optional subtitle)
- content: string | ReactComponent (body content)
- spacing: enum (compact, normal, spacious)
- backgroundColor: string (Tailwind class)
```

**Service Entity**
```
- id: string (unique service identifier)
- title: string (e.g., "CIO & CISO Advisory")
- description: string (business value proposition)
- icon: string (URL or icon name)
- offerings: ServiceOffering[] (specific capabilities)
- cta?: { text: string; href: string } (call-to-action link)
```

**ServiceOffering Entity**
```
- id: string
- name: string (e.g., "Governance, Risk & Compliance")
- description: string (detailed explanation)
- keywords: string[] (SOX, GDPR, CCPA, HIPAA, etc.)
```

**LeadershipProfile Entity**
```
- id: string
- name: string ("Girish Deshmukh")
- title: string (e.g., "Founder & CEO")
- bio: string (biography and background)
- credentials: Credential[] (CISSP, PMP, PCC)
- avatar: string (URL to headshot)
- expertise: string[] (areas of expertise)
- social?: { linkedin?: string; email?: string }
```

**Credential Entity**
```
- name: string (e.g., "CISSP")
- issuer: string (e.g., "ISC²")
- year?: number
```

**ContactFormData Entity**
```
- name: string (required, min 2 chars)
- email: string (required, valid email format)
- message: string (required, min 10 chars, max 5000)
- phoneOptional?: string (optional, validated if provided)
- preferredContactMethod?: enum (email | phone)
- timestamp: Date (submission timestamp)
- status: enum (draft | submitted | processing | responded)
```

**NavigationLink Entity**
```
- id: string
- label: string (display text)
- href: string (destination)
- target?: string (optional _blank for external)
- icon?: string (optional icon name)
- isActive?: boolean (computed based on current URL)
```

#### Validation Rules

**Contact Form Validation**
```
- name: required, 2-100 chars, no special characters
- email: required, valid email format (RFC 5322)
- message: required, 10-5000 chars
- phoneOptional: if provided, valid phone format
- Success: Email sent to backend AND user sees success message
- Failure: Display field-level errors, don't submit
```

**Page Content Validation**
```
- title: max 60 chars (SEO best practice)
- description: max 160 chars (SEO snippet)
- All images: require alt text (WCAG requirement)
- All links: no orphan links or 404s
```

#### State Management

```typescript
// Component-level state (no global store needed)
type ComponentState = {
  // Navigation
  activeSection: string; // track scroll position for sticky nav highlighting
  isMobileMenuOpen: boolean;
  
  // Form state
  contactForm: {
    values: ContactFormData;
    errors: Record<string, string>;
    isSubmitting: boolean;
    submitStatus: 'idle' | 'success' | 'error';
  };
  
  // UI state
  isLoading: boolean;
  toast?: { message: string; type: 'success' | 'error' };
};
```

No Redux, Zustand, or Context API needed for this phase. Use component state + custom hooks.

### Interface Contracts

> **Output**: `/contracts/` directory with TypeScript type definitions and API schemas.

#### Contact Form Submission Contract

**Request Schema** (`POST /api/contact`)
```typescript
{
  name: string;        // 2-100 chars
  email: string;       // Valid email
  message: string;     // 10-5000 chars
  phoneOptional?: string;
  preferredContactMethod?: 'email' | 'phone';
  timestamp: ISO8601;
  userAgent: string;
  referrerUrl: string;
}
```

**Response Schema** (Success: 200 OK)
```typescript
{
  success: true;
  id: string;          // Unique message ID
  message: "Thank you for contacting IDEIA LLC. We'll be in touch within 24 hours.";
  nextSteps: string;   // What user should expect
}
```

**Response Schema** (Error: 400 Bad Request)
```typescript
{
  success: false;
  error: string;       // "Invalid email format" | "Message too short"
  field?: string;      // Which field failed validation
  timestamp: ISO8601;
}
```

#### Page Data Contract

**Service Page Data**
```typescript
interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  offerings: {
    id: string;
    name: string;
    description: string;
    keywords: string[];
  }[];
}

const services: ServiceCategory[] = [
  {
    id: 'cio-advisory',
    title: 'CIO & CISO Advisory',
    description: 'Strategic guidance on governance, risk, compliance, and IT transformation.',
    offerings: [
      {
        id: 'grc',
        name: 'Governance, Risk & Compliance',
        description: 'SOX, GDPR, CCPA, HIPAA compliance and risk management frameworks.',
        keywords: ['SOX', 'GDPR', 'CCPA', 'HIPAA']
      }
      // ... more offerings
    ]
  }
];
```

**Leadership Data Contract**
```typescript
interface LeadershipProfile {
  id: string;
  name: string;
  title: string;
  credentials: { name: string; issuer: string }[];
  bio: string;
  expertise: string[];
  avatar: string; // URL
}

const leadership: LeadershipProfile[] = [
  {
    id: 'girish',
    name: 'Girish Deshmukh',
    title: 'Founder & CEO',
    credentials: [
      { name: 'CISSP', issuer: 'ISC²' },
      { name: 'PMP', issuer: 'PMI' },
      { name: 'PCC', issuer: 'ICF' }
    ],
    bio: '30+ years of global IT leadership...',
    expertise: ['IT Strategy', 'Security', 'Risk Management', 'Executive Advisory'],
    avatar: 'https://....'
  }
];
```

### Quickstart Guide

> **Output**: `quickstart.md` with developer setup, local development, and deployment instructions.

#### Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/ideia-llc/website.git
cd ideia-llc-website

# 2. Install dependencies
npm install
# or yarn install

# 3. Create .env.local based on template
cp .env.example .env.local
# Edit .env.local with your Google Analytics ID and API endpoint

# 4. Start development server
npm run dev
# Open http://localhost:5173

# 5. Run tests
npm run test              # Unit + integration tests
npm run test:accessibility # Accessibility audit
npm run test:e2e          # End-to-end tests

# 6. Build for production
npm run build             # Output to dist/
npm run preview           # Preview production build locally

# 7. Check performance
npm run lighthouse        # Run Lighthouse audit
npm run lighthouse:ci     # Check against performance budget
```

#### Key Commands

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier --write 'src/**/*.{ts,tsx}'",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:accessibility": "axe --browser chrome src/",
    "test:e2e": "playwright test",
    "lighthouse": "lighthouse http://localhost:5173 --output-path=reports/lighthouse.html",
    "lighthouse:ci": "lhci autorun"
  }
}
```

#### Environment Variables

```env
# .env.example
VITE_GA_ID=G-XXXXXXXXXXXX
VITE_API_ENDPOINT=https://api.example.com
VITE_FORM_BACKEND=https://formspree.io/f/XXXX or serverless function
NODE_ENV=development
```

---

### Agent Context Update

Update [.github/copilot-instructions.md](.github/copilot-instructions.md) reference to point to this plan:

```markdown
<!-- SPECKIT START -->
## Current Implementation Plan

For the IDEIA LLC corporate brochure website feature, see:
- **Specification**: [specs/001-corporate-brochure-website/spec.md](specs/001-corporate-brochure-website/spec.md)
- **Implementation Plan**: [specs/001-corporate-brochure-website/plan.md](specs/001-corporate-brochure-website/plan.md)
- **Constitution**: [.specify/memory/constitution.md](.specify/memory/constitution.md)

### Key Technologies
- React 18+ (functional components, hooks)
- Tailwind CSS v3+ (utility-first styling only)
- Vite (fast builds, HMR)
- TypeScript (strict type safety)
- Jest + React Testing Library (unit/integration tests)

### Design Principles
- All 12 Core Principles from constitution MUST be followed
- Lighthouse ≥90, WCAG 2.1 AA, CLS <0.1
- Mobile-first responsive design
- No custom CSS; Tailwind utilities only
- Minimal animations; accessibility-first

### Component Architecture
- Atomic design: common → layout → sections → features
- Reusable components with TypeScript props
- State management: component-level + custom hooks (no Redux)
- Form handling: React Hook Form + Zod validation

See the full plan for detailed technical context, project structure, data model, contracts, and deployment strategy.
<!-- SPECKIT END -->
```

---

## Phase 1 Completion Checklist

- [x] Technical context fully specified (no NEEDS CLARIFICATION)
- [x] Constitution check passed (all 12 principles aligned)
- [x] Project structure defined (detailed folder layout)
- [x] Data model documented (entities, relationships, validation)
- [x] Interface contracts specified (form submission, page data)
- [x] Quickstart guide prepared (setup, dev commands, env vars)
- [x] Agent context updated with plan reference

---

## Next Steps

1. ✅ **Phase 1 Complete**: Implementation plan is finalized and ready.

2. 🔄 **Phase 2 (Task Generation)**: Run `/speckit.tasks` to generate actionable, dependency-ordered tasks for implementation.
   - Will generate: `specs/001-corporate-brochure-website/tasks.md`
   - Tasks will be organized by priority and dependencies
   - Each task will map to functional requirements (FR-001 through FR-060)

3. 🚀 **Phase 3 (Implementation)**: Run `/speckit.implement` to begin code execution.
   - Will scaffold the React project structure
   - Create components, pages, hooks, utils
   - Configure Tailwind design tokens
   - Set up tests and deployment config
   - Begin implementing requirements

4. 📋 **Phase 4 (Checklist & Analysis)**: Run `/speckit.checklist` and `/speckit.analyze` for final QA before launch.

---

**Plan Status**: ✅ **COMPLETE & READY FOR TASK GENERATION**

**Commit**: Ready for `/speckit.git.commit` to save plan artifacts.

**Version**: 1.0.0 | **Date**: 2026-05-05
