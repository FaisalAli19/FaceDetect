import React from "react";
import Tilt from "react-tilt";

import "./Logo.css";
import Brain from "./brain.svg";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 center"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div
          className="Tilt-inner"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <img style={{ height: 120, width: 120 }} src={Brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
