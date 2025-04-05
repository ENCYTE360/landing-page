"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MetricsBarChartProps {
  data: {
    label: string
    value: number
  }[]
  className?: string
  animate?: boolean
}

export function MetricsBarChart({ data, className, animate = true }: MetricsBarChartProps) {
  const [animatedData, setAnimatedData] = useState(animate ? data.map((item) => ({ ...item, value: 0 })) : data)

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimatedData(data)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [data, animate])

  const getBarColor = (value: number) => {
    if (value >= 76) return "bg-encytex-green"
    if (value >= 50) return "bg-encytex-yellow"
    return "bg-encytex-red"
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end h-64 gap-2 md:gap-4 relative">
        {/* Y-axis scale */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between pr-2 text-xs text-muted-foreground">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-border/30 w-full h-0"></div>
          ))}
        </div>

        {/* Bars */}
        <div className="ml-8 flex-1 flex items-end justify-around">
          {animatedData.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative">
                <div
                  className={cn(
                    "metrics-bar w-8 md:w-12 rounded-t-md shadow-lg transition-all duration-300 group-hover:w-10 md:group-hover:w-14",
                    getBarColor(item.value),
                  )}
                  style={{ height: `${item.value}%` }}
                >
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.value}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b"></div>
              </div>
              <span className="text-xs font-medium text-muted-foreground mt-3 whitespace-nowrap group-hover:text-primary transition-colors duration-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

