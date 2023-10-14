import { JobDocument, JobQuery } from '@krowdforce/network/src/generated'
import Image from 'next/image'
import { Title3 } from '../atoms/typography'
import { Badge } from '../atoms/badge'
import { Separator } from '../atoms/separator'
import { FC } from 'react'
import { ApplyButton } from '../organisms/ApplyButton'
import { Button } from '../atoms/button'
import { FollowButton } from '../organisms/FollowButton'

export const JobPage: FC<{ job: JobQuery['job'] }> = ({ job }) => {
  return (
    <div className="space-y-4 mt-2">
      <div>
        <div className="font-semibold text-xl mb-2">{job?.title}</div>
        <div className=" mb-2 max-w-sm text-sm">{job?.description}</div>
        <div className="text-gray-500 text-sm">
          {new Date(job?.createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="mb-4">
        <Title3>Posted by</Title3>
        <div className="flex gap-2 items-center">
          <Image
            width={100}
            height={100}
            src={job?.employer?.user.image || ''}
            className="rounded-full w-8 h-8"
            alt=""
          />
          {job?.employer?.user.name}
        </div>
        <FollowButton followingId={job.employer?.uid} />
      </div>
      <div className="text-gray-600 mb-4">{job?.company.name}</div>

      <div className="mb-2">
        <Title3>Salary</Title3>
        {job.payPerHour}
        DS
      </div>

      <div className="mb-4">
        <Title3>Type</Title3>
        {job?.type.split('_').join(' ')}
      </div>

      <div className="mb-2">
        <Title3>Skills</Title3>
        <div className="flex gap-2">
          {job?.skills.map((skill) => (
            <Badge key={skill.name} variant={'outline'}>
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Title3>Location</Title3>
        {job.address?.address || job.company.address.address}
      </div>

      <div className="mb-4">
        <Title3>Contact</Title3>
        {job?.contactInfo || 'Unspecified'}
      </div>
      <ApplyButton jobId={job.id} />
      <Separator className="my-6" />
    </div>
  )
}
