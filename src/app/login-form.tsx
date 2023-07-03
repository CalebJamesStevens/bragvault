'use client'

import React from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Auth } from '@supabase/auth-ui-react'
import type { Session } from '@supabase/auth-helpers-nextjs'

import {
  // Import predefined theme
  ThemeSupa
} from '@supabase/auth-ui-shared'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function LoginForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  
  return (
    <Stack paddingTop={2} component='main' height={'100%'} justifyContent='center' alignItems='center'>
      <Box minWidth='300px' maxWidth='500px'>
        <Auth redirectTo='/brag-document' supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google', 'linkedin', 'github']}  />
      </Box>
    </Stack>
  )
}