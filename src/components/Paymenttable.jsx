import React from "react";

const TableRow = ({ id, date, amount, fee }) => (
  <div className="w-[1128px] h-[48px] flex gap-[40px] pb-[14px] pr-[12px] pl-[16px] items-center rounded-[4px] border-b-[1px] border-[#D9D9D9]">
    <div className="w-[246px] h-[20px]">
      <h1 className="text-[#146EB4]">#{id}</h1>
    </div>
    <div className="w-[246px] h-[20px] flex gap-[4px] pl-[7px] items-center">
      <h1>{date}</h1>
    </div>
    <div className="w-[246px] h-[20px] flex justify-end">
      <h1>{`₹${amount}`}</h1>
    </div>
    <div className="w-[246px] h-[20px] flex justify-end gap-[4px] items-center">
      <h1>{`₹${fee}`}</h1>
    </div>
  </div>
);

const PaymentTable = () => {
  const data = Array.from({ length: 18 }, (_, index) => ({
    id: 281209 + index,
    date: "7-July-2023",
    amount: 1278.23,
    fee: 22,
  }));

  const jsxElements = data.map((item) => (
    <TableRow
      key={item.id}
      id={item.id}
      date={item.date}
      amount={item.amount}
      fee={item.fee}
    />
  ));

  return <>{jsxElements}</>;
};

export default PaymentTable;
