import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFp8XG7bxtmLy9EWJJZEvHaYlGmo7xLHk",
  authDomain: "recipe-65af5.firebaseapp.com",
  projectId: "recipe-65af5",
  storageBucket: "recipe-65af5.appspot.com",
  messagingSenderId: "1005588336659",
  appId: "1:1005588336659:web:c6637db94100c84e102fe6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
