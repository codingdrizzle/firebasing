//import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
//import { GrWindows } from "react-icons/gr";
//import firebase from 'firebase/app';
//import 'firebase/auth';


//const auth = getAuth();

////export const signInUserWithPhoneNumberInVisible = (phoneNumber) => {
////    console.log(phoneNumber);
////    //window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

////    //const appVerifier = window.recaptchaVerifier;

////    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
////        'size': 'visible',
////        'callback': (response) => {
////            console.log(response);
////        // reCAPTCHA solved, allow signInWithPhoneNumber.
////            signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
////                .then(confirmationResult => {
////                    // SMS sent. Prompt user to type the code from the message, then sign the
////                    // user in with confirmationResult.confirm(code).
////                    window.confirmationResult = confirmationResult;
////                    console.log(window.confirmationResult);
////                    // ...
////                }).catch((error) => {
////                    console.log(error)
////                    //grecaptcha.reset(window.recaptchaWidgetId);
////                    //window.recaptchaVerifier.render().then(function (widgetId) {
////                    //    grecaptcha.reset(widgetId);
////                    //});
////                    // Error; SMS not sent
////                    // ...
////                });
////    },
////    'expired-callback': () => {
////        alert('Response Expired. Solve reCAPTCHA again.');
////        // Response expired. Ask user to solve reCAPTCHA again.
////        // ...
////    }
////},auth)
////}


//////export const signInUserWithPhoneNumberVisible = () => {
//////    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//////        'size': 'invisible',
//////        'callback': (response) => {
//////        // reCAPTCHA solved, allow signInWithPhoneNumber.
//////        onSignInSubmit();
//////    },
//////    'expired-callback': () => {
//////        alert('Response Expired. Solve reCAPTCHA again.');
//////        // Response expired. Ask user to solve reCAPTCHA again.
//////        // ...
//////    }
//////}, auth);
//////}


////export const getCodeAndSignInWithPhoneNumber = (code) => {
////    window.confirmationResult.confirm(code).then((result) => {
////        // User signed in successfully.
////        const user = result.user;
////        console.log('User signed in successfully');
////        // ...
////    }).catch((error) => {
////        // User couldn't sign in (bad verification code?)
////        // ...
////    });
////}



//export const signInPhone = (phoneNumber, code) => {

//    firebase.auth().verifyPhoneNumber(phoneNumber)
//        .then(function (verificationId) {
//            // Step 2: Prompt the user to enter the verification code
//            var code = promptUserToEnterVerificationCode();
//            // Step 3: Sign in the user with the verification code
//            var credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
//            firebase.auth().signInWithCredential(credential)
//                .then(function (result) {
//                    // User is signed in.
//                    var user = result.user;
//                })
//                .catch(function (error) {
//                    // Error occurred.
//                });
//        })
//        .catch(function (error) {
//            // Error occurred.
//        });
//}