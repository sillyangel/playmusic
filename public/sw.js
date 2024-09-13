// const CACHE_NAME = 'my-cache-v1';
// const EXCLUDE_URL = '/json/songs.json';
// const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds
// const OFFLINE_URL = '/offline.html';

// self.addEventListener('install', event => {
//     self.skipWaiting();
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             return cache.addAll([OFFLINE_URL]);
//         })
//     );
// });

// self.addEventListener('activate', event => {
//     event.waitUntil(clients.claim());
//     event.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if (cacheName !== CACHE_NAME) {
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         })
//     );
// });

// self.addEventListener('fetch', event => {
//     const requestURL = new URL(event.request.url);

//     // Only handle requests within the same origin
//     if (requestURL.origin !== location.origin) {
//         return;
//     }

//     if (event.request.url.includes(EXCLUDE_URL) || event.request.url.endsWith('.mp3')) {
//         event.respondWith(fetch(event.request));
//         return;
//     }

//     event.respondWith(
//         caches.open(CACHE_NAME).then(cache => {
//             return cache.match(event.request).then(response => {
//                 const fetchPromise = fetch(event.request).then(networkResponse => {
//                     if (networkResponse.ok && networkResponse.type !== 'opaque') {
//                         cache.put(event.request, networkResponse.clone());
//                     }
//                     return networkResponse;
//                 }).catch(() => {
//                     // Handle fetch errors
//                     return caches.match(OFFLINE_URL);
//                 });

//                 return response || fetchPromise;
//             });
//         })
//     );
// });

// setInterval(() => {
//     caches.open(CACHE_NAME).then(cache => {
//         cache.keys().then(keys => {
//             keys.forEach(request => {
//                 if (!request.url.includes(EXCLUDE_URL) && !request.url.endsWith('.mp3')) {
//                     fetch(request).then(response => {
//                         if (response.ok && response.type !== 'opaque') {
//                             cache.put(request, response);
//                         }
//                     }).catch(() => {
//                         // Handle fetch errors
//                     });
//                 }
//             });
//         });
//     });
// }, CACHE_DURATION);