import { useEffect } from 'react'
import { LEADERSHIP_TEAM } from '../types/leader'
import { SERVICE_CATEGORIES } from '../types/service'
import { DEFAULT_CONTACT_INFO } from '../types/contact'

const SITE_NAME = 'IDEIA LLC'
const SITE_URL = 'https://ideiallc.com'
const DEFAULT_IMAGE_URL = `${SITE_URL}/og-image.svg`
const DEFAULT_TITLE = 'IDEIA LLC | Strategic IT & Security Consulting'
const DEFAULT_DESCRIPTION =
  'Strategic IT and security consulting for CIOs, CISOs, and enterprise leaders navigating transformation, compliance, risk, and cloud modernization.'

type SeoSection = 'home' | 'about' | 'services' | 'why-ideia' | 'leadership' | 'contact' | 'privacy'

interface SeoEntry {
  title: string
  description: string
  path: string
}

const SEO_BY_SECTION: Record<SeoSection, SeoEntry> = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  about: {
    title: 'About IDEIA LLC - 30+ Years IT Leadership',
    description:
      'Learn how IDEIA LLC combines executive IT leadership, security strategy, and enterprise transformation experience to guide critical technology decisions.',
    path: '/#about',
  },
  services: {
    title: 'IT Consulting Services - Security, GRC, Cloud Migration',
    description:
      'Explore CIO and CISO advisory, GRC, risk management, enterprise systems, application modernization, and cloud migration services from IDEIA LLC.',
    path: '/#services',
  },
  'why-ideia': {
    title: 'Why IDEIA LLC - Executive Technology Advisory',
    description:
      'See how IDEIA LLC helps organizations align security, governance, and engineering execution with board-level business priorities.',
    path: '/#why-ideia',
  },
  leadership: {
    title: 'Leadership - IDEIA LLC Executive Consulting Team',
    description:
      'Meet the IDEIA LLC leadership team bringing decades of enterprise security, transformation, and executive advisory experience.',
    path: '/#leadership',
  },
  contact: {
    title: 'Contact IDEIA LLC - Email Our Team',
    description:
      'Contact IDEIA LLC directly by email to discuss strategic IT, security, GRC, and enterprise transformation priorities.',
    path: '/#contact',
  },
  privacy: {
    title: 'Privacy Policy - IDEIA LLC',
    description:
      'Review how IDEIA LLC handles inquiry data, privacy rights, analytics usage, and information retention practices.',
    path: '/#privacy',
  },
}

const getSectionFromHash = (hash: string): SeoSection => {
  const normalizedHash = hash.replace('#', '')

  if (normalizedHash in SEO_BY_SECTION) {
    return normalizedHash as SeoSection
  }

  return 'home'
}

const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: DEFAULT_IMAGE_URL,
  description: DEFAULT_DESCRIPTION,
  email: DEFAULT_CONTACT_INFO.email,
  founder: LEADERSHIP_TEAM.map((leader) => ({
    '@type': 'Person',
    name: leader.name,
    jobTitle: leader.title,
    sameAs: leader.social_links?.map((link) => link.url) ?? [],
  })),
  sameAs: ['https://www.linkedin.com/in/gdeshmukh'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: DEFAULT_CONTACT_INFO.email,
      availableLanguage: ['English'],
    },
  ],
  makesOffer: SERVICE_CATEGORIES.flatMap((category) =>
    category.offerings.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        serviceType: category.title,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
      },
    }))
  ),
})

const upsertMeta = (selector: string, attribute: 'name' | 'property', key: string, value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

const upsertLink = (selector: string, rel: string, href: string) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const upsertJsonLd = (id: string, value: string) => {
  let element = document.head.querySelector(`#${id}`) as HTMLScriptElement | null

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = id
    document.head.appendChild(element)
  }

  element.textContent = value
}

export const SeoMetadata = ({ hash }: { hash: string }) => {
  const section = getSectionFromHash(hash)
  const seoEntry = SEO_BY_SECTION[section]
  const sectionUrl = `${SITE_URL}${seoEntry.path}`
  const organizationSchema = buildOrganizationSchema()
  const canonicalUrl = section === 'home' ? `${SITE_URL}/` : sectionUrl

  useEffect(() => {
    document.documentElement.lang = 'en'
    document.title = seoEntry.title

    upsertMeta('meta[name="description"]', 'name', 'description', seoEntry.description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', 'index, follow')
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', seoEntry.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', seoEntry.description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', sectionUrl)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE_URL)
    upsertMeta(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      'IDEIA LLC strategic IT and security consulting'
    )
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seoEntry.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seoEntry.description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE_URL)
    upsertLink('link[rel="canonical"]', 'canonical', canonicalUrl)
    upsertJsonLd('organization-schema', JSON.stringify(organizationSchema))
  }, [canonicalUrl, organizationSchema, sectionUrl, seoEntry.description, seoEntry.title])

  return null
}