
import React from "react";
import './MyTrips.css'
import TripCard from './TripCard'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

  
const Mytrips = ({trips}) => {
    return (
    trips.map((trip, index) => (
        <TripCard key={index} tripId={trip.id} Country={trip.country}/>
    ))
    )
}
export default Mytrips;