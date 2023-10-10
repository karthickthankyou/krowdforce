import { EmployerJobsQuery } from '@krowdforce/network/src/generated'
import { Badge } from '../atoms/badge'
import Link from 'next/link'
import { format } from 'date-fns'

export const EmployerJobs = ({ employerJobs }: EmployerJobsQuery) => {
  return (
    <div>
      <Link href="/employer/jobs/new" className="block py-6">
        Post new job
      </Link>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {employerJobs.map((job) => (
          <div className="space-y-1 " key={job.id}>
            <div className="text-lg font-semibold">{job.title}</div>
            <div className="text-gray">{job.description}</div>
            <Badge>{job.status}</Badge>
            <Badge>{job.type}</Badge>
            <div className="text-gray">{job.salary}</div>
            {job.start ? (
              <div className="py-2 text-sm text-gray">
                {format(new Date(job.start), 'LLL dd, y')} -{' '}
                {format(new Date(job.end), 'LLL dd, y')}
              </div>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <div className="p-1 border" key={skill.name}>
                  <div>{skill.name}</div>
                  <div className="text-xs">{skill.category.name}</div>
                </div>
              ))}{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
