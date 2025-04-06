import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Droplet, Brain, LineChart, Utensils, Pill } from "lucide-react"

const features = [
  {
    title: "Recovery Tracking",
    description: "Monitor sleep quality, HRV, and recovery status to optimize training and prevent overtraining.",
    icon: Activity,
  },
  {
    title: "Performance Analytics",
    description:
      "Track progress, analyze trends, and identify strengths and weaknesses in your training and performance.",
    icon: LineChart,
  },
  {
    title: "Hydration Formula",
    description: "Personalized electrolyte recommendations based on activity and environmental conditions.",
    icon: Droplet,
  },
  {
    title: "Training Intelligence",
    description: "AI-powered training suggestions based on your recovery and performance metrics.",
    icon: Brain,
  },
  {
    title: "Nutrition Coaching",
    description: "Personalized macro and micronutrient recommendations to fuel your performance and recovery.",
    icon: Utensils,
  },
  {
    title: "Supplement Guidance",
    description: "Evidence-based supplement protocols tailored to your specific needs and goals.",
    icon: Pill,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Comprehensive Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Encytex provides a complete suite of tools to optimize your health and performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="feature-card bg-encytex-card-bg border-none h-full">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-sm">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

