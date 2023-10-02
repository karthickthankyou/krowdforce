import { DisplayUser } from '@/components/DisplayUser'
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
import Link from 'next/link'
import { authOptions } from './api/auth/authOptions'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <div>{session?.user?.name}</div>
      <Button variant={'outline'}>Hey here.</Button>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
        <Link href={'/api/auth/signin'}>Sign in</Link>
      </Sheet>
      <DisplayUser />
      <ModeToggle />
    </main>
  )
}
