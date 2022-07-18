import React from 'react'
import styles from "./Navbar.module.scss";
import {BiMoviePlay} from "react-icons/bi"
import Container from '../../UI/Container';
import {Link,NavLink} from "react-router-dom";
import { useAuthContext } from '../../context/authContext';

const Navbar = () => {
    const {userName,isLoggedIn,user,setToggleSign,logout}=useAuthContext();
    console.log(isLoggedIn=== true)
  
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
              
                    </li>
                    <li>
                     
                       {!isLoggedIn ?     <NavLink 
                            to="/login"
                         className={({ isActive }) =>
                       isActive ?` ${styles.active} `: `${styles.link}`}
                       onClick={()=>setToggleSign(false)}
                            >Login</NavLink> 
                            
                    :<p>Welcome <strong>{user?user.displayName:userName} </strong> </p> }
                      
                    </li>
                    <li>
               
                   { !isLoggedIn?   <NavLink to="/register"  
                         className={({ isActive }) =>
                         isActive ?` ${styles.active} `: `${styles.link}`} 
                         onClick={()=>setToggleSign(true)}
                         >
                                                    Register</NavLink>
                            :<button  onClick={logout} className={styles.link} >Logout</button>                        
                                                }
                 
                    </li>
                
                </ul>
            </nav>
        </Container>
    </section>
  )
}

export default Navbar