import React from "react";
import { BsDownload } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";

const Transactionsearch = () => {
  return (
    <div className="w-[1128px]  h-[40px] ml-[8px]  flex  mb-3 mt-5 ">
      <div className="w-[248px] h-[40px] flex  border-[1px] border-[#D9D9D9] rounded-[4px] pt-[10px] pb-[10px] gap-[8px] pr-[16px] pl-[16px] ">
        <div>
          <CiSearch className="w-[20px] h-[20px] text-[#9999]" size={10} />
        </div>
        <input
          className="text-base font-normal leading-5 tracking-normal text-left font-inter"
          placeholder="Search by order id..."
        />
      </div>
      <div className="w-[880px] h-[40px] flex justify-end gap-[12px] mb-[12px]">
        <div className="w-[79px] h-[36px] flex border-[1px] border-[#D9D9D9] justify-between items-center pt-[6px] pb-[6px] pl-[12px] pr-[12px] rounded-[4px]">
          <h1>Sort</h1>
          <HiArrowsUpDown />
        </div>
        <div className="w-[36px] h-[36px] border-[1px] flex justify-center rounded-[4px] border-[#D9D9D9] items-center ">
          <BsDownload />
        </div>
      </div>
    </div>
  );
};

export default Transactionsearch;
