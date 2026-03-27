import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  projectId: "gen-lang-client-0826313441",
  appId: "1:223788350503:web:8411a4f39e8b40d5ac2202",
  apiKey: "AIzaSyA68c4RB-PZ_RosdCZi80vQh4xIKydL1Vc",
  authDomain: "gen-lang-client-0826313441.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-3ac34f72-f5f5-46c8-b404-4df4a2c120ff",
  storageBucket: "gen-lang-client-0826313441.firebasestorage.app",
  messagingSenderId: "223788350503",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Helper to save user profile
export const saveUserProfile = async (user: User) => {
  const userRef = doc(db, 'users', user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: serverTimestamp(),
  }, { merge: true });
};

export { signInWithPopup, signOut, onAuthStateChanged, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp };
