import React, {useState} from "react";
import './MyTrips.css'

const TripCard=()=>{
  const [isToggled, setToggled] = useState(false);
 
  const citiesData = [
    {
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",
      foodstotry: ["Vada Pav", "Pav Bhaji", "Biryani"],
      placestotravel: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
      thingstodo: ["Visit local markets", "Explore historical sites", "Enjoy street food"]
    },
    {
      name: "New York",
      image: "",
      foodstotry: ["Pizza", "Hot Dogs", "Bagels"],
      placestotravel: ["Statue of Liberty", "Central Park", "Times Square"],
      thingstodo: ["Broadway shows", "Museums", "Shopping"]
    },
    {
      name: "Paris",
      image: "",
      foodstotry: ["Croissants", "Escargot", "Macarons"],
      placestotravel: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
      thingstodo: ["River Seine cruise", "Visit art galleries", "Café hopping"]
    }
  ];
  
  
  
  const toggle = () => {
    setToggled(!isToggled);
  };
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxClick = (city, index) => {
    const isChecked = checkedItems.includes(`${city}-${index}`);
    if (isChecked) {
      setCheckedItems(checkedItems.filter(item => item !== `${city}-${index}`));
    } else {
      setCheckedItems([...checkedItems, `${city}-${index}`]);
    }
  };
    return (
        
        <div class="trip-container" >
  <div class="row">    
    <div class="col-xs-12">

      <div class="trip-card" onClick={toggle}>                

        

        <div class="trip-card-modal">Take a look at my Profile!</div>
        
        <div class="trip-card-info">
          
          <div class="trip-name">
            <p>Trip 1</p> 
          </div>
          <hr/>
          
          <div class="trip-content">
            <p>
              <b>Cities to Travel:</b> 
              <span>Mumbai, New York, Paris</span>
               </p>
            </div>
        </div>
      </div>    
    </div>
  </div>
  <div className={`toggle-content ${isToggled ? 'visible' : ''}`}
        style={{
          height: isToggled ? 'auto' : 0,
          overflow: 'hidden',
          transition: 'height 0.5s',
        }}
      >
        {isToggled && 
          <div>
      {citiesData.map((city, index) => (
  <div key={index}>
    <div className="centerCities"><h2>{city.name}</h2></div>
    <table>
      <thead>
        <tr>
          <th>Food to Try</th>
          <th>Places to Visit</th>
          <th>Things to Do</th>
        </tr>
      </thead>
      <tbody>
        {city.foodstotry.map((food, i) => (
          <tr key={i}>
            <td>
              <input
                type="checkbox"
                id={`food-checkbox-${index}-${i}`}
                onClick={() => handleCheckboxClick(city.name, 'foodstotry', i)}
              />
              <label
                htmlFor={`food-checkbox-${index}-${i}`}
                className={checkedItems.includes(`${city.name}-foodstotry-${i}`) ? 'strikethrough' : ''}
              >
                {food}
              </label>
            </td>
            <td>
              <input
                type="checkbox"
                id={`place-checkbox-${index}-${i}`}
                onClick={() => handleCheckboxClick(city.name, 'placestotravel', i)}
              />
              <label
                htmlFor={`place-checkbox-${index}-${i}`}
                className={checkedItems.includes(`${city.name}-placestotravel-${i}`) ? 'strikethrough' : ''}
              >
                {city.placestotravel[i]}
              </label>
            </td>
            <td>
              <input
                type="checkbox"
                id={`thing-checkbox-${index}-${i}`}
                onClick={() => handleCheckboxClick(city.name, 'thingstodo', i)}
              />
              <label
                htmlFor={`thing-checkbox-${index}-${i}`}
                className={checkedItems.includes(`${city.name}-thingstodo-${i}`) ? 'strikethrough' : ''}
              >
                {city.thingstodo[i]}
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}


    </div>}
      </div>
</div>
    )
}

export default TripCard;