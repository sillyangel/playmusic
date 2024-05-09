importScripts('/__/firebase/10.11.1/firebase-app-compat.js');
importScripts('/__/firebase/10.11.1/firebase-messaging-compat.js');
importScripts('/__/firebase/init.js');

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  alert('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: payload.data.body,
    icon: '/assets/icons/icon-512-maskable.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
