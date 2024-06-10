import React from "react";

interface MiniCardWithIconProps {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
}

const MiniCardWithIcon: React.FC<MiniCardWithIconProps> = ({
  icon,
  bgColor,
  title,
}) => {
  return (
    <div
      className="rounded-2xl max-w-[162px] pr-3 pb-3 pl-4 pt-4"
      style={{ background: bgColor && "#E8CBFF" }}
    >
      <h4 className="text-xl leading-5 max-w-[125px] text-[#323854] mb-1.5" >{title}</h4>
      <div className="flex flex-row justify-end">
        <div className="bg-white flex justify-center items-center w-10 h-10 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MiniCardWithIcon;
