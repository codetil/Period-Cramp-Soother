'use client'

import { useState } from 'react'
import DeviceStatus from '@/components/device-status'
import { Button } from "@/components/ui/button"

export default function frequency() {
  const [frequency, setFrequency] = useState(40)

  const levels = [
    { name: 'Level 1', value: 40 },
    { name: 'Level 2', value: 50 },
    { name: 'Level 3', value: 60 },
    { name: 'Level 4', value: 70 },
    { name: 'Level 5', value: 80 },
  ]

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className=" rounded-xl shadow-md overflow-hidden max-w-2xl w-full">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-center">Frequency Control</h1>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-3 md:w-1/3">
            {levels.map((level) => (
              <Button
                key={level.value}
                onClick={() => setFrequency(level.value)}
                variant={frequency === level.value ? "default" : "outline"}
                className="flex-1 md:flex-initial"
              >
                {level.name}
              </Button>
            ))}
          </div>
          <div className="md:w-2/3">
            <DeviceStatus frequency={frequency} />
          </div>
        </div>
      </div>
    </main>
  )
}

