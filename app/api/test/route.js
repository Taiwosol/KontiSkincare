import { supabase } from '@/app/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .limit(1)

    if (error) {
      return Response.json({ 
        error: error.message,
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
      }, { status: 500 })
    }

    return Response.json({ 
      success: true, 
      data,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
    })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
