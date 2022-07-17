
import {createContext,useContext, useEffect, useState,useCallback} from "react";

export const  AuthContext=createContext({
  movieData:"",
  setQuery:()=>{},
  setToggleSign:()=>{},
  toggleSign:null,
  userName:"",
  setUserName:()=>{},
  token:"",
  login:(token)=>{},
  logout:()=>{},
  isLoggedIn:false

});


//?Defining our custom Hook
export  const  useAuthContext=()=>{
    return useContext(AuthContext)
}

const API_KEY=process.env.REACT_APP_APP_KEY;
const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
console.log(API_KEY)

const AuthContextProvider=(props)=>{
    const [movieData,setMovieData]=useState("");
    const [query, setQuery]=useState("");
    const [toggleSign,setToggleSign]=useState(false);
    const [userName,setUserName]=useState("");
    const [token,setToken]=useState(null);
 
    const userIsLoggedIn=!!token
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

const loginHandler=(tokenId)=>{
setToken(tokenId)
}

const logoutHandler=()=>{
    setToken(null);
}

useEffect(()=>{fetchData()},[]);

const searchMovie=useCallback(async()=>{
    try {
       const response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
       if(!response.ok){
        throw new Error("Something went wrong")
    }else{
        const data= await response.json();
        setMovieData(data)
    }
    } catch (error) {
        console.log(error)
        
    }
},[query])

useEffect(()=>{searchMovie()},[searchMovie])
const contextValue={
movieData:movieData,
setQuery:setQuery,
toggleSign:toggleSign,
setToggleSign:setToggleSign,
userName:userName,
setUserName:setUserName,
token:token,
login:loginHandler,
logout:logoutHandler,
isLoggedIn:userIsLoggedIn
}

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
};

export default AuthContextProvider;