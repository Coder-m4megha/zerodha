import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';

// Frontend components
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Login from "./landing_page/auth/Login";
import Signup from "./landing_page/auth/Signup";
import DashboardRedirect from "./landing_page/auth/DashboardRedirect";
import { AuthProvider } from "./landing_page/auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          {/* Frontend Routes */}
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <AboutPage />
              <Footer />
            </>
          } />
          <Route path="/product" element={
            <>
              <Navbar />
              <ProductPage />
              <Footer />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <Navbar />
              <PricingPage />
              <Footer />
            </>
          } />
          <Route path="/support" element={
            <>
              <Navbar />
              <SupportPage />
              <Footer />
            </>
          } />
          <Route path="/login" element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          } />

          {/* Dashboard Redirect */}
          <Route path="/dashboard/*" element={<DashboardRedirect />} />

          {/* 404 Route */}
          <Route path="*" element={
            <>
              <Navbar />
              <NotFound />
              <Footer />
            </>
          } />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);