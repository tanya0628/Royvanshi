import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Expereince";
import Services from "./components/Service";
import ServicesSection from "./components/ServiceSection";
import EnquirySection from "./components/EnquirySection";
import BenefitsSection from "./components/BenefitSection";
import Testimonials from "./components/Testimonials";
// import AboutSection from "./components/AboutSection";

import About from "./pages/About";
<<<<<<< HEAD
import CompaniesServices from "./pages/CompanyServices";
=======
>>>>>>> 6d2a12ce19c7c8f9f366e53ee427eac6e51685ee


function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <ServicesSection />
      <Services />
      <BenefitsSection />
      <Testimonials />
      <EnquirySection />
      
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/services" element={<CompaniesServices />} /> 
=======
>>>>>>> 6d2a12ce19c7c8f9f366e53ee427eac6e51685ee
      </Routes>
      
    </>
  );
}

export default App;