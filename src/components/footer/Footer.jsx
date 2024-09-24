import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook} from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p className="companyName">EbTan Cosmetics</p>
          <div className="footerLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Product</Link>
            <Link to="/services">Contact</Link>
          </div>
          <div className="socialIcon">
            <FaInstagram className="icon" />
            <FaTelegram className="icon" />
            <FaFacebook className="icon" />
          </div>
          <div className="copyright">
            <Link to="/copyright">© 2024 All Rights Reserved.</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer