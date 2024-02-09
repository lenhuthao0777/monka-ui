import { clsx } from 'clsx'

const labelClsx = ({ className = '' }: { className?: string }) =>
  clsx(
    'tracking-tight uppercase text-text-tertiary text-xs font-bold',
    className,
  )

const label = {
  labelClsx,
}

export { label }
