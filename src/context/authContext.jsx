
import {createContext,useContext, useEffect, useState} from "react";

export const  AuthContext=createContext({
  movieData:"" 
});


//?Defining our custom Hook
export  const  useAuthContext=()=>{
    return useContext(AuthContext)
}

const API_KEY=process.env.REACT_APP_APP_KEY;
const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`


const AuthContextProvider=(props)=>{
    const [movieData,setMovieData]=useState("");
    
const fetchData=async()=>{
 try {
  
    const response= await fetch(url)
    if(!response.ok){
        throw new Error("Something went wrong")
    }else{
        const data= await response.json();
        setMovieData(data)
    }

 } catch (error) {
    console.log(error)
 }
}

useEffect(()=>{fetchData()},[])

const contextValue={
movieData:movieData
}
    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
};

export default AuthContextProvider;