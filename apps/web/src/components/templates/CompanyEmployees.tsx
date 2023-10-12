import {
  CompanyEmployeesDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../app/util/fetch'
import { EmployerCard } from '../organisms/EmployerCard'

export const CompanyEmployees = async () => {
  const data = await fetchGraphQLInfer(
    CompanyEmployeesDocument,
    {},
    { next: { tags: [namedOperations.Query.CompanyEmployees] } },
  )
  console.log('data', data)
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
