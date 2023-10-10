import { ReactNode } from 'react'

export const Title = ({ children }: { children: ReactNode }) => {
  return <div className="text-xl font-semibold capitalize">{children}</div>
}
export const Description = ({ children }: { children: ReactNode }) => {
  return <div className="text-gray capitalize">{children}</div>
}
