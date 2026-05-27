import React from 'react'
import { Container } from '../common/Container'
import { DEFAULT_CONTACT_INFO } from '../../types/contact'
import logoImage from '../../assets/images/image(2).png'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 py-14 text-white">
      <Container>
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="IDEIA LLC"
                className="h-10 w-10 rounded-md object-contain"
                loading="lazy"
                decoding="async"
              />
              <h3 className="font-display text-xl font-bold">IDEIA LLC</h3>
            </div>
            <p className="mt-3 max-w-xs text-neutral-300">Strategic IT and security consulting for decisive enterprise leaders.</p>
            <p className="mt-2 text-sm text-neutral-400">Just enough security to enable innovation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">Quick Links</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#leadership" className="transition hover:text-white">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="transition hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">Contact</h4>
            <p className="text-neutral-300">
              <a href={`mailto:${DEFAULT_CONTACT_INFO.email}`} className="hover:text-white transition">
                {DEFAULT_CONTACT_INFO.email}
              </a>
            </p>
            <div className="mt-5 flex gap-5 text-sm">
              <a
                href={DEFAULT_CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a href="#privacy" className="text-neutral-300 hover:text-white transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-sm text-neutral-500">
            &copy; {currentYear} IDEIA LLC. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
