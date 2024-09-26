import React from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { BiNotepad } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa6";
const Navbar = () => {
  // creating the useState for holding the state of the icon
  const [menuIcon, setMenuIcon] = React.useState(false);
  console.log("🚀 ~ Navbar ~ menuIcon:", menuIcon)
//  Event handler to toggle the menu & change the menu icon
  const handleMenuIcon = () => {
    setMenuIcon(!menuIcon);
   
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">EbTan</Link>
        </div>
        <div className="menuIcon">
          {menuIcon ? (
            <HiMiniBars3BottomLeft className="icon" onClick={handleMenuIcon} />
          ) : (
            <HiMiniBars3BottomLeft className="icon iconRotate" onClick={handleMenuIcon} />
          )}
          <div className= {menuIcon ? "menu " : " menuHide"}>
            <ul>
              <li>
                <Link to="/">
                  <FaHome className="icon homeIcon" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BiNotepad className="icon aboutIcon" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <IoMdContacts />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FaServicestack />
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
