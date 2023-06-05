let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/assets/js/core/bootstrap.min.js',
                '/assets/js/plugins/perfect-scrollbar.min.js',
                '/assets/js/plugins/smooth-scrollbar.min.js',
                '/assets/js/buttons.js',
                '/assets/js/soft-ui-dashboard.js',
                '/assets/js/core/popper.min.js',

                'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2',

                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
                '/assets/css/bootstrap.min.css',
                '/assets/css/soft-ui-dashboard.css',

                '/assets/img/logo.png',
                '/favicon.ico',
                '/assets/img/attendance.jpg',
                '/assets/img/reconciliation.jpg',
                '/assets/img/leave.jpg',
                '/assets/img/holiday.jpg',

                '/index.html',
                '/'
            ]);
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        if (event.request.url.search('/assets/js/soft-ui-dashboard.js') !== -1) {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
    }

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(function (error) {
            return caches.match('index.html');
        })
    );
});
