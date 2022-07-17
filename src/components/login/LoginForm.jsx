import React, { Fragment } from 'react'
import { useAuthContext } from '../../context/authContext';
import styles from "./LoginForm.module.scss";
const LoginForm = () => {
  const {toggleSign}=useAuthContext()
  return (
    <Fragment>
      <section className={styles.wrapper} >
        <form className={styles.form} >
        {toggleSign &&<>
            <label htmlFor="nameInput">Name
            </label>
            <input type="text" id="nameInput" />
        </>}
          <label htmlFor="emailInput">Email
          </label>
          <input type="email" id="emailInput" />
          <label htmlFor="passwordInput">Password</label>
          <input type="password"  id='passwordInput'/>
         <button> {toggleSign?"REGISTER":"LOGIN"} </button>
        </form>
        <button
          className={styles["login-with-google-btn"]}
        >
        {toggleSign?"Register with Google":"Sing with Google"}
        </button>
      </section>

    </Fragment>
  )
}

export default LoginForm;