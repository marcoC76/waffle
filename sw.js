/* const version = "1";
const cacheName = `waffle-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
}); */

var offlineCacheName = "wholeSiteCachedv3";

var offlinePageCache = "customOfflinePage";

var offlineURL = "offline.html";

this.addEventListener("install", function(event) {
  console.log("Instalando Service Worker");

  event.waitUntil(
    caches
      .open(offlinePageCache)
      .then(function(cache) {
        return cache.add(offlineURL);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

this.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        var responseClone = response.clone();
        caches.open(offlineCacheName).then(function(cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(function() {
        return caches.match(event.request).then(function(response) {
          return response || caches.match(offlineURL);
        });
      })
  );
});

