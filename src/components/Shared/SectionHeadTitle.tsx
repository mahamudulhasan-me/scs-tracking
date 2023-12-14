import React from "react";

interface SectionHeadTitleProps {
  title: string;
}

const SectionHeadTitle: React.FC<SectionHeadTitleProps> = ({ title }) => {
  return (
    <div className="text-sm lg:text-md flex items-center gap-2 text-primary uppercase">
      <div className="flex flex-col gap-1 items-end">
        <span className="w-6 h-0.5 bg-p1"></span>
        <span className="w-10 h-0.5 bg-p1"></span>
      </div>
      {title}
    </div>
  );
};

export default SectionHeadTitle;
