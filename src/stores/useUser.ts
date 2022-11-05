import { PostgrestError } from '@supabase/supabase-js'

export const useUser = definePiniaStore('user', {
  state: () => ({
    user: null as PortalUser | null,
    error: null as PostgrestError | null,
  }),
  hydrate(storeState) {
    if (storeState.error && storeState.error.code === 'PGRST116') {
      navigateTo('/settings/account')
    }
  },
  actions: {
    async sync() {
      const supabase = useSupabaseClient()
      const supabaseUser = useSupabaseUser()
      let user: PortalUser | null = null
      let error: PostgrestError | null = null

      if (supabaseUser.value) {
        const { error: supabaseError, data } = await supabase
          .from('users')
          .select()
          .eq('email', supabaseUser.value.email)
          .single()

        if (error) {
          error = supabaseError
        } else {
          user = data
        }
      }

      this.$patch({ user, error })
    },
  },
})
