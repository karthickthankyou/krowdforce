// import { getServerSession } from 'next-auth'

export default async function User() {
  //   const session = await getServerSession(authOptions)
  return (
    <div>
      <div>User</div>
      {/* <div>{session?.user?.uid}</div> */}
    </div>
  )
}
