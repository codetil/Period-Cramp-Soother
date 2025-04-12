'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

import { FC } from 'react'
import WiFiButton from './ui/wifi-button'
import { Card } from './ui/card'
import WiFiset from './wifisetting'

    
export default function Device() {


  return (
<Card >
    <main className="flex items-center justify-center p-4">
      <div className=" overflow-hidden max-w-2xl w-full">
      <WiFiset/>
        <div className="p-6 ">
          <h1 className="text-2xl font-bold text-center">Device Control</h1>
        </div>
        <div className="flex items-center justify-center space-x-4">

          <div className="flex flex-col items-center p-6 rounded-lg w-full max-w-sm">
            <p className="text-lg sm:text-xl font-semibold text-center">Note: Both devices connect with the same Wi-Fi.</p>
            <div className="flex flex-col">

              <Button
                onClick={() => window.location.href = 'http://192.168.1.100'}
                className="w-full"
              >
                Connect to device
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
</Card>
  )
}

