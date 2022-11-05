export default defineNuxtRouteMiddleware((to) => {
  const supabaseUser = useSupabaseUser()
  const user = useUser()

  if (!supabaseUser.value && to.path !== '/sign-in') {
    return navigateTo('/sign-in')
  } else if (!user.user && to.path !== '/settings/account') {
    return navigateTo('/settings/account')
  }
})
