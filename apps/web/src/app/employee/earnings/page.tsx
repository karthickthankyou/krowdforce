import {
  MyEarningsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../util/fetch'
import { Title } from '../../../components/atoms/typography'
import { differenceInMinutes } from 'date-fns'
import { EmployeeEarnings } from '../../../components/templates/EmployeeEarnings'

export default async function Earnings() {
  const myEarnings = await fetchGraphQLInfer(
    MyEarningsDocument,
    {},
    { next: { tags: [namedOperations.Query.myEarnings] } },
  )

  return (
    <div>
      <Title>Earnings page</Title>
      <EmployeeEarnings />
    </div>
  )
}
