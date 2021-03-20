import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import signup from '../images/signup.jpg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    const [newUser, setNewUser] = useState({isSignedIn: false,
        name: ''});
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: ''
    })
    const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
   

   const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, email} = result.user;
    const signedInUser = {name: displayName, email, isSignedIn: true,}
    setLoggedInUser(signedInUser);
    history.replace(from);
    console.log(signedInUser);
  }).catch((error) => {
    const errorMessage = error.message;
    const email = error.email;
    console.log(errorMessage, email)
  });
  }
  const handleChange = (e) => {

    let isFormValid = true;
    if(e.target.name === 'name'){
        isFormValid = e.target.value;
    }
    if (e.target.name === 'email') {
      isFormValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      // const isPasswordValid= e.target.value.length > 6;
      isFormValid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/.test(e.target.value);

    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const updateUserInfo = name => {
    let user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
     
    }).then(() => {
     console.log('User name updated successfully')
    }).catch(function(error) {
     console.log(error)
    });
   }
  //  const { register, handleSubmit, errors } = useForm();
  //  const onSubmit = data =>{
    
  // };
  const handleSignIn = (e) => {
    console.log(user.email, user.password, user.name);
   
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = '';
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
           history.replace(from);
         updateUserInfo(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = '';
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log('sign in user info', res.user)
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
         
        });
    }
    e.preventDefault();
  }

    return (
        <>
        <div className="main">

            <div className="signup">
                <div className="form-container">
                    <div className="container">
                    <div className="signup-content row">
                        <div className="signup-form col-md-6 col-10">
                            <h2 className="form-title">{newUser ? 'Sign Up' : 'Sign In'}</h2>
                            <form  onSubmit={handleSignIn} className="register-form" id="register-form">
                               {newUser && <div className="form-group">

                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" onBlur={handleChange} id="name"  placeholder="Your Name"/>
                                </div>}
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" onBlur={handleChange} id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" onBlur={handleChange} id="pass"  placeholder="Password"/>
                                </div>
                               {newUser && <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="password" onBlur={handleChange} id="re_pass"  placeholder="Repeat your password"/>
                                </div>}
                                <div className="form-group agree-term">
                                    <input type="checkbox" name="agree-term" id="agree-term"  />
                                    <label htmlFor="agree-term"  className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value={newUser ?"Register" : "Login"}/>
                                </div>
                                
                            </form>
                            <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><span onClick={handleGoogleSignIn}><FcGoogle/> </span></li>
                                        {/* <li> <span onClick={handleFacebookSignIn}><FcGoogle/> </span></li> */}
                                    </ul>
                                </div>
                        </div>
                        <div className="signup-image col-md-6">
                            <img src={signup} alt="sing up" />
                            <span className="signup-image-link">{newUser ? "Sign In" : "Create Account"}<Link onClick={() =>setNewUser(!newUser) }>{newUser ? 'LogIn' : "Sign Up"}</Link> </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           
    {/* <div className="sign-in">
        <div className="form-container">
            <div className="container">
            <div className="signin-content row">
                <div className="signin-image col-md-6 col-10 mx-auto">
                    <img src={signin} alt="sing up" />
                    <span onClick={() => setNewUser(!newUser)} className="signup-image-link">Create an account</span>
                </div>

                <div className="signin-form col-md-6 col-10 mx-auto">
                    <h2 className="form-title">Sign In</h2>
                    <form  className="register-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="email" name="email" onBlur={handleChange} placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                            <input type="password" name="pass" onBlur={handleChange} placeholder="Password"/>
                        </div>
                        <div className="form-group agree-term">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="signin" onClick={handleSubmit} id="signin" className="form-submit" value="Log in"/>
                        </div>
                    </form>
                    <div className="social-login">
                        <span className="social-label">Or login with</span>
                        <ul className="socials">
                            <li><span onClick={handleSignIn}><FaFacebook/></span></li>
                            <li> <span onClick={handleFacebookSignIn}><FcGoogle/> </span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div> */}

</div>
</>
    );
};

export default Login;
