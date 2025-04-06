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
  const [animatedData, setAnimatedData] = useState(data.map(item => ({ ...item, value: 0 })))

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimatedData(data)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [data, animate])

  return (
    <div className={cn("w-full", className)}>
      {/* Chart Container */}
      <div className="relative h-[300px] md:h-[400px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-muted-foreground">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-10 right-4 top-0 h-full flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-t border-border/30 w-full" />
          ))}
        </div>

        {/* Bars */}
        <div className="absolute left-10 right-4 bottom-0 top-0 flex items-end justify-around">
          {animatedData.map((item, index) => {
            const barColor = 
              item.value >= 76 ? "bg-encytex-green" :
              item.value >= 50 ? "bg-encytex-yellow" :
              "bg-encytex-red"

            return (
              <div key={index} className="flex flex-col items-center group">
                {/* Bar */}
                <div className="relative w-8 md:w-12">
                  <div 
                    className={cn(
                      "absolute bottom-0 w-full rounded-t transition-all duration-700 ease-out",
                      barColor
                    )}
                    style={{ 
                      height: `${item.value}%`,
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background/90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.value}%
                    </div>
                  </div>
                </div>
                
                {/* Label */}
                <div className="mt-2 text-xs text-muted-foreground rotate-45 md:rotate-0 origin-left md:mt-4">
                  {item.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

