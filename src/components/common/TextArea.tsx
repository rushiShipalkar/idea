import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="mb-2 block text-sm font-semibold text-neutral-700">{label}</label>}
        <textarea
          ref={ref}
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-base text-neutral-900 shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
            error ? 'border-danger bg-danger/5' : 'border-neutral-300 hover:border-primary-300'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-danger">{error}</p>}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
