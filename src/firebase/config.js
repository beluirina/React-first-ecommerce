// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBVNyHFL3iqUzB4Gauz6uRfsdmPlC4Jlo",
  authDomain: "cande-lenceria.firebaseapp.com",
  projectId: "cande-lenceria",
  storageBucket: "cande-lenceria.appspot.com",
  messagingSenderId: "87607856730",
  appId: "1:87607856730:web:dd6b60d6bf2a8f7ca4d263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(params){
    return app 
}