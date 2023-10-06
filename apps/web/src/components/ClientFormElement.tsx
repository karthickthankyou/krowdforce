'use client'
import { useState } from 'react'

export const ClientFormElement = () => {
  const [count, setCount] = useState(0)
  return (
    <input
      name='count'
      value={count}
      placeholder='count'
      onChange={(e) => setCount(+e.target.value)}
    />
  )
}
