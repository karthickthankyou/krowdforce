'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const DisplayUser = () => {
  const { data, status } = useSession()

  if (status === 'loading' || status === 'unauthenticated') {
    return null
  }

  return (
    <div className='flex items-center gap-2'>
      <Image
        className='w-8 h-8 rounded'
        width={100}
        height={100}
        src={data?.user?.image || ''}
        alt={''}
      />
      <div>{data?.user?.name}</div>
      <div>{data?.user?.uid}</div>
      <Link href='/api/auth/signout'>Signout</Link>
    </div>
  )
}
