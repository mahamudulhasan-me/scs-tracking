import { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";
const basicInfoTH = ["", "Date", "Last Status"];

const TrackingStatusAccordion = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
      <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {basicInfoTH.map((th, index) => (
                <th
                  key={index}
                  className={`px-5 py-3 border-b-2 border-gray-200 bg-slate-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider `}
                >
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                onClick={() => setOpen(!open)}
                className="px-5  border-b border-gray-200 bg-white text-2xl cursor-pointer"
              >
                {open ? (
                  <CiSquareMinus className="hover:ring-1 transition-all duration-300 text-red-600 rounded-md ring-red-600" />
                ) : (
                  <CiSquarePlus className="hover:ring-1 transition-all duration-300 text-green-600 rounded-md ring-green-600" />
                )}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                03-Aug-2023
              </td>
              <td className="bangla-font">পণ্যটি ডেলিভারি সম্পন্ন হয়েছে</td>
            </tr>
          </tbody>
        </table>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            open ? "max-h-80" : "max-h-0"
          }`}
        >
          <table className="w-full bg-slate-600 leading-normal statusDetailsTable">
            <tbody>
              <tr>
                <td className="w-[10%]">
                  <IoCheckmarkDone color="green" size={24} />
                </td>
                <td>03-Aug-2023</td>
                <td>পণ্যটি ডেলিভারি সম্পন্ন হয়েছে</td>
              </tr>
              <tr>
                <td>
                  <IoCheckmarkDone color="green" size={24} />
                </td>
                <td>03-Aug-2023</td>
                <td>
                  পণ্যটি ঢাকা মিরপুর-১০ থেকে ঢাকা দিলকুশা এর উদ্দেশ্যে ছেড়ে
                  গেছে।
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrackingStatusAccordion;
