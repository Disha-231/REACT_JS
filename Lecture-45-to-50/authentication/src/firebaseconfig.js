import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3u_qlto1yqR4S88lKHvpZk-PwVQnts1U",
  authDomain: "pr-13-authentication.firebaseapp.com",
  projectId: "pr-13-authentication",
  storageBucket: "pr-13-authentication.appspot.com",
  messagingSenderId: "605159775719",
  appId: "1:605159775719:web:6aaa96077184831be9f142",
  measurementId: "G-NW0JENHGDW"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();