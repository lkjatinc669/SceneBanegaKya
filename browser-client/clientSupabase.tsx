// browser-client/clientSupabase.ts
import { createBrowserClient } from '@supabase/ssr'

// Ensure this file uses ONLY your publishable public keys
const clientSupabase = () => createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default clientSupabase;