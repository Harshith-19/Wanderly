import React, { useEffect } from "react";
import Container from "./components/Modules/Container/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Templates/Home/HomeHero/HeroSection";
import BookingInput from "./components/Templates/Booking/BookingInput";
import BookingCards from "./components/Templates/Booking/BookingCards";


function App() {
  const { hash } = window.location;
  useEffect(() => {
    if (hash) {
      const ele = document.getElementById(hash.split("#")[1]);
      ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<Container><HeroSection /></Container>} />
        <Route path="/booking" element={<Container><BookingInput/></Container>} />
        <Route path="/bookingCards" element={<Container><BookingCards/></Container>} />
        
      </Routes>
      
    </Router>
    
  );
}

export default App;
