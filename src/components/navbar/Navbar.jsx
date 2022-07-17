import React from 'react'
import styles from "./Navbar.module.scss";
import {BiMoviePlay} from "react-icons/bi"
import Container from '../../UI/Container';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <section className={styles.navBar} >
        <Container>
            <nav>
                <div className={styles.logo} >
                    <BiMoviePlay className={styles.icon} />
                    <h1> MOVIE STORE </h1>
                </div>
                <ul>
                    <li>
                        <Link to="/login" className={styles.link} >Login</Link>
                    </li>
                    <li>
                    <Link to="/register"  className={styles.link} >Register</Link>
                    </li>
                
                </ul>
            </nav>
        </Container>
    </section>
  )
}

export default Navbar