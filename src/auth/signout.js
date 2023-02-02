import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth();

export const signOutUser = () => {
    signOut(auth).then(() => {
        alert('Sign Out Successful')
        // Sign-out successful.
    }).catch((error) => {
        console.error(error);
        // An error happened.
    });
}