import {
  ApplicationStatus,
  CompanyApplicationsDocument,
} from '@krowdforce/network/src/generated'
import Image from 'next/image'
import { fetchGraphQL } from '../../app/util/fetch'
import { AddEmployeeDialog } from '../organisms/AddEmployeeDialog'
import { Description, Title, Title2 } from '../atoms/typography'

export const AcceptedOffers = async () => {
  const data = await fetchGraphQL({
    document: CompanyApplicationsDocument,
    variables: {
      where: {
        status: ApplicationStatus.Accepted,
      },
    },
  })
  if (!data.data?.companyApplications.length) {
    return null
  }
  return (
    <div className="mt-12 bg-primary-100 p-2">
      <Title>Action required!</Title>
      <Description>
        The below applications are accepted but are not added to employees.
      </Description>
      <div className="mt-4 flex gap-2 flex-wrap">
        {data.data?.companyApplications.map((application) => (
          <div key={application.job.id} className="flex gap-2 w-full max-w-md">
            <Image
              src={application.employee.user.image || ''}
              className="w-24 h-24 rounded"
              width={300}
              height={300}
              alt=""
            />
            <div className="mr-8">
              <Title2>{application.employee.user.name}</Title2>
              <Description>{application.employee.uid}</Description>
              <AddEmployeeDialog
                jobId={application.job.id}
                companyId={application.job.companyId}
                employeeId={application.employee.uid}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
