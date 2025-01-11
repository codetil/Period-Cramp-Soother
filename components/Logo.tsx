'use client'
import { useState } from "react"
import { Footprints } from 'lucide-react';

export function LogoI() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="inline-flex items-center space-x-3 bg-gradient-to-br"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative transition-transform duration-300 ease-in-out ${isHovered ? 'rotate-180' : ''}`}>
        <Footprints className="h-6 w-6" />
      </div>
      
    </div>
  )
}