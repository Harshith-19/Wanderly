import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './LeftContent.css'
import HeadingDecor from "../../../../../assets/heroSection/heading-decor.png";
import ReactVisibilitySensor from "react-visibility-sensor";

const LeftContent = () => {

  // Automatically set the date for check-in (today) and checkout (tomorrow)
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
  }, []);

  


  const [visible, setVisible] = useState(false);
  const translateVariants = {
    invisible: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: 400 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div className='overflow-hidden leftPadding'>
        <motion.div
          initial='invisible'
          animate={visible ? "visible" : "invisible"}
          variants={translateVariants}
          transition={{ duration: 1.5 }}
          className='text-center md:text-left'
        >
            <div className={`reservation-box }`}>
  <div className='hero-title font-bold text-5xl sm:text-6xl'>
    Embrace,{" "}
    <div className='inline-block w-fit relative'>
      <span>world's beauty</span>
    </div>{" "}
    one step at a time.
  </div>
  <p className='text-primaryLight text-lg font-semibold md:w-[500px] py-5'>
    Rest easy, our team is here to handle your travel arrangements to the fullest!
  </p>
  <div className="top">
    <div className="static">
      <div className="input-container" id="date-picker-container">
        <label htmlFor="date-checkin" ></label>
        <input
          type="text" placeholder="Country"
          className="date-field"
          name="date-from"
        />
      </div>
    </div>
    <div className="flex">
      <div className="input-container" id="date-picker-container">
        <label htmlFor="date-checkout"></label>
        <input 
          type="date"
          id="date-checkout"
          className="date-field"
          name=""
        />
      </div>
      <div className="button-container">
        <span className="button ok" >Plan Travel</span>
      </div>
    </div>
  </div>
</div>

  





          
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};
const TestButton = () => {
  return (
    <div className="test" title="Toggle reservation box size small/normal">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="16" viewBox="0 0 36 14">
        <rect id="switch" data-name="switch" width="36" height="14" rx="7" />
      </svg>
    </div>
  );
};
export default LeftContent;
