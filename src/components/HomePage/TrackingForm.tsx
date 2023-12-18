"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  TbCalendarSearch,
  TbEdit,
  TbListSearch,
  TbMapPinSearch,
} from "react-icons/tb";
import BtnClose from "../ButtonGroup/BtnClose";
import BtnComplain from "../ButtonGroup/BtnComplain";
import SubModal from "../TrackingDetails/SubModal";
import TrackingDetailsByCN from "../TrackingDetails/TrackingDetailsByCN";
const TrackingForm: React.FC = () => {
  const [trackingReferenceValue, setTrackingReferenceValue] = useState("");
  const [CNDetailsModalOpen, setCNDetailsModalOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);

  const handleTracking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const trackingReference = form.trackingReference.value;
    const lastDays = form.lastDays.value;

    if (trackingReference === "cnNumber") {
      // Open the modal
      setCNDetailsModalOpen(true);
    } else {
      // Open the sub modal
      setIsSubModalOpen(true);
    }
  };

  const closeCNDetailsModal = () => {
    // Close the modal
    setCNDetailsModalOpen(false);
  };
  const closeSubModal = () => {
    // Close the modal
    setIsSubModalOpen(false);
  };
  return (
    <>
      <div className="tracking-form absolute md:bottom-[30%] bottom-[25%] md:h-56 h-1/2 md:w-4/5 mx-5 md:mx-auto left-0 right-0">
        <div className="flex justify-between items-center px-2  border-b border-borderColor">
          <div className="flex gap-1 ">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>

          <div className="flex mx-auto text-center items-center gap-2 text-slate-50 uppercase  text-lg">
            <div className="flex flex-col gap-1 items-end">
              <span className="w-6 h-0.5 bg-orange-dark"></span>
              <span className="w-10 h-0.5 bg-orange-dark"></span>
            </div>
            Track Your Parcel
          </div>
        </div>

        <div className="w-full md:h-[calc(100%-40px)] flex justify-between items-center px-5">
          <form
            onSubmit={handleTracking}
            className="md:grid md:grid-cols-12 items-center md:justify-between justify-stretch gap-5 md:py-0 py-5 w-full md:space-y-0 space-y-4"
          >
            <div
              className={`col-span-3 w-full h-12 hover:ring-2 ring-borderColor duration-200 hover:duration-200 transition-all flex items-center  border  border-borderColor focus:outline-none rounded-md`}
            >
              <TbListSearch className="text-3xl w-16 text-white" />

              <select
                className="h-full w-full px-2 outline-none border-l bg-slate-100 text-slate-950 rounded-r-md "
                name="trackingReference"
                onChange={() => setTrackingReferenceValue("")}
              >
                <option value="cnNumber">CN Number</option>
                <option value="receiverContact">Receiver Contact</option>
                <option value="senderContact">Sender Contact</option>
                <option value="referenceNumber">Reference Number</option>
              </select>
            </div>
            <div
              className={`col-span-3 w-full h-12 hover:ring-2 ring-borderColor duration-200 hover:duration-200 transition-all flex items-center  border  border-borderColor focus:outline-none rounded-md`}
            >
              <TbCalendarSearch className="text-3xl w-16 text-white " />

              <select
                className="h-full w-full px-2 outline-none border-l bg-slate-100 text-slate-95 rounded-r-md "
                name="lastDays"
              >
                <option value="7">Last 7 Days</option>
                <option value="14">Last 14 Days</option>
                <option value="21">Last 21 Days</option>
                <option value="30">Last 30 Days</option>
              </select>
            </div>

            <div
              className={`col-span-4 w-full h-12 hover:ring-2 ring-borderColor duration-200 hover:duration-200 transition-all flex items-center  border  border-borderColor focus:outline-none rounded-md`}
            >
              <TbEdit className="text-3xl w-16 text-white" />

              <input
                type="number"
                required
                name="trackingReferenceValue"
                value={trackingReferenceValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTrackingReferenceValue(e.target.value)
                }
                className="h-full w-full px-2 outline-none border-l bg-slate-100 text-slate-950  rounded-r-md appearance-none"
              />
            </div>

            <button className=" md:col-span-2 md:w-full w-1/2 text-center mx-auto cssbuttons-io-button bg-primary-dark">
              Search
              <div className="icon">
                <TbMapPinSearch size={28} />
              </div>
            </button>
          </form>
        </div>
        <p className="absolute bottom-0 text-center text-sm text-slate-100 w-full mx-auto mb-2">
          *Track your CN details in one place with real-time updates. Track your
          product by CN Number, Sender Phone, Receiver Phone or Ref No.
        </p>
      </div>

      {/* this is sub modal where have a multiple cn by receiver or sender number */}
      {isSubModalOpen && (
        <div className="fixed inset-0 tracking-infoTable flex items-center justify-center  z-50">
          <div className="absolute top-10 bg-white p-4 rounded-lg shadow-lg md:w-4/5 w-[98%] mt-5 min-h-fit">
            <SubModal setCNDetailsModalOpen={setCNDetailsModalOpen} />
            <div className="flex justify-end items-center gap-4">
              <BtnClose onClick={closeSubModal} />
            </div>
          </div>
        </div>
      )}
      {/* cn details modal  */}
      {CNDetailsModalOpen && (
        <div className="fixed inset-0 tracking-infoTable flex items-center justify-center z-50 overflow-auto">
          <div className="absolute top-0  bg-white p-4 rounded-lg shadow-lg md:w-4/5 w-[98%] my-5 h-fit">
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

export default TrackingForm;
