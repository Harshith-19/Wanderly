import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";
import { useDimensions } from "../../../../hooks/useDimension";
import { hoverMotion } from "../../../../constants/variants.constant";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 261px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 261px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const links = [
  {
    href: "#",
    title: "Desitnations",
  },
  {
    href: "#",
    title: "Hotels",
  },
  {
    href: "#",
    title: "Flights",
  },
  {
    href: "#",
    title: "Bookings",
  },
  {
    href: "#",
    title: "Login",
  },
];
const Snackbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log("height", height);
  return (
    <motion.nav
      className='md:hidden block absolute right-0  z-10 h-[100vh]  bottom-0  w-[300px] top-0 '
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className='bg-white w-[300px] absolute right-0 h-[100vh] -z-10  top-0 bottom-0'
        variants={sidebarVariants}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

const MenuToggle = ({ toggle }) => {
  return (
    <button
      onClick={toggle}
      className='absolute cursor-pointer right-0 w-[50px] h-[50px] top-[28px] rounded-full bg-transparent'
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

const Navigation = () => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul
      variants={variants}
      className='flex h-full justify-center flex-col'
    >
      {links.map((link, i) => (
        <MenuItem title={link.title} href={link.href} key={i} />
      ))}
    </motion.ul>
  );
};

const MenuItem = ({ href, title }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.li
      className='py-3 text-center'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.a href={href} className='text-secondaryLight font-semibold'>
        {title}
      </motion.a>
      <motion.div className='h-[2px]' variants={hoverMotion}></motion.div>
    </motion.li>
  );
};

export default Snackbar;
