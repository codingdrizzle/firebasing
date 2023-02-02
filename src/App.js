import React, { useState } from 'react';
import './App.css';
import { FcGoogle } from 'react-icons/fc'
import { GrMail, GrFormClose } from 'react-icons/gr'
import { BsTelephoneFill } from 'react-icons/bs'
import { signInWithGooglePopup } from './auth/google-auth'
import { createAuthUserWithEmailAndPassword, SignInAuthUserWithEmailAndPassword } from './auth/email-auth'
import { signInPhone } from './auth/phone-auth'

function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [show, setShow] = useState(false)
    const handleClick = async () => {
        const res = await signInWithGooglePopup();
        console.log(res);
    }
    return (
        <>
            <div className="App">
                <h1>Login</h1>
                <div className='form'>
                    <div>
                        <input type="email" placeholder='Enter your email address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: '20%', margin: 'auto' }}>
                        <button style={{ background: 'dodgerblue' }}>Login</button>
                        <button onClick={handleClick}><FcGoogle /> Sign in with Google</button>
                        <button onClick={() => createAuthUserWithEmailAndPassword(email, password)}><GrMail /> Create account with Email</button>
                        <button onClick={() => SignInAuthUserWithEmailAndPassword(email, password)}><GrMail /> Sign in with Email</button>
                        <button onClick={() => setShow(!show)}><BsTelephoneFill /> Sign in with Phone</button>
                    </div>
                </div>
            </div>

            <div className="modal" style={{ display: show ? 'flex' : 'none' }}>
                <div className="modal-content">
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', cursor: 'pointer' }}><GrFormClose size={30} onClick={() => setShow(false)} /></div>
                    <div style={{ display: 'flex', flex: 1 }}><h3>SignIn with Phone Number</h3></div>
                    <input type="number" placeholder='Enter your phone number' value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value)
                        console.log(phoneNumber);
                        }} />
                    <button onClick={() => alert('Send code')}>Send Code</button>
                </div>
            </div>
        </>
    );
}

export default App;
