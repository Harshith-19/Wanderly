import React, { useState } from "react";

const popularCities = [
  { name: "Mumbai", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww", rating: "4.5" },
  { name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D", rating: "4.3" },
  { name: "Kolkata", image: "https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY=", rating: "4.2" },
];

const trendingCities = [
  { name: "Gurgaon", image: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/103732-jsqgftzjdu-1540222742.jpg", rating: "4.7" },
  { name: "Ayodhya", image: "https://c.ndtvimg.com/2020-08/l7l9chag_ram-temple-proposed-design-august-2020_625x300_04_August_20.jpg", rating: "4.6" },
  { name: "Vizag", image: "https://www.abhibus.com/blog/wp-content/uploads/2023/05/Top-10-Places-to-Visit-in-Vizag-for-2-Days-scaled.jpg", rating: "4.4" },
];

const BookingCards = () => {
  const [hoverState, setHoverState] = useState(Array(popularCities.length + trendingCities.length).fill(false));
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(Array(popularCities.length + trendingCities.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoverState = hoverState.map((state, i) => (i === index ? true : false));
    setHoverState(newHoverState);
  };

  const handleMouseLeave = () => {
    setHoverState(Array(popularCities.length + trendingCities.length).fill(false));
    setSelectedPlace(null);
  };

  const handleCardClick = (place) => {
    setSelectedPlace(place);
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = selectedCheckboxes.map((checkbox, i) => (i === index ? !checkbox : checkbox));
    setSelectedCheckboxes(newCheckboxes);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold my-4" style={{color:  " rgb(5, 122, 68)"}}>Seasonal Sensations</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">Popular Cities</h2>
          <div className="grid grid-rows-auto gap-4">
            {popularCities.map((place, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(place)}
                className={`relative h-60 rounded-md bg-cover bg-center overflow-hidden cursor-pointer ${hoverState[index] ? 'scale-200' : ''}`}
                style={{ backgroundImage: `url(${place.image})` }}
              >
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-yellow-500 p-4 text-white"> */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-yellow-300 p-4 text-white">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-yellow-500"
                      checked={selectedCheckboxes[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    {place.name}
                  </label>
                  <svg
                    width="81"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 inline"
                  >
                    {/* Your SVG path here */}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Trending Cities</h2>
          <div className="grid grid-rows-auto gap-4">
            {trendingCities.map((place, index) => (
              <div
                key={index + popularCities.length}
                onMouseEnter={() => handleMouseEnter(index + popularCities.length)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(place)}
                className={`relative h-60 rounded-md bg-cover bg-center overflow-hidden cursor-pointer ${hoverState[index + popularCities.length] ? 'scale-200' : ''}`}
                style={{ backgroundImage: `url(${place.image})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-yellow-300 p-4 text-white">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-yellow-500"
                      checked={selectedCheckboxes[index + popularCities.length]}
                      onChange={() => handleCheckboxChange(index + popularCities.length)}
                    />
                    {place.name}
                  </label>
                  <svg
                    width="81"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 inline"
                  >
                    {/* Your SVG path here */}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedPlace && (
        <div className="p-4 mt-4 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">{selectedPlace.name}</h2>
          <p>Rating: {selectedPlace.rating}</p>
          {/* Additional information about the selected place */}
        </div>
      )}
    </div>
  );
};

export default BookingCards;
