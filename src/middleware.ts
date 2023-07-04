import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const { data } = await supabase.auth.getSession()

  if (!data.session?.user) {
    if (['/brag-document'].includes(req.nextUrl.pathname)) {
      const url = req.nextUrl.clone()
      url.pathname = '/sign-in'
      return NextResponse.redirect(url)
    }
  } else {
    if (['/', '/sign-in'].includes(req.nextUrl.pathname)) {
      const url = req.nextUrl.clone()
      url.pathname = '/brag-document'
      return NextResponse.redirect(url)
    }
  }

  return res
}