import React, { useState } from "react";

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
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCitySelect = (cityName) => {
    if (selectedCities.includes(cityName)) {
      setSelectedCities(selectedCities.filter((city) => city !== cityName));
    } else {
      setSelectedCities([...selectedCities, cityName]);
    }
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
    className={`cursor-pointer bg-white p-4 rounded-lg border border-gray-200 ${
      selectedCities.includes(place.name) ? "shadow-md" : ""
    }`}
  >
    <input
      type="checkbox"
      className="mr-2 h-6 w-6 rounded-full border-2 border-green-400 appearance-none checked:bg-green-500 checked:border-green-600 cursor-pointer mr-2"
      checked={selectedCities.includes(place.name)}
      onChange={() => handleCitySelect(place.name)}
    />
    <div className="text-xl font-bold mb-2">
      <h2 className="inline-block mr-2">{place.name}</h2>
      <p className="text-sm text-gray-500 inline-block">
        Rating: {place.rating}
      </p>
    </div>
  </div>
))}

          </div>
        </div>
      ))}
      {selectedCities.length > 0 && renderLastSelectedCityDetails()}
    </div>
  );
};

export default BookingCards;
