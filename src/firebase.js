import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrjfSobjT-yHWj-Vw6NC062xxoag9brUI",
  authDomain: "react-notes-bcfb9.firebaseapp.com",
  projectId: "react-notes-bcfb9",
  storageBucket: "react-notes-bcfb9.appspot.com",
  messagingSenderId: "528523980529",
  appId: "1:528523980529:web:ac92179e3e5c131130c350",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");


