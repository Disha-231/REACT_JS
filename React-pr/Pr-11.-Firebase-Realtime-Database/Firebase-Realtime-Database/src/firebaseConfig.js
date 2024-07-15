// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB56aJ_77K4JBt3vvvOAFJhOqrUd47wXac",
  authDomain: "pr-11-react.firebaseapp.com",
  projectId: "pr-11-react",
  storageBucket: "pr-11-react.appspot.com",
  messagingSenderId: "98566450906",
  appId: "1:98566450906:web:8348cada429cd94d89ffe3",
  measurementId: "G-9JSK3VCN76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);