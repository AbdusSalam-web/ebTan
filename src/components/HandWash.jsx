import React from 'react'
import CommonHeading from './common/CommonHeading';
import { BsBoxSeamFill } from 'react-icons/bs';
import { FaCartPlus, FaShoppingBag, FaSmile } from 'react-icons/fa';
import CommonBtn from './CommonBtn';
import { IoCart } from 'react-icons/io5';

const HandWash = () => {
  return (
    <>
      <section className="hand_wash w-full bg-[#ECEBE6]">
        <div className="container  w-[1220px] mx-auto pt-[110px] pb-[149px] flex gap-[120px] flex-wrap ">
          <div className="product_description">
            <CommonHeading cHeading="All skins types" />
            <div className="counter pt-[36px] mb-[42px] w-[425px] flex justify-between">
              <div className=" flex gap-[5px]">
                <BsBoxSeamFill className="text-[#F2994A] text-[29px] rotate-[360deg] " />
                <div>
                  <p className=" font-inter font-bold text-[32px] leading-[32px] text-[#333333] ">
                    4.6
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
                    200+
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
                    99+
                  </p>
                  <p className=" font-inter font-normal text-[18px] text-[#A0A79A] leading-[26px] ">
                    Review
                  </p>
                </div>
              </div>
            </div>
            <h2 className="product_name font-ptSerif font-normal text-[36px] text-[#C51605] leading-[47px]">
              Men’s Hand wash lorem
            </h2>
            <div className='mt-[27px] flex gap-[20px]'>
              <CommonBtn
                commonBtnText="Add to cart"
                icon={<IoCart className="text-[28px]" />}
              />
              <p className="price font-ptSerif font-normal text-[31px] text-brand">৳ 700</p>
            </div>
          </div>
          <div className="product_image">
            <img src="./images/hand_wash.png" alt="Hand wash" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HandWash