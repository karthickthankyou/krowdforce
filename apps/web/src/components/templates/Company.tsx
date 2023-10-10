import { CompanyQuery } from '@krowdforce/network/src/generated'
import Link from 'next/link'
import { MapLink } from '../atoms/mapLink'
import { StaticMapLocation } from '../atoms/staticMap'
import { Title } from '../atoms/typography'
import { CompanyJobs } from './CompanyJobs'

export const Company = ({ company }: CompanyQuery) => {
  return (
    <div className="my-4">
      <div className="text-xl font-semibold">{company.name}</div>
      <div>{company.description}</div>
      <MapLink lat={company.address.lat} lng={company.address.lng}>
        <StaticMapLocation position={company.address} className="w-60 h-60" />
      </MapLink>
      <div className="text-gray">{company.address.address}</div>
      <div className="flex justify-between mt-6">
        <Title>Jobs</Title>
        <Link
          href={'/employer/jobs/new'}
          className="block mt-2 underline underline-offset-4"
        >
          + New job
        </Link>
      </div>

      <CompanyJobs />
    </div>
  )
}
