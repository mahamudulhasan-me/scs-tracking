import BtnDownload from "../ButtonGroup/BtnDownload";
import SectionHeadTitle from "../Shared/SectionHeadTitle";

const GetApp = () => {
  return (
    <div className="getApp md:h-[40vh] bg-[url('/images/app_bg2.jpg')] bg-cover bg-center relative z-20 py-5">
      <div className="flex w-full h-full flex-col justify-center items-center text-center text-slate-50 z-20">
        <SectionHeadTitle title="Download Available" />
        <h2
          className="md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-semibold
"
        >
          Download Our Tracking App
        </h2>

        <div className="flex items-center justify-center md:gap-8 gap-3 mt-10">
          <BtnDownload
            img="/images/play_store.svg"
            platform="Google Play"
            to={"/"}
          />
          <BtnDownload
            img="/images/app_store2.svg"
            platform="App Store"
            to={"/"}
          />
          <BtnDownload
            img="/images/windows.svg"
            platform="For Windows"
            to={"/"}
            active="md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
