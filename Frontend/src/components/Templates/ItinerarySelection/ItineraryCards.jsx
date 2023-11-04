import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ItineraryCards = () => {
  const location = useLocation();
  const selectedCitiesParam = location.state.selectedCities;
  const selectedCities = selectedCitiesParam ? selectedCitiesParam.split(",") : [];

  const citiesData = [
    {
      city: "Mumbai",
      places: [
        { name: "Panvel", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww", desc: "Description for Panvel." },
        // Add more places for Mumbai
      ],
      food: [
        { name: "Vada Pav", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww", desc: "Description for Vada Pav." },
        // Add more food for Mumbai
      ],
      things: [
        { name: "Roam", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww", desc: "Description for Roam." },
        // Add more things for Mumbai
      ],
    },
    // Add more cities
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (cityName) => {
    // Set the selected city when a city is clicked
    setSelectedCity(cityName);
  };

  return (
    <div className="my-6 min-h-screen">
      <div className="flex gap-4">
        {selectedCities.map((city, index) => (
          <div key={index}>
            <div
              className={`border border-green-500 rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer ${
                selectedCity === city ? "bg-green-500 text-white" : ""
              }`}
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className="my-4">
          <h2>{selectedCity}</h2>
          <h3>Places to Visit</h3>
          <ul>
            {citiesData
              .find((city) => city.city === selectedCity)
              .places.map((place, index) => (
                <li key={index}>
                  {place.name}: {place.desc}
                </li>
              ))}
          </ul>
          <h3>Food to Try</h3>
          <ul>
            {citiesData
              .find((city) => city.city === selectedCity)
              .food.map((food, index) => (
                <li key={index}>
                  {food.name}: {food.desc}
                </li>
              ))}
          </ul>
          <h3>Things to Do</h3>
          <ul>
            {citiesData
              .find((city) => city.city === selectedCity)
              .things.map((thing, index) => (
                <li key={index}>
                  {thing.name}: {thing.desc}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItineraryCards;
