# Data Model & Architecture: IDEIA LLC Corporate Brochure Website

**Date**: 2026-05-05  
**Feature**: 001-corporate-brochure-website  
**Status**: Complete - Ready for component implementation

## Entity Definitions

### Page Entity

Represents a single page in the website.

```typescript
interface Page {
  id: string;                  // Unique identifier
  path: string;                // URL path (/, /about, /services, etc.)
  title: string;               // Page title (meta title for SEO)
  description: string;         // Meta description (max 160 chars)
  keywords?: string[];         // Meta keywords (optional, rarely used)
  sections: Section[];         // Array of sections on the page
  isPublished: boolean;        // Publication status
  createdAt: Date;
  updatedAt: Date;
}

// Singleton pages
const pages = {
  home: { path: '/', title: 'IDEIA LLC | Strategic IT & Security Consulting', ... },
  about: { path: '/about', title: 'About IDEIA LLC', ... },
  services: { path: '/services', title: 'Services | IDEIA LLC', ... },
};
```

---

### Section Entity

Represents a content section within a page (Hero, About, Services, etc.).

```typescript
interface Section {
  id: string;                  // Unique identifier (hero, about, services, etc.)
  title?: string;              // Display title (optional, hero might not have title)
  subtitle?: string;           // Optional subtitle
  content?: string;            // HTML or plain text content
  component?: string;          // Component name to render (e.g., 'HeroSection', 'ServicesSection')
  data?: Record<string, any>;  // Component-specific data
  spacing?: 'compact' | 'normal' | 'spacious'; // Vertical spacing class
  backgroundColor?: string;    // Tailwind class (bg-white, bg-gray-50, etc.)
  textColor?: string;          // Tailwind class (text-gray-900, etc.)
  order: number;               // Display order on page
}

// Example sections on Home page
const homeSections = [
  { id: 'hero', component: 'HeroSection', order: 1, ... },
  { id: 'about', component: 'AboutSection', order: 2, ... },
  { id: 'services', component: 'ServicesSection', order: 3, ... },
  { id: 'why-ideia', component: 'WhyIdeia', order: 4, ... },
  { id: 'leadership', component: 'LeadershipSection', order: 5, ... },
  { id: 'contact', component: 'ContactSection', order: 6, ... },
];
```

---

### Service Entity

Represents a service offering.

```typescript
interface Service {
  id: string;                  // Unique identifier (cio-advisory, app-dev)
  categoryTitle: string;       // Display title (e.g., "CIO & CISO Advisory")
  description: string;         // Service overview (2-3 sentences)
  icon?: string;               // URL or icon name
  offerings: ServiceOffering[];// Array of specific capabilities within service
  cta?: {
    text: string;              // CTA button text
    href: string;              // Link destination
  };
}

interface ServiceOffering {
  id: string;
  name: string;                // e.g., "Governance, Risk & Compliance"
  description: string;         // Detailed explanation
  keywords: string[];          // Tags (SOX, GDPR, CCPA, HIPAA, etc.)
  icon?: string;               // Optional icon
}

// Data structure
const services: Service[] = [
  {
    id: 'cio-advisory',
    categoryTitle: 'CIO & CISO Advisory',
    description: 'Strategic guidance on governance, risk, compliance, and IT transformation.',
    offerings: [
      {
        id: 'grc',
        name: 'Governance, Risk & Compliance',
        description: 'Comprehensive GRC frameworks ensuring SOX, GDPR, CCPA, and HIPAA compliance.',
        keywords: ['SOX', 'GDPR', 'CCPA', 'HIPAA', 'Risk Management'],
      },
      {
        id: 'incident-response',
        name: 'Risk Management & Incident Response',
        description: 'Business Impact Analysis (BIA) and disaster recovery strategy planning.',
        keywords: ['BIA', 'DR', 'Crisis Management'],
      },
      // ... more offerings
    ],
  },
  {
    id: 'app-dev',
    categoryTitle: 'IT Application Development & Support',
    description: 'Enterprise application rationalization and cloud-native development.',
    offerings: [
      {
        id: 'rationalization',
        name: 'Application Rationalization',
        description: 'Evaluate legacy systems and decide: reuse, rewrite, or retire.',
        keywords: ['Portfolio Assessment', 'Modernization'],
      },
      // ... more offerings
    ],
  },
];
```

---

### Leadership Profile Entity

Represents an executive profile.

```typescript
interface Credential {
  name: string;                // Certification name (CISSP, PMP, PCC)
  issuer: string;              // Issuing organization (ISC², PMI, ICF)
  year?: number;               // Year obtained
  url?: string;                // Link to credential verification
}

interface LeadershipProfile {
  id: string;                  // Unique identifier
  name: string;                // Full name
  title: string;               // Position/role
  credentials: Credential[];   // Array of certifications
  bio: string;                 // Professional biography
  expertise: string[];         // Areas of expertise
  avatar: string;              // URL to headshot image
  email?: string;              // Optional contact email
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

// Data structure
const leadership: LeadershipProfile[] = [
  {
    id: 'girish-deshmukh',
    name: 'Girish Deshmukh',
    title: 'Founder & CEO',
    credentials: [
      { name: 'CISSP', issuer: 'ISC²', year: 2010 },
      { name: 'PMP', issuer: 'PMI', year: 2005 },
      { name: 'PCC', issuer: 'ICF', year: 2015 },
    ],
    bio: '30+ years of global IT leadership experience across USDA, Harley-Davidson, and Netlist. Expert in security strategy, IT transformation, and executive advisory.',
    expertise: [
      'IT Strategy & Governance',
      'Enterprise Security',
      'Risk & Compliance Management',
      'Cloud Transformation',
      'Executive Advisory',
    ],
    avatar: 'https://.../.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/girish-deshmukh',
    },
  },
];
```

---

### Contact Form Data Entity

Represents a contact form submission.

```typescript
interface ContactFormData {
  // Required fields
  name: string;                // Full name (2-100 chars)
  email: string;               // Email address (valid format)
  message: string;             // Message body (10-5000 chars)

  // Optional fields
  phone?: string;              // Optional phone number
  preferredContactMethod?: 'email' | 'phone'; // How to contact them

  // Metadata (auto-populated)
  timestamp?: Date;            // When form was submitted
  userAgent?: string;          // Browser user agent
  referrerUrl?: string;        // Referring page
  ipAddress?: string;          // Client IP (optional, for spam detection)
  
  // Status tracking
  status?: 'draft' | 'submitted' | 'processing' | 'responded';
  submissionId?: string;       // Unique ID for tracking
}

// Validation rules (using Zod)
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+-]+$/.test(val),
      'Phone number format invalid'
    ),

  preferredContactMethod: z
    .enum(['email', 'phone'])
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

---

### Navigation Link Entity

Represents a navigation menu item.

```typescript
interface NavigationLink {
  id: string;                  // Unique identifier
  label: string;               // Display text
  href: string;                // Destination (URL or anchor)
  target?: '_blank' | '_self'; // Link target (default: _self)
  icon?: string;               // Optional icon name/URL
  isActive?: boolean;          // Computed: is this link currently active?
  description?: string;        // Optional tooltip/description
  children?: NavigationLink[]; // Optional submenu items
}

// Navigation data
const navigationLinks: NavigationLink[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'why-ideia', label: 'Why IDEIA LLC', href: '#why-ideia' },
  { id: 'leadership', label: 'Leadership', href: '#leadership' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
```

---

### CTA (Call-to-Action) Entity

Represents a button or link that triggers user action.

```typescript
interface CTA {
  id: string;
  text: string;                // Button text ("Contact Us", "Schedule Consultation")
  href: string;                // Destination
  variant?: 'primary' | 'secondary' | 'outline'; // Visual style
  size?: 'sm' | 'md' | 'lg';   // Button size
  icon?: string;               // Optional icon
  ariaLabel?: string;          // Accessibility label
}

// Example CTAs on homepage
const ctas = [
  {
    id: 'hero-cta',
    text: 'Contact Us',
    href: '#contact',
    variant: 'primary',
    size: 'lg',
  },
  {
    id: 'services-cta',
    text: 'Schedule Consultation',
    href: '#contact',
    variant: 'secondary',
  },
];
```

---

## Relationships

```
Page (1)
  └─── Section (1..*)
         └─── Component Data (0..1)
                ├─── Services
                ├─── Leadership Profiles
                └─── CTA Links

Service (1)
  └─── ServiceOffering (1..*)

LeadershipProfile (1)
  └─── Credential (1..*)

NavigationLink (1)
  └─── NavigationLink (0..*, for submenus)

ContactFormData (1)
  └─── Response ({ success: bool, message: string })
```

---

## State Management Strategy

### Component-Level State (React hooks)

```typescript
// useContactForm.ts - Custom hook for form handling
export function useContactForm() {
  const [values, setValues] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate
      const validated = contactFormSchema.parse(values);
      
      // Submit
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setValues({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrors(error.flatten().fieldErrors);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { values, errors, isSubmitting, submitStatus, handleChange, handleSubmit };
}
```

### Navigation State

```typescript
// useScrollSpy.ts - Track active nav section
export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
```

### Mobile Menu State

```typescript
// Layout component
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Toggle on mobile menu button click
<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
  {isMobileMenuOpen ? 'Close' : 'Menu'}
</button>
```

**No Global State Library Needed** — Component state + custom hooks sufficient for MVP. If complexity grows, can add Zustand or Jotai later.

---

## Validation Rules

### Contact Form Validation

| Field | Rule | Error Message |
|-------|------|---------------|
| **name** | Min 2 chars, max 100 | "Name must be 2-100 characters" |
| **name** | Alphanumeric + spaces, hyphens, apostrophes | "Name contains invalid characters" |
| **email** | Valid email format | "Please enter a valid email address" |
| **message** | Min 10 chars, max 5000 | "Message must be 10-5000 characters" |
| **phone** | Optional; if provided, valid format | "Invalid phone number format" |

### Page Content Validation

| Item | Rule |
|------|------|
| **Title** | Max 60 chars (SEO best practice) |
| **Description** | Max 160 chars (search snippet limit) |
| **Alt text** | Required for all images (WCAG requirement) |
| **Links** | No broken or orphan links (404 prevention) |
| **Headings** | Proper hierarchy (H1 → H2 → H3) |

---

## API Contracts

### Contact Form Submission

**Request** (POST `/api/contact`)
```typescript
interface ContactRequest {
  name: string;
  email: string;
  message: string;
  phone?: string;
  preferredContactMethod?: 'email' | 'phone';
  timestamp: ISO8601;
  userAgent: string;
  referrerUrl: string;
}
```

**Success Response** (200 OK)
```typescript
interface ContactSuccess {
  success: true;
  id: string;
  message: "Thank you for contacting IDEIA LLC. We'll be in touch within 24 hours.";
  nextSteps: "Check your email for confirmation.";
}
```

**Error Response** (400 Bad Request or 500 Server Error)
```typescript
interface ContactError {
  success: false;
  error: string; // "Invalid email format" | "Message too short" | "Server error"
  field?: string; // Which field failed validation
  timestamp: ISO8601;
}
```

---

## Data Constraints

| Item | Constraint |
|------|-----------|
| **Page Load Time** | FCP ≤2.5s, LCP ≤2.5s |
| **CLS** | <0.1 (no unexpected layout shifts) |
| **Image Sizes** | Hero: <200KB, Services: <100KB, Thumbnails: <50KB |
| **Bundle Size** | Main JS: <200KB, CSS: <50KB |
| **Contact Form Response** | <500ms API latency target |
| **Browser Support** | Chrome 120+, Firefox 121+, Safari 17+, Edge 120+ |
| **Mobile First** | Minimum 320px viewport width |

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ User Browser (React App)                                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐      ┌──────────────┐                    │
│  │ Navigation   │─────▶│ Scroll Spy   │                    │
│  │ Component    │      │ Hook         │                    │
│  └──────────────┘      └──────────────┘                    │
│         │                     │                              │
│         ▼                     ▼                              │
│  ┌──────────────────────────────────────┐                 │
│  │ Page Component (Home)                 │                 │
│  │ - Hero Section                       │                 │
│  │ - About Section                      │                 │
│  │ - Services Section                   │                 │
│  │ - Why IDEIA LLC                      │                 │
│  │ - Leadership Section                 │                 │
│  │ - Contact Form Section               │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────────────────────────────┐                 │
│  │ Contact Form (React Hook Form)       │                 │
│  │ - Validation (Zod)                   │                 │
│  │ - Error Display                      │                 │
│  │ - Submit Handler                     │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────────────────────────────┐                 │
│  │ API Client (axios)                   │                 │
│  │ POST /api/contact                    │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
└─────────┼──────────────────────────────────────────────────┘
          │
          │ Network Request
          ▼
┌─────────────────────────────────────────────────────────────┐
│ Backend (Vercel Function / External Service)               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────┐                 │
│  │ Validate Request                     │                 │
│  │ - Check schema                       │                 │
│  │ - Verify email format                │                 │
│  │ - Check spam/abuse                   │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────────────────────────────┐                 │
│  │ Store/Process                        │                 │
│  │ - Send email to IDEIA LLC            │                 │
│  │ - Save to database/CRM               │                 │
│  │ - Generate confirmation email        │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────────────────────────────┐                 │
│  │ Return Response                      │                 │
│  │ { success: true, id: "..." }         │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
└─────────┼──────────────────────────────────────────────────┘
          │
          │ JSON Response
          ▼
┌─────────────────────────────────────────────────────────────┐
│ React App (continued)                                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────┐                 │
│  │ Handle Response                      │                 │
│  │ - Set submitStatus = 'success'       │                 │
│  │ - Show success message               │                 │
│  │ - Clear form                         │                 │
│  │ - Track event in GA4                 │                 │
│  └──────────────────────────────────────┘                 │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────────────────────────────┐                 │
│  │ User sees success state              │                 │
│  │ - Can submit another form (optional) │                 │
│  │ - Can navigate to other sections     │                 │
│  └──────────────────────────────────────┘                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Type Safety Strategy

All types defined in `src/types/` and exported via `src/types/index.ts`:

```typescript
// src/types/index.ts
export * from './page';
export * from './section';
export * from './service';
export * from './contact';
export * from './leader';
export * from './navigation';
export * from './cta';
```

**TypeScript Configuration** (`tsconfig.json`):
- `strict: true` (enable all strict type checking)
- `noImplicitAny: true` (error on implicit any types)
- `noUnusedLocals: true` (error on unused variables)
- `noUnusedParameters: true` (error on unused parameters)
- `noImplicitReturns: true` (require explicit return types)

---

**Data Model Status**: ✅ COMPLETE  
**Ready for**: Component implementation and API integration  
**Next Step**: Create components based on this data model structure
