'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export const DisplayUser = () => {
  const { data, status } = useSession()

  if (status === 'loading' || status === 'unauthenticated') {
    return null
  }

  return (
    <div className='flex flex-col gap-2'>
      <Image
        className='w-full rounded aspect-square'
        width={300}
        height={300}
        src={data?.user?.image || ''}
        alt={''}
      />
      <div className='text-2xl font-light '>{data?.user?.name}</div>
      <div className='text-gray'>{data?.user?.uid}</div>
    </div>
  )
}
