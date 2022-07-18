import React, { Fragment } from 'react'
import Card from '../card/Card'
import styles from "./MovieCard.module.scss"
const MovieCard = (props) => {
  const {movieData}=props
  const MovieArray=movieData.results
    return (
    <Fragment>
        <ul className={styles.wrapper} > 
         {MovieArray?.map((movie)=>{
          const {title,poster_path, id, overview,vote_average}=movie
      
 return <Card
  key={id}
   title={title} 
   img={poster_path}
    overview={overview} 
    rate={vote_average} 
    id={id}
  
     />
         }) }
        </ul >
    </Fragment>
  )
}

export default MovieCard