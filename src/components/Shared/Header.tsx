import Image from "next/image";
import Link from "next/link";
import BtnSignUp from "../ButtonGroup/BtnSignUp";

const Header: React.FC = () => {
  return (
    <div className="py-1 px-[10%] border-b border-[#cbd5e11a] absolute top-0 left-0 right-0 z-50 text-slate-200 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="scs logo"
            width={80}
            height={80}
            className="w-20 h-16"
          />
        </Link>
        <p className="text-2xl font-semibold md:block hidden">
          Sundarban Courier Service (Pvt.) Ltd.
        </p>
      </div>
      <Link href={"/home2"}>Another Page</Link>
      <Link
        href={"https://customer.sundarbancourierltd.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BtnSignUp />
      </Link>
    </div>
  );
};

export default Header;
