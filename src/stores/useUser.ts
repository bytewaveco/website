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
  hasRequestedPasswordReset: false,
}

export const useUser = definePiniaStore('user', {
  state: () => initialState,
  actions: {
    async hook() {
      const supabase = useSupabaseClient()
      const supabaseUser = useSupabaseUser()

      // Watch for session changes
      supabase.auth.onAuthStateChange(async (event, session) => {
        console.log(event, session)

        if (event === 'PASSWORD_RECOVERY') {
          this.hasRequestedPasswordReset = true
          return navigateTo('/settings')
        } else if (event === 'SIGNED_IN') {
          return navigateTo('/')
        } else if (event === 'SIGNED_OUT') {
          return navigateTo('/sign-in')
        }

        return navigateTo(useRoute().path)
      })

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

      try {
        await supabase.auth.refreshSession()
      } catch (error) {
        console.error(error)
      }
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

          if (error.message === 'User already registered') {
            navigateTo('/sign-in')
            toast.info(
              'It looks like you already have an account. Please try logging in!'
            )
          } else {
            toast.error('Could not create account.')
          }
        }
      } catch (error) {
        console.error(error)
        toast.error()
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
        toast.error()
      }
    },
    async updatePassword(newPassword: string) {
      const toast = useToast()

      try {
        const { error } = await supabase.auth.updateUser({
          password: newPassword,
        })

        if (error) {
          console.error(error)
          toast.error('Password update failed.')
        }
      } catch (error) {
        console.error(error)
        toast.error()
      }
    },
    async updateAccount(update: Partial<PortalUser>) {
      const toast = useToast()

      try {
        const supabase = useSupabaseClient()
        const { error } = this.hasCompletedSetup
          ? await supabase
              .from('users')
              .update({
                ...update,
                updated_at: useTime().utc().toISOString(),
              })
              .eq('id', this.id)
          : await supabase.from('users').insert({
              ...update,
              id: this.id,
              email: this.email,
            })

        if (error) {
          console.error(error)
          toast.error('Account could not be updated.')
        } else {
          toast.success('Account updated.')
        }
      } catch (error) {
        console.error(error)
        toast.error()
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
        toast.error()
      }
    },
  },
})
