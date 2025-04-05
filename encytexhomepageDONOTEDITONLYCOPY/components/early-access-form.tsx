"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function EarlyAccessForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1500)
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

