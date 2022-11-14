import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5T43U8ZJ0fq2QdNmXrK_LyGU80sb9FQY",
    authDomain: "pizza-84e87.firebaseapp.com",
    projectId: "pizza-84e87",
    storageBucket: "pizza-84e87.appspot.com",
    messagingSenderId: "982885825692",
    appId: "1:982885825692:web:19de1932d60fdd729f4159"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default db