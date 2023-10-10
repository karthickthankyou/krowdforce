import { FC } from 'react'
import { cn } from '../../util'

export const PulsingDot: FC<{ pulsing: boolean }> = ({ pulsing = true }) => {
  return (
    <div
      className={cn(
        'w-4 h-4 bg-primary rounded-full',
        pulsing ? 'animate-pulse' : '',
      )}
    />
  )
}
