import { type RealtimeChannel } from '@supabase/supabase-js'

let changeSubscription: RealtimeChannel | undefined
const initialState: UserStore = {
  id: '',
  name_first: '',
  name_last: '',
  email: '',
  phone: '',
  created_at: '',
  updated_at: '',
  error: null,
  isLoggedIn: false,
  hasCompletedSetup: false,
}

export const useUser = definePiniaStore('user', {
  state: () => initialState,
  actions: {
    hook() {
      const supabase = useSupabaseClient()
      const supabaseUser = useSupabaseUser()

      watch(supabaseUser, async (updatedSupabaseUser) => {
        if (updatedSupabaseUser) {
          if (changeSubscription) {
            changeSubscription.unsubscribe()
            changeSubscription = undefined
          }

          // Listen for any user row changes and update the store
          changeSubscription = supabase
            .channel(`public:users:id=eq.${updatedSupabaseUser.id}`)
            .on(
              'postgres_changes',
              {
                event: '*',
                schema: 'public',
                table: 'users',
                filter: `id=eq.${updatedSupabaseUser.id}`,
              },
              async (payload) => {
                this.$patch(payload.new)

                // Register the known phone number with Supabase auth
                if (updatedSupabaseUser.phone !== this.phone) {
                  await supabase.auth.updateUser({
                    phone: update.phone,
                  })
                }
              }
            )
            .subscribe()

          let update: Partial<UserStore> = {
            id: updatedSupabaseUser.id,
            isLoggedIn: true,
          }

          if (updatedSupabaseUser.email) {
            update.email = updatedSupabaseUser.email

            const { data: userRecord, error: supabaseError } = (await supabase
              .from('users')
              .select('*')
              .eq('email', update.email)
              .single()) as SupabaseData<PortalUser>

            if (supabaseError) {
              this.error = supabaseError
            } else if (userRecord) {
              update = { ...userRecord, ...update, hasCompletedSetup: true }
            }
          }

          this.$patch(update)
        }
      })
    },
    unhook() {
      if (changeSubscription) {
        changeSubscription.unsubscribe()
        changeSubscription = undefined
      }
    },
    async signUp(email: string, password: string) {
      const toast = useToast()

      try {
        const { error } = await useSupabaseClient().auth.signUp({
          email,
          password,
        })

        if (error) {
          console.error(error)
          toast.error('Could not create account.')

          if (error.message === 'User already registered') {
            navigateTo('/sign-in')
            toast.info('It looks like you already have an account. Please try loggin in!')
          }
        }
      } catch (error) {
        console.error(error)
        toast.error('Something went wrong. Please try again.')
      }
    },
    async signIn(email: string, password: string) {
      const toast = useToast()

      try {
        const { error } = await useSupabaseClient().auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          console.error(error)
          toast.error('Please check your login information and try again.')
        }

        navigateTo('/')

        // Update to state will occur when a Supabase user is detected by hook
      } catch (error) {
        console.error(error)
        toast.error('Something went wrong.')
      }
    },
    async signOut() {
      const toast = useToast()

      try {
        await useSupabaseClient().auth.signOut()

        // Reset to initial state
        this.$patch(initialState)

        toast.success('Signed out. See you next time!')
      } catch (error) {
        console.error(error)
        toast.error('Something went wrong.')
      }
    },
  },
})
