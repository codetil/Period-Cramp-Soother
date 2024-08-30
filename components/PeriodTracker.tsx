import { Calendar } from '@/components/ui/calendar'

export default function PeriodTracker() {
  return (
    <Calendar
      mode="single"
      selected={new Date()}
      className="rounded-md border"
    />
  )
}