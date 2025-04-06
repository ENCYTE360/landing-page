"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type EarlyAccessData = {
  name: string
  email: string
}

export async function submitEarlyAccess(formData: FormData) {
  try {
    // Extract data from form
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    // Send data to n8n webhook
    const response = await fetch(process.env.N8N_WEBHOOK_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit to n8n webhook")
    }

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Error submitting early access request:", error)
    return { success: false, error: "Failed to submit early access request" }
  }
} 