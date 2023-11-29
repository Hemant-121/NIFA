import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/nifa-new-logo.png'; // Replace 'logo.png' with your actual image file

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`Navbar ${showMenu ? 'show-menu' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </div>

      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Courses</a></li>
        <li><a href="/">Activities</a></li>
        <li><a href="/">Admission</a></li>
        <li><a href="/">Art Gallery</a></li>
        <li><a href="/">Franchise</a></li>
        <li><a href="/">Online Classes</a></li>
        <li><a href="/">Videos</a></li>
        <li><a href="/">Pay Fee</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
