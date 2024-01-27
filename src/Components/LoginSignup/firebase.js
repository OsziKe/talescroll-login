import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, createUserWithEmailAndPassword as createUser, signInWithEmailAndPassword as signIn, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBzBmwmM1U4wBuFE-oeTUGozNxglRs8CKA",
    authDomain: "talescroll-5973f.firebaseapp.com",
    projectId: "talescroll-5973f",
    storageBucket: "talescroll-5973f.appspot.com",
    messagingSenderId: "194888175514",
    appId: "1:194888175514:web:00fa7287e926ea5826f423",
    measurementId: "G-ZW6NB74LQY"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, createUser, signIn, sendPasswordResetEmail };


