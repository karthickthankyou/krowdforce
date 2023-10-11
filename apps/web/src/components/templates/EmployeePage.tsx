import {
  EmployeeQuery,
  JobDocument,
  JobQuery,
} from '@krowdforce/network/src/generated'
import Image from 'next/image'
import { Title, Title3 } from '../atoms/typography'
import { Badge } from '../atoms/badge'
import { Separator } from '../atoms/separator'
import { FC } from 'react'
import { ApplyButton } from '../organisms/ApplyButton'

export const EmployeePage: FC<{ employee: EmployeeQuery['employee'] }> = ({
  employee,
}) => {
  return (
    <div className="space-y-4 mt-2">
      <div>
        <Image
          width={300}
          height={300}
          src={employee.user.image || ''}
          className="w-64 h-64"
          alt=""
        />
        <Title className=" my-2">{employee.user.name}</Title>
        <div className=" mb-2 max-w-sm text-sm">{employee.about}</div>
        <div className=" mb-2 max-w-sm text-sm">
          {employee.contactInfo
            ? employee.contactInfo
            : 'No contact information given.'}
        </div>
        <div className="text-gray-500 text-sm">
          {new Date(employee.createdAt).toLocaleDateString()}
        </div>
      </div>

      <div className="mb-2">
        <Title3>Skills</Title3>
        <div className="flex gap-2">
          {employee.skills.map((skill) => (
            <Badge key={skill.name} variant={'outline'}>
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Title3>Location</Title3>
        {employee.address?.address}
      </div>

      {/* <div className="mb-4">
        <Title3>Contact</Title3>
        {employee.contactInfo || 'Unspecified'}
      </div>
      <ApplyButton jobId={job.id} /> */}
    </div>
  )
}
