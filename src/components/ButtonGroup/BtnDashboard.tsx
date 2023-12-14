import React from "react";
import { TbArrowRight, TbChevronRight } from "react-icons/tb";

const BtnDashboard: React.FC = () => {
  return (
    <button className="group duration-300 transition-all hover:duration-300 text-slate-900 rounded-full relative w-full h-12 text-right px-4 hover:text-white">
      <div className="flex absolute items-center gap-2 h-full top-0 left-0 right-[70%] group-hover:right-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full pl-3 -z-10 duration-300 transition-all group-hover:pl-5 hover:duration-300 text-white font-semibold">
        <TbChevronRight size={24} className="group-hover:hidden" />
        <TbArrowRight
          size={24}
          className="hidden group-hover:block duration-150 transition-all hover:duration-150"
        />
      </div>
      Dashboard
    </button>
  );
};

export default BtnDashboard;
