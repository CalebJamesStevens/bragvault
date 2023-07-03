import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry"
import NavBar from "./components/NavBar/NavBar";
import Login from "./login";
import Footer from "./components/Footer/Footer";
import { cookies } from 'next/headers'
import type { Database } from '@/lib/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Brag Vault',
  description: 'Home Page',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeRegistry>
      <html lang="en">
        <body style={{display: 'flex', flexDirection: 'column', minHeight: '100dvh'}}>
          <NavBar/>
          <div style={{flexGrow: 1}}>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ThemeRegistry>
  )
}
