import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./components/Services";
import Contact from "./pages/Contact";
import ScrollTop from "./scrollTop/ScrollTop";
import { ToastContainer } from "react-toastify";
import ServiceDetaill from "./detailsPages/ServiceDetaill";
import ScrollToTop from "./scrollTop/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* Services Page  */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetaill />} />
          {/* Service Detail Page */}
          <Route path="/service-detail/:id" element={<ServiceDetaill />} />

          {/* Contact Page  */}
          <Route path="/contact" element={<Contact />} />
          {/* Privacy Policy Page  */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollTop />

        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  );
};

export default App;
