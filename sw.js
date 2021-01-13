var cacheName = "learn-hub";
var files = [
    './',
    './js/main.js',
    './index.html',
    './css/app.css',
    './css/material-icons.css',
    './images/py.jpg',
    './images/c++.jpg',
    './images/js.jpg',
    './images/java.png',
    './images/c.png',
    './images/icon.png',
    './images/php2.jpg',
    './images/css.jpg',
    './images/html1.jpg',
    './images/kt.png'
];

self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(files);
        })
    );
});

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
        return response || fetch(e.request);
        })
    );
});