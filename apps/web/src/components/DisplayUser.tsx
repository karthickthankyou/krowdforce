'use client'
import Image from 'next/image'
import { getCsrfToken, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useUsersQuery } from '@krowdforce/network/src/generated'

export const DisplayUser = () => {
  const { data, status } = useSession()

  console.log('DisplayUser ', data, status)
  const { data: usersData, error, loading } = useUsersQuery()
  console.log('usersData,error, loading', usersData, error, loading)

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
