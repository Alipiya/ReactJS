
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgQpeebfCaubUNCmwEyIviaGRMhdTcGSA",
  authDomain: "reactjs-89c7c.firebaseapp.com",
  databaseURL: "https://reactjs-89c7c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactjs-89c7c",
  storageBucket: "reactjs-89c7c.appspot.com",
  messagingSenderId: "1026803842984",
  appId: "1:1026803842984:web:40292a9224941d730da79d",
  measurementId: "G-YNKEY0TJ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);