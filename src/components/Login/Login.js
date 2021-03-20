import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const googleProvider = new firebase.auth.GoogleAuthProvider();



    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })

    const [loginInfo, setLoginInfo] = useContext(UserContext)
    console.log(loginInfo)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message)
            })
    }


    const handleChange = (e) => {
        let isFormValid = true;

        console.log(e.target.name, e.target.value)
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            // const confirmPasswordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }


    const handleSubmit = (e) => {
        // console.log('clicked')
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name)
                    console.log(res)
                })
                .catch(error => {
                    let newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message
                    setUser(newUserInfo);
                    // var errorMessage = error.message;
                    // console.log(errorCode, errorMessage)
                    // ..
                });
            // console.log(user.email, user.password);
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoginInfo(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user)
                })
                .catch((error) => {
                    let newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }
    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        })
            .then(function () {
                console.log('user name updated successfully');
            }).catch(function (error) {
                console.log(error)
            });
    }

    return (
        <div className="text-center mt-5">
            <h3>Name: {user.displayName}</h3>
            <form className="form" onSubmit={handleSubmit}>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">New User Sign-Up</label><br />

                {newUser && <input type="text" name="name" onBlur={handleChange} required placeholder="Full Name" />}<br />

                <input type="text" name="email" onBlur={handleChange} placeholder="email" required /><br />
                <input type="password" name="new-password" onBlur={handleChange} placeholder="password" required /><br />
                <input type="password" name="password" onBlur={handleChange} placeholder="Confirm Password" /><br />
                <input type="submit" value={newUser ? 'Create An Acount' : 'Sign-In'} /><br />
                <div className="google" onClick={handleSignIn}>Sign In Using Google </div><br />



                Already Have An Acount <button onClick={handleSignIn} onSubmit={handleSubmit} className="link">Log In</button>

            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'red' }}>Account {newUser ? 'created ' : 'Logged In'} Successfully</p>}

        </div>
    );
};

export default Login;