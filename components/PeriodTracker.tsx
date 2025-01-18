'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addDays } from 'date-fns'
import { usePeriodData } from '../hooks/usePeriodData'

export default function PeriodTracker() {
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { periodData, togglePeriodDay, isPeriodDay, isPredictedPeriodDay, getNextPeriodDate } = usePeriodData()

  const changeMonth = (delta: number) => {
    setSelectedDate(prevDate => delta > 0 ? addMonths(prevDate, 1) : subMonths(prevDate, 1))
  }

  const renderCalendar = () => {
    const monthStart = startOfMonth(selectedDate)
    const monthEnd = endOfMonth(selectedDate)
    const startDate = monthStart
    const endDate = monthEnd

    const dateFormat = "d"
    const rows = []

    let days = []
    let day = startDate
    let formattedDate = ""

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat)
        const cloneDay = day
        days.push(
          <div
            className={`p-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isSameDay(day, currentDate)
                ? "bg-blue-500 text-white rounded-full"
                : ""
            } ${isPeriodDay(cloneDay) ? "bg-red-500 text-white" : ""} ${
              isPredictedPeriodDay(cloneDay) ? "bg-pink-200" : ""
            }`}
            key={day.toString()}
            onClick={() => togglePeriodDay(cloneDay)}
          >
            {formattedDate}
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day.toString()}>
          {days}
        </div>
      )
      days = []
    }
    return <div className="mt-4">{rows}</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Button variant="outline" size="icon" onClick={() => changeMonth(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>{format(selectedDate, 'MMMM yyyy')}</span>
          <Button variant="outline" size="icon" onClick={() => changeMonth(1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center font-bold">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>
        {renderCalendar()}
        <div className="mt-4">
          <p>Current Date: {format(currentDate, 'MMMM d, yyyy')}</p>
          <p>Next Predicted Period: {getNextPeriodDate() ? format(getNextPeriodDate()!, 'MMMM d, yyyy') : 'N/A'}</p>
        </div>
      </CardContent>
    </Card>
  )
}

