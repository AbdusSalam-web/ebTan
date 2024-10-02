import React from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight , HiBars3BottomLeft} from "react-icons/hi2";
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <>
      <nav className="navbar bg-[#F6F4F0] w-full pt-[10px] pb-[20px] px-[20px]  sm:pt-[25px] sm:pb-[40px]  sm:px-[40px] lg:pt-[33px] lg:pb-[77px] lg:px-[93px] ">
        <div className="container flex items-center justify-between">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="menu_icon relative  text-brand">
            {showMenu ? (
              <HiBars3BottomLeft onClick={toggleMenu} />
            ) : (
              <HiBars3BottomLeft
                onClick={toggleMenu}
                className=" -rotate-180"
              />
            )}

            <div className={showMenu ? "absolute right-0 w-[100px] " : "hidden"}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Product</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar