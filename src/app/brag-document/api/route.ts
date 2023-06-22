import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server';
import { Database } from '../types/supabase';

export async function GET(request: Request) {
  const supabaseUrl = 'https://fpmyoroetmxekijhtvhy.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data } = await supabase.from('brag').select().order('created_at', { ascending: false });

  return NextResponse.json(data);
}

export async function POST(request: Request & { json: () => Promise<Database['public']['Tables']['brag']['Insert']> }) {
  const body = await request.json();
  const supabaseUrl = 'https://fpmyoroetmxekijhtvhy.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY as string;
  const supabase = createClient<Database>(supabaseUrl, supabaseKey)

  
  const { data, error } = await supabase
  .from('brag')
  .insert([
    body,
  ])
  .select()


  return NextResponse.json({data, error});
}