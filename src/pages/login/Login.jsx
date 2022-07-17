import React, { Fragment } from 'react';
import LoginForm from '../../components/login/LoginForm';
import Container from '../../UI/Container';
import styles from "./Login.module.scss";
import logo from "../../assests/ghostbusters-seeklogo.com.svg"

const Login = () => {
  return (
    <Fragment>

      <section className={styles.wrapper}>
        <Container>

        <div className={styles.gridBox}>
          <div  className={styles.logo} ><img src={logo} alt="" /></div>
          <LoginForm />
        </div>

        </Container>

      </section>


    </Fragment>
  )
}

export default Login