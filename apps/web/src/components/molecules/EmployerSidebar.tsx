import { MenuItem } from '@krowdforce/util/types'
import { IconMenu } from '@tabler/icons-react'
import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'

import { Button } from '../atoms/button'
import { EmployerMeQuery } from '@krowdforce/network/src/generated'
import { EmployerMenu } from '../organisms/EmployerMenu'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export function EmployerSidebar({ employerMe }: EmployerMeQuery) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <IconMenu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <EmployerMenu employerMe={employerMe} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
