importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [
  {
    "url": "/img/servizi/disinfestazione-zanzare-udine-gorizia.jpg",
    "revision": "49a309b089276d32f1cee4407ed1f014"
  },
  {
    "url": "/img/servizi/giardiniere-a-domicilio-udine.jpg",
    "revision": "81b62d5176e1374d5171fdc65dd789b0"
  },
  {
    "url": "/img/servizi/impianto-irrigazione-interrata-udine.jpg",
    "revision": "7ed98435feee042da2978e1b8eb19010"
  },
  {
    "url": "/img/servizi/posa-di-recinzioni-udine.jpg",
    "revision": "a8d16f7199832b7fcbd9cce6a21b8674"
  },
  {
    "url": "/img/servizi/potatura-siepe-udine-gorizia.jpg",
    "revision": "6a5d14603e54fab760ffc58e04e455a4"
  },
  {
    "url": "/img/servizi/progettazione-giardini-Udine-Gorizia.jpg",
    "revision": "0f237f3a6a07eae1733d005661ca76ba"
  },
  {
    "url": "/img/servizi/recinzione-rete-pali-legno.jpg",
    "revision": "72c113fa6390dc116fe1a01b1795e5a1"
  },
  {
    "url": "/img/servizi/servizio-riparazione-tagliaerba.jpg",
    "revision": "74bb9e7d8554f7177e3f080f385fd251"
  },
  {
    "url": "/img/slide1.jpg",
    "revision": "b60180be4e1da5bdfcc5b970ee0410a6"
  },
  {
    "url": "/img/slide2.jpg",
    "revision": "cb43b87e9e8f8dfc48be44c82c837757"
  },
  {
    "url": "/img/slide3.jpg",
    "revision": "6ebc07a17ac67e9ec08305603f01103e"
  },
  {
    "url": "/img/slide4.jpg",
    "revision": "e5ac348461ca60d73f9bc5a49bb44367"
  },
  {
    "url": "/img/slide5.jpg",
    "revision": "b8f00c36606cdea1a1dc1f3b23e61bdd"
  },
  {
    "url": "/js/jquery.min.js",
    "revision": "e295d8f05470eb85bde9d518c96cd262"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
