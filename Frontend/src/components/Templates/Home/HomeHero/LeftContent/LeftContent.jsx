import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './LeftContent.css'
import HeadingDecor from "../../../../../assets/heroSection/heading-decor.png";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router-dom";

const LeftContent = () => {
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const redirectToBookingCards = () => {
    // console.log(country, date.slice(8,10),date.slice(6,8));
    const requestData = {
      "Country": country,
      "date": date.slice(8,10),
      "month": date.slice(5,7)
    };

    // Make a fetch request
    fetch('http://127.0.0.1:8000/api/pt-cities/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
        navigate('/bookingCards', { state: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const openLoginDialog = () => {
    setIsLoginDialogOpen(true);
  };

  const closeLoginDialog = () => {
    setIsLoginDialogOpen(false);
  };

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
      <div className='overflow-hidden leftPadding' style={{ backgroundColor: 'transparent' }}>
        <motion.div
          initial='invisible'
          animate={visible ? "visible" : "invisible"}
          variants={translateVariants}
          transition={{ duration: 1.5 }}
          className='text-center md:text-left'
        >
          <div className={`reservation-box }`}>
            <div className='hero-title font-bold text-5xl sm:text-6xl'  style={{ backgroundColor: 'transparent' }}>
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
                  <label htmlFor="date-checkin" >Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="date-field"
                    name="date-from"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="input-container" id="date-picker-container">
                  <label htmlFor="date-checkout">Date</label>
                  <input 
                    type="date"
                    id="date-checkout"
                    className="date-field"
                    name=""
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </div>
                <div className="button-container" onClick={redirectToBookingCards}>
                  <span className="button ok">Plan a Trip</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default LeftContent;
