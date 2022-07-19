import React, { Fragment,useState,useEffect } from 'react'
import { FaAngleUp,FaGithub,FaLinkedin,FaMailBulk } from 'react-icons/fa';
import styles from "./Footer.module.scss"

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    
    <Fragment>
          <footer className={styles["top-to-btm"]}>
            <h3>Copyrights© 2022</h3>
            <div className={styles.icons} >
                <a href="https://github.com/halilibrahimcelik"  target="_blank" rel="noopener noreferrer" >  
                         <FaGithub className={styles.icon} />
                         </a>
                         
                         <a href="https://www.linkedin.com/in/halil-ibrahim-celik/" target="_blank" rel="noopener noreferrer">
                         <FaLinkedin className={styles.icon}/>
                         </a>
         <a href="mailto:hibrahim.celik@yahoo.com" > <FaMailBulk className={styles.icon}/></a>
           
            </div>

         { showTopBtn && <FaAngleUp onClick={goToTop} className={`${styles["icon-position"]} ${styles["icon-style"]}`} />}
        </footer>
    </Fragment>
  )
}

export default Footer