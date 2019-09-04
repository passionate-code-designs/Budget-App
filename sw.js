const staticCache='site-static-v3';
const assets= [
  './',
  './index.html',
  './app.js',
  './service.js',
  './main.css',
  './jquery.min.js',
  './IMAGES/animated-animal-image-0021.gif',
  './IMAGES/africa-15428_1920.jpg',
  './IMAGES/basket.png',
  './IMAGES/icons8-sign-up-100.png',
  './IMAGES/icons8-up-down-arrow-100.png',

];

//service worker installation
self.addEventListener('install', evt=>{

    evt.waitUntil(
        caches.open(staticCache).then(cache=>{
            cache.addAll(assets);
        })
    );
});

//activate event
self.addEventListener('activate',evt=>{
    evt.waitUntil(
        caches.keys().then(keys=>{
          return Promise.all(keys
          .filter(key =>key !== staticCache)
          .map(key =>caches.delete(key))
          )
        })
    );
});

//fetch event
self.addEventListener('fetch', evt=>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
          return cacheRes || fetch(evt.request);
        })
    );
});


