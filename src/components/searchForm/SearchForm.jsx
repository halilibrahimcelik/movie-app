import React, { Fragment, useRef } from 'react'
import { useAuthContext } from '../../context/authContext';
import  styles from "./SearchForm.module.scss";
import {  toast } from 'react-toastify';
const SearchForm = () => {
   const {setQuery,isLoggedIn}=useAuthContext()
const queryInput=useRef("");

const handleSubmit=(e)=>{
  if(isLoggedIn){
    e.preventDefault();
    const enteredQuery=queryInput.current.value;

  setQuery(enteredQuery);

  }else{
    e.preventDefault();
    toast.warning("You first need to login!", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
 
      });
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