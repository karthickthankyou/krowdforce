import { MyEmploymentsQuery, Weekday } from '@krowdforce/network/src/generated'
import { format } from 'date-fns'
interface Shift {
  title: string
  time: string
}
export interface TimelineEntry {
  date: string
  shifts: Shift[]
}

export const generateTimeline = (
  employments?: MyEmploymentsQuery['myEmployments'],
): TimelineEntry[] => {
  const timeline: TimelineEntry[] = []
  const dayToStr = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ]
  let currentDate = new Date()

  // Generate timeline for the next 7 days
  for (let i = 0; i < 7; i++) {
    const shifts: Shift[] = []
    const dayStr = dayToStr[currentDate.getDay()] as Weekday

    employments?.forEach((employment) => {
      const shiftDays = employment.job.shiftInformation?.days

      if (shiftDays?.includes(dayStr)) {
        const time = `${employment.job.shiftInformation?.startTime} - ${employment.job.shiftInformation?.endTime}`
        const title = employment.job.title

        shifts.push({ title, time })
      }
    })

    const formattedDate = format(new Date(currentDate), 'EEEE, MMMM do')
    timeline.push({ date: formattedDate, shifts })

    // Increment the day for the next loop iteration
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return timeline
}
