importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
if(workbox){
  workbox.setConfig({debug:false});
  workbox.skipWaiting();
  workbox.clientsClaim();
  workbox.routing.registerRoute(
  '/img/slides/',
  new workbox.strategies.NetworkFirst({
      networkTimeoutSeconds: 3,
      cacheName: 'slides',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 5,
          maxAgeSeconds: 5 * 60, // 5 minutes
        }),
      ],
  })
);
};
