import React, { useState, useEffect } from 'react'
import './Nav.css'
import logo from '../../assets/images/footer_logo2.png'

const Nav = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true)
  const scrollPosition = window.scrollY

  useEffect(() => {
    const handleScroll = () => {
      const threshold = (scrollPosition / window.innerHeight) * 100
      if (isNavbarVisible) {
        setNavbarVisible(threshold >= 57)
      } else {
        setNavbarVisible(true)
      }
    }

    // Attach event listener for scroll events
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  return (
    <>
      <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="li-wrapper">
          <ul>
            <li>Gen AI</li>
            <li>Clients</li>
            <li>Method</li>
            <li>About Us</li>
          </ul>

          <button className="contact-us">CONTACT US</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
