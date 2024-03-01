import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCrXbgrgnkGFfPkbHdJ5oRD4ezbv5ypWbE",
    authDomain: "playmusichtml.firebaseapp.com",
    projectId: "playmusichtml",
    storageBucket: "playmusichtml.appspot.com",
    messagingSenderId: "485050816009",
    appId: "1:485050816009:web:c1630df9ed354c33d98ad8",
    measurementId: "G-DZ88CYJF8L"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BIH_uJo9AsIWsO3BKTuPdHFN9iBu9df6f-I79lJQYTnGYfBHh57zONkQ5DBYqYqGUyX0wgZbVmma7SPITN3j4RA",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();