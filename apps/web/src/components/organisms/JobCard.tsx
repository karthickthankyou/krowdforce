import { format } from 'date-fns'
import { Badge } from '../atoms/badge'
import { Title2 } from '../atoms/typography'
import { MapLink } from '../atoms/mapLink'
import { StaticMapLocation } from '../atoms/staticMap'
import {
  EmployerJobDetailsFragment,
  JobStatus,
} from '@krowdforce/network/src/generated'
import { PulsingDot } from './PulsingDot'

export const JobCard = ({ job }: { job: EmployerJobDetailsFragment }) => {
  return (
    <div className="space-y-1 " key={job.id}>
      <div className="flex justify-start gap-6">
        <Title2>{job.title}</Title2>
        <PulsingDot pulsing={job.status === JobStatus.Open} />
      </div>
      <div className="text-gray max-w-md">{job.description}</div>
      <div className="flex gap-2">
        <Badge variant={'outline'}>{job.status}</Badge>
        <Badge variant={'outline'}>{job.type}</Badge>
      </div>
      <div className="text-gray">{job.salary}</div>

      {job.start ? (
        <div className="py-2 text-sm text-gray">
          {format(new Date(job.start), 'LLL dd, y')} -{' '}
          {format(new Date(job.end), 'LLL dd, y')}
        </div>
      ) : null}
      {job.address?.address ? (
        <MapLink lat={job.address.lat} lng={job.address.lng}>
          <StaticMapLocation position={job.address} className="w-60 h-60" />
        </MapLink>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <div className="p-1 border" key={skill.name}>
            <div>{skill.name}</div>
            <div className="text-xs">{skill.category.name}</div>
          </div>
        ))}
      </div>
      <div className="py-6">
        <div className="h-[1px] bg-gray-200" />
      </div>
    </div>
  )
}
