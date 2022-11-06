import { type PostgrestError } from '@supabase/supabase-js'

declare global {
  interface SupabaseData<T> {
    data: T | null
    error: PostgrestError | null
  }
}
