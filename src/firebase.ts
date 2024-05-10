import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// import { getFirestore } from "firebase/firestore";

const FIREBASE_API_KEY = process.env.VITE_REACT_FIREBASE_API_KEY;

export const firebaseApp = initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: "lingua-5d617.firebaseapp.com",
  projectId: "lingua-5d617",
  storageBucket: "lingua-5d617.appspot.com",
  databaseURL:
    "https://lingua-5d617-default-rtdb.europe-west1.firebasedatabase.app/",
  messagingSenderId: "776561551925",
  appId: "1:776561551925:web:6dc9642af95b6663349f7c",
});

export const auth = getAuth(firebaseApp);
// export const db = getFirestore(firebaseApp);
const db = getDatabase(firebaseApp);
export const usersRef = ref(db, "users");
