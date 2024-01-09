import React from "react";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import AnnouncementIcon from "../icons/Announcementicons";

const Title = () => (
  <div className="w-[70px] h-[22px]">
    <h1 className="font-medium tracking-normal text-left font-inter text-[20px] leading-[28px]">
      Payments
    </h1>
  </div>
);

const HowItWorks = () => (
  <div className="w-full h-[16px] flex gap-[6px] mt-[7px] ml-[8px] items-center">
    <CiCircleQuestion className="w-[16px] h-[16px] text-[#4D4D4D]" />
    <h1 className="font-normal tracking-normal text-left font-inter text-[12px] leading-[16px] text-[#4D4D4D]">
      How it works
    </h1>
  </div>
);

const SearchBar = () => (
  <div className="w-[400px] h-[40px] border-2 bg-[#F2F2F2] flex gap-[9px] pt-[9px] pb-[9px] pl-[16px] p-[16px] rounded-[6px] items-center">
    <CiSearch className="w-[16px] h-[16px]" />
    <input
      className="w-[213px] bg-[#F2F2F2] h-[22px] font-inter text-base font-normal leading-6 tracking-normal text-left"
      placeholder="search features, tutorials, etc."
    />
  </div>
);

const IconsSection = () => (
  <div className="w-[360px] h-[40px] flex gap-[8px] justify-end">
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#D9D9D9]">
      <AnnouncementIcon className="w-[20px] h-[20px]" />
    </div>
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#D9D9D9]">
      <MdArrowDropDown className="w-[40px] h-[40px]" />
    </div>
  </div>
);

const Navbar = () => (
  <div
    name="navbar"
    className="w-[1216px] h-[64px] pt-[12px] pb-[12px] pl-[32px] pr-[32px] top-0 flex items-center border-b-[1px] border-[#D9D9D9]"
  >
    <div className="w-[360px] h-[22px] flex gap-[16px] justify-between">
      <Title />
      <HowItWorks />
    </div>

    <SearchBar />

    <IconsSection />
  </div>
);

export default Navbar;
