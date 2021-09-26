import "./Cart.css";
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

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

  // Font Awesome
  const hotelIcon = <FontAwesomeIcon icon={faHotel} />;

  return (
    <div className="cart">
      <h2
        style={{
          backgroundColor: "lightslategrey",
          padding: "4%",
          color: "white",
        }}
      >
        <span style={{ color: "rgb(50, 68, 85)" }}>Booking:</span>{" "}
        {props.cart.length}{" "}
      </h2>
      <hr />
      <p style={{ fontSize: "25px" }}>
        <span
          style={{
            fontWeight: "800",
            color: "rgb(50, 68, 85)",
          }}
        >
          Total Price
        </span>
        : {total}{" "}
      </p>
      <p>
        <span
          style={{
            backgroundColor: "lightslategrey",
            color: "white",
            padding: "2%",
            fontSize: "20px",
          }}
        >
          {" "}
          {hotelIcon} Hotel:
        </span>
        <br /> <br /> {hotel + "  "}
      </p>
    </div>
  );
};

export default Cart;
