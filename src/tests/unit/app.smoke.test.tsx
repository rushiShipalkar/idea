import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../../App'

describe('App', () => {
  it('renders the direct contact section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute('href', 'mailto:info@ideiallc.com')
  })
})
