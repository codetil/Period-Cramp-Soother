import { Button } from '@/components/ui/button'

export default function MeditationExercises() {
  const exercises = [
    { name: 'Deep Breathing', duration: '5 min' },
    { name: 'Yoga', duration: '10 min' },
    { name: 'Guided Relaxation', duration: '15 min' },
  ]

  return (
    <div className="space-y-4">
      {exercises.map((exercise, index) => (
        <div key={index} className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{exercise.name}</h3>
            <p className="text-sm text-muted-foreground">{exercise.duration}</p>
          </div>
          <Button size="sm">Start</Button>
        </div>
      ))}
    </div>
  )
}