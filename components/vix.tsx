"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

export default function vix () {
  const [intensity, setIntensity] = useState(50)
  const [batteryLife, setBatteryLife] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLife((prev) => Math.max(0, prev - 1))
    }, 10000) // Decrease battery life by 1% every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-primary">Period Cramp Soother</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-primary">Intensity Level</h2>
        <Slider
          value={[intensity]}
          onValueChange={(value) => setIntensity(value[0])}
          max={100}
          step={1}
        />
        <p className="mt-2 text-center text-primary">{intensity}%</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-2 text-primary">Battery Life</h2>
        <Progress value={batteryLife} className="w-full" />
        <p className="mt-2 text-center text-primary">{batteryLife}%</p>
      </div>
      
      <p className="mt-6 text-sm text-center text-primary-foreground">
        Adjust the intensity level for optimal comfort. Battery life decreases over time.
      </p>
    </div>
  )
}