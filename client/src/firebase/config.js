import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsX6GBW9XbSDntrwtsSo-2LJAo3BFt54M",
  authDomain: "yourgymbro-ba5c0.firebaseapp.com",
  projectId: "yourgymbro-ba5c0",
  storageBucket: "yourgymbro-ba5c0.appspot.com",
  messagingSenderId: "692997557488",
  appId: "1:692997557488:web:0fe596aa60f8f295e7c635",
  measurementId: "G-FMGTXQFJ9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);