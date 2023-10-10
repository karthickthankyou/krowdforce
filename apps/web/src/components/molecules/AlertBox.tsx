import { ReactNode } from 'react'

export const AlertBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-40 bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  )
}
