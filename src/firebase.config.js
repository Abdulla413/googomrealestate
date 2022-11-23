// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkeSYmpqhyo1FoHSe5xMm3EhAsMf_S_Yw",
  authDomain: "googoom-realstate.firebaseapp.com",
  projectId: "googoom-realstate",
  storageBucket: "googoom-realstate.appspot.com",
  messagingSenderId: "316895463356",
  appId: "1:316895463356:web:554ed9137b447b9c2acdb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFireStore();