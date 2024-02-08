import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Slot } from '@radix-ui/themes'
import { button, ButtonStylesProps } from './type'
import { cn } from '../../utils'

const { buttonCva } = button

export type ButtonProps = ButtonStylesProps & {
  loading?: boolean
  asChild?: boolean
} & ComponentPropsWithoutRef<'button'>

const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  (
    {
      children,
      variant,
      className,
      size,
      asChild = false,
      disabled,
      color,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        className={cn(
          buttonCva({
            className,
            variant,
            color,
            size,
            disabled,
            loading,
          }),
        )}
        disabled={loading || disabled}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Button.displayName = 'Button'

export default Button
