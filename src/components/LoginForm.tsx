"use client";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";


export function LoginForm() {
  return (
    <section>
      <div>
        <Card className="md:w-[420px] w-screen shadow-lg p-6">
          <CardHeader className="flex justify-center items-center mb-6">
            <CardTitle className="text-3xl font-medium text-brown-dark">
              Welcome Back!
            </CardTitle>
            <CardDescription className="text-brown-dark">
              Please enter your details to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="text-brown-dark">
                    Email address
                  </Label>
                  <Input
                    className=""
                    id="email"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password" className="text-brown-dark">
                    Password
                  </Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
              </div>
            </form>
            <div className="flex justify-center items-center py-4 mt-4">
              <Button variant="card" size="lg">
                Sign in
              </Button>
            </div>
            <Link href="/signup">
              <p className="text-brown-clear text-sm flex justify-center items-center">
                Create account
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

