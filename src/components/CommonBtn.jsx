import React from 'react'

const CommonBtn = ({ commonBtnText, icon }) => {
  return (
      <button className="py-[13px] px-[35px] bg-[#E52525] rounded-[5px] text-white flex gap-[16px] items-center font-inter font-medium text-[18px] transition-all duration-300 hover:shadow-xl opacity-90 hover:opacity-100 ">
          {icon}
      {commonBtnText}
    </button>
  );
}

export default CommonBtn