import { IconClock, TablerIconsProps } from '@tabler/icons-react'
import { FC, ReactNode } from 'react'
import { Title2 } from '../atoms/typography'

export const Timeline: FC<{
  Icon?: (props: TablerIconsProps) => JSX.Element
  title: ReactNode
  children: ReactNode
}> = ({ Icon = IconClock, title, children }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center gap-2">
        <Icon className="flex-shrink-0 text-gray" />
        <div className="w-0.5 bg-gray h-full" />
      </div>
      <div>
        <Title2>{title}</Title2>
        {children}
      </div>
    </div>
  )
}
