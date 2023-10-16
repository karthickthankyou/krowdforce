import {
  CompanyEmployeesDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { EmployerCard } from '../organisms/EmployerCard'

export const CompanyEmployees = async () => {
  const data = await fetchGraphQL({
    document: CompanyEmployeesDocument,
    config: { next: { tags: [namedOperations.Query.CompanyEmployees] } },
  })

  if (!data.data?.companyEmployees.length) {
    return <div>No employees.</div>
  }
  return (
    <div className="grid mt-6 grid-cols-3 gap-2">
      {data.data.companyEmployees.map(({ createdAt, skills, user }) => (
        <EmployerCard createdAt={createdAt} user={user} key={user.uid} />
      ))}
    </div>
  )
}
