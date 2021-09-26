import "./Display.css";

import React from "react";

const Display = (props) => {
  console.log(props.travel);
  const { location, img, price, hotel, room } = props.travel;
  return (
    <div className="display-travel">
      <div className="travel-card">
        <img src={img} alt="" />
        <h2>{hotel}</h2>
        <p>Room: {room}</p>
        <hr />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Location:{" "}
          <h4
            style={{
              marginLeft: "10px",
              backgroundColor: "red",
              padding: "8px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            {" "}
            {location}{" "}
          </h4>
        </p>
        <h5>Book in advance from ${price} per adult </h5>
        <hr />
        <button className="btn-regular">Book Now</button>
      </div>
    </div>
  );
};

export default Display;
