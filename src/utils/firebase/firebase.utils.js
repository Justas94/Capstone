import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKGDEYlZvWxeQlprvFQVXavl5SNpu4ap8",
  authDomain: "crwn-clothing-db-68f64.firebaseapp.com",
  projectId: "crwn-clothing-db-68f64",
  storageBucket: "crwn-clothing-db-68f64.appspot.com",
  messagingSenderId: "46693536209",
  appId: "1:46693536209:web:c084de0c304b2dbdb6d0f0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
