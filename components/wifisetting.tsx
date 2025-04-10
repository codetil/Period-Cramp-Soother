"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import WiFiButton from "@/components/ui/wifi-button"
import { toast } from "@/hooks/use-toast"

export default function WiFiset() {
  const [isConnected, setIsConnected] = useState(false)

  const handleWiFiToggle = (connected: boolean) => {
    setIsConnected(connected)
    toast({
      title: connected ? "WiFi Connected" : "WiFi Disconnected",
      description: connected ? "You are now connected to the network" : "You have disconnected from the network",
      variant: connected ? "default" : "destructive",
    })
  }

  return (
    <div className="mt-4">
      <Card className="">
        <CardHeader>
          <CardTitle>WiFi Settings</CardTitle>
          <CardDescription>Toggle your WiFi connection status</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">WiFi Status</span>
            <WiFiButton initialConnected={isConnected} onToggle={(connected) => { handleWiFiToggle(connected); window.location.href = 'http://192.168.4.1'; }} />
          </div>
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm">
              {isConnected
                ? "Your device is currently connected to the WiFi network."
                : "Your device is currently not connected to any WiFi network."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

