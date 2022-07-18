// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCikCEsoMXsbSyayw8Y-5VGFIukTzSscoU",
  authDomain: "movie-store-app-9c870.firebaseapp.com",
  projectId: "movie-store-app-9c870",
  storageBucket: "movie-store-app-9c870.appspot.com",
  messagingSenderId: "693106159589",
  appId: "1:693106159589:web:4f24b541860885b908490c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
