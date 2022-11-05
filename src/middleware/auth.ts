export default defineNuxtRouteMiddleware((to) => {
  const supabaseUser = useSupabaseUser()

  if (!supabaseUser.value && to.path !== '/sign-in') {
    return navigateTo('/sign-in')
  }
})
