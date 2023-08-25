// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQ-hCIytbt6KV7Wqehftg7Qfad-QZSTo",
  authDomain: "khan-store-c35e9.firebaseapp.com",
  projectId: "khan-store-c35e9",
  storageBucket: "khan-store-c35e9.appspot.com",
  messagingSenderId: "239452307344",
  appId: "1:239452307344:web:8f7401a4ef4afc3688fd15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app