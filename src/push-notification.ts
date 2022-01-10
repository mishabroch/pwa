// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import { getMessaging, getToken } from "firebase/messaging";

import "firebase/compat/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyCzJMVA4_IppqQUK085WnOgUwybSt-JsH8",
    authDomain: "test-ab895.firebaseapp.com",
    projectId: "test-ab895",
    storageBucket: "test-ab895.appspot.com",
    messagingSenderId: "811844821649",
    appId: "1:811844821649:web:58940e8d3098d0fb8bd530",
    measurementId: "G-DYSR01MQ2G",
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
      .then((currentToken) => {
        if (currentToken) {
          console.log("Your token is:", currentToken);
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  } catch (error) {
    console.error(error);
  }
};
