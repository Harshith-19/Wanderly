import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ItineraryCards = () => {
  const location = useLocation();
  const selectedCitiesParam = location.state.selectedCities;
  const selectedCities = selectedCitiesParam ? selectedCitiesParam.split(",") : [];

  const citiesData = [
    {
      city: "Mumbai",
      places: [
        { name: "Gateway of India", desc: "A historic monument and popular tourist attraction overlooking the Arabian Sea.", img: "https://img.jagranjosh.com/imported/images/E/Articles/Gateway_of_India_aerial_view.jpg" },
        { name: "Juhu Beach", desc: "A famous beach known for its vibrant atmosphere and street food stalls.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },

      ],
      food: [
        { name: "Vada Pav", desc: "A popular local snack consisting of a spicy potato fritter in a bun.", img: "https://images.app.goo.gl/mx8py9nmmNFXY11M6" },
        { name: "Pav Bhaji", desc: "A flavorful blend of vegetables served with buttery rolls.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
     
      ],
      things: [
        { name: "Chhatrapati Shivaji Terminus", desc: "A UNESCO World Heritage Site and historic railway station.", img: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/station.jpg" },
        { name: "Elephanta Caves", desc: "Ancient rock-cut caves dedicated to various Hindu gods and goddesses.", img: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_694433434_20191213110339_20191213110412.png" },

      ],
    },
    {
      city: "Gurgaon",
      places: [
        { name: "Kingdom of Dreams", desc: "A live entertainment and leisure destination featuring theatrical shows, Bollywood-style musicals, and more.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Cyber Hub", desc: "A bustling food and entertainment hub with a wide variety of restaurants and cafes.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more places for Gurgaon
      ],
      food: [
        { name: "Butter Chicken", desc: "A popular North Indian dish with a rich and creamy tomato-based gravy.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Paratha", desc: "A flatbread stuffed with various fillings and served with yogurt and pickles.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more food for Gurgaon
      ],
      things: [
        { name: "Sultanpur National Park", desc: "A bird sanctuary with a variety of migratory and resident bird species.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/c8/82/44/sultanpur-national-park.jpg?w=1200&h=-1&s=1" },
        { name: "Ambience Mall", desc: "One of the largest shopping malls in India with numerous retail outlets and entertainment options.", img: "https://www.imagesbof.in/wp-content/uploads/2022/02/Ambience-Mall_Gurgaon.jpg" },
        // Add more things to do for Gurgaon
      ],
    },
    {
      city: "Delhi",
      places: [
        { name: "India Gate", desc: "A war memorial and iconic landmark in Delhi.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Red Fort", desc: "A UNESCO World Heritage Site and historic fort complex.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more places for Delhi
      ],
      food: [
        { name: "Biryani", desc: "A flavorful rice dish with spices, meat, and aromatic herbs.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Chole Bhature", desc: "A popular North Indian dish consisting of spicy chickpea curry and fried bread.", img: "https://www.google.com/imgres?imgurl=https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%252FEdit%252F2023-03-papdi-chaat%252Fpapdi-chaat-01&tbnid=2pReNAhck-AeHM&vet=1&imgrefurl=https://www.thekitchn.com/papdi-chaat-recipe-23494724&docid=ph6a4YiimMMtnM&w=1500&h=1500&hl=en-IN&source=sh/x/im/m6/4&shem=uvafe2" },
        // Add more food for Delhi
      ],
      things: [
        { name: "Qutub Minar", desc: "A UNESCO World Heritage Site and ancient minaret.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Lotus Temple", desc: "A Bahá'í House of Worship known for its lotus flower-like architecture.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more things to do for Delhi
      ],
    },
    {
      city: "Ayodhya",
      places: [
        { name: "Ram Janmabhoomi", desc: "A sacred site believed to be the birthplace of Lord Rama.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Hanuman Garhi", desc: "A temple dedicated to Lord Hanuman with a view of the city.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more places for Ayodhya
      ],
      food: [
        { name: "Ladoo", desc: "A sweet Indian delicacy made from gram flour and sugar.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Peda", desc: "A milk-based sweet flavored with cardamom and garnished with nuts.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more food for Ayodhya
      ],
      things: [
        { name: "Kanak Bhavan", desc: "A temple with a rich history and cultural significance.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        { name: "Treta Ke Thakur", desc: "A religious site associated with Lord Rama's stay in Ayodhya.", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww" },
        // Add more things to do for Ayodhya
      ],
    },
    // Add more cities
  ];

  const [selectedCity, setSelectedCity] = useState(citiesData[0].city);
  const [selectedCategory, setSelectedCategory] = useState("places");
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  useEffect(() => {
    setSelectedCategory("places"); // Set "Places" as the default category
  }, [selectedCity]);

  useEffect(() => {
    // Initialize the selectedCheckboxes array with the same length as the items
    setSelectedCheckboxes(new Array(getCategoryData().length).fill(false));
  }, [selectedCategory]);

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    clearSelection();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    clearSelection();
  };

  const handleItemSelection = (item, index) => {
    const updatedCheckboxes = [...selectedCheckboxes];
    updatedCheckboxes[index] = !selectedCheckboxes[index];
  
    // Maintain a separate array of selected items
    const updatedSelectedItems = [...selectedItems];
  
    if (updatedCheckboxes[index]) {
      // If the checkbox is checked, add the item to the selected items
      updatedSelectedItems.push(item);
    } else {
      // If the checkbox is unchecked, find and remove the item from the selected items based on its name
      const itemName = item.name;
      const itemIndex = updatedSelectedItems.findIndex((selectedItem) => selectedItem.name === itemName);
      if (itemIndex !== -1) {
        updatedSelectedItems.splice(itemIndex, 1);
      }
    }
  
    setSelectedCheckboxes(updatedCheckboxes);
    setSelectedItems(updatedSelectedItems);
  };
  
  

  const clearSelection = () => {
    setSelectedItems(new Set());
    setSelectedCheckboxes(new Array(getCategoryData().length).fill(false));
  };

  return (
    <div className="my-6 min-h-screen flex">
      <div className="w-1/4 p-4">
        <div className="flex flex-col gap-4">
          {selectedCities.map((city, index) => (
            <div
              key={index}
              className={`border rounded-full text-md md:text-md px-2 md:px-8 py-2 cursor-pointer ${
                selectedCity === city ? "bg-green-500 text-white" : ""
              }`}
              onClick={() => handleCityClick(city)}
            >
              {city}
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
          {getCategoryData().map((item, index) => (
            <li key={index} className="border shadow-lg border-gray-200 rounded p-4">
              <input
                type="checkbox"
                className="mb-2"
                onChange={() => handleItemSelection(item, index)}
                checked={selectedCheckboxes[index]}
              />
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/4 p-4">
        <div className="cart">
          <h2 className="mb-4">Selected Items</h2>
          {Array.from(selectedItems).map((item, index) => (
            <div key={index} className="flex items-center border p-2 mb-2 rounded">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-full mr-2"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  function getCategoryData() {
    const cityData = citiesData.find((city) => city.city === selectedCity);
    switch (selectedCategory) {
      case "places":
        return cityData.places;
      case "food":
        return cityData.food;
      case "things":
        return cityData.things;
      default:
        return [];
    }
  }


};

export default ItineraryCards;
