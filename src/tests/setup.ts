import '@testing-library/jest-dom'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

type MatchMediaResult = {
  matches: boolean
  media: string
  onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown) | null
  addListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => unknown) => void
  removeListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => unknown) => void
  addEventListener: MediaQueryList['addEventListener']
  removeEventListener: MediaQueryList['removeEventListener']
  dispatchEvent: (event: Event) => boolean
}

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string): MatchMediaResult => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin = ''
  readonly thresholds = []

  constructor() {}

  disconnect() {}

  observe() {}

  takeRecords() {
    return []
  }

  unobserve() {}
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})
