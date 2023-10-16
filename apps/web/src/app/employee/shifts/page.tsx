import {
  MyEmploymentsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Title } from '../../../components/atoms/typography'
import { fetchGraphQL } from '../../util/fetch'
import { CheckOutList } from '../../../components/organisms/CheckOutList'
import { EmployeeShiftList } from '../../../components/organisms/EmployeeShiftList'

export default async function ShiftsPage() {
  const myEmployments = await fetchGraphQL({
    document: MyEmploymentsDocument,
    config: { next: { tags: [namedOperations.Query.MyEmployments] } },
  })

  return (
    <main className="space-y-12">
      <CheckOutList />
      <div>
        <Title className={'mb-4'}>Todays shifts</Title>
        <EmployeeShiftList
          shifts={myEmployments.data?.myEmployments || []}
          startDay={0}
          endDay={1}
        />
      </div>
      <div>
        <Title className={'mb-4'}>Upcoming shifts</Title>
        <EmployeeShiftList
          shifts={myEmployments.data?.myEmployments || []}
          startDay={1}
          endDay={7}
        />
      </div>
    </main>
  )
}
