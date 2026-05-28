import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { WhyIdeia } from './components/sections/WhyIdeia'
import { LeadershipSection } from './components/sections/LeadershipSection'
import { ContactSection } from './components/sections/ContactSection'
import { PrivacySection } from './components/sections/PrivacySection'
import { AnnouncementsSection } from './components/sections/AnnouncementsSection'
import { SeoMetadata } from './utils/seo'

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent">
      <SeoMetadata hash={currentHash} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyIdeia />
        <AnnouncementsSection />
        <LeadershipSection />
        <ContactSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  )
}
