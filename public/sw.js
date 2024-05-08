
self.addEventListener("fetch", event => {
    self.clients.matchAll().then(all => all.map(client => client.postMessage('PWA is now available')));
});
// active service worker
// sw.js
self.addEventListener("activate", event => {
});