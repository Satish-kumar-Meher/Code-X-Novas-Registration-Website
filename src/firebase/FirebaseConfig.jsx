// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLK9SPG5UeEW0jcjnzGljBufoXC9nAaYY",
  authDomain: "c-x-n-36e00.firebaseapp.com",
  projectId: "c-x-n-36e00",
  storageBucket: "c-x-n-36e00.firebasestorage.app",
  messagingSenderId: "442969032835",
  appId: "1:442969032835:web:3cf69183d3a0ed5c96b3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
export {fireDB}