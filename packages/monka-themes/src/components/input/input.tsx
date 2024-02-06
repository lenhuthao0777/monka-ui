import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../utils'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, fullWidth, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          'px-3 h-10 border border-primary-700 w-96 rounded-md',
          className,
          fullWidth && 'w-full',
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
