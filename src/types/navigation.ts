export interface NavLink {
  id: string
  label: string
  href: string
  external?: boolean
}

export const NAVIGATION_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'why-ideia', label: 'Why IDEIA', href: '#why-ideia' },
  { id: 'leadership', label: 'Leadership', href: '#leadership' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
