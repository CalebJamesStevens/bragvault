import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import LoginForm from './login-form'

import type { Database } from '@/lib/database.types'
import { redirect } from 'next/navigation'

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return null;
  }

  return <LoginForm session={session} />
}