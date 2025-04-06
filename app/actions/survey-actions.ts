"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type SurveyData = {
  name: string
  email: string
  fitnessLevel: string
  goals: string[]
  interests: string[]
}

export async function submitSurvey(formData: FormData) {
  try {
    const supabase = createClient()

    // Extract data from form
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const fitnessLevel = formData.get("fitnessLevel") as string
    const goals = formData.getAll("goals") as string[]
    const interests = formData.getAll("interests") as string[]

    // Get the current user (if authenticated)
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Insert survey response
    const { data, error } = await supabase
      .from("survey_responses")
      .insert({
        user_id: user?.id,
        name,
        email,
        fitness_level: fitnessLevel,
        goals,
        interests,
      })
      .select()

    if (error) throw error

    revalidatePath("/")
    return { success: true, data }
  } catch (error) {
    console.error("Error submitting survey:", error)
    return { success: false, error: "Failed to submit survey" }
  }
}

export async function getSurveyData() {
  try {
    const supabase = createClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return { success: false, error: "User not authenticated" }
    }

    // Get the user's survey response
    const { data, error } = await supabase
      .from("survey_responses")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== "PGRST116") {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching survey data:", error)
    return { success: false, error: "Failed to fetch survey data" }
  }
}

