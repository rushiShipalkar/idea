import React from 'react'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  background?: 'light' | 'white' | 'primary'
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, id, background = 'white', className = '', ...props }, ref) => {
    const bgStyles = {
      light: 'bg-neutral-50/95',
      white: 'bg-white',
      primary: 'bg-primary-50/80',
    }

    return (
      <section
        ref={ref}
        id={id}
        className={`py-20 md:py-24 lg:py-28 ${bgStyles[background]} ${className}`}
        {...props}
      >
        {children}
      </section>
    )
  }
)

SectionWrapper.displayName = 'SectionWrapper'
