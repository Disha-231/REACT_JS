
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB8UVu7R9xdFvee0lhtP27xcr7OeKxm6Z4",
  authDomain: "my-crud-f5221.firebaseapp.com",
  projectId: "my-crud-f5221",
  storageBucket: "my-crud-f5221.appspot.com",
  messagingSenderId: "63087973479",
  appId: "1:63087973479:web:35e2aca6febad2040ab0c2",
  measurementId: "G-6V6M30J8K7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
