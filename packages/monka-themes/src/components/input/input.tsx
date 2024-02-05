import * as React from 'react'

interface InputProps extends React.PropsWithChildren {}

const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  },
)

export default Input
