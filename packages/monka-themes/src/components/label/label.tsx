import * as React from 'react'

interface LabelProps extends React.PropsWithChildren {}

const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  },
)

export default Label
