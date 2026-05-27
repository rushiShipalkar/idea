import React, { useState } from 'react'
import { Container } from '../common/Container'
import { NAVIGATION_LINKS } from '../../types/navigation'
import logoImage from '../../assets/images/image (1).png'

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="IDEIA LLC"
                className="h-10 w-10 rounded-md object-contain"
                loading="eager"
                decoding="async"
              />
              <span className="font-display text-xl font-semibold text-neutral-900">IDEIA LLC</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-neutral-600 transition-colors hover:text-primary-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg border border-neutral-200 p-2 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="animate-fade-in border-t border-neutral-200 pb-4 md:hidden">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block py-2 text-sm font-semibold text-neutral-700 transition hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </nav>
        )}
      </Container>
    </header>
  )
}
