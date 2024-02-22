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
import { useUser } from '@/helpers/Context/UserContext';


export function LoginForm() {
  const { login } = useUser();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        // Connectez automatiquement l'utilisateur après la connexion
        login(data.access_token);
        toast({
          variant: 'success',
          title: 'Login successful!',
        });
        // Redirigez l'utilisateur vers la page d'accueil
        handleRedirect('/');
      } else {
        const data = await response.json();
        console.error('Login error:', data.error);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRedirect = (url: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };

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
            <form onSubmit={handleSubmit}>
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
                  Sign in
                </Button>
              </div>
            </form>
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
