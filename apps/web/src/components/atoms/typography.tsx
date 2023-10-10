import { ReactNode } from 'react'
import { cn } from '../../util'

type TextType = {
  className?: String
  children: ReactNode
}

export const Title = ({ children, className }: TextType) => {
  return (
    <div className={cn('text-xl font-semibold capitalize', className)}>
      {children}
    </div>
  )
}

export const Title2 = ({ children, className }: TextType) => {
  return (
    <div className={cn('text-lg font-semibold capitalize mb-1', className)}>
      {children}
    </div>
  )
}
export const Title3 = ({ children, className }: TextType) => {
  return (
    <div className={cn('font-semibold capitalize mb-1', className)}>
      {children}
    </div>
  )
}
export const Description = ({ children, className }: TextType) => {
  return <div className={cn('text-gray capitalize', className)}>{children}</div>
}
