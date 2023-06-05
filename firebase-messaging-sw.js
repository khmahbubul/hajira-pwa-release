importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyA1JdCM4bhEIyPKojZeqnlwSAps1dqwX8Y",
    authDomain: "hajira-pwa.firebaseapp.com",
    projectId: "hajira-pwa",
    storageBucket: "hajira-pwa.appspot.com",
    messagingSenderId: "934805741636",
    appId: "1:934805741636:web:6f84387a6939211dc19c11"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

var greenHrmChannel = new BroadcastChannel('hrm');

messaging.onBackgroundMessage(function (payload) {
    greenHrmChannel.postMessage({ hasUnseenNotification: true });
});
