import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="mb-2 block text-sm font-semibold text-neutral-700">{label}</label>}
        <input
          ref={ref}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-base text-neutral-900 shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
            error ? 'border-danger bg-danger/5' : 'border-neutral-300 hover:border-primary-300'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-danger">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
