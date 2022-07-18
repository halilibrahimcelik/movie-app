import React, { Fragment, useEffect, useState } from 'react'
import styles from "./Details.module.scss";
import {useParams,useNavigate} from "react-router-dom";
import spinner from "../../assests/gif hour glass.gif";

import Container from '../../UI/Container';
import {FaImdb} from "react-icons/fa";
const Details = () => {
  const API_KEY=process.env.REACT_APP_APP_KEY;
  const {id}=useParams();
  const navigate=useNavigate()

  const [movieData,setMovieData]=useState("");
  const [trailer,setTrailer]=useState("");


useEffect(()=>{
  const fetData=async()=>{
    const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    if(!response.ok){
      throw new Error("Movie is not fetched");
    }
    const data= await response.json();

    setMovieData(data)
  }

  
  const fetchMovie=async()=>{
    const response= await fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
    if(!response.ok){
      throw new Error("Movie is not fetched");
    }
    const data= await response.json();
 
    setTrailer(data)
  }
fetchMovie()
fetData();
},[id,API_KEY])
const {original_title,overview,release_date, spoken_languages,genres,imdb_id,vote_average,backdrop_path}=movieData;
const {results}=trailer

if( !results){
  return <img  className= {styles.spinner} src={spinner} alt="spinner.." />
}else{
  return (
    <Fragment>
      <section className={styles["details-container"]}>
      <Container>

        <main className={styles.wrapper} >
          <h1 className={styles.title} >{original_title} </h1>
              { results[0]?.key && <div className={styles["video-responsive"]}>
              <iframe
             
                src={`https://www.youtube.com/embed/${results&& results[0]?.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>}
            <div className={styles["details-info"]}>
              <article>
                <h5>Overview</h5>
                <p>{overview}</p>
                 <p><strong>Release Date: </strong> <span>{release_date} </span> </p> 
                 <p><strong>Spoken Languages: </strong> { spoken_languages?.map((lang,index)=>{
                  const {english_name}=lang
                  return <span key={index}>{english_name} </span>
                 })} </p> 
                 <p className={styles.genres} ><strong>Genres:</strong>  { genres?.map((genre,index)=>{
                  const {name}=genre
                  return <span className={styles.genre} key={index}>{name} </span>
                 })} </p> 
                 <p>   <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noopener noreferrer" >  <FaImdb className={styles.icon} /></a>  <span>  {vote_average} </span>
                  
             </p> 
             
              </article>
              <div  className={styles["details-poster"]}>
              <img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt="" />
              <button onClick={()=> navigate("/")}>Back To Home </button>
              </div>
            </div>

        </main>


      </Container>

      </section>

    </Fragment>
  )

}
}

export default Details