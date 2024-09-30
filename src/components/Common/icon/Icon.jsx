import React from "react";
import "./Icon.css";
const Icon = ({ icon }) => {
  return (
    <>
      <div className=" w-[58px] h-[58px] rounded-full bg-[#CDD5CA] transition-all duration-300  hover:shadow-none shadow-lg font-[35px] flex items-center justify-center text-[#C51605]">
        {icon}
      </div>
    </>
  );
};

export default Icon;
