/**
 * Component Props Type Contracts
 * Defines TypeScript interfaces for all component props
 */

// ============================================================================
// COMMON COMPONENT PROPS
// ============================================================================

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'phone' | 'number' | 'password';
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
}

export interface TextAreaProps {
  name: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  spacing?: 'compact' | 'normal' | 'spacious';
  backgroundColor?: string;
}

// ============================================================================
// LAYOUT COMPONENT PROPS
// ============================================================================

export interface HeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export interface NavigationProps {
  links: Array<{ id: string; label: string; href: string }>;
  activeLink?: string;
  onLinkClick?: (href: string) => void;
}

export interface FooterProps {
  year?: number;
  email?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ id: string; label: string; href: string }>;
}

// ============================================================================
// SECTION COMPONENT PROPS
// ============================================================================

export interface HeroSectionProps {
  companyName: string;
  tagline: string;
  subtext: string;
  backgroundImage?: string;
  ctaText: string;
  ctaHref: string;
}

export interface AboutSectionProps {
  missionStatement: string;
  overview: string;
  leader?: {
    name: string;
    title: string;
    credentials: string[];
    experience: string;
    image?: string;
  };
}

export interface ServicesSectionProps {
  services: Array<{
    id: string;
    title: string;
    description: string;
    offerings: Array<{ name: string; description: string }>;
  }>;
}

export interface LeadershipSectionProps {
  profiles: Array<{
    id: string;
    name: string;
    title: string;
    credentials: Array<{ name: string; issuer: string }>;
    bio: string;
    expertise: string[];
    avatar?: string;
  }>;
}

export interface ContactSectionProps {
  email: string;
  onSubmit?: (formData: Record<string, unknown>) => Promise<void>;
}

// ============================================================================
// FEATURE COMPONENT PROPS
// ============================================================================

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  offerings?: Array<{ name: string; description: string }>;
  cta?: { text: string; href: string };
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  badge?: string;
}

export interface LeadershipCardProps {
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  expertise: string[];
  avatar?: string;
}

export interface ContactFormProps {
  onSubmit?: (formData: Record<string, unknown>) => Promise<void>;
  successMessage?: string;
  errorMessage?: string;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

// ============================================================================
// HOOK RETURN TYPES
// ============================================================================

export interface UseContactFormReturn {
  values: Record<string, unknown>;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export interface UseScrollSpyReturn {
  activeSection: string;
}

export interface UseMediaQueryReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

// ============================================================================
// EXAMPLE USAGE
// ============================================================================

/*
import { ServiceCardProps } from './component-props';

export function ServiceCard({ title, description, icon, ...props }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {icon && <img src={icon} alt="" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
*/
