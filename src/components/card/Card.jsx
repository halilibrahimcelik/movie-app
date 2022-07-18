import React, { Fragment } from 'react'
import styles from "./Card.module.scss";
import {FaImdb} from "react-icons/fa";
import {GiClick} from "react-icons/gi";
import {useNavigate} from "react-router-dom";

const Card = ({title,img,overview,rate,id}) => {
  const navigate=useNavigate();
  return (
    <Fragment>
    <li className={styles.card} 
    onClick={()=> navigate(`details/${id}`,{state:id})}
     >
        <img src={`https://image.tmdb.org/t/p/w300${img}`} alt="" />
        <div>
            <p  className={styles.title}>{title} </p>
           
            <span>  <FaImdb className={styles.icon} /> {rate} </span>
        </div>
        <p className={styles.overview} > {overview} <span> for more details.. </span>   <GiClick className={styles.icon}/> </p>
       
    </li>

    </Fragment>
  )
}

export default Card