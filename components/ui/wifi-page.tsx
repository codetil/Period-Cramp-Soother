'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Wifi, Lock, CheckCircle2 } from "lucide-react"

// Mock WiFi networks data
const wifiNetworks = [
  { id: 1, name: "Home WiFi", strength: 4 },
  { id: 2, name: "Office Network", strength: 3 },
  { id: 3, name: "Cafe Hotspot", strength: 2 },
  { id: 4, name: "Public WiFi", strength: 1 },
]

export default function Maxw() {
  const [selectedNetwork, setSelectedNetwork] = useState(null)
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const handleConnect = (e) => {
    e.preventDefault()
    if (!selectedNetwork) {
      setStatus('Please select a network')
      return
    }
    if (!password) {
      setStatus('Please enter the password')
      return
    }
    // Simulating connection process
    setStatus('Connecting...')
    setTimeout(() => {
      setStatus(`Connected to ${selectedNetwork.name}`)
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-background rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center"></h1>
      
      <RadioGroup className="mb-6" onValueChange={(value) => setSelectedNetwork(wifiNetworks.find(n => n.id.toString() === value))}>
        {wifiNetworks.map((network) => (
          <div key={network.id} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value={network.id.toString()} id={`network-${network.id}`} />
            <Label htmlFor={`network-${network.id}`} className="flex items-center justify-between w-full cursor-pointer">
              <span className="flex items-center">
                <Wifi className="mr-2" size={18} />
                {network.name}
              </span>
              <span className="flex">
                {[...Array(network.strength)].map((_, i) => (
                  <Wifi key={i} size={14} className="text-primary" />
                ))}
                {[...Array(4 - network.strength)].map((_, i) => (
                  <Wifi key={i + network.strength} size={14} className="text-muted-foreground" />
                ))}
              </span>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <form onSubmit={handleConnect} className="space-y-4">
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="Enter WiFi password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />
            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Connect
        </Button>
      </form>

      {status && (
        <div className={`mt-4 p-2 rounded ${status.includes('Connected') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
          <p className="flex items-center">
            {status.includes('Connected') && <CheckCircle2 className="mr-2" size={18} />}
            {status}
          </p>
        </div>
      )}
    </div>
  )
}