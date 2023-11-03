import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import Logo from "../../../assets/logo.png";
import {
  bounceVariants,
  opacityVariants,
} from "../../../constants/variants.constant";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import AppleIcon from "../../../assets/icons/apple-icon.png";
import GoogleIcon from "../../../assets/icons/google-icon.png";
const Footer = () => {
  const variant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const titleVariant = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers"],
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press"],
    },
    {
      title: "More",
      links: ["Blogs", "Low fare tips"],
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className='py-20'>
          <Container>
            <motion.div
              animate={visible ? "visible" : "invisible"}
              variants={opacityVariants}
              initial='invisible'
              whileInView={() => setVisible(true)}
              transition={{ duration: 0.5 }}
              className='text-center max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-y-8  mx-auto'
            >
              <div className='col-span-1'>
              <img src={Logo} alt='' style={{height:"5em"}}/>
                
              </div>
              <div className='grid grid-cols-3 col-span-2'>
                {footerLinks.map(({ title, links }) => (
                  <motion.div
                    key={title}
                    variants={variant}
                    animate={visible ? "show" : "hidden"}
                  >
                    <motion.div
                      variants={titleVariant}
                      className='text-[#080809] font-bold text-lg mb-3'
                    >
                      {title}
                    </motion.div>
                    {links.map((link, i) => (
                      <motion.div
                        className='group text-primaryLight font-semibold py-1 w-fit mx-auto cursor-pointer'
                        key={i}
                        variants={{
                          hidden: {
                            y: 200,
                            opacity: 0,
                          },
                          show: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 1,
                            },
                          },
                        }}
                      >
                        {link}
                        <div className='bg-primaryLight w-0 transition-all duration-300 h-[1px] group-hover:w-full'></div>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
              <div className='col-span-1'>
                <div className='flex items-start justify-center'>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1 }}
                  >
                    <FaFacebookF className='text-[#080809] text-xl' />
                  </motion.div>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <AiFillInstagram className='text-[#080809] text-xl' />
                  </motion.div>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    <AiOutlineTwitter className='text-[#080809] text-xl' />
                  </motion.div>
                </div>
                <div className='text-primaryLight text-lg font-semibold my-3'>
                  Discover our app
                </div>
                <div className='flex items-center gap-x-4'>
                  <div className='bg-black flex items-center px-2 py-3 justify-center gap-x-2 rounded-3xl w-full'>
                    <img src={GoogleIcon} />
                    <div className='text-white '>
                      <div className='text-[12px]'>Google Play</div>
                    </div>
                  </div>
                  <div className='bg-black  items-center flex px-2 py-3 justify-center gap-x-2 rounded-3xl w-full'>
                    <img src={AppleIcon} />
                    <div className='text-white '>
                      <div className='text-[12px]'>Apple Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Footer;
