// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6yYunfPPUzBgECuGIbbEVtDetA0WuekI",
  authDomain: "netfixgpt.firebaseapp.com",
  projectId: "netfixgpt",
  storageBucket: "netfixgpt.appspot.com",
  messagingSenderId: "231717140683",
  appId: "1:231717140683:web:9830677fc8a4aa7d2c034e",
  measurementId: "G-3SF8SVGKK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
