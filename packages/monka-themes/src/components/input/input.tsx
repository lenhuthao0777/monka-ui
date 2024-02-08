import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../utils'
import { InputStyleProps } from './type'

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputStyleProps & {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, widthFull, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex h-10 w-96 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background-body file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
