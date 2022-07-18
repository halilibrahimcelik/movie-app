import React, { Fragment, useRef } from 'react'
import { useAuthContext } from '../../context/authContext';
import  styles from "./SearchForm.module.scss";
const SearchForm = () => {
   const {setQuery,isLoggedIn}=useAuthContext()
const queryInput=useRef("");

const handleSubmit=(e)=>{
  if(isLoggedIn){
    e.preventDefault();
    const enteredQuery=queryInput.current.value;
  console.log(enteredQuery)
  setQuery(enteredQuery);

  }else{
    e.preventDefault();
    alert("plase login first")
  }
}

  return (
    <Fragment>
        <form className={styles.form}  onSubmit={handleSubmit} >
    <input type="text" ref={queryInput} />
    <button type='search'>Search</button>

        </form>


    </Fragment>
  )
}

export default SearchForm