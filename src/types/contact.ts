export interface ContactInfo {
  email: string
  linkedin: string
  phone?: string
}

export const DEFAULT_CONTACT_INFO: ContactInfo = {
  email: 'info@ideiallc.com',
  linkedin: 'https://www.linkedin.com/in/gdeshmukh',
  phone: 'Available on request',
}
