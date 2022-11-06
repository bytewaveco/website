export default defineNuxtRouteMiddleware(() => {
  const user = useUser()

  if (user.isLoggedIn) {
    return navigateTo('/')
  }
})
