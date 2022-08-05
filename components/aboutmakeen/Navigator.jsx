
import { useState } from "react";

const Navigator = () => {
  const [makeen, setMakeen] = useState(false);


  const goToWeAreMakeen = () => {
    setMakeen(!makeen)
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  const goToFeatureOfMakeen = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        dir="rtl"
        className=" w-[199px] pr-[20px] pt-[35px]  h-[141px] z-40 bg-[#FFFFFF] border-[.5px] rounded-[10px] left-[1210px] 
      sticky top-[310px] border-[#CACBCB] text-[#4D6982] "
      >
        <div className=" border-r-[1px] border-[#EDEEEE] pr-[10px] font-iranYekan leading-[20px] text-[14px] ">
          <h4
            onClick={() => goToWeAreMakeen()}
            className={`hover:text-[#00213E] mb-[35px] cursor-pointer `}
          >
            ما مکین هستیم
          </h4>
          <h4
            onClick={() => goToFeatureOfMakeen()}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
           ویژگی های آکادمی مکین
          </h4>
        </div>
      </div>
    </>
  );
};

export default Navigator;
