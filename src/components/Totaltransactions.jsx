import React from "react";

const Totaltransactions = () => {
  return (
    <div className="w-full h-[118px] mt-[20px] mb-[20px] flex gap-[16px] ">
      <div className="w-[566px] h-full p-[20px] border-2 shadow-md rounded-[4px] ">
        <div className="w-[526px] h-[78px] flex flex-col gap-[16px]">
          <h1 className="h-6 text-base font-normal leading-6 tracking-normal text-left font-inter w-26">
            Online orders
          </h1>
          <h1
            className="text-[32px] leading-[38px] text-[#1A181E] font-inter font-semibold  tracking-normal text-left font-[
Galano Grotesque] w-14 h-9"
          >
            231
          </h1>
        </div>
      </div>
      <div className="w-[566px] h-full p-[20px] border-2 shadow-md rounded-[4px]">
        <div className="w-[526px] h-[78px] flex flex-col gap-[16px]">
          <h1 className="h-6 text-base font-normal leading-6 tracking-normal text-left font-inter w-26">
            Amount Received
          </h1>
          <h1
            className="text-[32px] leading-[38px] text-[#1A181E] font-semibold  tracking-normal text-left  w-14 h-9 font-[
Galano Grotesque]"
          >
            ₹23,92,312.19
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Totaltransactions;
