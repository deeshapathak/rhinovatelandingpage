import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = req => new Request(`${new URL(req.url).origin}/index.html`, req)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        // Check if this is a SPA route (not a static asset)
        const url = new URL(event.request.url)
        const isSPARoute = url.pathname.startsWith('/about') || 
                          url.pathname.startsWith('/careers') || 
                          url.pathname.startsWith('/contact') || 
                          url.pathname.startsWith('/blog') || 
                          url.pathname.startsWith('/privacy-policy') || 
                          url.pathname.startsWith('/terms-of-service')
        
        if (isSPARoute) {
          // Serve index.html for SPA routes
          let indexResponse = await getAssetFromKV(event, {
            mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
          })
          return new Response(indexResponse.body, { ...indexResponse, status: 200 })
        } else {
          // Serve 404.html for other missing assets
          let notFoundResponse = await getAssetFromKV(event, {
            mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
          })
          return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
        }
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}
