import React from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { DEFAULT_CONTACT_INFO } from '../../types/contact'

const PRIVACY_RIGHTS = [
  'Request access to the personal information we hold about you.',
  'Ask us to correct or delete inquiry-related data when retention is no longer necessary.',
  'Object to processing or request portability where applicable under GDPR or CCPA.',
]

const DATA_HANDLING_POINTS = [
  'We collect only the information you include when contacting us directly, such as your email address and inquiry details.',
  'Direct email inquiries may be retained in business email systems for follow-up, audit, and legal obligations.',
  'Access is limited to authorized IDEIA LLC personnel and approved processors supporting hosting and analytics.',
]

export const PrivacySection: React.FC = () => {
  return (
    <SectionWrapper id="privacy" background="light">
      <Container>
        <div className="max-w-4xl space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Privacy Policy</h2>
            <p className="text-lg text-neutral-700 max-w-3xl">
              IDEIA LLC handles inquiry data with a minimum-necessary approach. This policy explains what we collect,
              how we use it, and how you can exercise your privacy rights.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <section>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">What We Collect</h3>
              <ul className="space-y-3 text-neutral-700">
                {DATA_HANDLING_POINTS.map((point) => (
                  <li key={point} className="leading-7">
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Privacy Rights</h3>
              <ul className="space-y-3 text-neutral-700">
                {PRIVACY_RIGHTS.map((right) => (
                  <li key={right} className="leading-7">
                    {right}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Third-Party Services</h3>
            <p className="text-neutral-700 leading-7 mb-4">
              We use Cloudflare to host the site and Google Analytics for aggregate website measurement. These
              providers process data under their own privacy commitments and only to support the services they provide
              to IDEIA LLC.
            </p>
            <p className="text-neutral-700 leading-7">
              If you would like to request access, deletion, or more detail about our processing, contact{' '}
              <a href={`mailto:${DEFAULT_CONTACT_INFO.email}`} className="font-medium text-primary-600 hover:text-primary-700">
                {DEFAULT_CONTACT_INFO.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </SectionWrapper>
  )
}