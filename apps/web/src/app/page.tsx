import { Button } from '@krowdforce/ui/src/components/ui/button'
import { ModeToggle } from '@krowdforce/ui/src/components/ui/mode-toggle'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@krowdforce/ui/src/components/ui/sheet'
import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import Link from 'next/link'
import { authOptions } from './api/auth/authOptions'
import { ToastButton } from '../components/ToastButton'
import { ServerQueryUser } from '../components/ServerQueryUser'
import { ServerOneUser } from '../components/ServerOneUser'
import { ServerGraphqlClient } from '../components/ServerGrpahqlClient'
import { ServerOneUserHardQuery } from '../components/ServerOneUserHardQuery'
import { DisplayUser } from '../components/DisplayUser'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <div>{session?.user?.uid}</div>

      <Link href={'/api/auth/signin'}>Sign in</Link>
      <DisplayUser />

      {/* <ServerQueryUser /> */}
      {/* <ServerOneUser /> */}
      {/* <ServerGraphqlClient /> */}
      <ServerOneUserHardQuery />
      <ToastButton />
    </main>
  )
}
