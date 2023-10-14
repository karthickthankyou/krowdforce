import { MyEmploymentsQuery, Weekday } from '@krowdforce/network/src/generated'
import { format } from 'date-fns'
interface Shift {
  title: string
  startTime: string
  endTime: string
}
export interface TimelineEntry {
  dateDisplay: string
  date: Date
  shifts: Shift[]
}

export const generateTimeline = (
  employments?: MyEmploymentsQuery['myEmployments'],
  startDay: number = 0,
  endDay: number = 7,
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

  // Move the current date back to the start day
  currentDate.setDate(currentDate.getDate() + startDay)

  // Generate timeline for the next 7 days
  for (let i = startDay; i < endDay; i++) {
    const shifts: Shift[] = []
    const dayStr = dayToStr[currentDate.getDay()] as Weekday

    employments?.forEach((employment) => {
      const shiftDays = employment.job.shiftInformation?.days

      if (shiftDays?.includes(dayStr) && employment.job.shiftInformation) {
        const { startTime, endTime } = employment.job.shiftInformation

        const title = employment.job.title

        shifts.push({ title, startTime, endTime })
      }
    })

    const formattedDate = format(new Date(currentDate), 'EEEE, MMMM do')
    timeline.push({
      dateDisplay: formattedDate,
      shifts,
      date: new Date(currentDate),
    })

    // Increment the day for the next loop iteration
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return timeline
}
