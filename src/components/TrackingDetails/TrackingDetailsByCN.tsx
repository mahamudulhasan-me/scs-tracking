"use client";

import { IoCloseCircleSharp } from "react-icons/io5";
import StatusTimeline from "../StatusTimeline/StatusTimeline";
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
      <div className=" text-gray-700 bg-slate-200 pt-4 rounded-md text-center scroll-smooth">
        <h1 className="md:text-2xl text-xl font-semibold">
          Tracking CN: 70159001086032
        </h1>
        <p className="font-semibold pb-4">
          Booking Date: <span className="text-success-dark">02-Aug-2023</span>
        </p>
        <div className="bg-gray-100 py-5">
          <ul className="flex items-baseline justify-between px-2 flex-wrap">
            <li>
              <span>Booking From: </span>Dhaka
            </li>
            <li>
              <span>Destination: </span>Narsingdhi
            </li>
            <li>
              <span>Status: </span>
              Delivered
            </li>
            <li>
              <span>Receiver Contact: </span>017****70
            </li>
          </ul>
        </div>
      </div>
      <StatusTimeline />
      {/* info table-1 */}
      {/* <div className="overflow-x-auto mb-5">
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
      </div> */}
      <TrackingStatusAccordion />
    </>
  );
};

export default TrackingDetailsByCN;
