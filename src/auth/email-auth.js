import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./config"

export const createAuthUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth(), email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            if (user) window.location.href = '/dashboard';

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('Message:', errorMessage, ' ', 'Error Code:', errorCode)
        });
    }
    
export const SignInAuthUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth(), email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('User:', user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Message:', errorMessage, ' ', 'Error Code:', errorCode)
    });
}