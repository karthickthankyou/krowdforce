import { differenceInHours } from 'date-fns'
import { Button } from '../atoms/button'

export const ClockInOutButton = ({
  shiftDateTime,
}: {
  shiftDateTime: Date
}) => {
  const diff = differenceInHours(shiftDateTime, new Date())
  if (Math.abs(diff) > 5) {
    return null
  }
  return <Button>Clock in</Button>
}
