import React from 'react';
import './homeMid5.css';
import Image1 from "../../assets/images/sus1.webp";
import Image2 from "../../assets/images/sus2.webp";
import Image3 from "../../assets/images/sus3.webp";

const HomeMid5 = () => {
  return (
    <div className="icon-bar5">
        <div>
          <h1 className="centered-text">News and Events</h1>
        </div>
        <div className='icon-container5'>
            <div className='colMid5'>
                <div className='img1Mid5'>
                    <img src={Image1} alt="brush Image" className="susImg1"/>
                    <h1>Global Debut of EcoRatings Set to Take Center Stage at COP 28</h1>
                    <h3>BW Sustainability World</h3>
                </div>
            </div>
            <div className='colMid5'>
                <div className='img2Mid5'>
                    <img src={Image2} alt="brush Image" className="susImg2"/>
                    <h1>Global Debut of EcoRatings Set to Take Center Stage at COP 28</h1>
                    <h3>The CSR Universe</h3>
                </div>
            </div>
            <div className='colMid5'>
                <div className='img3Mid5'>
                    <img src={Image3} alt="brush Image" className="susImg3"/>
                    <h1>Global Debut of EcoRatings Set to Take Center Stage at COP 28</h1>
                    <h3>The Financial Express</h3>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomeMid5;
