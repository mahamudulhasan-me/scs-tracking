import TrackingForm2 from "./TrackingForm2";

interface BannerProps {}

const Banner2: React.FC<BannerProps> = () => {
  return (
    <>
      <div
        className="w-full px-[7%] h-screen bg-[url('/images/banner2.svg')] bg-cover  bg-center bg-slate-50 flex justify-start items-center
      "
      >
        <TrackingForm2 />
      </div>
      {/* <TrackingForm /> */}
    </>
  );
};

export default Banner2;
// bg-[url('/images/banner.jpg')] bg-cover  bg-center
