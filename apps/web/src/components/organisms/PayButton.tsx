'use client'
import { payAttendance } from '../../actions/payAttendance'
import { Button } from '../atoms/button'
import { SubmitButton } from '../molecules/SubmitButton'

export const PayButton = ({ attendanceId }: { attendanceId: number }) => {
  return (
    <form action={payAttendance}>
      <input name="attendanceId" className="sr-only" value={attendanceId} />
      <SubmitButton>Pay</SubmitButton>
    </form>
  )
}
