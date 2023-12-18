import { FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import MobileStatusTimeline from "./MobileStatusTimeline";
const StatusTimeline = () => {
  const delivery = false;
  return (
    <div className="mt-8 mb-12 flex justify-center items-center">
      <MobileStatusTimeline />
      <div className="w-4/5 mx-auto md:flex justify-center  hidden">
        <div className="rounded-full  flex  justify-center items-center relative">
          <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

          <p className="absolute -bottom-8 text-gray-700 font-semibold">
            BookingComplete
          </p>
        </div>
        <div className="w-full relative">
          <span className="absolute h-2 bg-success-200 bottom-4 left-0 right-0"></span>
        </div>
        <div className="rounded-full  flex justify-center items-center relative">
          <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

          <p className="absolute -bottom-8 text-gray-700 font-semibold">
            Sorting
          </p>
        </div>
        <div className="w-full relative">
          <span className="absolute h-2 bg-success-200 bottom-4 left-0 right-0"></span>
        </div>
        <div className="rounded-full  flex justify-center items-center relative">
          <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />

          <p className="absolute -bottom-8 text-gray-700 font-semibold">
            InTransit
          </p>
        </div>
        <div className="w-full relative">
          <span className="absolute h-2 bg-success-200 bottom-4 left-0 right-0"></span>
        </div>
        <div className="rounded-full  flex justify-center items-center relative">
          {delivery ? (
            <FaCircleCheck className="text-4xl ring ring-success-200 rounded-full text-success-dark" />
          ) : (
            <FaRegCircle className="text-4xl ring ring-success-200 rounded-full text-success-dark" />
          )}

          <p className="absolute -bottom-8 text-gray-700 font-semibold">
            Delivered
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusTimeline;
