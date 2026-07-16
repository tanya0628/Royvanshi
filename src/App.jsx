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
      </Routes>
      
    </>
  );
}

export default App;