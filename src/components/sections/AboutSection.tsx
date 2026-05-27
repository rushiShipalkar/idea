import React from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { Card } from '../common/Card'

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" background="white" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-primary-100/70 blur-3xl" />
      <Container>
        <div className="mb-10 max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">About IDEIA</p>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-5xl">Strategic clarity for high-stakes IT decisions</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-4 text-xl font-semibold text-neutral-800">
              Just enough security to enable innovation
            </p>
            <p className="mb-4 text-lg leading-relaxed text-neutral-600">
              IDEIA LLC is a strategic IT and security consulting firm led by Girish Deshmukh, with 30+ years of global
              IT leadership and advisory experience.
            </p>
            <p className="leading-relaxed text-neutral-600">
              We specialize in helping enterprise CIOs and CISOs navigate complex technology transformations, security
              challenges, and business-critical IT decisions. Our approach combines deep technical expertise with
              executive-level business acumen.
            </p>
          </div>
          <div>
            <Card variant="elevated">
              <div className="p-7 md:p-8">
                <h3 className="mb-5 text-2xl font-bold text-primary-700">Our Expertise</h3>
                <ul className="space-y-3.5 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary-500" />
                    <span>Enterprise Security Strategy & GRC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary-500" />
                    <span>IT Transformation & Cloud Migration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary-500" />
                    <span>Full-Stack Application Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary-500" />
                    <span>Enterprise Systems & ERP Implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary-500" />
                    <span>Global IT Advisory & Executive Leadership</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
