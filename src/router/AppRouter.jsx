import {Routes,Route,BrowserRouter} from "react-router-dom";

import React from 'react'
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="login" element={<Login/>} />
    <Route  path="register" element={<Register/>} />
    <Route  path="details" element={<Details/>} />


    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter