const CACHE_NAME = "impersilva-pwa-v1";
const urlsToCache = [
  "/IMPERSILVA.ao/",
  "/IMPERSILVA.ao/sobre.html",
  "/IMPERSILVA.ao/manifest.json"
  // Adicione aqui outros arquivos importantes (CSS, JS, imagens)
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
