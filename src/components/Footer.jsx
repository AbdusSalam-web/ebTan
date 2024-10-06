import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram, FaTelegram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="foter w-full bg-[#C51605]">
        <div className="container py-[40px] lg:py-[65px] flex flex-col items-center ">
          <p className="font-inter font-medium lg:font-black text-[18px]  lg:text-[34px] text-[#FFFFFF]">
            EbTan Cosmetics
          </p>
          <div className="footerLink flex gap-[15px] lg:gap-[33px] py-[25px] lg:py-[46px]">
            <a
              href="#"
              className="font-inter font-medium text-[14px] lg:text-[18px] text-[#FFFFFF] leading-[22px"
            >
              Home
            </a>
            <a
              href="#"
              className="font-inter font-medium text-[14px] lg:text-[18px] text-[#FFFFFF] leading-[22px"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-inter font-medium text-[14px] lg:text-[18px] text-[#FFFFFF] leading-[22px"
            >
              Products
            </a>
            <a
              href="#"
              className="font-inter font-medium text-[14px] lg:text-[18px] text-[#FFFFFF] leading-[22px"
            >
              Contact
            </a>
          </div>
          <div className="footerSocialIcon flex gap-[29px] ">
            <FaSquareInstagram className=" w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#FFFFFF] transition-all duration-300 hover:text-[#cfcece] " />
            <FaTelegram className=" w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#FFFFFF] transition-all duration-300 hover:text-[#cfcece]" />
            <RiFacebookCircleFill className=" w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#FFFFFF] transition-all duration-300 hover:text-[#cfcece]" />
          </div>
          <p className="font-inter font-medium text-[14px] lg:text-[18px] leading-[22px] text-[#FFFFFF] pt-[20px]">
            © 2024 All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
