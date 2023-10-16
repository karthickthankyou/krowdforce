import {
  EmployeeDocument,
  JobDocument,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../util/fetch'
import { JobPage } from '../../../components/templates/JobPage'
import { EmployeePage } from '../../../components/templates/EmployeePage'

export default async function JobPagePage({
  params,
}: {
  params: { slug: string }
}) {
  const uid = params.slug

  const data = await fetchGraphQL({
    document: EmployeeDocument,
    variables: {
      where: { uid },
    },
  })

  const employee = data.data?.employee
  if (!employee?.uid) {
    return <div>Employee not found.</div>
  }

  return <EmployeePage employee={employee} />
}
