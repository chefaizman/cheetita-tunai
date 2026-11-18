// Service worker minimum: membolehkan "Install app" di Android. Tiada cache data (semua rekod terus ke Google).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
