import {
  CompanyEmployersDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { EmployerCard } from '../organisms/EmployerCard'

export const Employers = async () => {
  const data = await fetchGraphQL({
    document: CompanyEmployersDocument,
    config: { next: { tags: [namedOperations.Query.CompanyEmployers] } },
  })
  if (!data.data?.companyEmployers) {
    return <div>No employers.</div>
  }
  return (
    <div className="grid mt-6 grid-cols-3 gap-2">
      {data.data.companyEmployers.map(({ createdAt, user }) => (
        <EmployerCard createdAt={createdAt} user={user} key={user.uid} />
      ))}
    </div>
  )
}
