import { FormProviderCreateJob } from '@krowdforce/forms/createJob'
import {
  EmployerCompanyDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { NewJob } from '../../../../components/templates/NewJob'
import { fetchGraphQLInfer } from '../../../util/fetch'

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

  if (!data?.employerCompany?.id) {
    return null
  }
  return (
    <FormProviderCreateJob>
      <NewJob employerCompany={data.employerCompany} />
    </FormProviderCreateJob>
  )
}
