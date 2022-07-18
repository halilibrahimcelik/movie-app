
import {createContext,useContext, useEffect, useState,useCallback} from "react";
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged  } from "firebase/auth";
import { auth } from "../Firebase";
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
  isLoggedIn:false,
  googleSignIn:()=>{},
  googleSingOut:()=>{},
  user:""

});


//?Defining our custom Hook
export  const  useAuthContext=()=>{
    return useContext(AuthContext)
};

const API_KEY=process.env.REACT_APP_APP_KEY;
const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem("token");
    const [movieData,setMovieData]=useState("");
    const [query, setQuery]=useState("");
    const [toggleSign,setToggleSign]=useState(false);
    const [userName,setUserName]=useState("");
    const [token,setToken]=useState(null);
    const [user,setUser]=useState({});//?for Google Auth

 
    const userIsLoggedIn=!!token || !!user?.accessToken;
const fetchData=async()=>{
 try {
  
    const response= await fetch(url)
    if(!response.ok){
        throw new Error("Something went wrong")
    }else{
        const data= await response.json();
        setMovieData(data);
       
    }

 } catch (error) {
    console.log(error)
 }
}

const googleSignIn=()=>{
const provider= new GoogleAuthProvider();
signInWithPopup(auth,provider);

}
const googleSingOut=()=>{
    signOut(auth);
}
useEffect(()=>{
    //?this will mount whenever we sign in with google
    const unSubcribe=onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        // console.log("user", currentUser)
    });
    return ()=>{
        unSubcribe()
    }
},[])


const loginHandler=(tokenId)=>{
setToken(tokenId);
localStorage.setItem("token",token)
}

const logoutHandler=()=>{
    setToken(null);
    googleSingOut();
    localStorage.removeItem("name");

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
        // console.log(error)
        
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
isLoggedIn:userIsLoggedIn,
googleSignIn:googleSignIn,
googleSingOut:googleSingOut,
user:user,
fetchData:fetchData

}

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
};

export default AuthContextProvider;