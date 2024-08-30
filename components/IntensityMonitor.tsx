import { Progress } from '@/components/ui/progress'

export default function IntensityMonitor({ level }: { level: number }) {
  return (
    <div>
      <Progress value={level * 10} className="w-full" />
      <p className="mt-2 text-center">Current Intensity: {level}/10</p>
    </div>
  )
}