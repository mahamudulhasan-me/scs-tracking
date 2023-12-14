"use client";

import { IoCloseCircleSharp } from "react-icons/io5";
import TrackingStatusAccordion from "./TrackingStatusAccordion";

const basicInfoTH = [
  "Booking Form",
  "Destination",
  "Status",
  "Receiver Contact",
  "Item Description",
  "LOT",
];
interface TrackingDetailsByCNProps {
  onClick: () => void;
}
const TrackingDetailsByCN = ({ onClick }: TrackingDetailsByCNProps) => {
  return (
    <>
      <IoCloseCircleSharp
        onClick={onClick}
        className="absolute -top-1 -right-1 text-red-600 cursor-pointer text-right text-4xl hover:ring-1 ring-red-600 transition-all duration-300 rounded-full"
      />
      <div className="text-left text-gray-700 bg-slate-200 p-2 rounded-md mb-5">
        <h1 className="text-xl font-semibold mb-4">
          <span className="border border-p2 text-p2 bg-opacity-20  bg-p2 rounded-md p-1 font-normal">
            CN Number:
          </span>{" "}
          70159001086032
        </h1>
        <p>
          {" "}
          <span className="border border-purple-600 text-purple-700  bg-purple-200 rounded-md p-1">
            Booking Date:
          </span>{" "}
          02-Aug-2023
        </p>
      </div>

      {/* info table-1 */}
      <div className="overflow-x-auto mb-5">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {basicInfoTH.map((th, index) => (
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-slate-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    key={index}
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  Dhaka
                </td>
                <td>Rangpur</td>
                <td>Delivered</td>
                <td>****2370</td>
                <td>Cloths</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <TrackingStatusAccordion />
    </>
  );
};

export default TrackingDetailsByCN;
