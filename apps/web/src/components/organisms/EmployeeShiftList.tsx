import { MyEmploymentsQuery } from '@krowdforce/network/src/generated'
import { generateTimeline } from '../../util/shifts'
import { Timeline } from './Timeline'
import { Title3 } from '../atoms/typography'
import { ClockInOutButton } from './ClockInOutButton'

const combineDateWithTime = (currentDate: string, time: string): Date => {
  const date = new Date(currentDate)
  const [hours, minutes] = time.split(':').map(Number)

  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(0)
  date.setMilliseconds(0)

  return date
}

export const EmployeeShiftList = ({
  shifts,
  startDay = 0,
  endDay = 7,
}: {
  shifts: MyEmploymentsQuery['myEmployments']
  startDay: number
  endDay: number
}) => {
  return (
    <div className="flex flex-col gap-6">
      {generateTimeline(shifts, startDay, endDay).map((timeline) => (
        <Timeline
          title={
            <div className={timeline.shifts.length === 0 ? 'text-gray' : ''}>
              {timeline.dateDisplay}
            </div>
          }
          key={timeline.dateDisplay}
        >
          <div className="flex flex-col gap-2">
            {timeline.shifts.map((shift) => (
              <div key={shift.title}>
                <Title3>
                  {shift.startTime} - {shift.endTime}
                </Title3>
                <div>{shift.title}</div>

                <ClockInOutButton
                  shiftDateTime={combineDateWithTime(
                    timeline.date.toString(),
                    shift.startTime,
                  )}
                />
              </div>
            ))}
          </div>
          {timeline.shifts.length === 0 ? (
            <div className="text-gray">No shifts.</div>
          ) : null}
        </Timeline>
      ))}
    </div>
  )
}
