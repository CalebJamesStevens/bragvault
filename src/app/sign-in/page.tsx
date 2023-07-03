import LoginForm from "../login-form";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


import type { Database } from '@/lib/database.types'

export default async function SignInPage() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return null;
  }

  return (
    <>
      <LoginForm session={session} />
    </>
  )
}