import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: YOUR_API,
  authDomain: YOUR_DOMAIN,
  projectId: YOUR_ID,
  storageBucket: YOUR_BUCKET,
  messagingSenderId: YOUR_SENDERID,
  appId: YOUR_APPID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
