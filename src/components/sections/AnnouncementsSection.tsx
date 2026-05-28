import React from 'react'
import { Container } from '../common/Container'
import { SectionWrapper } from '../common/SectionWrapper'
import { Card } from '../common/Card'
import { Button } from '../common/Button'

const TOWN_HALL_EVENT = {
  id: 'town-hall-2027',
  type: 'Town Hall',
  title: 'Town Hall 2027',
  date: new Date('2027-01-01'),
  subtitle: 'All employees are requested to attend the company town hall meeting.',
}

function formatEventDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })
}

function formatDayMonth(date: Date): { day: string; month: string; year: string } {
  return {
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    year: date.getFullYear().toString(),
  }
}

export const AnnouncementsSection: React.FC = () => {
  const event = TOWN_HALL_EVENT
  const { day, month, year } = formatDayMonth(event.date)

  return (
    <SectionWrapper id="announcements" background="light">
      <Container>
        <div className="mb-12 max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Announcements</p>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-5xl">Upcoming Events</h2>
        </div>

        <div className="max-w-2xl animate-fade-up">
          <Card variant="elevated" className="overflow-hidden">
            {/* Accent top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary-600 to-secondary-600" />

            <div className="p-7 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Calendar date block */}
                <div
                  aria-label={formatEventDate(event.date)}
                  className="flex shrink-0 flex-col items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4 shadow-sm transition-shadow duration-300 hover:shadow-soft"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">{month}</span>
                  <span className="mt-0.5 text-4xl font-extrabold leading-none text-primary-700">{day}</span>
                  <span className="mt-1 text-sm font-semibold text-neutral-500">{year}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3 inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700">
                    {event.type}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-neutral-900">{event.title}</h3>
                  <p className="mb-5 leading-relaxed text-neutral-600">{event.subtitle}</p>

                  <Button variant="outline" size="sm" aria-label={`View details for ${event.title}`}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  )
}
