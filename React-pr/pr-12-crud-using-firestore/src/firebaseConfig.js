import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBj46NflbRoLv66uX3N3BPUvyBj2ce8E1I",
  authDomain: "pr-12-crud.firebaseapp.com",
  databaseURL: "https://pr-12-crud-default-rtdb.firebaseio.com",
  projectId: "pr-12-crud",
  storageBucket: "pr-12-crud.appspot.com",
  messagingSenderId: "563174632700",
  appId: "1:563174632700:web:0259e1bc33a38a958abb79",
  measurementId: "G-JCYJCRGYG6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);