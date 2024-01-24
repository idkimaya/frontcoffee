import { LoginForm } from '@/components/LoginForm'
import React from 'react'

export default function login() {
  return (
    <section className="container prose mr-auto ml-auto min-h-screen">
      <div className="flex justify-center items-center pt-12">
        <LoginForm />
      </div>
    </section>
  )
}
