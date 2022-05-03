// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Qj7loPYDCr0omEDkVx9ZAtxcf04cKNU",
  authDomain: "warehouse-management-a6773.firebaseapp.com",
  projectId: "warehouse-management-a6773",
  storageBucket: "warehouse-management-a6773.appspot.com",
  messagingSenderId: "1081723549105",
  appId: "1:1081723549105:web:0db207edc32c4366b73990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;