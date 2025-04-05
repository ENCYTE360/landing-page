import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 container text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-up [animation-delay:200ms]">
          Optimize Your Health and Performance with <span className="text-primary">Encytex</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
          AI-driven health & fitness insights tailored to you. Track sleep, recovery, hydration, fueling and training
          for peak performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up [animation-delay:600ms]">
          <Button size="lg" className="early-access-btn" asChild>
            <Link href="/early-access">Get Early Access</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

