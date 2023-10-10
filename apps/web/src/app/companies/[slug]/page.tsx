import {
  CompanyDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Company } from '../../../components/templates/Company'
import { fetchGraphQLInfer } from '../../util/fetch'

export default async function CompanyPage({
  params,
}: {
  params: { slug: string }
}) {
  const companyId = +params.slug

  const { data, error } = await fetchGraphQLInfer(
    CompanyDocument,
    { where: { id: companyId } },
    {
      next: {
        tags: [namedOperations.Query.Company],
      },
    },
  )

  if (!data?.company?.name) {
    return null
  }

  return <Company company={data.company} />
}
