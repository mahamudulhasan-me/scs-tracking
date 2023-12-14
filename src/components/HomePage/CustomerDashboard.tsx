"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsHeadset } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import BtnDashboard from "../ButtonGroup/BtnDashboard";
import SectionHeadTitle from "../Shared/SectionHeadTitle";

interface CustomerDashboardProps {}

const CustomerDashboard: React.FC<CustomerDashboardProps> = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/dashboard.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="px-[7%] md:grid grid-cols-12 my-20 gap-20 items-center">
      <div className="col-span-7 relative w-full h-full border bg-[url('/images/dashboard_bg.jpg')]  bg-cover bg-center">
        {animationData && <Lottie animationData={animationData} loop={true} />}
        <div className="absolute animation-container bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:-right-10 -right-2 md:top-4 -top-8 md:p-3 p-2 rounded-lg text-white flex items-center gap-3">
          <h4 className="md:text-3xl text-2xl font-semibold">400K</h4>
          <p className="md:text-lg tracking-widest ">
            Happy <br /> Customers
          </p>
        </div>
      </div>
      <div className="col-span-5 md:mt-0 mt-8">
        <SectionHeadTitle title="Customer Dashboard" />
        <h1 className="text-3xl text-slate-900 font-semibold">
          Enjoy Customer Dashboard With Interesting Features
        </h1>
        <p className="my-4 text-justify text-gray-600">
          We endeavor to comprehend what going through, what they need what
          their price tags are, and what means quite a bit to them and their
          clients. We interface with our clients.
        </p>
        <div className="text-lg text-gray-700 space-y-2 border-b mt-4 pb-8">
          <p className="flex items-center gap-2">
            <FiCheckCircle color="#ed502e" size={20} /> Creative Work Insight
          </p>
          <p className="flex items-center gap-2">
            <FiCheckCircle color="#ed502e" size={20} /> Always Work With
            Energetic Team
          </p>
          <p className="flex items-center gap-2">
            <FiCheckCircle color="#ed502e" size={20} /> We are Award Winning
            Company
          </p>
        </div>
        <div className="flex items-center md:gap-5">
          <Link
            href={"https://customer.sundarbancourierltd.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40%]"
          >
            <BtnDashboard />
          </Link>
          <div className="w-[60%] flex items-center md:p-3 p-1 bg-white rounded-md shadow-lg">
            <section className="flex justify-center items-center w-12 h-12 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <BsHeadset size={24} />
            </section>
            <section className="block border-l border-gray-300 m-3">
              <div className="pl-3">
                <h3 className="text-gray-600 font-semibold text-sm">
                  For More Details
                </h3>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  09612003003
                </h3>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;