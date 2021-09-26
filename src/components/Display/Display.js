import "./Display.css";
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Display = (props) => {
  console.log(props.travel);
  const { location, img, price, hotel, room } = props.travel;
  // Font Awesome
  const bookIcon = <FontAwesomeIcon icon={faArrowCircleRight} />;

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
              backgroundColor: "rgb(59, 80, 100)",
              padding: "8px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            {" "}
            {location}{" "}
          </h4>
        </p>
        <h5 style={{ color: "red" }}>
          Book in advance from{" "}
          <span style={{ fontSize: "20px", color: "rgb(59, 80, 100)" }}>
            ${price}
          </span>{" "}
          per adult{" "}
        </h5>
        <hr />
        <button
          onClick={() => props.handleAddToCart(props.travel)}
          className="btn-regular"
        >
          {bookIcon} Book Now
        </button>
      </div>
    </div>
  );
};

export default Display;
