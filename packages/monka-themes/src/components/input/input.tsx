import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../utils'
import { InputStyleProps } from './type'

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputStyleProps & {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, widthFull, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          'px-3 py-2 h-10 bg-background-body border border-primary-700 w-96 rounded-md focus:ring-primary-500 transition focus-visible:ring-2 disabled:opacity-50',
          className,
          widthFull && 'w-full',
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export { Input }
