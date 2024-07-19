import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBL2V9PjcQKl-YGD6kjptlxR98TzCHleE",
  authDomain: "final-exam-react.firebaseapp.com",
  databaseURL: "https://final-exam-react-default-rtdb.firebaseio.com",
  projectId: "final-exam-react",
  storageBucket: "final-exam-react.appspot.com",
  messagingSenderId: "439215162436",
  appId: "1:439215162436:web:5422ceac43ab3bf07aa811",
  measurementId: "G-WFNV70013V"
};

export const app = initializeApp(firebaseConfig);