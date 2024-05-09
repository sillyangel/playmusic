
self.addEventListener("fetch", event => {
});
self.addEventListener("install", event => {
    self.clients.matchAll().then(all => all.map(client => client.postMessage('PWA is now available')));
});