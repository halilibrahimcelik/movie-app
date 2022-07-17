import React, { Fragment } from 'react'
import styles from "./Register.module.scss";
import Container from '../../UI/Container';
import filmLogo from "../../assests/filmstring.svg";
import {BiMoviePlay} from "react-icons/bi";
import LoginForm from '../../components/login/LoginForm';

const Register = () => {
  return (
    <Fragment>
      <section className={styles.wrapper}>
        <Container>

        <div className={styles.register}>
          <div className= {styles.logo}>
            <span>Welcome to </span> <span className={styles.banner}> <BiMoviePlay className={styles.icon} />Movie Store </span>
          </div>
          <p>You can access information regarding current and cult movies with one click!</p>
          <div   className={styles["spinner-container"]} >
              <img src={filmLogo} alt=""  className={styles["loading-spinner"]}/>
            </div>
          <LoginForm   />
        </div>

        </Container>

      </section>

    </Fragment>
  )
}

export default Register