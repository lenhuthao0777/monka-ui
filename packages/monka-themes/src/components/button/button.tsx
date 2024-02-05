import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Slot } from '@radix-ui/themes'
import { button, ButtonStylesProps } from './type'

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
      asChild,
      disabled,
      color,
      loading,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        className={buttonCva({
          className,
          variant,
          color,
          size,
          disabled,
          loading,
        })}
        disabled={loading || disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    )
  },
)

export { Button }
