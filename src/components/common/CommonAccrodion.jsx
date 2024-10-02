import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const CommonAccrodion = ({ comAccroHead, comAccroDesc }) => {
    const [showAccro, setShowAccro] = React.useState(false);

  return (
    <>
      <div>
        <p
          onClick={() => setShowAccro(!showAccro)}
          className="font-inter font-semibold text-[22px] text-[#333333] leading-[29px] flex gap-[10px]  items-center cursor-pointer"
        >
          {showAccro ? <IoMdArrowDropup />: <IoMdArrowDropdown />}
          {comAccroHead}
        </p>
        {showAccro && (
          <p className=" w-[450px] font-inter font-medium text-[18px] text-[#A0A79A] p-[5px] rounded-[10px] bg-[#F0EFEA] ">
            {comAccroDesc}
          </p>
        )}
      </div>
    </>
  );
}

export default CommonAccrodion