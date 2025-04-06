import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { FeaturesSection } from "@/components/features-section"
import { EarlyAccessForm } from "@/components/early-access-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />

      <section className="py-12 container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Join Our Early Access Program</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of health and performance optimization
          </p>
        </div>
        <EarlyAccessForm />
      </section>

      <Footer />
    </main>
  )
}

