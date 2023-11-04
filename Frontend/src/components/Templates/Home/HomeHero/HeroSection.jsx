import React from "react";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
import Container from "../../../Modules/Container/Container";
import Trending from "../Trending/Location"

const HeroSection = () => {
  return (
    <>
    <div className='lg:grid grid-cols-2 overflow-hidden py-10 mx-auto'>
      <LeftContent />
      <RightContent />
      
    </div>
    <Container><Trending /></Container>
    </>
  );
};

export default HeroSection;
