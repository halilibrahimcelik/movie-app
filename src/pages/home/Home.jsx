import React, { Fragment } from 'react';
import MovieCard from '../../components/movieCard/MovieCard';
import SearchForm from '../../components/searchForm/SearchForm';
import { useAuthContext } from '../../context/authContext';
import Container from '../../UI/Container';
import styles from "./Home.module.scss";
import { ToastContainer } from 'react-toastify';
import spinner from "../../assests/gif hour glass.gif";
import image from "../../assests/lost.gif"

const Home = () => {
  const {movieData,fetchData}=useAuthContext();

const {results}=movieData;


if(results?.length===0 ){
  return<Fragment>
    <section className={styles.wrapper} >
    <h4 style={{color:"white", textAlign:"center"}} > Unfortunetly no relatable movie list has been found based on the query  </h4>
     <div className={styles.imageDiv} ><img src={image} alt="lost-gif"  /></div>
      <button className={styles.button} onClick={()=> fetchData()}>Go Back</button>
    </section>
      
     </Fragment>
}

  return (
    <Fragment>
        <section className={styles.wrapper} >
  
      <Container>
          <SearchForm/>
          <MovieCard movieData={movieData} />
      </Container>
        </section>
        
       < ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
limit={2}
/>
    </Fragment>
  )
}

export default Home