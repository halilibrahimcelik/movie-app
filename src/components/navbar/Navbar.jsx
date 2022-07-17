import React from 'react'
import styles from "./Navbar.module.scss";
import {BiMoviePlay} from "react-icons/bi"
import Container from '../../UI/Container';
import {Link,NavLink} from "react-router-dom";
import { useAuthContext } from '../../context/authContext';

const Navbar = () => {
    const {setToggleSign,toggleSign} = useAuthContext()
  return (
    <section className={styles.navBar} >
        <Container>
            <nav>

                <Link to="/"  className={styles.logo}>
                
                    <BiMoviePlay className={styles.icon} />
                    <h1> MOVIE STORE </h1>
               
                </Link>
                <ul>
                    <li>
                        
                            <NavLink 
                            to="/login"
                         className={({ isActive }) =>
                       isActive ?` ${styles.active} `: `${styles.link}`}
                       onClick={()=>setToggleSign(!toggleSign)}
                            >Login</NavLink>
                      
                    </li>
                    <li>
               
                        <NavLink to="/register"  
                         className={({ isActive }) =>
                         isActive ?` ${styles.active} `: `${styles.link}`} 
                         onClick={()=>setToggleSign(!toggleSign)}
                         >
                                                    Register</NavLink>
                 
                    </li>
                
                </ul>
            </nav>
        </Container>
    </section>
  )
}

export default Navbar