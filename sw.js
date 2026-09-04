const CACHE='my-life-dashboard-v5-2-pwa-update-fix';
const OFFLINE_URL='./index.html';
const ASSETS=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message',event=>{
  if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(new Request(event.request,{cache:'no-store'}));
        if(fresh && fresh.ok){
          const cache=await caches.open(CACHE);
          await cache.put(OFFLINE_URL,fresh.clone());
        }
        return fresh;
      }catch(e){
        return (await caches.match(OFFLINE_URL)) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    try{
      const fresh=await fetch(new Request(event.request,{cache:'no-cache'}));
      if(fresh && fresh.ok){
        const cache=await caches.open(CACHE);
        await cache.put(event.request,fresh.clone());
      }
      return fresh;
    }catch(e){
      const cached=await caches.match(event.request);
      if(cached) return cached;
      throw e;
    }
  })());
});
