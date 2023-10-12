import { EmployerMeQuery } from '@krowdforce/network/src/generated'
import Image from 'next/image'
import { Link } from '../molecules/CustomLink'
import { Description, Title2 } from '../atoms/typography'

export const EmployerMenu = ({ employerMe }: EmployerMeQuery) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <Image
        src={employerMe?.user.image || ''}
        alt=""
        width={300}
        height={300}
      />
      <div className="mb-2">
        <Title2 className="text-xl font-semibold">
          {employerMe?.user.name}
        </Title2>
        <Description>{employerMe?.company?.description || ''}</Description>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/employer">Dashboard</Link>
        <Link href="/employer/searchEmployees">Search employees</Link>
        <Link href="/employer/jobs">Jobs</Link>
        <Link href="/employer/employees">Employees</Link>
        <Link href="/employer/applications">Applications</Link>
        <Link href="/employer/employers">Manage employers</Link>
        <Link href="/employer/jobs/new">New job</Link>
        <Link href="/employer/following">Following</Link>
      </div>
    </div>
  )
}
