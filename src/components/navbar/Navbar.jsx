import React from 'react'
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">EbTan</Link>
        </div>
        <div className="menu">
          <HiMiniBars3BottomLeft className=" icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar