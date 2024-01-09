import { IoIosArrowDown } from "react-icons/io";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Pagination from "./components/Pagination";
import Paymenttable from "./components/Paymenttable";
import Totaltransactions from "./components/Totaltransactions";
import Transactionsearch from "./components/Transactionsearch";
import Transactiontableheader from "./components/Transactiontableheader";

function App() {
  return (
    <div className="flex justify-center h-[1583px] text-white border-r-[1px] border-b-[1px] border-[#D9D9D9] App">
      <div className="flex justify-center  w-[1440px] h-[1482px]">
        <Sidebar />
        <div name="container" className="w-[1216px] h-screen text-black ">
          <Navbar />
          <div name="body" className="w-[1152px] h-full mt-8 mb-8 ml-8 mr-8">
            <div className="w-full flex h-[36px]  justify-between">
              <div className="w-[91px] h-[28px]">
                <h1 className="text-lg font-medium leading-7 tracking-normal text-left font-inter">
                  Overview
                </h1>
              </div>

              <div className="w-[137px] h-[36px] border-[1px] flex rounded-[4px] gap-[8px] items-center justify-center border-[#D9D9D9]">
                <h1 className="text-base font-normal leading-6 tracking-normal text-left font-inter">
                  Last Month
                </h1>
                <IoIosArrowDown className="w-[20px] h-[20px] mt-1" />
              </div>
            </div>
            <Totaltransactions />
            <div className="w-full h-[1144px] mt-[20px] mb-[20px] ">
              <div className="w-[249px] h-[28px]">
                <h1 className="text-lg font-semibold leading-7 tracking-normal text-left font-inter">
                  Transactions | This Month
                </h1>
              </div>
              <Transactionsearch />
              <Transactiontableheader />

              <div className="w-[1128px] h-full flex flex-col gap-[8px] ">
                <Paymenttable />
                <div>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
