export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) {
    return
  }

  const siteHost = 'bytewave.co'
  const loc = window.location

  if (!loc) {
    return
  }

  const isWww = loc.hostname === `www.${siteHost}`
  const hasTrailingSlash = to.path.length > 1 && to.path.endsWith('/')

  if (isWww || hasTrailingSlash) {
    const normalizedPath = hasTrailingSlash ? to.path.slice(0, -1) : to.path
    const url = new URL(loc.href)

    url.hostname = siteHost
    url.pathname = normalizedPath

    window.location.replace(url.toString())
  }
})
