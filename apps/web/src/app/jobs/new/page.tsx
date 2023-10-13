import { FormProviderCreateJob } from '@krowdforce/forms/createJob'
import {
  EmployerCompanyDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../util/fetch'
import { NewJob } from '../../../components/templates/NewJob'

export default async function NewJobPage() {
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
