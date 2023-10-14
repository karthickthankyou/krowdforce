'use client'
import { MyApplicationsQuery } from '@krowdforce/network/src/generated'
import { ApplyButton } from './ApplyButton'
import { Description, Title2 } from '../atoms/typography'

export const ApplicationCard: React.FC<{
  application: MyApplicationsQuery['myApplications'][0]
}> = ({ application }) => {
  const { job } = application
  return (
    <div className="bg-white">
      <div className="flex items-center gap-6">
        <Title2>{job.title}</Title2>
        <ApplyButton jobId={application.job.id} />
      </div>
      <Description>{job.description}</Description>
      <ul className="mt-2">
        <li>Type: {job.type}</li>
        <li>Status: {job.status}</li>
        <li>Salary: {job.payPerHour}/hr</li>
        <li>Address: {job?.address?.address}</li>
      </ul>
      <div className="mt-2">
        <span className="font-bold">Skills:</span>{' '}
        {job.skills.map((skill) => skill.name).join(', ')}
      </div>
    </div>
  )
}
