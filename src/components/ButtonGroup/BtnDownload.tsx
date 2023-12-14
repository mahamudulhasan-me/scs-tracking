import Image from "next/image";
import Link from "next/link";

interface BtnDownloadProps {
  to: string;
  img: string;
  platform: string;
  active?: string;
}

const BtnDownload = ({ to, img, platform, active }: BtnDownloadProps) => {
  return (
    <Link
      href={to}
      className={` ${active} w-48 border hover:border-purple-950   px-5  py-2 rounded-full flex items-center gap-2 hover:bg-purple-950 duration-300 hover:duration-300 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={img}
          alt="Download sundarban courier tracking app"
          width={150}
          height={50}
          className="w-10"
        />
        <div className="text-left">
          <p className="text-xs">Available on</p>
          <p>{platform}</p>
        </div>
      </div>
    </Link>
  );
};

export default BtnDownload;
