import React from "react";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";
const DestinationCard = ({ img, title, rating, duration }) => {
  const item = {
    show: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <motion.div id='trending'
      variants={item}
      transition={{ duration: 1 }}
      className='sm:w-[300px] mx-auto bg-white shadow-xl rounded-[20px] scale-100'
    >
      <div className='h-[300px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px]'>
        <img src={img} alt={title} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
      </div>

      <div className='py-5 px-4'>
        <div className='flex justify-between items-center'>
          <span className='text-primaryLight font-semibold text-lg'>
            {title}
          </span>
          <div className="flex items-center">
          <span className='text-primaryLight font-semibold'>{rating} </span>
          <IoIosStar/>
          </div>
          
        </div>
        <div className='flex items-center text-primaryLight mt-4'>
        
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
