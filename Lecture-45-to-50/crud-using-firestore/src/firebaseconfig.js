// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn7GJQqgB1mXFBTochvzWjrjiN6eoWLPE",
  authDomain: "pr-12-crud-e596b.firebaseapp.com",
  databaseURL: "https://pr-12-crud-e596b-default-rtdb.firebaseio.com",
  projectId: "pr-12-crud-e596b",
  storageBucket: "pr-12-crud-e596b.appspot.com",
  messagingSenderId: "789495039619",
  appId: "1:789495039619:web:351a41043e00711fa43db6",
  measurementId: "G-35RQE2YYDF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



