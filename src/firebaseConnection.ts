import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3Z-UnR39PySeOfsMcySXNIxdK44bG7aQ",
  authDomain: "schedules-back.firebaseapp.com",
  projectId: "schedules-back",
  storageBucket: "schedules-back.appspot.com",
  messagingSenderId: "135526465455",
  appId: "1:135526465455:web:c29dc4689477b9e2c1b95a",
  measurementId: "G-5R1HB5GFB5",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
