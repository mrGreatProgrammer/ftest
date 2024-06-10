import React from "react";

const BannerWithTimer = () => {
  return (
    <div className="bg-yellow-100 rounded-3xl py-8 px-14 flex flex-col items-center max-w-[344px]">
      <h3 className="text-xl max-w-[185px] text-center" >Следующее занятие начнется через:</h3>
      <div className="text-sm text-center my-5">
        <span className="text-4xl">6</span>д{" "}
        <span className="text-4xl">12</span>ч{" "}
        <span className="text-4xl">24</span>мин
      </div>
      <button className="bg-transparent rounded-3xl border-dashed duration-150 hover:text-yellow-100 hover:bg-[#323854] text-base py-3 px-16 border border-[#323854]" >Button</button>
    </div>
  );
};

export default BannerWithTimer;
