import React, { useState } from 'react';
import '../App.css';
import { FcGoogle } from 'react-icons/fc'
import { GrMail, GrFormClose } from 'react-icons/gr'
import { BsTelephoneFill } from 'react-icons/bs'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'
import { signInWithGooglePopup } from '../auth/google-auth'
import { SignInAuthUserWithEmailAndPassword } from '../auth/email-auth'
import { auth } from '../auth/config';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showOTP, setShowOTP] = useState(false)
    const [otp, setOtp] = useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': submitPhoneNumber(),
            'expired-callback': () => { }
        }, auth());
    }

    const submitPhoneNumber = async () => {
        const appVerifier = window.recaptchaVerifier;
        try {
            const res = await signInWithPhoneNumber(auth(), `+${phoneNumber}`, appVerifier)
            if (res) {
                setShowOTP(true)
                window.res = res
            }
        } catch (error) {
            console.error(error)
        }
    }
    const onOTPVerified = () => {
        window.res.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("User", user)
            console.log("User is signed in successfully")

            if (user) {
                navigate('/dashboard')
            }
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });
        // ...

    }

    return (
        <>
            <div className="App">
                <h1>Login</h1>
                <div className='form'>
                    <div id="recaptcha-container"></div>
                    <div>
                        <input type="email" placeholder='Enter your email address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        <button onClick={() => SignInAuthUserWithEmailAndPassword(email, password)}><GrMail /> Sign in with Email</button>
                        <button onClick={signInWithGooglePopup}><FcGoogle /> Sign in with Google</button>
                        <button onClick={setShow}><BsTelephoneFill /> Sign in with Phone</button>
                <div style={{ display: 'flex', justifyContent: 'flex-start', cursor: 'pointer' }}>
                    <Link to={'/register'}>Register</Link>
                </div>
                </div>
            </div>

            <div className="modal" style={{ display: show ? 'flex' : 'none' }}>
                {
                    showOTP ?
                        <div className="modal-content">
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', cursor: 'pointer' }}><GrFormClose size={30} onClick={() => {
                                setShowOTP(false)
                                setOtp('')
                                setShow(false)
                            }} /></div>                            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}><h3>Enter OTP</h3></div>
                            <OtpInput
                                value={otp}
                                onChange={(otp) => setOtp(otp)}
                                numInputs={6}
                                separator={<span>-</span>}
                            />
                            <button onClick={onOTPVerified}>Verify OTP</button>
                        </div>
                        :
                        <div className="modal-content">
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', cursor: 'pointer' }}><GrFormClose size={30} onClick={() => {
                                setShowOTP(false)
                                setShow(false)
                                setPhoneNumber('')
                            }} /></div>
                            <div style={{ display: 'flex', flex: 1 }}><h3>SignIn with Phone Number</h3></div>
                            <PhoneInput
                                country={'gh'}
                                value={phoneNumber}
                                onChange={phoneNumber => setPhoneNumber(phoneNumber)}
                            />

                            <button onClick={setUpRecaptcha}>Send Code</button>
                        </div>

                }
            </div>
        </>
    );
}

export default Login