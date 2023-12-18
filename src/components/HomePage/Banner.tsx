"use client";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import TrackingForm from "./TrackingForm";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/tracking.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
      });
  }, []);

  return (
    <>
      <div
        className="w-full px-[7%] h-[80vh] bg-[url('/images/banner.jpg')] bg-cover  bg-center bg-slate-950 bg-blend-overlay bg-opacity-60
      "
      >
        <div className="z-40">
          <Lottie
            animationData={animationData}
            loop={true}
            className="md:w-1/2 pt-16"
          />
        </div>
      </div>
      <TrackingForm />
    </>
  );
};

export default Banner;
// bg-[url('/images/banner.jpg')] bg-cover  bg-center
