import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRqsjxTeIlS6gmGmo6Bo-HGc72nacw_pg",
  authDomain: "spiritual-getaway.firebaseapp.com",
  projectId: "spiritual-getaway",
  storageBucket: "spiritual-getaway.appspot.com",
  messagingSenderId: "858553738391",
  appId: "1:858553738391:web:93b5b6d13b1b87ed5e75d2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}