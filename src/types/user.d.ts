import { PostgrestError } from '@supabase/supabase-js'

declare global {
  interface PortalUser {
    id: string
    name_first: string
    name_last: string
    email: string
    phone: string
    created_at: string
    updated_at: string
  }

  interface UserStore extends PortalUser {
    error: PostgrestError | null
    hasCompletedSetup: boolean
    hasRequestedPasswordReset: boolean
    isLoggedIn: boolean
  }
}
