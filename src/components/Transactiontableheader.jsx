import React from "react";
import { CiCircleAlert } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Transactiontableheader = () => {
  const headerItems = [
    { label: "Order Id", width: "246px", justifyContent: "flex-start" },
    {
      label: "Order-Date",
      width: "246px",
      justifyContent: "flex-start",
      hasIcon: true,
    },
    { label: "Order Amount", width: "246px", justifyContent: "flex-end" },
    {
      label: "Transaction Fees",
      width: "246px",
      justifyContent: "flex-end",
      hasIcon: true,
    },
  ];

  return (
    <div className="w-[1128px] h-[40px] bg-[#F2F2F2] flex gap-[40px] pt-[10px] pb-[10px] pr-[12px] pl-[12px] mb-[12px] ml-[8px] rounded-[4px] mr-[8px]">
      {headerItems.map((item, index) => (
        <div
          key={index}
          className={`w-[${item.width}] h-[20px] flex items-center ${item.justifyContent}`}
        >
          <h1>{item.label}</h1>
          {item.hasIcon && <IoIosArrowDown className="ml-2" />}
          {item.hasIcon && <CiCircleAlert className="ml-2" />}
        </div>
      ))}
    </div>
  );
};

export default Transactiontableheader;
