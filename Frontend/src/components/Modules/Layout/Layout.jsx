import React from "react";

import Footer from "./Footer";
import Header from "./Header/Header";

import LayoutDecore from "../../../assets/layout-decore.png";

const Layout = ({ children }) => {
  return (
    <div className='relative overflow-hidden'>
      <img
        src={LayoutDecore}
        alt='Decore'
        className='-z-10 absolute left-[1000px] bottom-[390px] h-[1100px] overflow-hidden'
      />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
