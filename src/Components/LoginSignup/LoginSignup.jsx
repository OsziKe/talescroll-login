import React, { useState } from 'react';
import './LoginSignup.css';
import google_icon from '../Assets/icons8-google-144.png';
import facebook_icon from '../Assets/icons8-facebook-144.png';
import logo from '../Assets/withoutbg.png';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider, signInWithPopup, createUser, signIn, sendPasswordResetEmail } from './firebase';

function LoginSignup(props) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isRegister, setIsRegister] = useState(true);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState('');

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setIsRegister(!isRegister);
        setShowResetPassword(false);
        // Zresetuj komunikaty o błędach
        setNameError('');
        setEmailError('');
        setPasswordError('');
    };

    const handleResetPassword = async () => {
        validateEmail(email);
        if (emailError) {
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setResetPasswordSuccess('Password reset email sent. Check your inbox.');
            setShowResetPassword(false);
        } catch (error) {
            setEmailError(error.message);
        }
    };

    const validateEmail = (email) => {
        if (!email) {
            setEmailError('Email is required');
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (password) => {
        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password is too short');
        } else {
            setPasswordError('');
        }
    };

    const validateName = (name) => {
        if (!name && !showLoginForm) { // Sprawdź tylko, jeśli jesteś w trybie rejestracji (name jest wymagane)
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const handleGoogleAction = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFacebookAction = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEmailAction = async () => {
        validateName(name); // Walidacja pola "Name" przy próbie rejestracji
        validateEmail(email);
        validatePassword(password);

        if (nameError || emailError || passwordError) {
            return;
        }

        try {
            const result = isRegister
                ? await createUser(auth, email, password)
                : await signIn(auth, email, password);

            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
            setEmailError(error.message);
            setPasswordError('');
        }
    };

    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="inputs">
                    {showResetPassword ? (
                        <>
                            <p>Enter your email to reset your password</p>
                            <div className="input" placeholder="Enter your email here">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email here"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <p className="error-message">{emailError}</p>
                        </>
                    ) : showLoginForm ? (
                        <>
                            <p>E-mail</p>
                            <div className="input" placeholder="Enter your email here">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email here"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <p className="error-message">{emailError}</p>
                            <p>Password</p>
                            <div className="input" placeholder="Enter your password here">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword(e.target.value);
                                    }}
                                    minLength="6"
                                    maxLength="20"
                                />
                            </div>
                            <p className="error-message">{passwordError}</p>
                        </>
                    ) : (
                        <>
                            <p>Name</p>
                            <div className="input" placeholder="Enter your name here">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name here"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        validateName(e.target.value);
                                    }}
                                />
                            </div>
                            <p className="error-message">{nameError}</p>
                            <p>E-mail</p>
                            <div className="input" placeholder="Enter your email here">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email here"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <p className="error-message">{emailError}</p>
                            <p>Password</p>
                            <div className="input" placeholder="Enter your password here">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword(e.target.value);
                                    }}
                                />
                            </div>
                            <p className="error-message">{passwordError}</p>
                        </>
                    )}
                </div>
                <div className="submit-container">
                    <div className="submit">
                        <button onClick={handleGoogleAction} id="iconbutton">
                            <div className="button-content">
                                <img src={google_icon} alt="" className="icon" /> {isRegister ? 'Register with Google' : 'Login with Google'}
                            </div>
                        </button>
                    </div>
                    <div className="submit">
                        <button onClick={handleFacebookAction} id="iconbutton">
                            <div className="button-content">
                                <img src={facebook_icon} alt="" className="icon" /> {isRegister ? 'Register with Facebook' : 'Login with Facebook'}
                            </div>
                        </button>
                    </div>
                    <div className="submit">
                        {showResetPassword ? (
                            <button id="reset-password-button" onClick={handleResetPassword}>
                                Reset Password
                            </button>
                        ) : (
                            <span onClick={() => setShowResetPassword(true)} id="reset-password">
                                Reset Password
                            </span>
                        )}
                    </div>
                    <div className="submit">
                        <button id="sign-up-button" onClick={handleEmailAction}>
                            {isRegister ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
                    <div className="forgot-password">
                        {showLoginForm ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={toggleLoginForm} id="ihave">
                            {showLoginForm ? 'Register' : 'Login'}
                        </span>
                    </div>
                    {showResetPassword && (
                        <p className="reset-password-success">{resetPasswordSuccess}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;






//dodaj do kazdego inputa pod nim error masage w zaleznosci od bledu, uzglednij za malu za duza liczbe znakow, znaki niedozwolone


//popraw aplikacje fb i google

//paragrafy niech beda nad inputami od lewej krawedzi a nie na srodku srodka



