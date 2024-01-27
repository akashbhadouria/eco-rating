import React, { useState, useEffect } from "react";

import "./Nav.css";
import logo from "../../assets/images/footer_logo2.png";

const Nav = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.3;

      // Hide the navbar when scrolling beyond 30% of the viewport height
      setNavbarVisible(scrollPosition < threshold);
    };

    // Attach event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li>Gen AI</li>
        <li>Clients</li>
        <li>Method</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Nav;
