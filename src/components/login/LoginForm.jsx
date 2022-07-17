import React, { Fragment } from 'react'
import styles from "./LoginForm.module.scss";
const LoginForm = () => {
  return (
    <Fragment>
      <section className={styles.wrapper} >
        <form className={styles.form} >
          <label htmlFor="emailInput">Email
          </label>
          <input type="email" id="emailInput" />
          <label htmlFor="passwordInput">Password</label>
          <input type="password"  id='passwordInput'/>
         <button>LOGIN</button>
        </form>
        <button
          className={styles["login-with-google-btn"]}
        >
           Sign with Google
        </button>
      </section>

    </Fragment>
  )
}

export default LoginForm;