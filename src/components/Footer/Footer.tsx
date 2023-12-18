import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-[10%] py-10 bg-slate-900">
      <div>
        <Image
          width={80}
          height={80}
          className="w-28 h-20"
          src={"/images/logo.png"}
          alt="Sundarban Courier logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
