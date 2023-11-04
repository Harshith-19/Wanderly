import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItineraryCards = () => {
  const location = useLocation();
  const selectedCities = location.state.selectedCities || [];

  const [selectedCity, setSelectedCity] = useState(
    selectedCities.length > 0 ? selectedCities[0].city : ""
  );
  const [selectedCategory, setSelectedCategory] = useState("places");
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [data, setData] = useState({ places: [], food: [], things: [] });

  const navigate = useNavigate();

  const handleSubmit = () => {
    const selectedItemsArray = Array.from(selectedItems);

    console.log("Selected Items:", selectedItemsArray);


    setFormSubmitted(true);
    
    setTimeout(() => {
      clearSelection();
      setFormSubmitted(false);
      setSubmitStatus(null);
      navigate('/mytrips');
    }, 2000);
  };

  useEffect(() => {
    fetchCityData(selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    setSelectedCategory("places");
  }, [selectedCity]);

  useEffect(() => {
    setSelectedCheckboxes(new Array(data[selectedCategory].length).fill(false));
  }, [selectedCategory, data]);

  const fetchCityData = (cityName) => {
    if (cityName) {
      fetch(`http://127.0.0.1:8000/api/places-to-visit/${cityName.toLowerCase()}`)
        .then((response) => response.json())
        .then((placesData) => {
          console.log(placesData);
          setData((prevData) => ({ ...prevData, places: placesData }));
        })
        .catch((error) => console.error("Error fetching places data:", error));

      fetch(`http://127.0.0.1:8000/api/cuisine/${cityName.toLowerCase()}`)
        .then((response) => response.json())
        .then((foodData) => {
          console.log(foodData);
          setData((prevData) => ({ ...prevData, food: foodData }));
        })
        .catch((error) => console.error("Error fetching food data:", error));

      fetch(`http://127.0.0.1:8000/api/unique/${cityName.toLowerCase()}`)
        .then((response) => response.json())
        .then((thingsData) => {
          setData((prevData) => ({ ...prevData, things: thingsData }));
        })
        .catch((error) => console.error("Error fetching things data:", error));
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city.city);
    clearSelection();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    clearSelection();
  };

  const handleItemSelection = (item, index) => {
    const updatedCheckboxes = [...selectedCheckboxes];
    updatedCheckboxes[index] = !selectedCheckboxes[index];

    const updatedSelectedItems = new Set(selectedItems);

    if (updatedCheckboxes[index]) {
      updatedSelectedItems.add(item);
      // Prepare the data for the API request
      const requestData = {
        user: "Harshith", // Hardcoded user for now
        cityID: selectedCities.find(city => city.city === selectedCity).id,
        addType: selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1), // Capitalize the category
        TypeID: item.id, // Assuming each item has an 'id' property
      };

      // Perform the API call to add the item to the cart
      fetch("http://127.0.0.1:8000/api/add-to-cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to add item to the cart");
          }
        })
        .then((data) => {
          // Handle the response data as needed (e.g., show a success message)
          console.log("Item added to the cart:", data);
        })
        .catch((error) => {
          console.error("Error adding item to the cart:", error);
        });
    } else {
      updatedSelectedItems.delete(item);
      // You can add logic here to remove the item from the cart (if needed)
      // You might need to make another API call to remove items from the cart
    }

    setSelectedCheckboxes(updatedCheckboxes);
    setSelectedItems(updatedSelectedItems);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
    setSelectedCheckboxes(new Array(data[selectedCategory].length).fill(false));
  };

  return (
    <div className="my-6 min-h-screen flex">
      <div className="w-1/4 p-4">
        <div className="flex flex-col gap-4">
          {selectedCities.map((city, index) => (
            <div
              key={index}
              className={`border rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer ${
                selectedCity === city.city ? "bg-green-500 text-white" : ""
              }`}
              onClick={() => handleCityClick(city)}
            >
              {city.city}
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/4 p-4">
        <div className="flex gap-4">
          <button
            className={`border rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer${
              selectedCategory === "places" ? " bg-green-500 text-white" : ""
            }`}
            onClick={() => handleCategoryClick("places")}
          >
            Places
          </button>
          <button
            className={`border rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer ${
              selectedCategory === "food" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleCategoryClick("food")}
          >
            Food
          </button>
          <button
            className={`border rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer ${
              selectedCategory === "things" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleCategoryClick("things")}
          >
            Things
          </button>
          <button
            className="border rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer"
            onClick={clearSelection}
          >
            Clear Selection
          </button>
        </div>
        <ul className="grid my-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data[selectedCategory].map((item, index) => (
            <li key={index} className="border shadow-lg border-gray-200 rounded p-4">
              <input
                type="checkbox"
                className="mb-2"
                onChange={() => handleItemSelection(item, index)}
                checked={selectedCheckboxes[index]}
              />
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
      <button
          onClick={handleSubmit}
          className={`border rounded-full border-green-600 text-green-900 text-md md:text-md px-2 md:px-8 py-2 cursor-pointer ${
            formSubmitted ? "bg-green-500 text-white" : ""
          }`}
        >
          {formSubmitted ? "Form Submitted" : "Submit Form"}
        </button>
      
      </div>
    </div>
  );
};

export default ItineraryCards;
