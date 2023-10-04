'use client'
import { signIn, useSession, signOut } from 'next-auth/react'

import { Button } from '@krowdforce/ui/src/components/ui/button'

export default function SignIn() {
  const { data, status, update } = useSession()
  console.log('data, status, ', data, status)

  //   if (data?.user) {
  //     return (
  //       <div>
  //         <div>You are logged in</div>
  //         <Button onClick={() => signOut()}>signOut</Button>
  //       </div>
  //     )
  //   }
  return (
    <div className='flex items-center justify-center'>
      <Button
        onClick={() =>
          signIn('google', {
            redirect: true,
            callbackUrl: 'http://localhost:3001',
          })
        }
      >
        Sign in with google
      </Button>
    </div>
  )
}
