import {
  EmployeeMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../util/fetch'
import { CreateEmployee } from '../../components/organisms/CreateEmployee'
import { FormProviderCreateEmployee } from '@krowdforce/forms/createEmployee'
import { EmployeeMenu } from '../../components/organisms/EmployeeMenu'
import { IconMenu } from '@tabler/icons-react'
import { EmployeeSidebar } from '../../components/molecules/EmployeeSidebar'

export default async function EmployeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data, error } = await fetchGraphQL({
    document: EmployeeMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.EmployeeMe],
      },
    },
  })

  if (!data?.employeeMe?.uid) {
    return (
      <FormProviderCreateEmployee>
        <CreateEmployee />
      </FormProviderCreateEmployee>
    )
  }

  return (
    <div className="flex mt-2">
      <div className="w-full max-w-xs hidden sm:block">
        <EmployeeMenu employeeMe={data.employeeMe} />
      </div>

      <div className="flex-grow">
        <div className="sm:hidden">
          <EmployeeSidebar employeeMe={data.employeeMe} />
        </div>
        {children}
      </div>
    </div>
  )
}
