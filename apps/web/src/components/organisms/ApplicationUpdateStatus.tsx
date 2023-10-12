'use client'
import {
  CompanyApplicationsQuery,
  MyApplicationsQuery,
} from '@krowdforce/network/src/generated'
import { ApplyButton } from './ApplyButton'
import { Description, Title2 } from '../atoms/typography'
import { SetApplicationStatus } from './ApplicantsDialog'

export const ApplicationUpdateStatusCard: React.FC<{
  application: CompanyApplicationsQuery['companyApplications'][0]
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
        <li>Salary: {job.salary}</li>
        <li>Address: {job?.address?.address}</li>
      </ul>
      <div className="mt-2">
        <span className="font-bold">Skills:</span>{' '}
        {job.skills.map((skill) => skill.name).join(', ')}
      </div>
      <SetApplicationStatus
        employeeId={application.employee.uid}
        jobId={application.job.id}
        status={application.status}
      />
    </div>
  )
}
