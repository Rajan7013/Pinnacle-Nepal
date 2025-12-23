// Cloudflare Worker to enforce long‑term cache headers for static assets
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const response = await fetch(request)
    // Only modify responses for static assets (images, css, js, fonts)
    const url = new URL(request.url)
    const isStatic = /\.(png|jpe?g|svg|webp|avif|gif|css|js|woff2?)$/i.test(url.pathname)
    if (isStatic && response.ok) {
        const newHeaders = new Headers(response.headers)
        newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable')
        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
        })
    }
    return response
}
