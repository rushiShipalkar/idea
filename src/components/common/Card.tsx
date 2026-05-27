import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'elevated'
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', className = '', ...props }, ref) => {
    const styles = {
      default:
        'bg-white/90 backdrop-blur-sm border border-neutral-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft',
      elevated:
        'bg-white border border-neutral-200/80 rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow',
    }

    return (
      <div ref={ref} className={`${styles[variant]} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
