import { EmployeeMeQuery } from '@krowdforce/network/src/generated'
import NextLink from 'next/link'
import Image from 'next/image'
import { Link } from '../molecules/CustomLink'
import { Description, Title2 } from '../atoms/typography'

export const EmployeeMenu = ({ employeeMe }: EmployeeMeQuery) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <Image
        src={employeeMe?.user.image || ''}
        alt=""
        width={300}
        height={300}
      />
      <div className="mb-2">
        <Title2 className="text-xl font-semibold">
          {employeeMe?.user.name}
        </Title2>
        <Description>{employeeMe?.about}</Description>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/employee">Dashboard</Link>
        <Link href="/employee/jobSearch">Job search</Link>
        <Link href="/employee/applications">Applications</Link>
        <Link href="/employee/bookmarks">Bookmarks</Link>
        <Link href="/employee/following">Following</Link>
      </div>
    </div>
  )
}
