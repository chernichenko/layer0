const { CustomCacheKey } = require('@layer0/core/router'); // Uncomment following lines to enable custom cache key code
const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR

// // Uncomment following lines to enable custom cache key code
const key = new CustomCacheKey().excludeQueryParameters(
  'utm_medium', // this is common practice to exclude following google analytics params from caching rules
  'utm_source',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
);

/**
 * The default cache setting for pages in the shopping flow
 */
export const CACHE_PAGES = {
    key, // Uncomment following lines to enable custom cache key code
    edge: {
        maxAgeSeconds: ONE_DAY,
        forcePrivateCaching: true,
        staleWhileRevalidateSeconds: ONE_DAY * 7 // uncomment this line to enable SWR
    },
    browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
    },
}

/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export const CACHE_ASSETS = {
    key, // Uncomment following lines to enable custom cache key code
    edge: {
        maxAgeSeconds: ONE_DAY,
        forcePrivateCaching: true,
        staleWhileRevalidateSeconds: ONE_DAY * 7 // uncomment this line to enable SWR
    },
    browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
    },
}
