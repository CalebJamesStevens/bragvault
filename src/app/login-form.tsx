'use client'

import React from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Auth } from '@supabase/auth-ui-react'
import type { Session } from '@supabase/auth-helpers-nextjs'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'

import {
  // Import predefined theme
  ThemeSupa
} from '@supabase/auth-ui-shared'
import { usePathname } from 'next/navigation'

export default function LoginForm({ session }: { session: Session | null }) {
  const [user, setUser] = React.useState(session?.user)
  const pathname = usePathname()
  const supabase = createClientComponentClient()
  supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user)
  })
  
  return (
    <Dialog open={!!!user && pathname !== '/'}>
      <DialogTitle sx={{
        fontSize: '1rem',
        fontWeight: 'bold',
        paddingBottom: 0,
      }}>
        Sign In or Sign Up
      </DialogTitle>
      <DialogContent>
        <Auth redirectTo='/brag-document' supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google', 'linkedin', 'github']}  />
      </DialogContent>
    </Dialog>
  )
}