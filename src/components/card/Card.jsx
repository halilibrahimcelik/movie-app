import React, { Fragment } from 'react'
import styles from "./Card.module.scss";
import {FaImdb} from "react-icons/fa"
const Card = ({title,img,overview,rate}) => {
  return (
    <Fragment>
    <li className={styles.card} >
        <img src={`https://image.tmdb.org/t/p/w300${img}`} alt="" />
        <div>
            <p>{title} </p>
           
            <span>  <FaImdb className={styles.icon} /> {rate} </span>
        </div>
    </li>

    </Fragment>
  )
}

export default Card