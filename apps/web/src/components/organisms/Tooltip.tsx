import { IconQuestionMark } from '@tabler/icons-react'
import { FC, ReactNode } from 'react'
import {
  Tooltip as TooltipReact,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../atoms/tooltip'

export const Tooltip: FC<{
  children: ReactNode
  trigger?: ReactNode
  className?: string
}> = ({
  children,
  className,
  trigger = (
    <div className="flex items-center justify-center bg-black rounded-full text-white p-1 hover:shadow-2xl">
      <IconQuestionMark />
    </div>
  ),
}) => {
  return (
    <div className={className}>
      <TooltipProvider>
        <TooltipReact>
          <TooltipTrigger asChild>
            <button>{trigger}</button>
          </TooltipTrigger>
          <TooltipContent>{children}</TooltipContent>
        </TooltipReact>
      </TooltipProvider>
    </div>
  )
}
