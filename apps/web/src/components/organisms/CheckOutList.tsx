import {
  AttendancesDocument,
  MyAttendancesClockOutsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { Title } from '../atoms/typography'
import { Button } from '../atoms/button'
import { updateAttendance } from '../../actions/attendance'

export const CheckOutList = async () => {
  const myAttendance = await fetchGraphQL({
    document: MyAttendancesClockOutsDocument,
    config: { next: { tags: [namedOperations.Query.MyAttendancesClockOuts] } },
  })
  console.log('myAttendance', myAttendance.data?.myAttendancesClockOuts)

  if (!myAttendance.data?.myAttendancesClockOuts.length) {
    return null
  }
  return (
    <div className="mb-12">
      <Title>Current shifts</Title>
      {myAttendance.data?.myAttendancesClockOuts.map((attendance) => (
        <div key={attendance.id}>
          <div>{attendance.clockIn}</div>
          <form action={updateAttendance}>
            <input
              name="attendanceId"
              className="sr-only"
              value={attendance.id}
            />
            <button type="submit">Clock out</button>
          </form>
        </div>
      ))}
    </div>
  )
}
