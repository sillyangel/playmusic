self.addEventListener("fetch", event => {

});
const urlsToCache = ["/index.html", "/js/main.js", "/css/main.css", "/assets/icon/icon512.png", "/assets/nonealbum.png", "/assets/searchicon.png"];
self.addEventListener("install", (event) => {
   let cacheUrls = async () => {
      const cache = await caches.open("pwa-assets");
      return cache.addAll(urlsToCache);
   };
   event.waitUntil(cacheUrls());
});
