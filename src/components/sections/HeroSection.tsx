import React from 'react'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { SectionWrapper } from '../common/SectionWrapper'
import { useAnalytics } from '../../hooks/useAnalytics'

export const HeroSection: React.FC = () => {
  const { trackEvent } = useAnalytics()

  const handleContactClick = () => {
    // Track GA4 event
    trackEvent('hero_cta_click', {
      section: 'hero',
      action: 'contact_click',
    })
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper id="hero" background="light" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-secondary-200/70 blur-3xl" />
      <Container>
        <div className="relative grid items-center gap-14 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="animate-fade-up">
            <span className="inline-flex rounded-full border border-primary-200 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 shadow-sm">
              Trusted by Executive IT Leaders
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
              Enterprise IT and Security Strategy Without the Noise
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              IDEIA LLC partners with CIOs and CISOs to modernize architecture, reduce risk, and accelerate execution
              across transformation-critical programs.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={handleContactClick}>
                Request Executive Consultation
              </Button>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-primary-200 bg-white px-8 py-4 text-lg font-semibold text-primary-700 transition hover:border-primary-300 hover:bg-primary-50"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="animate-fade-in rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-neutral-900 p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-neutral-300">Experience</p>
                <p className="mt-2 font-display text-3xl font-bold">30+ Years</p>
                <p className="mt-2 text-sm text-neutral-300">Global IT leadership and advisory execution.</p>
              </div>
              <div className="animate-float rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-primary-100">Coverage</p>
                <p className="mt-2 font-display text-3xl font-bold">CIO + CISO</p>
                <p className="mt-2 text-sm text-primary-50">Security, governance, operations, and architecture.</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Advisory Focus</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                GRC modernization, cloud migration strategy, enterprise systems transformation, and executive risk
                posture decisions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
