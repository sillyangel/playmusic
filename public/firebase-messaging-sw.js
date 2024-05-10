importScripts('https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js');

var firebaseApp = {
    apiKey: "AIzaSyCrXbgrgnkGFfPkbHdJ5oRD4ezbv5ypWbE",
    authDomain: "playmusichtml.firebaseapp.com",
    projectId: "playmusichtml",
    storageBucket: "playmusichtml.appspot.com",
    messagingSenderId: "485050816009",
    appId: "1:485050816009:web:c1630df9ed354c33d98ad8",
    measurementId: "G-DZ88CYJF8L"
};

firebase.initializeApp(firebaseApp)
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
      body: payload.notification.body,
      icon: "./assets/icons/icon-512-maskable.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

