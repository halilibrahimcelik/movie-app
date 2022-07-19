import {Routes,Route,BrowserRouter} from "react-router-dom";

import React from 'react'
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>} />

    <Route  path="login" element={<Login/>} />
    <Route  path="register" element={<Register/>} />
    <Route path="/details/:id"  element={<ProtectedRoutes/>}>
      <Route path=""  element={<Details/>} />
    </Route>


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter