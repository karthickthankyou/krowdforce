'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
type RenderPropChild = (currentPath: string) => ReactNode
export interface ICurrentPath {
  children: ReactNode | RenderPropChild
}

export const CurrentPath = ({ children }: ICurrentPath) => {
  const currentPage = usePathname()
  console.log('currentPage', currentPage)
  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(currentPage)
        : children}
    </>
  )
}
