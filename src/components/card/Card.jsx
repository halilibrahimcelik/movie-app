import React, { Fragment } from 'react'
import styles from "./Card.module.scss";
import {FaImdb} from "react-icons/fa";
import {GiClick} from "react-icons/gi";
import {useNavigate,Navigate} from "react-router-dom";
import { useAuthContext } from '../../context/authContext';

const Card = ({title,img,overview,rate,id}) => {
  const{isLoggedIn} =useAuthContext()
  const navigate=useNavigate();

// if(!isLoggedIn){
// return alert("please Login first")
// }
  return (
    <Fragment>
   <li className={styles.card} 
    onClick={()=> isLoggedIn? navigate(`details/${id}`,{state:id}):alert("please login first")}
     >
        <img src={`https://image.tmdb.org/t/p/w300${img}`} alt="" />
        <div>
            <p  className={styles.title}>{title} </p>
           
          { isLoggedIn&&  <span>  <FaImdb className={styles.icon} /> {rate} </span>}
        </div>
       <p className={styles.overview} > {overview} <span> for more details.. </span>   <GiClick className={styles.icon}/> </p>
       
    </li>
   

    </Fragment>
  )
}

export default Card