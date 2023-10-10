import { MenuItem } from '@krowdforce/util/types'
import { IconMenu2 } from '@tabler/icons-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '../atoms/sheet'

import { Button } from '../atoms/button'
import { ModeToggle } from '../atoms/mode-toggle'
import { DisplayUser } from './DisplayUser'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export function NavSidebar({ menuItems }: INavSidebarProps) {
  const uid = true
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <IconMenu2 className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <DisplayUser />
          <Link href="/employer">Employer</Link>

          <SheetDescription>
            <div className="flex flex-col items-start space-y-1">
              {menuItems
                .filter(({ loggedIn }) => !loggedIn || uid)
                .map(({ label, href }) => (
                  <Link key={label} href={href}>
                    {label}
                  </Link>
                ))}
              <div className="py-2" />
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Link href="/api/auth/signout">Signout</Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const ShowMenuItems = ({ menuItems }: INavSidebarProps) => {
  const uid = true

  if (!uid) return null
  return (
    <div className="items-center hidden ml-auto lg:flex lg:gap-10">
      <ModeToggle />

      {menuItems
        .filter(({ loggedIn }) => !loggedIn || uid)
        .map(({ href, label }) => (
          <NavLink label={label} href={href} key={label} />
        ))}
    </div>
  )
}
export const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    key={label}
    href={href}
    className="text-sm transition-all hover:text-black hover:font-semibold hover:underline underline-offset-4"
  >
    {label}
  </Link>
)
