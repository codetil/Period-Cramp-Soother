import { Battery } from 'lucide-react'

export default function BatteryLife({ percentage }: { percentage: number }) {
  return (
    <div className="flex items-center">
        <span className="inline-block w-2 h-2 bg-[#09CE6B] rounded-full animate-ping duration-[5000]" /> 
      <Battery className="w-8 h-8 mr-2 py-1" />
      <span>{percentage}%</span>
    </div>
  )
}