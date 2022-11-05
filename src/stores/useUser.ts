import { PostgrestError } from '@supabase/supabase-js'

export const useUser = definePiniaStore('user', {
  state: () => ({
    user: null as User | null,
    error: null as PostgrestError | null,
  }),
  async hydrate() {
    await this.sync()

    if (this.error && this.error.code === 'PGRST116') {
      navigateTo('/settings/account')
    }
  },
  actions: {
    async sync() {
      const supabase = useSupabaseClient()
      const supabaseUser = useSupabaseUser()
      let user: User | null = null
      let error: PostgrestError | null = null

      if (supabaseUser) {
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
