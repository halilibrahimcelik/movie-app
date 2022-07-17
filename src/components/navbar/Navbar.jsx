import React from 'react'
import styles from "./Navbar.module.scss";
import {BiMoviePlay} from "react-icons/bi"
import Container from '../../UI/Container';
import {Link,NavLink} from "react-router-dom";

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
                        
                            <NavLink 
                            to="/login"
                            //  className={styles.link}  
                             className={({ isActive }) =>
    isActive ?` ${styles.active} `: `${styles.link}`
  }
                            >Login</NavLink>
                      
                    </li>
                    <li>
               
                        <NavLink to="/register"  
                                                 className={({ isActive }) =>
                                                 isActive ?` ${styles.active} `: `${styles.link}`} >
                                                    Register</NavLink>
                 
                    </li>
                
                </ul>
            </nav>
        </Container>
    </section>
  )
}

export default Navbar