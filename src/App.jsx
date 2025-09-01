import Header from "./components/Header";
import Hero from "./components/Hero";

import Courses from "./components/Services";
import Testimonials from "./components/Testimonials";
import FaqSec from "./components/FaqSec";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import BillingServices from "./components/BillingServices";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import ScrollTop from "./scrollTop/ScrollTop";
import { ToastContainer } from "react-toastify";
import ServiceDetaill from "./detailsPages/ServiceDetaill";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* Services Page  */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetaill />} />
          {/* Billing Services  */}
          {/* <Route path="/billing-services" element={<BillingServices />} /> */}
          {/* Contact Page  */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollTop />
        {/* 👇 Toast container must be here */}
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  );
};

export default App;
