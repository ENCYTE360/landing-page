"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function EarlyAccessForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://encytex.app.n8n.cloud/webhook-test/early-access", {
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
        throw new Error("Failed to submit. Please try again later.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return (
      <Card className="w-full max-w-md mx-auto bg-encytex-card-bg border-none">
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
          <CardTitle className="mb-2">Error</CardTitle>
          <CardDescription className="mb-4">{error}</CardDescription>
          <Button onClick={() => setError(null)} variant="outline">
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-encytex-card-bg border-none">
      {!submitted ? (
        <>
          <CardHeader>
            <CardTitle>Get Early Access</CardTitle>
            <CardDescription>
              Join our exclusive early access program and be the first to experience Encytex.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background/50"
                    disabled={loading}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background/50"
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="w-full early-access-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Request Early Access"}
                </Button>
              </div>
            </form>
          </CardContent>
        </>
      ) : (
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-encytex-green" />
          </div>
          <CardTitle className="mb-2">Thank You!</CardTitle>
          <CardDescription>
            We've received your request for early access. We'll notify you at {email} when we're ready to welcome you.
          </CardDescription>
        </CardContent>
      )}
    </Card>
  )
}

