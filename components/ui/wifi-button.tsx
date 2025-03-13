"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wifi, WifiOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface WiFiButtonProps {
  initialConnected?: boolean
  onToggle?: (connected: boolean) => void
  className?: string
}

export default function WiFiButton({ initialConnected = false, onToggle, className }: WiFiButtonProps) {
  const [connected, setConnected] = useState(initialConnected)

  const handleToggle = () => {
    const newState = !connected
    setConnected(newState)
    onToggle?.(newState)
    // Add the following line to redirect to the device URL when toggled
    window.location.href = 'http://192.168.4.1';
  }

  return (
    <Button
      onClick={handleToggle}
      variant={connected ? "default" : "outline"}
      className={cn(
        "flex items-center gap-2 transition-all",
        connected ? "bg-primary text-primary-foreground" : "text-muted-foreground",
        className,
      )}
      aria-pressed={connected}
    >
      {connected ? (
        <>
          <Wifi className="h-4 w-4" />
          <span>Connected</span>
        </>
      ) : (
        <>
          <WifiOff className="h-4 w-4" />
          <span>Disconnected</span>
        </>
      )}
    </Button>
  )
}
