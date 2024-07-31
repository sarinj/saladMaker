import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  inputClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputClassName, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center gap-2 rounded-[8px] border border-gray bg-white px-2 py-1',
          className
        )}
      >
        {icon && <div>{icon}</div>}
        <input
          type={type}
          className={cn('size-full border-none outline-none', inputClassName)}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
