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
  const [unAuthed, setUnAuthed] = React.useState(!session)
  const pathname = usePathname()
  const supabase = createClientComponentClient()
  React.useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
        setUnAuthed(!session)
    })
  }, [])

  return (
    <Dialog open={unAuthed && pathname !== '/'}>
      <DialogTitle sx={{
        fontSize: '1rem',
        fontWeight: 'bold',
        paddingBottom: 0,
      }}>
        Sign In or Sign Up
      </DialogTitle>
      <DialogContent>
        <Auth  supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />
      </DialogContent>
    </Dialog>
  )
}