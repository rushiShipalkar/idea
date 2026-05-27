import { useEffect } from 'react'

type EventData = Record<string, string | number | boolean | undefined>
type GtagConfig = { page_path?: string; page_title?: string } & EventData
type Gtag = {
  (command: 'config', targetId: string, config?: GtagConfig): void
  (command: 'event', eventName: string, eventData?: EventData): void
}

/**
 * GA4 event tracking hook
 * Tracks custom events to Google Analytics 4
 * Requires VITE_GA_ID environment variable to be set
 */
export const useAnalytics = () => {
  useEffect(() => {
    // Initialize GA4 if ID is provided
    const gaId = import.meta.env.VITE_GA_ID
    if (gaId && window.gtag) {
      window.gtag('config', gaId)
    }
  }, [])

  /**
   * Track a custom event in GA4
   * @param eventName - Name of the event (e.g., 'hero_cta_click', 'service_view')
   * @param eventData - Optional event data object
   */
  const trackEvent = (eventName: string, eventData?: EventData) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventData)
    }
  }

  /**
   * Track page view
   * @param pagePath - Path of the page
   * @param pageTitle - Title of the page
   */
  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      })
    }
  }

  return { trackEvent, trackPageView }
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: Gtag
  }
}
