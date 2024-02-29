import {
  useRef,
  useLayoutEffect,
  useState,
  FC,
  ReactNode,
  ElementRef,
  HTMLAttributes,
} from 'react'

import { cn } from '../../utils'

export type CollapsibleProps = {
  children?: ReactNode
  /**
   * Instantly expand and collapse children.
   */
  instant?: string
  /**
   * Determines if children should render `null` or not while closed.
   */
  lazy?: boolean
  onComplete?: (open: boolean) => void
  /**
   * Controls whether or not children are visible.
   */
  open: boolean
  transitionDuration?: string
  transitionTimingFunction?: string
} & HTMLAttributes<HTMLDivElement>

const Collapsible: FC<CollapsibleProps> = ({
  children,
  instant,
  lazy,
  onComplete,
  className,
  open = false,
  transitionDuration = '200ms',
  transitionTimingFunction = 'ease-out',
  ...restProps
}) => {
  const transition = `height ${transitionDuration} ${transitionTimingFunction}`

  const [renderChildren, setRenderChildren] = useState<boolean>(
    lazy ? open : true,
  )

  const containRef = useRef<ElementRef<'div'> | null>(null)

  const firstRender = useRef(true)

  function openCollapse() {
    const node: any = containRef.current
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + 'px'
    })
  }

  function closeCollapse() {
    const node: any = containRef.current
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + 'px'
      node.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        node.style.height = 0
      })
    })
  }

  useLayoutEffect(() => {
    if (lazy) {
      if (open) {
        if (renderChildren) {
          openCollapse()
        } else {
          setRenderChildren(true)
        }
      } else {
        closeCollapse()
      }
    } else {
      if (open) {
        openCollapse()
      } else {
        closeCollapse()
      }
    }
  }, [open, lazy, renderChildren])

  useLayoutEffect(() => {
    const node: any = containRef.current
    function handleComplete() {
      node.style.overflow = open ? 'initial' : 'hidden'
      if (open) {
        node.style.height = 'auto'
      }
      if (!open && lazy) {
        setRenderChildren(false)
      }
      if (onComplete) {
        onComplete(open)
      }
    }
    function handleTransitionEnd(event: any) {
      if (event.target === node && event.propertyName === 'height') {
        handleComplete()
      }
    }
    if (instant || firstRender.current) {
      handleComplete()
      firstRender.current = false
    }
    node.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      node.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [open, instant, lazy, onComplete])

  useLayoutEffect(() => {
    if (open) {
      openCollapse()
    }
  }, [renderChildren, open])

  return (
    <div
      style={{
        transition: instant || firstRender.current ? undefined : transition,
      }}
      className={cn(className)}
      ref={containRef}
      {...restProps}
    >
      {renderChildren ? children : null}
    </div>
  )
}

export { Collapsible }
