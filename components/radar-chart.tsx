"use client"

import { useEffect, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

interface RadarChartProps {
  data: {
    subject: string
    value: number
    fullMark: number
  }[]
  className?: string
}

export function RadarMetricsChart({ data, className }: RadarChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={className}>
      <ChartContainer
        config={{
          value: {
            label: "Metrics",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="aspect-square w-full max-w-2xl mx-auto"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ 
                fill: "hsl(var(--muted-foreground))",
                fontSize: 12,
              }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={{ 
                fill: "hsl(var(--muted-foreground))",
                fontSize: 10,
              }}
              tickCount={5}
            />
            <Radar
              name="Metrics"
              dataKey="value"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.6}
              animationBegin={200}
              animationDuration={500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

