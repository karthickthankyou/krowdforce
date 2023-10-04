// import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/authOptions'

export default async function User() {
  //   const session = await getServerSession(authOptions)
  return (
    <div>
      <div>User</div>
      {/* <div>{session?.user?.uid}</div> */}
    </div>
  )
}
