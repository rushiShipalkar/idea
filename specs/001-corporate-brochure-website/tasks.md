# Tasks: IDEIA LLC Corporate Brochure Website

**Feature**: 001-corporate-brochure-website  
**Specification**: [spec.md](spec.md) — 60 Functional Requirements, 7 User Stories  
**Implementation Plan**: [plan.md](plan.md) — Technical architecture and project structure  
**Data Model**: [data-model.md](data-model.md) — Entities, validation, state management  
**Quickstart**: [quickstart.md](quickstart.md) — Local dev setup guide  
**Status**: Ready for implementation  
**Date Generated**: 2026-05-05

---

## Task Format

**Checklist Format**: `- [ ] [TaskID] [P?] [Story] Description with file path`

- **[P]**: Task is parallelizable (different files, no dependencies on incomplete tasks)
- **[Story]**: User story label (US1, US2, etc.) - only for user story phase tasks
- **File Paths**: Exact paths for created/modified files

---

## Phase 1: Project Setup & Infrastructure

**Purpose**: Initialize Vite + React project, configure Tailwind, establish folder structure  
**Estimated Duration**: 1-2 days  
**Blocker**: MUST complete before Phase 2

- [x] T001 Create React + Vite project scaffold with npm/yarn
- [x] T002 [P] Install core dependencies (React 18, Tailwind CSS v3, React Router v6, React Hook Form, Zod)
- [x] T003 [P] Setup TypeScript configuration (tsconfig.json) with strict mode enabled
- [x] T004 [P] Configure Vite (vite.config.ts) with React plugin and build optimization
- [x] T005 [P] Setup Tailwind CSS (tailwind.config.ts) with design tokens:
  - Color palette (primary, secondary, accent, neutral shades)
  - Typography scale (h1-h6, body, caption)
  - 8px spacing grid
  - Border radius, shadows, breakpoints
- [x] T006 [P] Configure PostCSS (postcss.config.cjs) for Tailwind processing
- [x] T007 [P] Create project folder structure matching architecture in `src/`:
  - components/{common, layout, sections, features}
  - pages/
  - hooks/
  - utils/
  - data/
  - types/
  - styles/
  - assets/{images, fonts}
  - tests/{unit, integration, accessibility, e2e}
- [x] T008 [P] Setup ESLint & Prettier for code quality (`.eslintrc.json`, `.prettierrc`)
- [x] T009 [P] Create `.env.example` template with required variables (VITE_GA_ID, VITE_API_ENDPOINT)
- [x] T010 [P] Setup package.json scripts (dev, build, preview, test, lint, format, lighthouse)
- [x] T011 Create `src/index.tsx` as React entry point
- [x] T012 Create `src/App.tsx` as root component with Router setup (if using React Router)
- [x] T013 [P] Create `src/styles/globals.css` with global resets and Tailwind directives
- [x] T014 [P] Create `src/types/index.ts` and export type definitions from `src/types/{service, contact, leader, navigation}`
- [x] T015 [P] Create `src/utils/constants.ts` with app-wide constants (nav links, content text)
- [x] T016 [P] Create `src/utils/validation.ts` with Zod schemas for contact form
- [x] T017 [P] Create `src/data/nav-links.ts` with navigation menu structure
- [x] T018 [P] Create `src/data/services.ts` with service offerings data (CIO Advisory, App Dev)
- [x] T019 [P] Create `src/data/team.ts` with leadership profiles (Girish Deshmukh)
- [x] T020 Setup public folder structure (favicon.ico, robots.txt, sitemap.xml)
- [x] T021 [P] Create GitHub workflows (`.github/workflows/test.yml`, `lighthouse.yml`, `deploy.yml`)
- [x] T022 [P] Initialize vitest & React Testing Library configuration
- [x] T023 Verify local dev server runs: `npm run dev` → http://localhost:5173

**Checkpoint**: Project structure ready, dev server running, all dependencies installed ✅

---

## Phase 2: Foundational Components & Layout

**Purpose**: Build reusable UI components and layout structure  
**Estimated Duration**: 3-4 days  
**Blocker**: MUST complete before user story tasks can be tested

- [x] T024 [P] Create `src/components/common/Button.tsx` component with variants (primary, secondary, outline)
- [x] T025 [P] Create `src/components/common/Card.tsx` wrapper component for consistent card styling
- [x] T026 [P] Create `src/components/common/Container.tsx` max-width wrapper component
- [x] T027 [P] Create `src/components/common/SectionWrapper.tsx` for consistent section spacing and background
- [x] T028 [P] Create `src/components/common/Input.tsx` form input with label and error states
- [x] T029 [P] Create `src/components/common/TextArea.tsx` form textarea with validation
- [x] T030 [P] Create `src/components/common/LoadingSpinner.tsx` for async state display
- [x] T031 [P] Create `src/components/layout/Header.tsx` sticky navbar with navigation links (FR-007 to FR-012)
- [x] T032 [P] Create `src/components/layout/Navigation.tsx` responsive menu (desktop + hamburger on mobile)
- [x] T033 [P] Create `src/components/layout/MobileMenu.tsx` collapsible mobile navigation
- [x] T034 [P] Create `src/components/layout/Footer.tsx` footer with contact info and links (FR-039)
- [x] T035 [P] Create `src/components/layout/SkipLink.tsx` accessibility skip-to-main link
- [x] T036 [P] Create `src/hooks/useScrollspy.ts` hook to track active nav section on scroll
- [x] T037 [P] Create `src/hooks/useMediaQuery.ts` hook for responsive breakpoint detection
- [x] T038 [P] Create `src/hooks/useContactForm.ts` hook for form state management
- [x] T039 [P] Create `src/hooks/useAnalytics.ts` hook for GA4 event tracking
- [x] T040 [P] Create `src/utils/api.ts` client for form submission API calls
- [x] T041 [P] Create `src/utils/seo.ts` helpers for meta tag generation
- [x] T042 [P] Create `src/utils/cn.ts` class name utility for Tailwind
- [x] T043 Create `src/App.tsx` layout integration: render Header, footer, and route sections
- [x] T044 Test responsive design across breakpoints (320px mobile, 768px tablet, 1024px+ desktop)

**Checkpoint**: All reusable components built and tested, layout structure in place ✅

---

## Phase 3: User Story 1 - Enterprise CIO/CISO Discovers IDEIA LLC (Priority: P1) 🎯

**Goal**: Enterprise decision-makers see immediate trust signals and clear value proposition within 30 seconds

**Independent Test**: (1) Load homepage, (2) verify hero section displays company name, tagline, CTA, (3) scroll to About and verify leadership credentials visible, (4) navigate to Services and verify alignment with CIO needs

### Implementation for US1

- [x] T045 [P] [US1] Create `src/components/sections/HeroSection.tsx` component (FR-001 to FR-006):
  - Display "IDEIA LLC" company name prominently
  - Display tagline "Strategic IT & Security Excellence"
  - Display subtext "Bridging complex technology and business growth"
  - Include primary CTA button "Contact Us"
  - Responsive design for 320px+ viewports
  - Background visual (gradient or image)
- [x] T046 [P] [US1] Create `src/components/sections/AboutSection.tsx` component (FR-013 to FR-018):
  - Display company overview
  - Feature mission statement "Just enough security to enable innovation"
  - Introduce Girish Deshmukh with credentials
  - Highlight 30 years global IT leadership
  - Corporate/enterprise aesthetic styling
- [x] T047 [P] [US1] Create `src/components/sections/ServicesSection.tsx` component (FR-019 to FR-026):
  - Display "CIO & CISO Advisory" section with offerings:
    - GRC (SOX, GDPR, CCPA, HIPAA)
    - Risk Management & Incident Response (BIA, DR)
    - Vendor & Supply Chain Security
    - Budget & IT Resource Optimization
  - Display "IT Application Development & Support" section with offerings:
    - Application Rationalization
    - Cloud Migration & Architecture
    - Enterprise Systems (SAP/ERP)
    - Full Stack Engineering (C++, JavaScript, HTML)
  - Each offering includes brief description
  - Visual layout (cards, grid format)
- [x] T048 [US1] Create `src/components/features/ServiceCard.tsx` component to render individual service offerings
- [x] T049 [US1] Implement smooth scroll navigation to sections (FR-009: smooth scroll behavior)
- [x] T050 [US1] Add GA4 event tracking for hero CTA clicks and service section views
- [x] T051 [US1] Test US1 independently: User can determine value proposition within 30 seconds

