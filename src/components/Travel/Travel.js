import "./Travel.css";

import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Travel = () => {
  const [travelData, setTravelData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./tours.json")
      .then((res) => res.json())
      .then((data) => setTravelData(data));
  }, []);

  const handleAddToCart = (travel) => {
    const newCart = [...cart, travel];
    setCart(newCart);
  };
  return (
    <div>
      <div className="travel-container">
        <div className="hotel-container">
          {travelData.map((travel) => (
            <Display
              travel={travel}
              handleAddToCart={handleAddToCart}
            ></Display>
          ))}
        </div>
        <div className="cart-container">
          <h2>Booking: {cart.length} </h2>
        </div>
      </div>
    </div>
  );
};

export default Travel;
