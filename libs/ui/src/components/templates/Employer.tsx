import { EmployerMeQuery } from '@krowdforce/network/src/generated'
import Link from 'next/link'

export const Employer = ({ employerMe }: EmployerMeQuery) => {
  return (
    <div>
      <div className='text-xl font-semibold'>{employerMe.company.name}</div>
      <div className='text-gray'>{employerMe.company.address.address}</div>
      <Link
        href={'/employer/jobs'}
        className='block mt-2 underline underline-offset-4'
      >
        View jobs
      </Link>
      <Link
        href={'/employer/jobs/new'}
        className='block mt-2 underline underline-offset-4'
      >
        New job
      </Link>
    </div>
  )
}
