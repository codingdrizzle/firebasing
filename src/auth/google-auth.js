import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from './config'

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGooglePopup = async () => {
    try {
        const res = await signInWithPopup(auth(), googleProvider);
        console.log(res)
        if (res) window.location.href = '/dashboard';
        return res;
    } catch (error) {
        console.error(error);
    }
}