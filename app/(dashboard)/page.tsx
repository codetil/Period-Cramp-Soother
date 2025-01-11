'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import IntensityMonitor from '@/components/IntensityMonitor'
import BatteryLife from '@/components/BatteryLife'
import MeditationExercises from '@/components/MeditationExercises'
import PeriodTracker from '@/components/PeriodTracker'
import Recommendations from '@/components/Recommendations'


export default function Dashboard() {
  const [intensityLevel, setIntensityLevel] = useState(0)
  const [batteryLife, setBatteryLife] = useState(100)

  // Simulating data updates
  const updateData = () => {
    setIntensityLevel(Math.floor(Math.random() * 10) + 1)
    setBatteryLife(Math.max(batteryLife - 5, 0))
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Intensity Monitor</CardTitle>
        </CardHeader>
        <CardContent>
          <IntensityMonitor level={intensityLevel} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Battery Life</CardTitle>
        </CardHeader>
        <CardContent>
          <BatteryLife percentage={batteryLife} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Meditation Exercises</CardTitle>
        </CardHeader>
        <CardContent>
          <MeditationExercises />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Period Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <PeriodTracker />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <Recommendations intensityLevel={intensityLevel} />
        </CardContent>
      </Card>
      <Card>
      <CardHeader>
          <CardTitle>Update Data </CardTitle>
        </CardHeader>
        <CardContent>
        <Button onClick={updateData}>Simulate Data Update </Button>
        </CardContent>

      </Card>
        
        
      
    </div>
  )
}