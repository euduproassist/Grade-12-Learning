// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz6snnIV2c0IoNmN-L-vN406dgP9ZJ9PE",
  authDomain: "grade-12-learning.firebaseapp.com",
  projectId: "grade-12-learning",
  storageBucket: "grade-12-learning.firebasestorage.app",
  messagingSenderId: "1074572875526",
  appId: "1:1074572875526:web:9d0146e749a6bd18fef087",
  measurementId: "G-TSN2YST0JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
