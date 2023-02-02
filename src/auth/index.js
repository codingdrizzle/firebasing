import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDFc1y8ioDes5pT-k2YZhEFPFZhB3qACCM",
    authDomain: "firebasing-2023.firebaseapp.com",
    projectId: "firebasing-2023",
    storageBucket: "firebasing-2023.appspot.com",
    messagingSenderId: "351428063365",
    appId: "1:351428063365:web:1ffd74f89f6c210832b9ec"
};

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({})

const app = initializeApp(firebaseConfig);