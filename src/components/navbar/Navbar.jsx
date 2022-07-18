import React from 'react'
import styles from "./Navbar.module.scss";
import {BiMoviePlay} from "react-icons/bi"
import Container from '../../UI/Container';
import {Link,NavLink} from "react-router-dom";
import { useAuthContext } from '../../context/authContext';

const Navbar = () => {
    const {userName,isLoggedIn,user,setToggleSign,logout,fetchData,movieData}=useAuthContext();

    const {results}=movieData;

  
  return (
    <section className={styles.navBar} >
        <Container>
            <nav>

                <Link to="/"  className={styles.logo} onClick={()=>results?.length===0? fetchData():null} >
                
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
                            
                    :<p className={styles.title} >Welcome <strong>{user?user.displayName:userName} </strong> </p> }
                      
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