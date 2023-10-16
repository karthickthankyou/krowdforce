import {
  MyEmploymentsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Title, Title2 } from '../../../components/atoms/typography'
import { fetchGraphQL } from '../../util/fetch'
import { format } from 'date-fns'
import { Weekdays } from '../../../components/organisms/Weekdays'
import { IconArrowRight, IconExchange } from '@tabler/icons-react'
import { generateTimeline } from '../../../util/shifts'

export default async function EmploymentsPage() {
  const myEmployments = await fetchGraphQL({
    document: MyEmploymentsDocument,
    config: { next: { tags: [namedOperations.Query.MyEmployments] } },
  })

  return (
    <main>
      <Title>Employments</Title>
      <div className="flex flex-col gap-6">
        {myEmployments.data?.myEmployments.map((employment) => (
          <div key={employment.id} className="space-y-2">
            <Title2>{employment.job.title}</Title2>
            <div>{employment.job.company.name}</div>
            <div>{format(new Date(employment.startDate), 'PP')}</div>
            {employment.endDate ? (
              <div>{format(new Date(employment.endDate), 'PP')}</div>
            ) : null}
            {employment.job.shiftInformation ? (
              <>
                <Weekdays
                  initialSelectedDays={
                    employment.job.shiftInformation.days || []
                  }
                  readonly
                />
                <div className="flex gap-4">
                  <div className="text-2xl font-light">
                    {employment.job.shiftInformation.startTime}
                  </div>
                  <IconArrowRight />
                  <div className="text-2xl font-light">
                    {employment.job.shiftInformation.endTime}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  )
}
