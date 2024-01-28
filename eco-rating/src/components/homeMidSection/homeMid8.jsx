// HomeMid8.jsx

import React from "react";
import "./homeMid8.css";
import WorldImg from "../../assets/images/world.webp";

const HomeMid8 = () => {
  return (
    <div className="icon-bar8">
      <div className="firstPart">
        <h1>BE<br/>TRANSPARENT.<br/>GET RATED<br/>TODAY.</h1>
        {/* <p>Some text goes here.</p> */}
        <button className="getRated">GET RATED</button>
      </div>
      <div className="secondPart">
        <img src={WorldImg} alt="Sample" className="fullWidthImage" />
      </div>
    </div>
  );
};

export default HomeMid8;
