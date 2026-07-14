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



import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-functions.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqjk8zsXQxYezzCw_68GNyGntCwiugIi0",
  authDomain: "myapply-sa.firebaseapp.com",
  projectId: "myapply-sa",
  storageBucket: "myapply-sa.firebasestorage.app",
  messagingSenderId: "341079141374",
  appId: "1:341079141374:web:436c9cc03dba2081f22eaf",
  measurementId: "G-9T3QNFMS25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services to be exported
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const analytics = getAnalytics(app);
