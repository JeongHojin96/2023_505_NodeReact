// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKS8cxjkvO2wOnLVRZxxMH5GiI_22NgV0",
  authDomain: "react-007-bucket-v2.firebaseapp.com",
  databaseURL: "https://react-007-bucket-v2-default-rtdb.firebaseio.com",
  projectId: "react-007-bucket-v2",
  storageBucket: "react-007-bucket-v2.appspot.com",
  messagingSenderId: "524512872861",
  appId: "1:524512872861:web:fe75320726e359b7f98774",
  measurementId: "G-CDBL89CB7W",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
