import { createClient } from '@supabase/supabase-js'
import BragDocument from './components/BragDocument/BragDocument'

const supabaseUrl = 'https://fpmyoroetmxekijhtvhy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey as string)

export default async function BragDocumentPage() {
  const supabaseUrl = 'https://fpmyoroetmxekijhtvhy.supabase.co'
  console.log(process.env.SUPABASE_KEY)
  const supabaseKey = process.env.SUPABASE_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data } = await supabase.from('brag').select();
  console.log(data)

  return (
    <>
      <BragDocument data={data}/>
    </>
  )
}
