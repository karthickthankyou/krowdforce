import { MenuItem } from '@krowdforce/util/types'
import { IconMenu } from '@tabler/icons-react'
import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'

import { Button } from '../atoms/button'
import { EmployeeMeQuery } from '@krowdforce/network/src/generated'
import { EmployeeMenu } from '../organisms/EmployeeMenu'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export function EmployeeSidebar({ employeeMe }: EmployeeMeQuery) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <IconMenu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <EmployeeMenu employeeMe={employeeMe} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
