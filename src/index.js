import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import AuthContextProvider from "./context/authContext";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </AuthContextProvider>
);
