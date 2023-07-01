// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8ROJ_J9G--npa51KRCV3uDT6YRWCbgAs",
  authDomain: "library-be0da.firebaseapp.com",
  projectId: "library-be0da",
  storageBucket: "library-be0da.appspot.com",
  messagingSenderId: "436696709558",
  appId: "1:436696709558:web:a3cd1c4abafead770d6917",
  measurementId: "G-3GY1QJTHN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)