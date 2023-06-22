import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server';
import { Database } from '../types/supabase';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export async function GET(request: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const { data } = await supabase.from('brag').select().order('created_at', { ascending: false });

  return NextResponse.json(data);
}

export async function POST(request: Request & { json: () => Promise<Database['public']['Tables']['brag']['Insert']> }) {
  const body = await request.json();
  const supabase = createRouteHandlerClient<Database>({ cookies })

  
  const { data, error } = await supabase
  .from('brag')
  .insert([
    body,
  ])
  .select()


  return NextResponse.json({data, error});
}