// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxx"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase