import React, { Fragment, useEffect, useState } from 'react'
import styles from "./Details.module.scss";
import {useParams} from "react-router-dom";
import { async } from '@firebase/util';
import Container from '../../UI/Container';
import {FaImdb} from "react-icons/fa";
const Details = () => {
  const API_KEY=process.env.REACT_APP_APP_KEY;
  const {id}=useParams();
  console.log(id);
  const [movieData,setMovieData]=useState("");
  const [trailer,setTrailer]=useState("")


useEffect(()=>{
  const fetData=async()=>{
    const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    if(!response.ok){
      throw new Error("Movie is not fetched");
    }
    const data= await response.json();
    console.log(data);
    setMovieData(data)
  }

  
  const fetchMovie=async()=>{
    const response= await fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
    if(!response.ok){
      throw new Error("Movie is not fetched");
    }
    const data= await response.json();
    console.log(data);
    setTrailer(data)
  }
fetchMovie()
fetData();
},[id,API_KEY])
const {original_title,overview,release_date, spoken_languages,genres,imdb_id,vote_average,backdrop_path}=movieData;
const {results}=trailer
console.log(results)
console.log( results&& results[0].key)
  return (
    <Fragment>
      <section className={styles["details-container"]}>
      <Container>

        <main className={styles.wrapper} >
          <h1 className={styles.title} >{original_title} </h1>
                <div className={styles["video-responsive"]}>
              <iframe
             
                src={`https://www.youtube.com/embed/${results&& results[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className=''>
              <article>
                <h5>Overview</h5>
                <p>{overview}</p>
                 <p>Release Date <span>{release_date} </span> </p> 
                 <p>Spoken Languages:  { spoken_languages.map((lang,index)=>{
                  const {english_name}=lang
                  return <span key={index}>{english_name} </span>
                 })} </p> 
                 <p>Genres:  { genres.map((genre,index)=>{
                  const {name}=genre
                  return <span key={index}>{name} </span>
                 })} </p> 
                 <p>   <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noopener noreferrer" >  <FaImdb className={styles.icon} /></a>  <span>  {vote_average} </span>
                  
             </p> 
             
              </article>
              <div>
              <img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt="" />
              </div>
            </div>

        </main>


      </Container>

      </section>

    </Fragment>
  )
}

export default Details