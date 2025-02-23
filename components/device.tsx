'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

import { FC } from 'react'

    
export default function Device() {


  return (
    <main className="flex items-center justify-center p-4">
      <div className=" overflow-hidden max-w-2xl w-full">
        <div className="p-6 ">
          <h1 className="text-2xl font-bold text-center">Device Control</h1>
        </div>
        <div className="flex items-center justify-center space-x-4">

          <div className="flex flex-col items-center p-6 rounded-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Control Panel</h2>
            <div className="flex flex-col space-y-4">
                <Button
                  onClick={() => window.location.href = 'http://192.168.0.100'}
                  className="w-full"
                >
                  Connect to device
                </Button>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

