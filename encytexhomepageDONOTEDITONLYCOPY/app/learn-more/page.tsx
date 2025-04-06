import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LearnMore() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Learn More About Encytex</h1>
      
      <div className="space-y-12 max-w-4xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-encytex-green">AI-Powered Health Optimization</h2>
          <p className="text-lg text-muted-foreground">
            Encytex uses advanced AI algorithms to analyze your health data and provide personalized recommendations
            for optimizing your sleep, recovery, nutrition, and training. Our platform continuously learns from your
            data to deliver increasingly accurate insights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-encytex-green">Comprehensive Health Tracking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Sleep Analysis</h3>
              <p className="text-muted-foreground">Track sleep quality, duration, and patterns to optimize recovery.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Recovery Monitoring</h3>
              <p className="text-muted-foreground">Monitor HRV, stress levels, and recovery status.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Nutrition Tracking</h3>
              <p className="text-muted-foreground">Log meals and track macro/micronutrient intake.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Training Optimization</h3>
              <p className="text-muted-foreground">Get personalized training recommendations based on recovery status.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-encytex-green">Real-time Insights</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get instant feedback on your health metrics and receive actionable recommendations to improve your
            performance. Our platform processes data in real-time to provide you with the most up-to-date insights.
          </p>
        </section>

        <div className="flex justify-center gap-4 pt-8">
          <Button className="early-access-btn" asChild>
            <Link href="/early-access">Get Early Access</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 