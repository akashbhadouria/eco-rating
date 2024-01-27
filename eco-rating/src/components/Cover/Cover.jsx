import React from "react";
import "./Cover.css";
import CoverImg from "../../assets/images/cover_pic.png";

const Cover = () => {
  return (
    <div className="cover">
      <img src={CoverImg} alt="Cover Image" className="cover-image" />
      {/* <div className="overlay"></div> */}
      <div className="cover-text-container">
        <h1 className="cover-text">
          Helping Buyers Choose <br />
          Sustainable Products and Services
        </h1>
      </div>
    </div>
  );
};

export default Cover;
