import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCzJMVA4_IppqQUK085WnOgUwybSt-JsH8",
  authDomain: "test-ab895.firebaseapp.com",
  projectId: "test-ab895",
  storageBucket: "test-ab895.appspot.com",
  messagingSenderId: "811844821649",
  appId: "1:811844821649:web:58940e8d3098d0fb8bd530",
  measurementId: "G-DYSR01MQ2G",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
