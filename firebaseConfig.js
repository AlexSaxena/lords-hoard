// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfFkzrdrIehcJPPWr2ybyvrpO9zSTqzAc",
  authDomain: "lordshoard.firebaseapp.com",
  projectId: "lordshoard",
  storageBucket: "lordshoard.appspot.com",
  messagingSenderId: "648400988901",
  appId: "1:648400988901:web:d6cc88f78a32bb0bda820c",
  measurementId: "G-SK5EY39K48",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
