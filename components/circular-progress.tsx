"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  bgColor?: string
  className?: string
  animate?: boolean
  children?: React.ReactNode
}

export function CircularProgress({
  value,
  size = 200,
  strokeWidth = 12,
  color = "hsl(var(--chart-1))",
  bgColor = "rgba(255, 255, 255, 0.1)",
  className,
  animate = true,
  children,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(animate ? 0 : value)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setProgress(value)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [value, animate])

  return (
    <div className={cn("relative inline-flex", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="transition-all duration-300"
          stroke={bgColor}
          fill="none"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress-ring-circle"
          stroke={color}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-background/20 backdrop-blur-sm p-4 shadow-[0_0_15px_rgba(var(--chart-1),0.3)] border border-primary/20 transform transition-all duration-300 hover:scale-105 animate-pulse-slow">
          {children}
        </div>
      </div>
    </div>
  )
}

