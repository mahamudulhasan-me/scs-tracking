import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const MobileStatusTimeline: React.FC = () => {
  return (
    <div className="md:hidden w-4/5 mx-auto flex-col items-start">
      <div className="rounded-full flex items-center   gap-2">
        <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

        <p className=" text-gray-700 font-semibold">Booking Complete</p>
      </div>
      <div className="bg-success-200 w-2 h-12 ml-3.5"></div>
      <div className="rounded-full flex items-center   gap-2">
        <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

        <p className=" text-gray-700 font-semibold">Sorting</p>
      </div>
      <div className="bg-success-200 w-2 h-12 ml-3.5"></div>
      <div className="rounded-full flex items-center   gap-2">
        <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

        <p className=" text-gray-700 font-semibold">In Transit</p>
      </div>
      <div className="bg-success-200 w-2 h-12 ml-3.5"></div>
      <div className="rounded-full flex items-center   gap-2">
        <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

        <p className=" text-gray-700 font-semibold">Delivered</p>
      </div>
    </div>
  );
};

export default MobileStatusTimeline;
