import React, { useEffect } from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { DEFAULT_CONTACT_INFO } from '../../types/contact'
import { useAnalytics } from '../../hooks/useAnalytics'

export const ContactSection: React.FC = () => {
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    // Track contact section view
    trackEvent('contact_section_view', {
      section: 'contact',
    })
  }, [trackEvent])

  return (
    <SectionWrapper id="contact" background="white" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-secondary-200/70 blur-3xl" />
      <Container>
        <div className="mb-12 max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Contact</p>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-5xl">Contact Us</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Reach out to us directly via email for consulting inquiries.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-bold text-neutral-900">Email Us Directly</h3>
            <p className="mt-3 text-neutral-700">
              We respond promptly to messages from enterprise leaders seeking strategic IT and security guidance.
            </p>
            <a
              href={`mailto:${DEFAULT_CONTACT_INFO.email}`}
              className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Get in Touch
            </a>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-bold text-neutral-900">Contact Information</h3>
            <div className="space-y-7">
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Email</h4>
                <a
                  href={`mailto:${DEFAULT_CONTACT_INFO.email}`}
                  className="text-lg font-semibold text-primary-700 transition hover:text-primary-800"
                >
                  {DEFAULT_CONTACT_INFO.email}
                </a>
              </div>
              {DEFAULT_CONTACT_INFO.phone && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Phone</h4>
                  <p className="text-lg font-medium text-neutral-800">{DEFAULT_CONTACT_INFO.phone}</p>
                </div>
              )}
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">LinkedIn</h4>
                <div className="flex gap-4 text-lg font-semibold">
                  <a
                    href={DEFAULT_CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary-600 transition hover:text-primary-700"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
