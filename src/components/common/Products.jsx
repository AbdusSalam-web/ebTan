import React from "react";
import CommonHeading from "./CommonHeading";
import CommonAccrodion from "./CommonAccrodion";
import CommonBtn from "../CommonBtn";
import { IoCart } from "react-icons/io5";
const Products = () => {
  return (
    <>
      <section className="products w-full  bg-[#F6F4F0] mx-auto  ">
        <div className="container w-full  lg:w-[1208px] pt-[110px] flex md:items-center md:justify-center md:flex-wrap ">
          <div className="cream w-full flex items-center justify-center flex-wrap lg:flex-nowrap gap-[120px]">
            <div>
              <img src="./images/cream.png" alt="Cream image" className=" md:w-[600px]" />
            </div>
            <div className="product_details md:w-[500px]">
              <CommonHeading cHeading="All skins types" />
              <h3 className="w-[215px] my-[33px] font-ptSerif font-normal text-[48px] leading-[64px] text-[#333333]">
                Men’s day cream
              </h3>
              <div>
                <CommonAccrodion
                  comAccroHead="How to use"
                  comAccroDesc="Lorme Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <CommonAccrodion
                  comAccroHead="Ingredients"
                  comAccroDesc="Lorme Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <CommonAccrodion
                  comAccroHead="Benefits"
                  comAccroDesc="Lorme Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="mt-[27px] flex gap-[20px]">
                <CommonBtn
                  commonBtnText="Add to cart"
                  icon={<IoCart className="text-[28px]" />}
                />
                <p className="price font-ptSerif font-normal text-[31px] text-brand">
                  ৳ 500
                </p>
              </div>
            </div>
          </div>
          <div className="balm w-[1208px] flex gap-[190px] py-[143px] items-center justify-center flex-wrap lg:flex-nowrap">
            <div className="product_details">
              <CommonHeading cHeading="Only skins types" />
              <h3 className="w-[479px] my-[33px] font-ptSerif font-normal text-[48px] leading-[64px] text-[#333333]">
                Men's lip balm lasting (25 gr)
              </h3>
              <div>
                <CommonAccrodion
                  comAccroHead="How to use"
                  comAccroDesc="Lorme Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <CommonAccrodion
                  comAccroHead="Ingredients"
                  comAccroDesc="Lorme Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <CommonAccrodion
                  comAccroHead="Benefits"
                  comAccroDesc="Lorme Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
              <div className="mt-[27px] flex gap-[20px]">
                <CommonBtn
                  commonBtnText="Add to cart"
                  icon={<IoCart className="text-[28px]" />}
                />
                <p className="price font-ptSerif font-normal text-[31px] text-brand">
                  ৳ 300
                </p>
              </div>
            </div>
            <div>
              <img src="./images/lb.png" alt="Balm image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
