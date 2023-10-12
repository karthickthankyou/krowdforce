import { FC } from 'react'
import { Description, Title } from '../atoms/typography'
import Link from 'next/link'
import { cn } from '../../util'

export const StatCard: FC<{
  title: string
  count?: number
  href?: string
  className?: string
}> = ({ title, count, href, className }) => {
  return (
    <div
      className={cn(
        'hover:shadow-xl shadow-md flex flex-col transition-all border p-2 rounded',
        className,
      )}
    >
      <Description>{title}</Description>
      <div className="text-3xl font-light">{count || '-'}</div>
      {href ? (
        <Link className="hover:underline underline-offset-4 mt-4" href={href}>
          See all
        </Link>
      ) : null}
    </div>
  )
}
