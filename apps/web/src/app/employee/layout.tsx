import {
  EmployeeMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../util/fetch'
import { CreateEmployee } from '../../components/organisms/CreateEmployee'
import { FormProviderCreateEmployee } from '@krowdforce/forms/createEmployee'

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data, error } = await fetchGraphQLInfer(
    EmployeeMeDocument,
    {},
    {
      next: {
        tags: [namedOperations.Query.EmployeeMe],
      },
    },
  )

  if (!data?.employeeMe?.uid) {
    return (
      <FormProviderCreateEmployee>
        <CreateEmployee />
      </FormProviderCreateEmployee>
    )
  }

  return <>{children}</>
}
