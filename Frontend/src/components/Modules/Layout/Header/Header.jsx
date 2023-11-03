import React from "react";
import Logo from "../../../Elements/Logo/Logo";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import Snackbar from "./Snackbar";
import Container from "../../Container/Container";
const Header = () => {
  const links = [
    {
      href: "#about",
      title: "About",
    },
    {
      href: "#contact",
      title: "Contact",
    }
  ];
  return (
    <Container>
      <header className='sticky top-0 flex justify-between px-4 items-center  pt-10'>
        <Logo />
        <div className='hidden md:flex justify-between items-center'>
          {/* <div className='grid grid-cols-4 gap-x-4 '> */}
          {links.map(({ href, title }) => (
            <NavItems href={href} title={title} key={title} />
          ))}
          {/* </div> */}
          <AuthButton>Login</AuthButton>
          
        </div>
        <Snackbar />
      </header>
    </Container>
  );
};

export default Header;

const AuthButton = ({ children }) => {
  return (
    <motion.button className='text-secondaryLight font-semibold border-2 border-secondaryLight px-9 py-2 rounded-md'>
      {children}
    </motion.button>
  );
};
