import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { CartProvider } from '@/helpers/Context/CartContext'
import { UserProvider } from '@/helpers/Context/UserContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffee4u',
  description: 'Generated by Aya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     <UserProvider>
       <CartProvider>
        <html className={inter.className}>
          <body>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </CartProvider>
     </UserProvider>
     
    </>
  );
}
