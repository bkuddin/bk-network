import "./Cart.css";
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  // Destructuring
  const { cart } = props;
  // For Loop for Total
  let total = 0;
  for (const member of cart) {
    total = total + member.subscription;
  }

  //  Reduce for Member Name
  const name = cart.reduce((previous, member) => previous + member.name, []);

  // Font Awesome
  const memberIcon = <FontAwesomeIcon icon={faUserFriends} />;

  return (
    <div className="cart">
      <h2
        style={{
          backgroundColor: "lightslategrey",
          padding: "4%",
          color: "white",
        }}
      >
        <span style={{ color: "rgb(50, 68, 85)" }}>Check:</span>{" "}
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
        : ${total}{" "}
      </p>
      <p>
        <span
          style={{
            backgroundColor: "lightslategrey",
            color: "white",
            padding: "2%",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          {" "}
          {memberIcon} Member :
        </span>
        <br /> <br /> {name + "  "}
      </p>
    </div>
  );
};

export default Cart;