**Checkpoint**: User Story 1 complete - CIOs can quickly assess IDEIA LLC's expertise ✅

---

## Phase 3: User Story 2 - Compliance Leader Researches GRC Capabilities (Priority: P1) 🎯

**Goal**: Compliance leaders find detailed GRC/regulatory expertise information and contact path

**Independent Test**: (1) Navigate to Services, (2) verify specific compliance frameworks listed (SOX, GDPR, CCPA, HIPAA), (3) review "Why IDEIA LLC" section for proven experience, (4) access contact form

### Implementation for US2

- [x] T052 [P] [US2] Create `src/components/sections/WhyIdeia.tsx` component (FR-027 to FR-029):
  - Display 4 differentiators:
    1. Proven global experience (USDA, Harley-Davidson, Netlist - or approved client refs)
    2. Security-first engineering mindset
    3. ROI-driven IT transformation strategies
    4. Strong executive communication and advisory
  - Include supporting details for each differentiator
  - Use compelling visual design (icons, images)
  - Include card layout or infographic format
- [x] T053 [P] [US2] Create `src/components/features/FeatureCard.tsx` component for differentiator cards
- [x] T054 [US2] Enhance ServicesSection with detailed GRC offering descriptions (FR-020, FR-021)
- [x] T055 [US2] Add compliance framework keywords to service offerings (SOX, GDPR, CCPA, HIPAA) for search/filtering
- [x] T056 [US2] Implement internal navigation to contact form from Services section
- [x] T057 [US2] Add GA4 tracking for compliance-related clicks and contact form access
- [x] T058 [US2] Test US2 independently: Compliance leader can find GRC info and contact form

**Checkpoint**: User Story 2 complete - Compliance leaders can evaluate regulatory expertise ✅

---

## Phase 3: User Story 3 - IT Director Evaluates Cloud Migration & Application Development (Priority: P1) 🎯

**Goal**: IT Directors see technical depth in cloud, application development, and enterprise systems

**Independent Test**: (1) Navigate to IT Application Development section, (2) verify specific tech stack mentioned (C++, JavaScript, HTML, SAP/ERP), (3) review successful implementations in "Why IDEIA LLC"

### Implementation for US3

- [x] T059 [P] [US3] Enhance IT Application Development section with specific technology highlights:
  - Application Rationalization (reuse, rewrite, retire strategies)
  - Cloud Migration & Architecture (on-prem to cloud-native)
  - Enterprise Systems (SAP/ERP global implementations)
  - Full Stack Engineering (C++, JavaScript, HTML)
- [ ] T060 [US3] Create `src/components/features/TechStackBadge.tsx` to display supported technologies
- [ ] T061 [US3] Add implementation details to "Why IDEIA LLC" linking to enterprise success
- [ ] T062 [US3] Implement case study/portfolio section linking to client reference projects
- [ ] T063 [US3] Add GA4 tracking for technology interest signals and CTA clicks
- [x] T064 [US3] Test US3 independently: IT Director can verify technical capabilities

**Checkpoint**: User Story 3 complete - IT Directors see full-stack development expertise ✅

---

## Phase 3: User Story 4 - External Researcher Validates Market Positioning (Priority: P2)

**Goal**: Analysts/researchers can gather positioning info and identify IDEIA LLC differentiators

**Independent Test**: (1) Read About/mission section, (2) review "Why IDEIA LLC" differentiators, (3) access leadership profile and contact info

### Implementation for US4

- [x] T065 [P] [US4] Create `src/components/sections/LeadershipSection.tsx` component (FR-030 to FR-032):
  - Display Girish Deshmukh full biography
  - List credentials (CISSP, PMP, PCC)
  - Show educational background (IIM Ahmedabad)
  - Highlight key achievements and awards
  - Display professional headshot
  - List expertise areas
- [x] T066 [P] [US4] Create `src/components/features/LeadershipCard.tsx` component for executive profile display
- [x] T067 [US4] Ensure mission statement "Just enough security to enable innovation" is prominent in About section
- [x] T068 [US4] Add social links (LinkedIn) to leadership profile
- [x] T069 [US4] Implement GA4 tracking for leadership profile views and external link clicks
- [x] T070 [US4] Test US4 independently: Researcher can gather positioning and contact team

**Checkpoint**: User Story 4 complete - External audiences understand IDEIA LLC positioning ✅

---

## Phase 3: User Story 5 - Mobile User Browses on Smartphone (Priority: P2)

**Goal**: Full functionality and readability on mobile devices (320px+)

**Independent Test**: Load site on mobile (320px), verify all content readable without horizontal scroll, test responsive navigation, verify CTA buttons tappable

### Implementation for US5

- [x] T071 [P] [US5] Test Header responsiveness on mobile: hamburger menu appears, sticky nav works
- [x] T072 [P] [US5] Test HeroSection on mobile: text legible, CTA button tappable (44px minimum)
- [x] T073 [P] [US5] Test ServiceCards on mobile: stack vertically, no layout breaking
- [x] T074 [P] [US5] Test LeadershipCard on mobile: profile image and text legible
- [x] T075 [US5] Verify contact form fields are tappable (44px minimum touch targets) on mobile
- [x] T076 [US5] Test smooth scroll navigation on mobile (internal anchor links work)
- [x] T077 [US5] Verify Footer displays correctly on mobile (links stacked vertically)
- [x] T078 [US5] Run Lighthouse mobile audit: Performance ≥90, responsive design verified
- [x] T079 [US5] Test browser back/forward button on mobile: navigation works correctly
- [x] T080 [US5] Test US5 independently: All content readable and functional on 320px viewport

**Checkpoint**: User Story 5 complete - Mobile experience fully functional ✅

---

## Phase 3: User Story 6 - Accessibility-Focused User (Screen Reader / Keyboard Navigation) (Priority: P2)

**Goal**: WCAG 2.1 AA compliance - keyboard and screen reader accessible

**Independent Test**: (1) Navigate entire site with keyboard Tab/Shift+Tab, (2) test with screen reader (NVDA/JAWS), (3) verify color contrast 4.5:1, (4) test form submission via keyboard

### Implementation for US6

- [x] T081 [P] [US6] Ensure Header has semantic `<nav>` element and ARIA labels (FR-010)
- [x] T082 [P] [US6] Add skip-to-main link in SkipLink component (accessibility best practice)
- [x] T083 [P] [US6] Verify all buttons have visible focus indicators (FR-055)
- [x] T084 [P] [US6] Test heading hierarchy: One H1 per page, proper H2/H3 nesting (FR-056)
- [x] T085 [P] [US6] Add ARIA labels to icon-only buttons (FR-053)
- [x] T086 [P] [US6] Ensure form labels properly associated with inputs (FR-056)
- [x] T087 [US6] Test keyboard navigation through all form fields and buttons
- [x] T088 [US6] Test form submission via keyboard (Enter key submits)
- [x] T089 [US6] Verify form error messages announced to screen reader
- [x] T090 [US6] Check color contrast ratios: All text ≥4.5:1 (FR-053)
- [x] T091 [US6] Add alt text to all images (FR-053)
- [x] T092 [US6] Run axe DevTools accessibility audit on all pages
- [x] T093 [US6] Test with screen reader (NVDA/JAWS): Logical reading order, proper announcements
- [x] T094 [US6] Test US6 independently: All content accessible via keyboard and screen reader

**Checkpoint**: User Story 6 complete - WCAG 2.1 AA compliance verified ✅

---

## Phase 3: User Story 7 - Performance-Conscious User (Slow Connection) (Priority: P2)

**Goal**: Fast loading on slow 3G connections, maintain Core Web Vitals

**Independent Test**: Load homepage on 3G throttling, verify FCP ≤2.5s, LCP ≤2.5s, CLS <0.1

### Implementation for US7

- [x] T095 [P] [US7] Optimize all images: WebP format with PNG/JPEG fallbacks (FR-049)
- [x] T096 [P] [US7] Implement lazy loading for images below fold (FR-049)
- [x] T097 [P] [US7] Implement responsive images with `srcset` for different device sizes
- [x] T098 [P] [US7] Code split sections and lazy load non-critical components
- [x] T099 [P] [US7] Minimize bundle size: Remove unused dependencies, tree-shake unused code
- [x] T100 [P] [US7] Configure Vite with production optimizations (minification, compression)
- [x] T101 [US7] Run Lighthouse audit: Performance ≥90, FCP ≤2.5s, LCP ≤2.5s, CLS <0.1 (FR-057 to FR-060)
- [x] T102 [US7] Enable gzip compression on deployment server
- [x] T103 [US7] Test homepage load on 3G throttling (DevTools Network tab)
- [x] T104 [US7] Monitor Core Web Vitals continuously (Lighthouse CI integration)
- [x] T105 [US7] Test US7 independently: Site loads and interactive within 3.5s on 3G

**Checkpoint**: User Story 7 complete - Performance targets met, fast loading verified ✅

---

## Phase 4: Contact Form Implementation

**Purpose**: Enable lead capture and user communication  
**Estimated Duration**: 2-3 days

- [x] T106 [P] Create `src/components/sections/ContactSection.tsx` component (FR-033 to FR-040):
  - Display email contact (info@ideiallc.com)
  - Render contact form with fields:
    - Name (required, 2-100 chars)
    - Email (required, valid format)
    - Message (required, 10-5000 chars)
  - Include "Request Consultation" submit button
  - Display form at bottom of page (footer area)
- [x] T107 [P] Create `src/components/features/ContactForm.tsx` component with:
  - React Hook Form integration
  - Zod schema validation
  - Error display for each field
  - Success/error message display
  - Submit button disabled while submitting
- [x] T108 Create `src/utils/api.ts` POST handler to `{VITE_API_ENDPOINT}/api/contact`:
  - Validate request schema (contact-form-schema.ts)
  - Encrypt data before transmission (HTTPS enforced)
  - Handle success and error responses
  - Return submission ID for tracking
- [x] T109 Implement form submission success state (FR-037):
  - Display success message
  - Clear form fields
  - Show next steps (e.g., "Check your email")
- [x] T110 Implement form submission error handling (FR-038):
  - Display user-friendly error messages
  - Show field-level errors
  - Allow retry
- [x] T111 Add GDPR/CCPA compliance notices on contact form (FR-052):
  - Privacy policy link in footer
  - Consent language on form
- [x] T112 Implement form data encryption (HTTPS only, no unencrypted transmission)
- [x] T113 Add duplicate submission prevention (disable button on rapid clicks)
- [x] T114 Add GA4 tracking for form submissions (success and failure events)
- [ ] T115 Test contact form end-to-end (fill, submit, verify success/error handling)

**Checkpoint**: Contact form fully functional, secure, and tracked ✅

---

## Phase 4: SEO & Metadata Implementation

**Purpose**: Ensure discoverability and proper search engine indexing  
**Estimated Duration**: 2 days

- [x] T116 [P] Setup Helmet.js for dynamic meta tags in `src/utils/seo.ts` (FR-043)
- [x] T117 [P] Create page-specific meta tags:
  - Home: "IDEIA LLC | Strategic IT & Security Consulting"
  - About: "About IDEIA LLC - 30+ Years IT Leadership"
  - Services: "IT Consulting Services - Security, GRC, Cloud Migration"
  - Contact: "Contact IDEIA LLC - Request Consultation"
- [x] T118 [P] Implement Open Graph tags for social sharing (title, description, image, URL)
- [x] T119 [P] Implement Twitter Card tags for Twitter sharing
- [x] T120 [P] Create structured data (JSON-LD) for organization schema (FR-046):
  - Organization name, URL, logo, description
  - Founded date, founder information
  - Service offerings
  - Contact information
- [x] T121 [P] Create `public/sitemap.xml` with all page URLs (FR-044)
- [x] T122 [P] Create `public/robots.txt` for SEO control (FR-045)
- [x] T123 Create heading hierarchy structure:
  - H1: Page primary heading (one per page)
  - H2: Section headings
  - H3: Subsection headings
  - No skipped levels
- [ ] T124 Test SEO metadata:
  - Run Google Rich Results test for structured data
  - Verify meta tags in page source
  - Check Open Graph preview on Facebook/LinkedIn
- [x] T125 Enable canonical tags to prevent duplicate content issues

**Checkpoint**: SEO and metadata complete, proper indexing enabled ✅

---

## Phase 4: Security & Privacy Implementation

**Purpose**: Enterprise-grade security and privacy compliance  
**Estimated Duration**: 2-3 days

- [x] T126 [P] Configure security headers (FR-048):
  - Content-Security-Policy (CSP)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Strict-Transport-Security (HSTS)
- [ ] T127 [P] Enforce HTTPS site-wide with HTTP to HTTPS redirects (FR-047)
- [x] T128 [P] Setup CORS policy to restrict cross-origin requests
- [x] T129 [P] Configure privacy policy page (`src/pages/PrivacyPolicy.tsx`) with:
  - Data collection practices
  - GDPR rights (access, delete, portability)
  - CCPA rights (for California users)
  - Third-party tool usage (Google Analytics, CDN)
  - Contact for privacy inquiries
- [ ] T130 [P] Implement cookie consent banner (if using tracking cookies):
  - Disclose Google Analytics usage
  - Allow users to opt-out
  - Respect `prefers-reduced-motion` for accessibility
- [ ] T131 Create `.env.local` template without secrets (`.env.example`)
- [ ] T132 Ensure no hardcoded API keys or secrets in source code
- [ ] T133 Setup dependency scanning (Dependabot, Snyk) in GitHub
- [ ] T134 Document data handling for contact form submissions:
  - How long data is retained
  - Who has access
  - Encryption methods
- [ ] T135 Test security headers with security.txt and similar scanners

**Checkpoint**: Security and privacy implementation complete, compliance verified ✅

---

## Phase 5: Analytics & Conversion Tracking

**Purpose**: Measure user behavior and business impact  
**Estimated Duration**: 1-2 days

- [ ] T136 [P] Setup Google Analytics 4 (GA4) in `src/hooks/useAnalytics.ts` (FR-050):
  - Initialize with VITE_GA_ID from environment
  - Track page views (automatic)
  - Track custom events
- [ ] T137 [P] Implement GA4 event tracking for key actions:
  - Hero CTA click ("Contact Us" button)
  - Service section views
  - "Why IDEIA LLC" section engagement
  - Contact form submissions (success)
  - Form errors
  - External link clicks
  - Mobile navigation menu open/close
- [ ] T138 [P] Setup GA4 conversion events:
  - Contact form submission (primary conversion)
  - CTA clicks (secondary)
- [ ] T139 Setup GA4 audiences:
  - Mobile vs. Desktop traffic
  - Geographic segments
  - Conversion funnel drops
- [ ] T140 Configure Google Analytics dashboard with key metrics:
  - Sessions, users, bounce rate
  - Top landing pages
  - Conversion rate
  - Device breakdown
- [ ] T141 Setup Lighthouse CI to monitor performance metrics continuously
- [ ] T142 Create monthly analytics review checklist (KPI tracking)

**Checkpoint**: Analytics tracking operational, dashboards configured ✅

---

## Phase 5: Testing & Quality Assurance

**Purpose**: Ensure quality, reliability, and performance  
**Estimated Duration**: 3-4 days

### Unit Tests

- [ ] T143 [P] Write unit tests for `Button.tsx` component
- [ ] T144 [P] Write unit tests for `Card.tsx` component
- [ ] T145 [P] Write unit tests for form validation (`src/utils/validation.ts`)
- [ ] T146 [P] Write unit tests for Zod schemas (contact form)
- [ ] T147 [P] Write unit tests for API client (`src/utils/api.ts`)

### Integration Tests

- [ ] T148 [P] Write integration test for contact form submission flow
- [ ] T149 [P] Write integration test for navigation and section scrolling
- [ ] T150 [P] Write integration test for responsive layout on different breakpoints

### Accessibility Tests

- [ ] T151 [P] Run axe DevTools accessibility audit on all pages
- [ ] T152 [P] Run WAVE accessibility audit
- [ ] T153 [P] Test keyboard navigation through all sections
- [ ] T154 [P] Test with NVDA screen reader (Windows) or VoiceOver (macOS)
- [ ] T155 [P] Verify color contrast ratios using WebAIM contrast checker

### Performance Tests

- [ ] T156 Run Lighthouse audit on production build: Performance ≥90
- [ ] T157 Test Core Web Vitals: FCP ≤2.5s, LCP ≤2.5s, CLS <0.1
- [ ] T158 Test on slow 3G connection using DevTools network throttling
- [ ] T159 [P] Analyze bundle size with `vite-plugin-visualizer`

### Cross-Browser Tests

- [ ] T160 Test on Chrome 120+: All features work
- [ ] T161 Test on Firefox 121+: All features work
- [ ] T162 Test on Safari 17+: All features work
- [ ] T163 Test on Edge 120+: All features work
- [ ] T164 Test on mobile Chrome (Android)
- [ ] T165 Test on Safari iOS

### End-to-End Tests (E2E with Playwright)

- [ ] T166 Write E2E test for homepage load and hero section display
- [ ] T167 Write E2E test for navigation between sections
- [ ] T168 Write E2E test for contact form submission flow
- [ ] T169 Write E2E test for mobile responsiveness

**Checkpoint**: All tests passing, coverage ≥80%, no accessibility violations ✅

---

## Phase 5: Documentation & Knowledge Transfer

**Purpose**: Enable team maintenance and onboarding  
**Estimated Duration**: 1-2 days

- [ ] T170 [P] Create `ARCHITECTURE.md` documenting:
  - Project structure overview
  - Component hierarchy
  - Data flow diagrams
  - State management approach
- [ ] T171 [P] Create `DEVELOPMENT.md` with development workflow:
  - Local setup steps
  - Git branch conventions
  - PR review process
  - Commit message format
- [ ] T172 [P] Create `DEPLOYMENT.md` with deployment procedures:
  - Production build steps
  - Deployment to Vercel/Netlify
  - Rollback procedures
  - Environment configuration
- [ ] T173 [P] Create `ACCESSIBILITY.md` documenting:
  - WCAG 2.1 AA compliance checklist
  - Testing procedures
  - Tools used (axe, WAVE, screen readers)
- [ ] T174 [P] Create `SEO.md` documenting:
  - Meta tag strategy
  - Structured data (JSON-LD)
  - Sitemap and robots.txt
  - Analytics setup
- [ ] T175 Update `README.md` with:
  - Project overview
  - Quick start guide (link to quickstart.md)
  - Tech stack summary
  - Deployment instructions
  - Contributing guidelines

**Checkpoint**: All documentation complete and current ✅

---

## Phase 6: Deployment & Monitoring

**Purpose**: Launch to production and establish monitoring  
**Estimated Duration**: 1 day + ongoing

### Pre-Deployment Verification

- [ ] T176 Verify all environment variables configured:
  - VITE_GA_ID set for production
  - VITE_API_ENDPOINT pointing to production backend
  - NODE_ENV=production
- [ ] T177 Run full test suite: `npm run test` (all tests passing)
- [ ] T178 Run Lighthouse audit: Performance ≥90, no critical issues
- [ ] T179 Run accessibility audit: WCAG 2.1 AA compliant, no critical violations
- [ ] T180 Cross-browser testing: Chrome, Firefox, Safari, Edge all working
- [ ] T181 Mobile testing: Responsive on 320px, 768px, 1024px+

### Deployment

- [ ] T182 Build for production: `npm run build`
- [ ] T183 Test production build locally: `npm run preview`
- [ ] T184 Deploy to Vercel or Netlify (automatic on git push main)
- [ ] T185 Verify production deployment: Website live and accessible
- [ ] T186 Test all links and navigation on live site
- [ ] T187 Verify contact form submission works on production
- [ ] T188 Verify GA4 tracking active in production
- [ ] T189 Test HTTPS enforcement and security headers on production

### Post-Deployment Monitoring

- [ ] T190 Monitor Lighthouse CI: Ensure performance doesn't degrade
- [ ] T191 Monitor GA4 dashboard: Track user behavior and conversions
- [ ] T192 Monitor error logs: Check for JavaScript errors, API failures
- [ ] T193 Setup uptime monitoring (Uptime Robot or similar)
- [ ] T194 Create weekly analytics review process
- [ ] T195 Document any issues and hotfixes applied

**Checkpoint**: Live in production, monitoring active, team trained ✅

---

## Phase 7: Polish & Continuous Improvement

**Purpose**: Ongoing enhancements and optimizations  
**Estimated Duration**: Ongoing

- [ ] T196 Collect user feedback (surveys, session recordings)
- [ ] T197 A/B test CTA button text/placement based on conversion data
- [ ] T198 Optimize images based on Lighthouse recommendations
- [ ] T199 Analyze user behavior via GA4 heatmaps/recordings
- [ ] T200 Implement suggested UX improvements from testing
- [ ] T201 Update content based on stakeholder feedback
- [ ] T202 Expand leadership profiles with additional team members
- [ ] T203 Add case study showcase section (if business requires)
- [ ] T204 Optimize form based on drop-off analysis
- [ ] T205 Implement advanced analytics (goals, funnels, cohorts)

**Checkpoint**: Continuous improvement cycle established ✅

---

## Task Dependencies & Parallelization

### Critical Path (Must complete in order)

1. Phase 1: Setup (T001-T023)
2. Phase 2: Foundational components (T024-T044)
3. Then user stories can run in parallel:
   - US1 (T045-T051)
   - US2 (T052-T058)
   - US3 (T059-T064)
   - US4 (T065-T070)
   - US5 (T071-T080)
   - US6 (T081-T094)
   - US7 (T095-T105)
4. Phase 4: Contact form (T106-T115) - can start after US1
5. Phase 4: SEO (T116-T125) - independent
6. Phase 4: Security (T126-T135) - independent
7. Phase 5: Analytics (T136-T142) - independent
8. Phase 5: Testing (T143-T169) - run after implementation
9. Phase 5: Documentation (T170-T175) - can run in parallel
10. Phase 6: Deployment (T176-T195) - final phase
11. Phase 7: Polish (T196-T205) - ongoing

### Parallelizable Task Groups

**Can run in parallel within each phase**:
- Setup tasks: T002-T023 (all marked [P])
- Foundational components: T024-T043 (component creation can be parallel)
- Component tests: T143-T155 (independent test files)
- Documentation: T170-T175 (independent docs)

### Recommended Team Structure

- **1 Developer**: Sequential phases in order
- **2 Developers**: Parallel tracks:
  - Dev 1: Setup + Foundational → Phase 4 (Contact form, Analytics)
  - Dev 2: Phase 3 (User stories in parallel)
- **3+ Developers**: Full parallelization:
  - Dev 1: Setup + Foundational components
  - Dev 2: US1-US3 (P1 stories)
  - Dev 3: US4-US7 (P2 stories)
  - Dev 4: Testing + Documentation
  - Dev 5: SEO + Security + Analytics

---

## Estimation Summary

| Phase | Task Count | Estimated Duration | Priority |
|-------|------------|-------------------|----------|
| Phase 1: Setup | 23 | 1-2 days | CRITICAL |
| Phase 2: Foundational | 21 | 3-4 days | CRITICAL |
| Phase 3: User Stories | 60 | 5-7 days | MVP |
| Phase 4: Contact/SEO/Security | 40 | 6-8 days | Important |
| Phase 5: Testing/Docs | 63 | 5-7 days | Important |
| Phase 6: Deployment | 20 | 1 day | Final |
| Phase 7: Polish | 10 | Ongoing | Enhancement |
| **TOTAL** | **205** | **22-29 days** | - |

**Timeline Estimates**:
- 1 developer: 5-6 weeks (sequential)
- 2 developers: 3-4 weeks (parallel)
- 3+ developers: 2-3 weeks (full parallelization)

---

## MVP Scope (Minimum Viable Product)

To launch MVP quickly (2 weeks with 2 developers):

**Essential**:
- ✅ Phase 1: Setup (T001-T023) — 2 days
- ✅ Phase 2: Foundational (T024-T044) — 3-4 days
- ✅ Phase 3: User Story 1 (T045-T051) — 2-3 days
- ✅ Phase 3: User Story 3 (T059-T064) — 2-3 days
- ✅ Contact Form (T106-T115) — 2-3 days
- ✅ SEO Basics (T116-T125) — 1-2 days

**Optional for v2**:
- User Stories 2, 4, 5, 6, 7
- Advanced testing/documentation
- Analytics dashboard setup
- Performance optimization

---

**Task Status**: ✅ COMPLETE & READY FOR EXECUTION  
**Total Tasks**: 205  
**Commit**: Ready for git commit  
**Next Step**: Assign tasks to team members and begin Phase 1

---

**Task List Generated**: 2026-05-05  
**Feature**: 001-corporate-brochure-website  
**Version**: 1.0.0
