import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PaginationButton = ({ onClick, children }) => (
  <button
    className="text-black border-[1px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2"
    onClick={onClick}
  >
    {children}
  </button>
);

const PageButton = ({ onClick, isActive, children }) => (
  <li onClick={onClick}>
    <button
      className={`rounded w-[30px] h-[30px] mx-1 text-xs ${
        isActive ? "bg-blue-900 text-white" : "hover:bg-gray-100 text-black"
      }`}
    >
      {children}
    </button>
  </li>
);

const Pagination = () => {
  const [page, setPage] = useState(10);
  const values = [1, "...", 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <ul className="flex items-center mx-auto my-6 w-fit">
      <li>
        <PaginationButton>
          <IoIosArrowBack />
          <h1> Previous</h1>
        </PaginationButton>
      </li>
      {values.map((item, index) => (
        <PageButton
          key={index}
          onClick={() => setPage(item)}
          isActive={page === item}
        >
          {item}
        </PageButton>
      ))}
      <li>
        <PaginationButton>
          <h1>Next</h1>
          <IoIosArrowForward />
        </PaginationButton>
      </li>
    </ul>
  );
};

export default Pagination;
