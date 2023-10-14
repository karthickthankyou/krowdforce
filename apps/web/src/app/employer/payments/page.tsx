import {
  CompanyPaymentsDocument,
  EmployerJobsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'

import { fetchGraphQLInfer } from '../../util/fetch'
import { CompanyJobs } from '../../../components/templates/CompanyJobs'
import { CompanyShifts } from '../../../components/templates/CompanyShifts'

export default async function PaymentsPage() {
  const { data, error } = await fetchGraphQLInfer(
    CompanyPaymentsDocument,
    { orderBy: { createdAt: SortOrder.Desc } },
    {
      next: {
        tags: [namedOperations.Query.CompanyPayments],
      },
    },
  )

  if (!data?.companyPayments) {
    return <div>No shifts found.</div>
  }

  return <CompanyShifts companyPayments={data.companyPayments} />
}
