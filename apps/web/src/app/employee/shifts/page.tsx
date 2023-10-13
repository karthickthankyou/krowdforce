import {
  MyEmploymentsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Title, Title2, Title3 } from '../../../components/atoms/typography'
import { fetchGraphQLInfer } from '../../util/fetch'
import { generateTimeline } from '../../../util/shifts'
import { Timeline } from '../../../components/organisms/Timeline'

export default async function ShiftsPage() {
  const myEmployments = await fetchGraphQLInfer(
    MyEmploymentsDocument,
    {},
    { next: { tags: [namedOperations.Query.MyEmployments] } },
  )

  return (
    <main>
      <Title className={'mb-4'}>Upcoming shifts</Title>
      <div className="flex flex-col gap-6">
        {generateTimeline(myEmployments.data?.myEmployments).map((timeline) => (
          <Timeline
            title={
              <div className={timeline.shifts.length === 0 ? 'text-gray' : ''}>
                {timeline.date}
              </div>
            }
            key={timeline.date}
          >
            <div className="flex flex-col gap-2">
              {timeline.shifts.map((shift) => (
                <div key={shift.title}>
                  <Title3>{shift.time}</Title3>
                  <div>{shift.title}</div>
                </div>
              ))}
            </div>
            {timeline.shifts.length === 0 ? (
              <div className="text-gray">No shifts.</div>
            ) : null}
          </Timeline>
        ))}
      </div>
    </main>
  )
}
