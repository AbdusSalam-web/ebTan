import React from "react";
import { FaStar, FaSyringe } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const WhyUs = () => {
  return (
    <>
      <section className="why_us w-full bg-[#F6F4F0] pt-[191px] pb-[121px] ">
        <div className="container w-[1180px] mx-auto flex flex-col items-center">
          <div className="heading w-[526px] pb-[60px] ">
            <h2 className=" font-ptSerif font-normal text-[48px] text-[#333333] text-center pb-[21px] ">
              Why <span className="text-[#C51605]">choose</span> us
            </h2>
            <p className=" font-inter font-medium text-[18px] text-[#A0A79A] text-center ">
              SLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="w-[1180px] flex gap-[20px] items-center justify-center flex-wrap lg:flex-nowrap  ">
            <div className=" bg-[#F0EFEA]  pt-[32px] pl-[26px] pr-[41px] pb-[41px] ">
              <div className="icon w-[58px] h-[58px] rounded-full bg-[#CDD5CA] flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  transition-all duration-300 hover:shadow-none">
                <FaStar className="text-[35px] text-[#C51605]" />
              </div>
              <h3 className="font-inter font-bold text-[22px] text-[#333333] leading-[32px] pt-[20px] pb-[11px] ">
                Dermatologist Tested
              </h3>
              <p className="font-inter font-medium text-[18px] text-[#A0A79A] leading-[26px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className=" bg-[#F0EFEA]  pt-[32px] pl-[26px] pr-[41px] pb-[41px] ">
              <div className="icon w-[58px] h-[58px] rounded-full bg-[#CDD5CA] flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-none">
                <FaSyringe className="text-[35px] text-[#C51605]" />
              </div>
              <h3 className="font-inter font-bold text-[22px] text-[#333333] leading-[32px] pt-[20px] pb-[11px] ">
                Dermatologist Tested
              </h3>
              <p className="font-inter font-medium text-[18px] text-[#A0A79A] leading-[26px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className=" bg-[#F0EFEA]  pt-[32px] pl-[26px] pr-[41px] pb-[41px] ">
              <div className="icon w-[58px] h-[58px] rounded-full bg-[#CDD5CA] flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-none ">
                <TiTick className="text-[35px] text-[#C51605]" />
              </div>
              <h3 className="font-inter font-bold text-[22px] text-[#333333] leading-[32px] pt-[20px] pb-[11px] ">
                Dermatologist Tested
              </h3>
              <p className="font-inter font-medium text-[18px] text-[#A0A79A] leading-[26px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
