import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'lg', className = '', ...props }, ref) => {
    const sizes = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      full: 'w-full',
    }

    return (
      <div ref={ref} className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
