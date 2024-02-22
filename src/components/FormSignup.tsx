"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useToast } from './ui/use-toast';
import { useRouter } from 'next/navigation';

export function FormSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { toast } = useToast()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.replace('/login');
        toast({
          variant: "success",
          title: "Connexion reussie !",
        })
      } else {
        const data = await response.json();
        console.error("Signup error:", data.error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
        })
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  

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
            <form onSubmit={handleSubmit}>
              <div className="w-full items-center gap-4 py-5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username" className="text-brown-dark">
                   First name
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                </div>
             
              </div>
              <div className="space-y-5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="text-brown-dark">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password" className="text-brown-dark">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center py-4">
                <Button type="submit" variant="card" size="lg">
                  Créez
                </Button>
              </div>
            </form>
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
