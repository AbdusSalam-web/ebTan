import React from "react";
import { ReviewCard } from "./common/ReviewCard";
const Review = () => {
  return (
    <>
      <section className="review bg-[#F6F4F0] pb-[120px] ">
        <div className="container w-[1081px] mx-auto flex flex-col items-center gap-[72px]">
          <div className="reviewText w-[526px]">
            <h3 className=" font-ptSerif font-normal text-[48px] text-[#C51605] text-center mb-[21px]">
              Review
            </h3>
            <p className=" font-inter font-medium text-[18px] text-[#A0A79A] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="reviewCard w-full flex gap-[105px] flex-wrap justify-center lg:flex-nowrap">
            <ReviewCard atuhor="Ebrahim Ahmed" occupation="actor" />
            <ReviewCard atuhor="Tanvir Shantoh" occupation="actor" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
