/* HomeMid1.jsx */

import "./homeMid1.css";
import AmzImg from "../../assets/images/amazon.webp";
import CardMid1 from "./cardMid1";

const HomeMid1 = () => {
  return (
    <>
      <div className="container">
        <div className="textContainer">
          <h1>How Can EcoRatings Help?</h1>
        </div>
        <div className="imgeContainer">
          <div className="amzBox"></div>
          <img src={AmzImg} alt="Cover Image" className="overlay-image" />
        </div>
        <div className="cardMid1Container">
          <CardMid1 />
        </div>
      </div>
    </>
  );
}

export default HomeMid1;
