import { Navbar } from "@/components/navbar"
import { SurveyForm } from "@/components/survey-form"
import { Footer } from "@/components/footer"

export default function SurveyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-16 container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Us Personalize Your Experience</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete this short survey to help us tailor Encytex to your specific health and fitness needs.
          </p>
        </div>

        <SurveyForm />
      </section>

      <Footer />
    </main>
  )
}

