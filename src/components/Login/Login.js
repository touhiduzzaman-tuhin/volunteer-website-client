import React, { useContext, useState } from 'react';
import googleIcon from '../../images/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import './Login.css';
import logo from '../../images/Group 1329.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [user, setUser] = useState({
        isLoggedIn:false,
        userName: '',
        email: '',
        photo: '',
        error: '',
        success: ''
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then( result => {
            // var token = result.credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            const signInUser = {
                userName: displayName,
                email: email,
                photo: photoURL,
                isLoggedIn: true
            }
            setUser(signInUser);
            setLoggedInUser(signInUser);
            storeAuthToken();
            history.replace(from);
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);

          }).catch(function(error) {
          });
    }
    return (
        <div align="center">
            <img className='logo-image' src={logo} alt=""/>
            <div className='login-area'>
                <h3 style={{marginTop: '100px'}}>Login With</h3>
                <button className='google-button-style' onClick={handleGoogleSignIn}> <img height="20px" src={googleIcon} alt=""/> Continue With Google</button>
                <p>Don't Have An Account ? Create An Account</p>
            </div>
        </div>
    );
};

export default Login;