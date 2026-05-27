import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, children, className = '', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none'

    const variants = {
      primary:
        'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-primary-500',
      secondary:
        'bg-secondary-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-secondary-700 focus-visible:outline-secondary-500',
      outline:
        'border border-primary-300 text-primary-700 bg-white/80 hover:bg-primary-50 hover:border-primary-400 focus-visible:outline-primary-500',
    }

    const sizes = {
      sm: 'px-4 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <span>Loading...</span> : children}
      </button>
    )
  }
)

Button.displayName = 'Button'
