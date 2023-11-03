import React from "react";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

const HeroSection = () => {
  return (
    <div className='lg:grid grid-cols-2 overflow-hidden py-10 mx-auto'>
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default HeroSection;
