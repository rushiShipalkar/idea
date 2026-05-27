import React, { useEffect } from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { Card } from '../common/Card'
import { SERVICE_CATEGORIES } from '../../types/service'
import { useAnalytics } from '../../hooks/useAnalytics'

export const ServicesSection: React.FC = () => {
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    // Track services section view
    trackEvent('services_section_view', {
      section: 'services',
      service_count: SERVICE_CATEGORIES.length,
    })
  }, [trackEvent])

  const handleServiceCardHover = (serviceName: string) => {
    trackEvent('service_card_view', {
      service_name: serviceName,
      section: 'services',
    })
  }

  return (
    <SectionWrapper id="services" background="light" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-secondary-200/60 blur-3xl" />
      <Container>
        <div className="mb-12 max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Capabilities</p>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-5xl">Services engineered for resilient growth</h2>
          <p className="mt-4 text-lg text-neutral-600">
            From C-suite strategy to hands-on engineering, IDEIA delivers measurable progress across your most critical
            IT initiatives.
          </p>
        </div>

        <div className="space-y-16">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-2xl font-bold text-neutral-900 md:text-3xl">{category.title}</h3>
              <p className="mb-8 mt-2 max-w-3xl text-lg text-neutral-600">{category.description}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {category.offerings.map((offering) => (
                  <Card key={offering.id} variant="default">
                    <div className="p-6 md:p-7" onMouseEnter={() => handleServiceCardHover(offering.title)}>
                      <div className="mb-5 inline-flex rounded-md bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
                        Service
                      </div>
                      <h4 className="mb-3 text-xl font-bold text-neutral-900">{offering.title}</h4>
                      <p className="leading-relaxed text-neutral-600">{offering.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
