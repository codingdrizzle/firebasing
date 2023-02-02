import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './config'

firebaseConfig()
export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGooglePopup = async () => {
    try {
        return await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error);
    }
}