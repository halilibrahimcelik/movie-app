import React, { Fragment } from 'react'
import  styles from "./SearchForm.module.scss";
const SearchForm = () => {
  return (
    <Fragment>
        <form className={styles.form} >
    <input type="text" />
    <button type='search'>Search</button>

        </form>


    </Fragment>
  )
}

export default SearchForm