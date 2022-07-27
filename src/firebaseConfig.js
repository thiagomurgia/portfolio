// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: import.meta.env.PROD.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.PROD.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PROD.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PROD.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PROD.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PROD.VITE_FIREBASE_APP_ID
};


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
