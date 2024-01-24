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


export function FormSignup() {
  return (
    <section>
      <div>
        <Card className="md:w-[420px] w-screen shadow-lg p-6">
          <CardHeader className="flex justify-center items-center">
            <CardTitle className="text-3xl font-medium text-brown-dark">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-brown-dark">
              Create your account to build your own coffee.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex w-full items-center gap-4 py-5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="text-brown-dark">
                    First name
                  </Label>
                  <Input id="name" placeholder="First name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework" className="text-brown-dark">
                    Last name
                  </Label>
                  <Input id="name" placeholder="Last name" />
                </div>
              </div>
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
            <div className="flex justify-center items-center py-4">
              <Button variant="card" size="lg">
                Créez
              </Button>
            </div>
            <Link href="/login">
              <p className="text-brown-clear text-sm flex justify-center items-center mt-2">
                Already a member? Login into your account
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

