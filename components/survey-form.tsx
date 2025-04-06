"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { submitSurvey } from "@/app/actions/survey-actions"

const fitnessLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "elite", label: "Elite Athlete" },
]

const goalOptions = [
  { id: "weight-loss", label: "Weight Loss" },
  { id: "muscle-gain", label: "Muscle Gain" },
  { id: "endurance", label: "Endurance" },
  { id: "performance", label: "Athletic Performance" },
  { id: "health", label: "General Health" },
]

const interestOptions = [
  { id: "nutrition", label: "Nutrition" },
  { id: "sleep", label: "Sleep Optimization" },
  { id: "recovery", label: "Recovery" },
  { id: "training", label: "Training Programs" },
  { id: "supplements", label: "Supplements" },
]

export function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await submitSurvey(formData)

      if (result.success) {
        // Redirect to home page after successful submission
        router.push("/")
      } else {
        console.error("Error submitting survey:", result.error)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-encytex-card-bg border-none">
      <CardHeader>
        <CardTitle className="text-2xl">User Survey</CardTitle>
        <CardDescription>Help us personalize your Encytex experience by answering a few questions</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required className="bg-background/50" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required className="bg-background/50" />
            </div>

            <div className="space-y-2">
              <Label>Fitness Level</Label>
              <RadioGroup name="fitnessLevel" defaultValue="intermediate" className="flex flex-col space-y-2">
                {fitnessLevels.map((level) => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={level.id} id={`fitness-${level.id}`} />
                    <Label htmlFor={`fitness-${level.id}`}>{level.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Fitness Goals (Select all that apply)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {goalOptions.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-2">
                    <Checkbox id={`goal-${goal.id}`} name="goals" value={goal.id} />
                    <Label htmlFor={`goal-${goal.id}`}>{goal.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Areas of Interest (Select all that apply)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {interestOptions.map((interest) => (
                  <div key={interest.id} className="flex items-center space-x-2">
                    <Checkbox id={`interest-${interest.id}`} name="interests" value={interest.id} />
                    <Label htmlFor={`interest-${interest.id}`}>{interest.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full early-access-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Survey"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

