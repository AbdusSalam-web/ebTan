import { FaStar } from 'react-icons/fa'
import { IoStarSharp } from 'react-icons/io5';
export const ReviewCard = ({ atuhor, occupation }) => {
    return (
      <>
        <div className=" w-[441px] flex flex-col items-center justify-center">
          <div className=" flex justify-center gap-[25px] ">
            <IoStarSharp className="text-[#F2994A] text-[29px] " />
            <IoStarSharp className="text-[#F2994A] text-[29px] " />
            <IoStarSharp className="text-[#F2994A] text-[29px] " />
            <IoStarSharp className="text-[#F2994A] text-[29px] " />
            <IoStarSharp className="text-[#F2994A] text-[29px] " />
          </div>
          <p className="font-ptSerif font-normal text-[20px] leading-[26px] text-[#C51605] text-center py-[13px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <h4 className="font-ptSerif font-normal text-[36px] leading-[53px] text-center text-[#333333]">
            {atuhor}
          </h4>
          <p className="font-ptSerif font-normal text-[20px] text-[#F2994A] text-center">
            {occupation}
          </p>
        </div>
      </>
    );
}