import React from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { Card } from '../common/Card'
import { LEADERSHIP_TEAM } from '../../types/leader'

export const LeadershipSection: React.FC = () => {
  return (
    <SectionWrapper id="leadership" background="light" className="relative overflow-hidden">
      <Container>
        <div className="mb-12 max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Leadership</p>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-5xl">Seasoned advisors with execution depth</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Work directly with leaders who have steered enterprise IT, security, and transformation initiatives at global scale.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {LEADERSHIP_TEAM.map((leader) => (
            <Card key={leader.id} variant="elevated">
              <div className="p-8 md:p-12">
                <div className="md:flex gap-8">
                  {leader.image_url && (
                    <div className="mb-6 md:mb-0 md:w-52">
                      <img
                        src={leader.image_url}
                        alt={leader.name}
                        className="aspect-square w-full rounded-2xl object-cover shadow-soft"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-neutral-900">{leader.name}</h3>
                    <p className="mb-4 mt-2 text-xl font-semibold text-primary-700">{leader.title}</p>
                    <p className="mb-5 leading-relaxed text-neutral-600">{leader.bio}</p>

                    <div className="mb-6">
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Credentials</h4>
                      <p className="text-neutral-700">{leader.credentials.join(', ')}</p>
                    </div>

                    {leader.education && (
                      <div className="mb-6">
                        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Education</h4>
                        <p className="text-neutral-700">{leader.education}</p>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {leader.social_links && leader.social_links.length > 0 && (
                      <div className="flex gap-4">
                        {leader.social_links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary-600 transition hover:text-primary-700"
                          >
                            {link.platform === 'linkedin' && 'LinkedIn'}
                            {link.platform === 'twitter' && 'Twitter'}
                            {link.platform === 'github' && 'GitHub'}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
