import "./Travel.css";

import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Travel = () => {
  const [travelData, setTravelData] = useState([]);
  useEffect(() => {
    fetch("./tours.json")
      .then((res) => res.json())
      .then((data) => setTravelData(data));
  }, []);
  return (
    <div>
      <div className="travel-container">
        <div className="hotel-container">
          {travelData.map((travel) => (
            <Display travel={travel}></Display>
          ))}
        </div>
        <div className="cart-container">
          <h2>Booking: </h2>
        </div>
      </div>
    </div>
  );
};

export default Travel;
