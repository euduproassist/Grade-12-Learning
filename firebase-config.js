import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-storage.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-functions.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";

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

// Initialize Services to be exported
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const analytics = getAnalytics(app);
