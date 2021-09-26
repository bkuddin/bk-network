import "./Cart.css";

import React from "react";

const Cart = (props) => {
  // Destructuring
  const { cart } = props;
  // For Loop
  let total = 0;
  for (const travel of cart) {
    total = total + travel.price;
  }

  //  Reduce for Hotel Name
  const hotel = cart.reduce((previous, travel) => previous + travel.hotel, []);

  return (
    <div>
      <h2>Booking: {props.cart.length} </h2>
      <p>Total Price: {total} </p>

      <li>Hotel: {hotel + ""} </li>
    </div>
  );
};

export default Cart;
