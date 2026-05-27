export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github'
  url: string
}

export interface LeadershipProfile {
  id: string
  name: string
  title: string
  bio: string
  credentials: string[]
  education?: string
  expertise: string[]
  image_url?: string
  social_links?: SocialLink[]
}

export const LEADERSHIP_TEAM: LeadershipProfile[] = [
  {
    id: 'girish-deshmukh',
    name: 'Girish Deshmukh',
    title: 'Founder & Principal Consultant',
    bio: '30+ years of global IT leadership and strategic consulting. Proven expertise in enterprise security, IT transformation, and executive advisory for Fortune 500 companies. Led digital transformations across USDA, Harley-Davidson, and Netlist.',
    credentials: ['CISSP', 'PMP', 'PCC (Professional Certified Coach)'],
    expertise: ['Enterprise Security Strategy', 'IT Transformation', 'CIO/CISO Advisory', 'Business Leadership', 'Global IT Operations'],
    social_links: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/gdeshmukh',
      },
    ],
  },
]
