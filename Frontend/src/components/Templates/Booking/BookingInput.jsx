import React from "react";
import { useNavigate } from "react-router-dom";

const BookingInput = () => {
  const navigate = useNavigate();
  const redirectToBookingCards = () => {
    navigate('/bookingCards'); 
  };
  

  return (
    <div className="md:grid grid-cols-2 overflow-hidden max-w-5xl py-10 mx-auto">
  

      {/* Input Boxes */}
      <div className="md:col-span-2 py-10 text-center">
        <div className="mb-10 relative">
          <input
            type="text"
            className="bg-white rounded-full py-3 px-6 w-full text-lg font-semibold placeholder-gray-500 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-center"
            placeholder="Country to Travel To"
          />
        </div>

        <div className="mb-10 relative">
          <input
            type="date"
            className="bg-white rounded-full py-3 px-6 w-full text-lg font-semibold placeholder-gray-500 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-center"
            placeholder="Date of Travel"
          />
        </div>
      </div>

      {/* Go Button */}
      <div className="md:col-span-2 text-center">
        <button className="bg-yellow-500 text-white rounded-full py-3 px-6 text-lg font-semibold"  onClick={redirectToBookingCards}>
          Go!
        </button>
      </div>
    </div>
  );
};

export default BookingInput;
