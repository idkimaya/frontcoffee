import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function TabsAcc() {
  return (
    <Card className="inline-flex flex-col w-[330px] lg:w-[600px] p-6 gap-4 shadow-md mt-4">
      <CardHeader>
        <CardTitle>Update Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
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
              placeholder="email address"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password" className="text-brown-dark">
              Password
            </Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="start" size="acc">
          Save changes
        </Button>
      </CardFooter>
    </Card>
  );
}
