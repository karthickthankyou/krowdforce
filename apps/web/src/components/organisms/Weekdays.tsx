'use client'
import { Weekday } from '@krowdforce/network/src/generated'
import React, { useState } from 'react'

interface WeekdaysProps {
  initialSelectedDays?: Weekday[]
  onToggle?: (selectedDays: Weekday[]) => void
  readonly?: boolean
}
const orderedWeekdays = [
  Weekday.Monday,
  Weekday.Tuesday,
  Weekday.Wednesday,
  Weekday.Thursday,
  Weekday.Friday,
  Weekday.Saturday,
  Weekday.Sunday,
]
export const Weekdays: React.FC<WeekdaysProps> = ({
  initialSelectedDays = [],
  onToggle,
  readonly = false,
}) => {
  const [selectedDays, setSelectedDays] =
    useState<Weekday[]>(initialSelectedDays)

  const toggleDay = (day: Weekday) => {
    let newSelectedDays: Weekday[]
    if (selectedDays.includes(day)) {
      newSelectedDays = selectedDays.filter(
        (selectedDay) => selectedDay !== day,
      )
    } else {
      newSelectedDays = [...selectedDays, day]
    }

    setSelectedDays(newSelectedDays)

    if (onToggle) {
      onToggle(newSelectedDays)
    }
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {orderedWeekdays.map((day, index) => {
        const isActive = selectedDays.includes(day)
        return (
          <button
            key={index}
            disabled={readonly}
            className={`w-8 h-8 rounded outline outline-black outline-1 flex-inline items-center justify-center ${
              isActive
                ? 'bg-black text-white shadow-lg shadow-black/40 -translate-y-1 transition-all'
                : ''
            }`}
            onClick={() => toggleDay(day)}
          >
            {DayIcons[day]}
          </button>
        )
      })}
    </div>
  )
}

export const DayIcons = {
  [Weekday.Monday]: <div className="p-1.5">M</div>,
  [Weekday.Tuesday]: <div className="p-1.5">T</div>,
  [Weekday.Wednesday]: <div className="p-1.5">W</div>,
  [Weekday.Thursday]: <div className="p-1.5">T</div>,
  [Weekday.Friday]: <div className="p-1.5">F</div>,
  [Weekday.Saturday]: <div className="p-1.5">S</div>,
  [Weekday.Sunday]: <div className="p-1.5">S</div>,
}
