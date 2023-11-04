import React from "react";

import Footer from "./Footer";
import Header from "./Header/Header";

import LayoutDecore from "../../../assets/layoutDecore.png";

const Layout = ({ children}) => {
  return (
    <div className='relative overflow-hidden'>
      <img
        src={LayoutDecore}
        alt='Decore'
        className='-z-10 absolute right-0 top-0 h-[900px] overflow-hidden'
      />
      <Header/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
