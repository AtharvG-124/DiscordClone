// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIEwC9BmuEMsSmt3zbS4mHZ0dqUqiCa7M",
  authDomain: "discord-clone-7eb84.firebaseapp.com",
  projectId: "discord-clone-7eb84",
  storageBucket: "discord-clone-7eb84.appspot.com",
  messagingSenderId: "238450814193",
  appId: "1:238450814193:web:c0470864ebb6a59a84cd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;