import React, { Fragment } from 'react';
import MovieCard from '../../components/movieCard/MovieCard';
import SearchForm from '../../components/searchForm/SearchForm';
import { useAuthContext } from '../../context/authContext';
import Container from '../../UI/Container';
import styles from "./Home.module.scss"

const Home = () => {
  const {movieData}=useAuthContext();
console.log(movieData)
  return (
    <Fragment>
      <Container>
        <section className={styles.wrapper} >
          <SearchForm/>
          <MovieCard/>
        </section>
      </Container>
    </Fragment>
  )
}

export default Home