import React from "react";
import CommonHeading from "./common/CommonHeading";
import CommonBtn from "./CommonBtn";
import { IoCart } from "react-icons/io5";
import { FaShoppingBag, FaSmile, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
const Banner = () => {
  const countRating = (
    <CountUp
      start={0.0}
      end={4.5}
      duration={2.75}
      separator="  "
      decimals={1}
      suffix="+"
    ></CountUp>
  );
  const countSold = (
    <CountUp start={0.0} end={200} duration={2.75} suffix="+"></CountUp>
  );

  const countReview = (
    <CountUp start={0.0} end={99} duration={2.75} suffix="+"></CountUp>
  );
  return (
    <>
      <section className="banner w-full bg-[#F6F4F0] ">
        <div className="container w-[1081px] sm:flex-col sm:items-center sm:p-[20px] md:py-[150px] lg:py-[120px] mx-auto flex gap-[72px] lg:flex-row  ">
          <div className="banner_image">
            <img src="./images/bannner_img.png" alt="Banner image" />
          </div>

          <div className="banner_text">
            <CommonHeading cHeading="Welcome to EbTan" />
            <h2 className=" font-ptSerif font-normal text-[72px] text-[#333333] leading-[64px] py-[20px]">
              Men’s Sunscreen hand & body
            </h2>
            <p className=" w-[572px] font-inter  font-normal text-[18px] leading-[32px] text-[#A0A79A]  pb-[94px]  ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <CommonBtn
              commonBtnText="Add to cart"
              icon={<IoCart className="text-[28px]" />}
            />
            <div className="counter pt-[42px] w-[425px] flex justify-between">
              <div className=" flex gap-[5px]">
                <FaStar className="text-[#F2994A] text-[29px] " />
                <div>
                  <p className=" font-inter font-bold text-[32px] leading-[32px] text-[#333333] ">
                    {countRating}
                  </p>
                  <p className=" font-inter font-normal text-[18px] text-[#A0A79A] leading-[26px] ">
                    Rating
                  </p>
                </div>
              </div>
              <div className=" flex gap-[5px]">
                <FaShoppingBag className="text-[#F2994A] text-[29px]" />
                <div>
                  <p className=" font-inter font-bold text-[32px] leading-[32px]  text-[#333333] ">
                    {countSold}
                  </p>
                  <p className=" font-inter font-normal text-[18px] text-[#A0A79A] leading-[26px] ">
                    Product solds
                  </p>
                </div>
              </div>
              <div className=" flex gap-[5px]">
                <FaSmile className="text-[#F2994A] text-[29px]" />
                <div>
                  <p className=" font-inter font-bold text-[32px] leading-[32px] text-[#333333] ">
                    {countReview}
                  </p>
                  <p className=" font-inter font-normal text-[18px] text-[#A0A79A] leading-[26px] ">
                    Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
