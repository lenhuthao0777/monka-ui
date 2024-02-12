import { forwardRef, PropsWithChildren } from 'react'

type CollapsibleProps = PropsWithChildren & {}

const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  },
)

export default Collapsible
