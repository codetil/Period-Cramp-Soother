"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

export default function IntensityMonitor({ level }: { level: number }) {
  const intensity = (value: number) => {}; // Declare the 'intensity' variable as a function
  return (
    <><div>
      <Progress value={level * 10} className="w-full" />
      <p className="mt-2 text-center">Current Intensity: {level}/10</p>
    </div><div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-primary">Intensity Level</h2>
        <Slider
         defaultValue={[33]} 
         max={100} 
         step={1} />

        <p className="mt-2 text-center text-primary">{intensity.toString()}%</p>
      </div></>
  )
}