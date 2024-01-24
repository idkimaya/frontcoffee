import AccountTabs from '@/components/AccountTabs';
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'



export default function account() {
 
  return (
    <section className="m-auto px-6 pt-4 pb-8 lg:px-20 lg:pt-10 min-h-screen">
      <div className="flex items-center justify-between w-full h-11">
        <h1 className="text-center text-3xl font-medium">Account</h1>
        <Link href="/login">
          <Button variant="outline">
            Log out
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <AccountTabs />
      </div>
    </section>
  );
}
