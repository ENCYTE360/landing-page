import { getSurveyData } from "@/app/actions/survey-actions"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function PersonalizedSection() {
  const { success, data, error } = await getSurveyData()

  if (!success || !data) {
    return (
      <div className="py-12 container text-center">
        <h2 className="text-2xl font-bold mb-4">Personalize Your Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Take our quick survey to help us tailor Encytex to your specific health and fitness needs.
        </p>
        <Button className="early-access-btn" asChild>
          <Link href="/survey">Take Survey</Link>
        </Button>
      </div>
    )
  }

  // Format goals and interests for display
  const goals = data.goals?.join(", ") || "Not specified"
  const interests = data.interests?.join(", ") || "Not specified"

  return (
    <div className="py-12 container">
      <div className="bg-encytex-card-bg border-none rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome back, {data.name}!</h2>
        <p className="text-muted-foreground mb-6">
          Here's your personalized Encytex dashboard based on your fitness profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-background/10 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Fitness Level</h3>
            <p className="text-primary">{data.fitness_level || "Not specified"}</p>
          </div>

          <div className="bg-background/10 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Your Goals</h3>
            <p className="text-primary">{goals}</p>
          </div>

          <div className="bg-background/10 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Your Interests</h3>
            <p className="text-primary">{interests}</p>
          </div>
        </div>

        <Button variant="outline" size="sm" asChild>
          <Link href="/survey">Update Preferences</Link>
        </Button>
      </div>
    </div>
  )
}

