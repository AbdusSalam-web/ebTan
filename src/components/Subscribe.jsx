import React from 'react'

const Subscribe = () => {
  return (
    <>
      <section className="subscribe bg-[#ECEBE6]">
        <div className="container w-full px-[30px] lg:w-[1167px] mx-auto pt-[80px] pb-[77px] flex justify-between items-center">
          <p className="w-[356px] font-ptSerif font-normal text-[48px] text-[#333333]">
            Subscribe to the daily
            <span className="text-[#C51605]"> updates</span>
          </p>
          <div className="w-[450px] lg:w-[700px] h-[92px] flex justify-between items-center rounded-[50px] border-[1px] border-[#A0A79A] pl-[24px] pr-[20px] ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-transparent fotn-inter font-medium text-[18px] text-[#A0A79A]"
            />
            <button className="py-[13px] px-[35px] bg-[#E52525] rounded-[50px] text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe