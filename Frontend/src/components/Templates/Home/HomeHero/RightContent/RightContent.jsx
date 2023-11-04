import React, { useState } from "react";
import './RightContent.css'
import { motion } from "framer-motion";
import main from "../../../../../assets/heroSection/main2.png"
import ReactVisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router-dom";



const RightContent = () => {
  const navigate = useNavigate();
const redirectToBookingPage = () => {
  navigate('/booking');
};
  const [visible, setVisible] = useState(false);

  

  const translateVariants = {
    invisible: {
      x: 500,
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
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ top: 400 }}
    >
      <div className="relative h-full">
        <motion.div
          initial='invisible'
          animate={visible ? "visible" : "invisible"}
          variants={translateVariants}
          transition={{ duration: 1.5 }}
        ><div className="containerImg">
              <img src={main} className='landingImage' />
        </div>
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default RightContent;
