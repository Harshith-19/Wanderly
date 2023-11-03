import React, { useEffect } from "react";
import Container from "./components/Modules/Container/Container";
import HeroSection from "./components/Templates/Home/HomeHero/HeroSection";

function App() {
  const { hash } = window.location;
  useEffect(() => {
    if (hash) {
      const ele = document.getElementById(hash.split("#")[1]);
      ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);
  return (
    <Container>
      <HeroSection />
    </Container>
  );
}

export default App;
