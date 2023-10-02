import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/authOptions'
import Link from 'next/link'

export default async function User() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return (
      <div>
        <div>Nope.</div>
        <Link href='/api/auth/signin'>Sign in</Link>
      </div>
    )
  }

  return (
    <div>
      <div>User</div>
      <div>{session?.user?.uid}</div>
    </div>
  )
}
