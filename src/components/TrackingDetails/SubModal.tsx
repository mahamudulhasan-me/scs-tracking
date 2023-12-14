import { useState } from "react";
import BtnClose from "../ButtonGroup/BtnClose";
import BtnComplain from "../ButtonGroup/BtnComplain";
import TrackingDetailsByCN from "./TrackingDetailsByCN";

const basicInfoTH = [
  "SL",
  "Booking Date",
  "CN Number",
  "From",
  "Destination",
  "Status",
  "Receiver Contact",
  "Item Description",
  "LOT",
];
const SubModal = () => {
  const [CNDetailsModalOpen, setCNDetailsModalOpen] = useState(false);
  const closeCNDetailsModal = () => {
    // Close the modal
    setCNDetailsModalOpen(false);
  };
  return (
    <>
      <div className="subModal">
        <div className="overflow-x-auto mb-5">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr className="bg-slate-50 hover:bg-slate-200 w-full">
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
                  <td>1</td>
                  <td>02-Aug-2023</td>
                  <td onClick={() => setCNDetailsModalOpen(true)}>
                    <div className="relative inline-block">
                      <span className="ring-1 ring-purple-600 p-2 rounded-lg border-slate-300 hover:bg-purple-700 hover:text-white hover:ring-0 transition-all duration-300 cursor-pointer">
                        70159001086027
                      </span>
                      <div className="tooltip-text absolute bg-purple-700 text-white p-2 rounded-lg invisible opacity-0 bottom-full left-1/2 transform -translate-x-1/2 transition-all duration-300">
                        View Details
                      </div>
                    </div>
                  </td>
                  <td>Mirpur-10, Dhaka (M10)</td>
                  <td>Narsingdhi</td>
                  <td>Delivered</td>
                  <td>01710142370</td>
                  <td>01710142370</td>
                  <td>01710142370</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {CNDetailsModalOpen && (
        <div className=" inset-0 tracking-infoTable flex items-center justify-center absolute z-50 rounded-t-md">
          <div className="absolute top-0 bg-white p-4 rounded-lg shadow-lg w-full ">
            <TrackingDetailsByCN onClick={closeCNDetailsModal} />
            <div className="flex justify-end items-center gap-4 mt-4">
              <BtnComplain /> <BtnClose onClick={closeCNDetailsModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubModal;