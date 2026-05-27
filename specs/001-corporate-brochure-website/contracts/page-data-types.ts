/**
 * Page Data Type Contracts
 * Defines the data structures for pages and sections
 */

// ============================================================================
// PAGE & SECTION ENTITIES
// ============================================================================

export interface Page {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  sections: Section[];
  isPublished: boolean;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export interface Section {
  id: string;
  title?: string;
  subtitle?: string;
  content?: string;
  component?: string; // Component name to render
  data?: Record<string, unknown>; // Component-specific data
  spacing?: 'compact' | 'normal' | 'spacious';
  backgroundColor?: string; // Tailwind class
  textColor?: string; // Tailwind class
  order: number;
}

// ============================================================================
// SERVICE ENTITIES
// ============================================================================

export interface ServiceOffering {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  icon?: string;
}

export interface Service {
  id: string;
  categoryTitle: string;
  description: string;
  icon?: string;
  offerings: ServiceOffering[];
  cta?: {
    text: string;
    href: string;
  };
}

// ============================================================================
// LEADERSHIP ENTITIES
// ============================================================================

export interface Credential {
  name: string; // e.g., "CISSP"
  issuer: string; // e.g., "ISC²"
  year?: number;
  url?: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  title: string;
  credentials: Credential[];
  bio: string;
  expertise: string[];
  avatar: string; // URL
  email?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

// ============================================================================
// NAVIGATION ENTITIES
// ============================================================================

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
  target?: '_blank' | '_self';
  icon?: string;
  description?: string;
  children?: NavigationLink[];
}

// ============================================================================
// CTA ENTITIES
// ============================================================================

export interface CTA {
  id: string;
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  ariaLabel?: string;
}

// ============================================================================
// COMPOSITE DATA (Fetched from endpoints)
// ============================================================================

export interface PageData {
  page: Page;
  services: Service[];
  leadership: LeadershipProfile[];
  navigation: NavigationLink[];
}

export interface ServicePageData {
  services: Service[];
  cta: CTA;
}

export interface LeadershipPageData {
  profiles: LeadershipProfile[];
  teamMission?: string;
}

// ============================================================================
// EXAMPLE DATA
// ============================================================================

/*
const exampleService: Service = {
  id: 'cio-advisory',
  categoryTitle: 'CIO & CISO Advisory',
  description: 'Strategic guidance on governance, risk, compliance, and IT transformation.',
  offerings: [
    {
      id: 'grc',
      name: 'Governance, Risk & Compliance',
      description: 'Comprehensive frameworks for SOX, GDPR, CCPA, and HIPAA compliance.',
      keywords: ['SOX', 'GDPR', 'CCPA', 'HIPAA'],
    },
  ],
};

const exampleLeader: LeadershipProfile = {
  id: 'girish',
  name: 'Girish Deshmukh',
  title: 'Founder & CEO',
  credentials: [
    { name: 'CISSP', issuer: 'ISC²', year: 2010 },
  ],
  bio: '30+ years of global IT leadership...',
  expertise: ['IT Strategy', 'Security', 'Risk Management'],
  avatar: 'https://example.com/girish.jpg',
};
*/
