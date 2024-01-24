import { FormSignup } from '@/components/FormSignup'
import React from 'react'

export default function signup() {
  return (
    <section className="container prose mr-auto ml-auto min-h-screen">
      <div className="flex justify-center items-center pt-12">
        <FormSignup />
      </div>
    </section>
  );
}
