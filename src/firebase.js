import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'tiktok-ui-48cfe.firebaseapp.com',
  databaseURL: 'https://tiktok-ui-48cfe-default-rtdb.firebaseio.com',
  projectId: 'tiktok-ui-48cfe',
  storageBucket: 'tiktok-ui-48cfe.appspot.com',
  messagingSenderId: '57525405602',
  appId: '1:57525405602:web:ab95ee1839bad6606ed4fb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, auth, storage };