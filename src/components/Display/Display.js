import "./Display.css";
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Display = (props) => {
  // console.log(props.member);
  const { name, img, address, subscription, contact } = props.member;
  // Font Awesome
  const checkIcon = <FontAwesomeIcon icon={faArrowCircleRight} />;

  return (
    <div className="display-member">
      <div className="member-card">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Contact: {contact}</p>
        <hr />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          address:{" "}
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
            {address}{" "}
          </h4>
        </p>
        <h5 style={{ color: "red" }}>
          Must pay monthly{" "}
          <span style={{ fontSize: "20px", color: "rgb(59, 80, 100)" }}>
            ${subscription}
          </span>{" "}
          per associate{" "}
        </h5>
        <hr />
        <button
          onClick={() => props.handleAddToCart(props.member)}
          className="btn-regular"
        >
          {checkIcon} Check
        </button>
      </div>
    </div>
  );
};

export default Display;
