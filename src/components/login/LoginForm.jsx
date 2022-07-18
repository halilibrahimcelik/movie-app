import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useAuthContext } from '../../context/authContext';
import styles from "./LoginForm.module.scss";
const LoginForm = () => {
  const { toggleSign, setUserName, login ,googleSignIn} = useAuthContext();
  // const nameInput=useRef();
  const [initialName, setName] = useState("");
  const emailInput = useRef();
  const passwordInput = useRef();
  const FIREBASE_WEB_KEY = process.env.REACT_APP_FIREBASE_WEB_KEY;

  const handleSubmit = (e) => {
    const enteredName = toggleSign ? initialName : "";
    const enteredEmail = emailInput.current.value;
    e.preventDefault();



    const enteredPassword = passwordInput.current.value;
    console.log(enteredEmail, enteredName, enteredPassword);
    let url;
    if (toggleSign) {
      //?REGISTRATION
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_KEY}`
    } else {
      //?LOGIN
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_WEB_KEY}`
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        displayName: enteredName,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {

      if (!response.ok) {
        //?we got and eror
        return response.json().then(data => {
          //?show your error modal
          console.log(data);
          let errorMessage = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage)
        })
      } else {
        return response.json()
      }
    }).then(data => {
      //!we get successfully our data
      console.log(data)
      setUserName(data.displayName);
      login(data.idToken)


    })
  }


  return (
    <Fragment>
      <section className={styles.wrapper} >
        <form className={styles.form} onSubmit={handleSubmit} >
          {toggleSign && <>
            <label htmlFor="nameInput">Name
            </label>
            <input type="text" id="nameInput" onChange={e => setName(e.target.value)} />
          </>}
          <label htmlFor="emailInput">Email
          </label>
          <input type="email" id="emailInput" ref={emailInput} />
          <label htmlFor="passwordInput">Password</label>
          <input type="password" id='passwordInput' ref={passwordInput} />
          <button> {toggleSign ? "REGISTER" : "LOGIN"} </button>
        </form>
        <button
          className={styles["login-with-google-btn"]}
          onClick={googleSignIn}
        >
          {toggleSign ? "Register with Google" : "Sing with Google"}

        </button>
      </section>

    </Fragment>
  )
}

export default LoginForm;