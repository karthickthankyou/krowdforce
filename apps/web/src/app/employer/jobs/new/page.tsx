import { FormProviderCreateJob } from '@krowdforce/forms/createJob'
import { NewJob } from '@krowdforce/ui/src/components/templates/NewJob'
import { fetchGraphQLInfer } from '../../../util/fetch'
import {
  EmployerCompanyDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'

export default async function JobsByEmployerPage() {
  const { data, error } = await fetchGraphQLInfer(
    EmployerCompanyDocument,
    {},
    {
      next: {
        tags: [namedOperations.Query.EmployerCompany],
      },
    },
  )

  console.log('JobsByEmployerPage ', data, error)

  if (!data?.employerCompany?.id) {
    return null
  }
  return (
    <FormProviderCreateJob>
      <NewJob employerCompany={data.employerCompany} />
    </FormProviderCreateJob>
  )
}
