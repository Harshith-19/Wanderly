import React, {useState, useEffect} from "react";
import './MyTrips.css'
import axios from 'axios';

const TripCard=({tripId, Country})=>{
  const [isToggled, setToggled] = useState(false);
 
  
  
  
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
  const [citiesData, setTripData] = useState({});
  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const Userdata = await axios.get(`http://127.0.0.1:8000/api/view-trip/${tripId}/`);
        setTripData(Userdata.data);
        
      } catch(err){
        console.log(err);
      }
    }
    fetchPosts();
   },{})

    return (
        
      <div class="trip-container" >
      <div class="row">    
        <div class="col-xs-12">
    
          <div class="trip-card" onClick={toggle}>                
    
            
    
            <div class="trip-card-modal">Take a look at my Profile!</div>
            
            <div class="trip-card-info">
              
              <div class="trip-name">
                <p>Trip {tripId}</p> 
              </div>
              <hr/>
              
              <div class="trip-content">
                <p>
                  <b>Country:</b> 
                 <span> {Country} </span>
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
          {Object.keys(citiesData).map((cityName, index) => (
      <div key={index}>
        <div className="centerCities"><h1>{cityName}</h1></div>
        <table>
          <thead>
            <tr>
              <th>Food to Try</th>
              <th>Places to Visit</th>
              <th>Things to Do</th>
            </tr>
          </thead>
          <tbody>
              {citiesData[cityName]['Cuisine'] &&
                citiesData[cityName]['Cuisine'].map((cuisine, i) => (
                  <tr key={i}>
                    <td className="imageTrip">
                      <input
                        type="checkbox"
                        id={`cuisine-checkbox-${index}-${i}`}
                        onClick={() => handleCheckboxClick(cityName, 'Cuisine', i)}
                      />
                      <label
                        htmlFor={`cuisine-checkbox-${index}-${i}`}
                        className={checkedItems.includes(`${cityName}-Cuisine-${i}`) ? 'strikethrough' : ''}
                      >
                        {cuisine.name}
                      </label>
                    </td>
                    <td>
                      {citiesData[cityName]['Places'] && citiesData[cityName]['Places'][i] ? (
                        <div className="imageTrip" >
                          <input
                            type="checkbox"
                            id={`places-checkbox-${index}-${i}`}
                            onClick={() => handleCheckboxClick(cityName, 'Places', i)}
                          />
                          <label
                            htmlFor={`places-checkbox-${index}-${i}`}
                            className={checkedItems.includes(`${cityName}-Places-${i}`) ? 'strikethrough' : '' } 
                          >
                            {citiesData[cityName]['Places'][i].name}
                          </label>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {citiesData[cityName]['Unique'] && citiesData[cityName]['Unique'][i] ? (
                        <div className="imageTrip">
                          <input
                            type="checkbox"
                            id={`unique-checkbox-${index}-${i}`}
                            onClick={() => handleCheckboxClick(cityName, 'Unique', i)}
                          />
                          <label
                            htmlFor={`unique-checkbox-${index}-${i}`}
                            className={checkedItems.includes(`${cityName}-Unique-${i}`) ? 'strikethrough' : ''}
                          >
                            {citiesData[cityName]['Unique'][i].name}
                          </label>
                        </div>
                      ) : null}
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
