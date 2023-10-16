import {
  CompanyDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Company } from '../../../components/templates/Company'
import { fetchGraphQL } from '../../util/fetch'

export default async function CompanyPage({
  params,
}: {
  params: { slug: string }
}) {
  const companyId = +params.slug

  const { data, error } = await fetchGraphQL({
    document: CompanyDocument,
    variables: { where: { id: companyId } },
    config: {
      next: {
        tags: [namedOperations.Query.Company],
      },
    },
  })

  if (!data?.company?.name) {
    return null
  }

  return <Company company={data.company} />
}
