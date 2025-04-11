import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);