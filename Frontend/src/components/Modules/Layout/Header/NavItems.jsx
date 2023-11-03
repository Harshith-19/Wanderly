import React from "react";
import { motion } from "framer-motion";
import { hoverMotion } from "../../../../constants/variants.constant";
const NavItems = ({ href, title }) => {
  return (
    <motion.div
      initial='rest'
      whileHover='hover'
      animate='rest'
      className='w-fit mx-auto px-6'
    >
      <motion.a href={href} className='text-secondaryLight font-semibold'>
        {title}
      </motion.a>
      <motion.div className='h-[2px]' variants={hoverMotion}></motion.div>
    </motion.div>
  );
};

export default NavItems;
