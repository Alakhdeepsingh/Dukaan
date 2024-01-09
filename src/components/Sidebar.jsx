import React from "react";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { FiGrid } from "react-icons/fi";
import { LiaTruckSolid } from "react-icons/lia";
import { PiNavigationArrowBold } from "react-icons/pi";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";
import { CiWallet } from "react-icons/ci";
import logo from "../assets/logo.jpg";

import { IoIosArrowDown } from "react-icons/io";
import MarketingIcon from "../icons/Marketingicon";
import AnalyticsIcon from "../icons/Analyticsicon";
import PaymentsIcon from "../icons/Paymentsicon";
const Sidebar = () => {
  return (
    <div
      name="sidebar"
      className="w-[224px] pt-4 pb-4  h-[1541px] bg-[#1E2640] "
    >
      <div className="w-[208px] h-[1439px] ml-[8px] mr-[8px]  ">
        <div className="w-[192px] h-[42px] flex gap-3 ml-[6px] mr-[6px] ">
          <img
            className="w-[39px] h-[39px] rounded-[4px] mt-[4px]"
            src={logo}
            alt="logo"
          />
          <div className="w-[108px] h-[42px]  ">
            <div className="w-full h-[22px] font-inter text-base font-medium leading-6 tracking-normal text-left top-0 ">
              <h1>Nishyan</h1>
            </div>
            <div className="w-full h-[16px]">
              <a
                href="https://mydukaan.io/ "
                className="font-inter text-xs font-normal leading-4 tracking-normal text-left opacity-80 border-b-[1px] border-white"
              >
                Visit store
              </a>
            </div>
          </div>
          <IoIosArrowDown className="w-[20px] h-[20px] mt-[11px] mb-[11px]" />
        </div>
        <div className="w-full h-[1439px]  mt-[24px] flex flex-col  gap-[2px] ">
          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <GoHome className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Home
            </h1>
          </div>
          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <LuClipboardList className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Orders
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3">
            <FiGrid className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Products
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <LiaTruckSolid className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Delivery
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <MarketingIcon className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Marketing
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <AnalyticsIcon className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Analytics
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4 rounded-[4px] gap-3 bg-[#353C53]">
            <PaymentsIcon className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80 ">
              Payments
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <PiNavigationArrowBold className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Tools
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <TbDiscount2 className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Discounts
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <MdOutlinePeopleAlt className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Audience
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <MdOutlineColorLens className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Appearance
            </h1>
          </div>

          <div className="w-full h-[40px] flex pt-2 pb-2 pl-4 pr-4  gap-3  ">
            <HiOutlineBolt className="h-[20px] w-[20px] opacity-80 " />
            <h1 className="w-[40px] h-[20px] font-inter text-base font-medium leading-5 tracking-normal text-left opacity-80">
              Plugins
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[192px] h-[54px] ml-[16px]   rounded-[4px] bg-[#353C53] mr-0 ">
        <div className="w-full h-[42px] flex pt-[6px] pb-[6px] pl-[12px] pr-[12px] gap-[10px]">
          <div className="w-[36px] h-[36px] p-[6px]">
            <CiWallet className="w-[24px] h-[24px] " />
          </div>

          <div className="w-full h-[42px]">
            <div className="w-full h-[16px]">
              <h1 className="text-xs font-normal leading-4 tracking-normal text-left opacity-80 font-inter">
                Available Credits
              </h1>
            </div>
            <div className="w-[51px] h-[24px] ">
              <h1 className="text-base font-medium leading-6 tracking-normal text-left font-inter">
                222.10
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
