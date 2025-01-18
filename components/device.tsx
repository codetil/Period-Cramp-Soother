'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

import { FC } from 'react'
import { cn } from "@/lib/utils"
import { Wifi } from 'lucide-react'

interface DeviceStatusProps {
  frequency: number
}

const DeviceStatus: FC<DeviceStatusProps> = ({ frequency }) => {
  const getLevel = (freq: number) => {
    if (freq < 40) return 0
    if (freq < 50) return 1
    if (freq < 60) return 2
    if (freq < 70) return 3
    if (freq < 80) return 4
    return 5
  }

  const level = getLevel(frequency)

  const bars = [
    { level: 1, color: 'bg-green-500' },
    { level: 2, color: 'bg-green-500' },
    { level: 3, color: 'bg-yellow-500' },
    { level: 4, color: 'bg-orange-500' },
    { level: 5, color: 'bg-red-500' },
  ]

  const isConnected = frequency >= 40
  return (
    <div className="flex flex-col items-center p-6 rounded-lg w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Device Status</h2>
      <div className="flex items-end space-x-2 mb-4">
        {bars.map((bar, index) => (
          <div
            key={index}
            className={cn(
              "w-4 transition-all duration-300 ease-in-out",
              bar.level <= level ? bar.color : 'bg-gray-200'
            )}
            style={{ height: `${(index + 1) * 6 + 20}px` }}
          />
        ))}
      </div>
      <div className="text-2xl font-bold mb-4" aria-live="polite">
        Frequency: {frequency} Hz
      </div>
      <div className="flex items-center space-x-2">
        <Wifi className={cn("w-6 h-6", isConnected ? "text-green-500" : "text-gray-400")} />
        <span className={cn("font-medium", isConnected ? "text-green-500" : "text-gray-400")}>
          {isConnected ? "Connected" : "Disconnected"}
        </span>
      </div>
    </div>
  )
}

export default function Device() {
  const [frequency, setFrequency] = useState(40)

  const levels = [
    { name: 'Level 1', value: 40 },
    { name: 'Level 2', value: 50 },
    { name: 'Level 3', value: 60 },
    { name: 'Level 4', value: 70 },
    { name: 'Level 5', value: 80 },
  ]

  return (
    <main className="flex items-center justify-center p-4">
      <div className=" overflow-hidden max-w-2xl w-full">
        <div className="p-6 ">
          <h1 className="text-2xl font-bold text-center">Device Control</h1>
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

