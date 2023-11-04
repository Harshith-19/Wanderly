import React from "react";
import './MyTrips.css'

const TripCard=()=>{
    return (
        <div class="trip-container">
  <div class="row">    
    <div class="col-xs-12">

      <div class="trip-card">                

        <div class="trip-card-image"> 
          <a href="#" type="button" class="btn">
            <img src="https://farm3.staticflickr.com/2764/4350166105_be2c85cdb5_z_d.jpg" alt="user-image" />
          </a>
        </div>

        <div class="trip-card-modal">Take a look at my Profile!</div>
        
        <div class="trip-card-info">
          
          <div class="trip-name">
            <p>Nunc Lorem Interdum</p> 
          </div>
          <hr/>
          
          <div class="trip-content">
            <p>
              <b>Info:</b> 
              Praesent faucibus sem tortor, sed imperdiet enim interdum in. Etiam feugiat rutrum ex, quis maximus quam commodo eu. Pellentesque eget tortor convallis, vestibulum tortor in, lacinia diam.
            </p>
            <p><b>Skills:</b> Feugiat, Ipsum, Pellentesque, Maximus</p>
            <p><b>Website:</b> <a href="https://codepen.io/jaguilera">www.codepen.io</a></p>
          </div>
        </div>
      </div>    
    </div>
  </div>
  <div id="author_bio_wrap" style={{display: "none"}}>hi</div>
</div>
    )
}

export default TripCard;