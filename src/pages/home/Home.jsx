import React, { Fragment, useState } from 'react';
import MovieCard from '../../components/movieCard/MovieCard';
import SearchForm from '../../components/searchForm/SearchForm';
import { useAuthContext } from '../../context/authContext';
import Container from '../../UI/Container';
import styles from "./Home.module.scss";
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const {movieData}=useAuthContext();



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