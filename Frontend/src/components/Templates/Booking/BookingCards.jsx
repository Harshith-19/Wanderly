import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookingCards = () => {
  const location = useLocation();
  const data = location.state;


  const [selectedCities, setSelectedCities] = useState([]);
  const navigate = useNavigate();

  const handleCitySelect = (cityName) => {
    if (selectedCities.includes(cityName)) {
      setSelectedCities(selectedCities.filter((city) => city !== cityName));
    } else {
      setSelectedCities([...selectedCities, cityName]);
    }
  };

  const handleGoButtonClick = () => {
    const selectedCitiesParam = selectedCities.join(',');
    navigate('/itinerarycards', { state: { selectedCities: selectedCitiesParam } });
  };

  const renderLastSelectedCityDetails = () => {
    const lastSelectedCity = selectedCities[selectedCities.length - 1];
    const city = [...data.trending, ...data.popular].find((place) => place.city === lastSelectedCity);

    if (city) {
      return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md mt-4">
          <h2 className="text-xl font-bold">{city.city}</h2>
          <p>{city.description}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="p-10 text-center">
      <div className="my-4">
        <div className="text-xl font-bold my-2">Trending Cities</div>
        <div className="grid grid-cols-3 gap-4">
          {data.trending.map((place, index) => (
            <div
              key={index}
              onClick={() => handleCitySelect(place.city)}
              className={`cursor-pointer bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between transform hover:scale-105 transition-transform ${
                selectedCities.includes(place.city) ? "shadow-md" : ""
              }`}
              style={{
                position: 'relative',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                  backgroundImage: `url(${place.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.2',
                  zIndex: '-1',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                }}
              ></div>
              <div className="flex items-center space-x-4 w-1/5">
                <input
                  type="checkbox"
                  className="h-6 w-6 rounded-full border-2 border-green-400 appearance-none checked:bg-green-500 checked:border-green-600 cursor-pointer"
                  checked={selectedCities.includes(place.city)}
                  onChange={() => handleCitySelect(place.city)}
                />
              </div>
              <div className="w-4/5">
                <div className="text-xl font-bold">
                  <h2 className="text-gray-800">{place.city}</h2>
                </div>
                <p className="text-sm text-gray-500">Rating: {place.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4">
        <div className="text-xl font-bold my-2">Popular Cities</div>
        <div className="grid grid-cols-3 gap-4">
          {data.popular.map((place, index) => (
            <div
              key={index}
              onClick={() => handleCitySelect(place.city)}
              className={`cursor-pointer bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between transform hover:scale-105 transition-transform ${
                selectedCities.includes(place.city) ? "shadow-md" : ""
              }`}
              style={{
                position: 'relative',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                  backgroundImage: `url(${place.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.2',
                  zIndex: '-1',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                }}
              ></div>
              <div className="flex items-center space-x-4 w-1/5">
                <input
                  type="checkbox"
                  className="h-6 w-6 rounded-full border-2 border-green-400 appearance-none checked:bg-green-500 checked:border-green-600 cursor-pointer"
                  checked={selectedCities.includes(place.city)}
                  onChange={() => handleCitySelect(place.city)}
                />
              </div>
              <div className="w-4/5">
                <div className="text-xl font-bold">
                  <h2 className="text-gray-800">{place.city}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 text-center">
        <button
          className="bg-yellow-500 text-white rounded-full py-3 px-6 text-lg font-semibold"
          onClick={handleGoButtonClick}
        >
          Go!
        </button>
      </div>
      {selectedCities.length > 0 && renderLastSelectedCityDetails()}
    </div>
  );
};

export default BookingCards;
