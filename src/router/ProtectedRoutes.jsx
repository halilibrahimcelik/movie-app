import React from 'react'
import { useAuthContext } from '../context/authContext';
import {Outlet,Navigate} from "react-router-dom";

const ProtectedRoutes = () => {
    const {isLoggedIn,user} =useAuthContext()
  return (
    user?.displayName ||isLoggedIn ?<Outlet/>: <Navigate to="/" /> 
  )
}

export default ProtectedRoutes