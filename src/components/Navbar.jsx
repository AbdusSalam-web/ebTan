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
            <a href="#">
              <img src="./images/logo.png" alt="" />
            </a>
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

            <div
              className={
                showMenu
                  ? "absolute right-0 w-[200px] bg-[#C51605] text-[#FFFFFF] rounded-[10px] overflow-hidden "
                  : "hidden"
              }
            >
              <ul className="menu_items flex flex-col  items-center ">
                <li className="py-[5px] transition-all duration-300 hover:bg-[#ab1102]  w-full flex items-center justify-center">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-[5px]  transition-all duration-300 hover:bg-[#ab1102]  w-full flex items-center justify-center">
                  <Link to="/">About Us</Link>
                </li>
                <li className="py-[5px]  transition-all duration-300 hover:bg-[#ab1102]  w-full flex items-center justify-center">
                  <Link to="/">Product</Link>
                </li>
                <li className="py-[5px]  transition-all duration-300 hover:bg-[#ab1102]  w-full flex items-center justify-center">
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