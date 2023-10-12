import {
  EmployeeMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { EmployeeMenu } from '../../../components/organisms/EmployeeMenu'
import { fetchGraphQLInfer } from '../../util/fetch'

export default async function Menu() {
  const { data, error } = await fetchGraphQLInfer(
    EmployeeMeDocument,
    {},
    {
      next: {
        tags: [namedOperations.Query.EmployeeMe],
      },
    },
  )
  return <EmployeeMenu employeeMe={data?.employeeMe} />
}
