import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const citiesData = [
  {
    category: "Popular Cities",
    cities: [
      {
        name: "Mumbai", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww", rating: "4.5" ,
        description: "The City of Light, famous for its art and fashion.",
      },
      {
        name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D", rating: "4.3",
        description: "The Big Apple, known for its iconic skyline and culture.",
      },
    ],
  },
  {
    category: "Trending Cities",
    cities: [
      {
        name: "Gurgaon", image: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/103732-jsqgftzjdu-1540222742.jpg", rating: "4.7",
        description: "The City of Canals, known for its romantic atmosphere.",
      },
      {
        name: "Ayodhya", image: "https://c.ndtvimg.com/2020-08/l7l9chag_ram-temple-proposed-design-august-2020_625x300_04_August_20.jpg", rating: "4.6",
        description: "A vibrant city with unique architecture and culture.",
      },
    ],
  },
];

const BookingCards = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
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
    const city = citiesData
      .flatMap((category) => category.cities)
      .find((place) => place.name === lastSelectedCity);

    if (city) {
      return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md mt-4">
          <h2 className="text-xl font-bold">{city.name}</h2>
          <p>Rating: {city.rating}</p>
          <img
            src={city.image}
            alt={city.name}
            className="w-full max-h-48 object-cover rounded-lg my-2"
          />
          <p>{city.description}</p>
        </div>
        
      );
    }

    return null;
  };

  return (
    <div className="p-10 text-center">
      {citiesData.map((cityCategory, index) => (
        <div key={index} className="my-4">
          <div className="text-xl font-bold my-2">{cityCategory.category}</div>
          <div className="grid grid-cols-3 gap-4">
          {cityCategory.cities.map((place, index) => (
            <div
  key={index}
  onClick={() => handleCitySelect(place.name)}
  className={`cursor-pointer bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between transform hover:scale-105 transition-transform ${
    selectedCities.includes(place.name) ? "shadow-md" : ""
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
      checked={selectedCities.includes(place.name)}
      onChange={() => handleCitySelect(place.name)}
    />
  </div>
  <div className="w-4/5">
    <div className="text-xl font-bold">
      <h2 className="text-gray-800">{place.name}</h2>
    </div>
    <p className="text-sm text-gray-500">Rating: {place.rating}</p>
  </div>
</div>

  
  
))}


          </div>
          
        </div>

        
      ))}
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
