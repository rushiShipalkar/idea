export interface ServiceOffering {
  id: string
  title: string
  description: string
  icon?: string
  icon_color?: string
  cta_text?: string
  cta_link?: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  offerings: ServiceOffering[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cios-advisors',
    title: 'CIO & CISO Advisory',
    description: 'Strategic leadership for enterprise security and IT transformation',
    offerings: [
      {
        id: 'grc',
        title: 'GRC (Governance, Risk & Compliance)',
        description: 'SOX, GDPR, CCPA, HIPAA compliance frameworks and implementation',
      },
      {
        id: 'risk-management',
        title: 'Risk Management & Incident Response',
        description: 'Business Impact Analysis, Disaster Recovery, incident handling',
      },
      {
        id: 'vendor-security',
        title: 'Vendor & Supply Chain Security',
        description: 'Third-party risk assessment, supply chain resilience',
      },
      {
        id: 'budget-optimization',
        title: 'Budget & IT Resource Optimization',
        description: 'Cost optimization, resource planning, IT economics',
      },
    ],
  },
  {
    id: 'it-development',
    title: 'IT Application Development & Support',
    description: 'Full-stack engineering and enterprise system expertise',
    offerings: [
      {
        id: 'app-rationalization',
        title: 'Application Rationalization',
        description: 'Assess, reuse, rewrite, or retire legacy applications',
      },
      {
        id: 'cloud-migration',
        title: 'Cloud Migration & Architecture',
        description: 'On-premises to cloud-native transformation',
      },
      {
        id: 'enterprise-systems',
        title: 'Enterprise Systems (SAP/ERP)',
        description: 'Global enterprise system implementations and support',
      },
      {
        id: 'full-stack',
        title: 'Full Stack Engineering',
        description: 'C++, JavaScript, HTML, and modern web technologies',
      },
    ],
  },
]
