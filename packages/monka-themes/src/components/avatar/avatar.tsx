import * as React from 'react'

interface AvatarProps extends React.PropsWithChildren {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  },
)

export default Avatar
