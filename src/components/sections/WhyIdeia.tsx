import React from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { Card } from '../common/Card'

interface WhyIdeiaItem {
  title: string
  description: string
  marker: string
}

const whyIdeia: WhyIdeiaItem[] = [
  {
    title: 'Proven Global Experience',
    description:
      '30+ years of IT leadership with successful implementations across Fortune 500 companies, government agencies (USDA), and innovative tech firms.',
    marker: '01',
  },
  {
    title: 'Security-First Engineering',
    description:
      'Enterprise-grade security mindset embedded in every solution. CISSP-certified leadership ensuring compliance, risk management, and incident response excellence.',
    marker: '02',
  },
  {
    title: 'ROI-Driven Strategy',
    description:
      'Technology investments aligned with business outcomes. Strategic planning for IT transformation, cost optimization, and competitive advantage.',
    marker: '03',
  },
  {
    title: 'Executive-Level Advisory',
    description:
      'Direct CIO/CISO engagement with proven ability to translate complex technical challenges into business-focused solutions and executive communications.',
    marker: '04',
  },
]

export const WhyIdeia: React.FC = () => {
  return (
    <SectionWrapper id="why-ideia" background="white">
      <Container>
        <div className="mb-12 max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Why IDEIA</p>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-5xl">A consulting partner built for enterprise velocity</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {whyIdeia.map((item, idx) => (
            <Card key={idx} variant="elevated">
              <div className="p-7 md:p-8">
                <div className="mb-4 inline-flex rounded-md bg-secondary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-700">
                  {item.marker}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">{item.title}</h3>
                <p className="leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
