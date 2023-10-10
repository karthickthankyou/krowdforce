import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../app/api/auth/authOptions'

export const ShowAuth = async () => {
  const session = await getServerSession(authOptions)
  if (session?.user?.uid) {
    return null
  }

  return (
    <>
      <Link href={'/api/auth/signin'}>Sign in</Link>
    </>
  )
}
