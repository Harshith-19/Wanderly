import React from "react";
import Logo from "../../../Elements/Logo/Logo";
import NavItems from "./NavItems";
import Snackbar from "./Snackbar";
import Container from "../../Container/Container";
import LoginDialog from "../../../Templates/Login/LoginPopup";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const openLoginDialog = () => {
    setIsLoginDialogOpen(true);
  };

  const closeLoginDialog = () => {
    setIsLoginDialogOpen(false);
  };
  const links = [
    {
      href: "#home",
      title: "Home",
    },{
      
      href: "#trending",
      title: "Trending",
    
  },
    {
      href: "#about",
      title: "About",
    },
    {
      href: "#contact",
      title: "Contact",
    },
  ];
  return (
    
    <Container>
      <header className='sticky top-0 flex justify-between px-4 items-center  pt-10'>
        <Logo />
        <div className='hidden md:flex justify-between items-center'>
          {/* <div className='grid grid-cols-4 gap-x-4 '> */}
          {links.map(({ href, title }) => (
            <NavItems href={href === "#home" ? "/" : href} title={title} key={title} />
          ))}
          {
            auth&&(
              <NavItems href="/myTrips" title="My Trips" />
            )
          }
          <button className='text-secondaryLight items-center font-semibold border-2 border-secondaryLight px-9 py-2 rounded-md' onClick={openLoginDialog}>Login</button>
          {/* </div> */}

         
        </div>
        <Snackbar />
      </header>
      {isLoginDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-opacity-50 bg-black">
          <LoginDialog setAuth={setAuth} onClose={closeLoginDialog} />
        </div>
      )}
    </Container>
  );
};

export default Header;

