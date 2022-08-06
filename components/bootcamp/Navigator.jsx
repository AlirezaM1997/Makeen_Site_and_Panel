import { useState } from "react";

const Navigator = () => {
  const [makeen, setMakeen] = useState(false);

  const goToMakeen = () => {
    setMakeen(!makeen);
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  const goToWhatIsBootcamp = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const goToDifferenceBetweenBootcamAndInstitude = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  const goToBaseOnProject = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        dir="rtl"
        className="w-[211px] pr-[20px] pt-[35px]  h-[255px] z-40 bg-[#FFFFFF] border-[0.5px] rounded-[10px] left-[1200px] mr-[30px] mt-[170px]
                  sticky top-[310px] border-[#CACBCB] text-[#4D6982] "
      >
        <div className=" border-r-[1px] border-[#EDEEEE] pr-[10px] font-iranYekan font-bold leading-[20px] text-[14px] ">
          <h4
            onClick={() => goToMakeen()}
            className={`hover:text-[#00213E] mb-[35px] cursor-pointer `}
          >
            بوت کمپ مکین
          </h4>
          <h4
            onClick={() => goToWhatIsBootcamp()}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
            بوت کمپ چیست؟
          </h4>
          <h4
            onClick={() => goToDifferenceBetweenBootcamAndInstitude()}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
            فرق بوت کمپ با آموزشگاه
          </h4>
          <h4
            onClick={() => goToBaseOnProject()}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
            پروژه محور بودن
          </h4>
        </div>
      </div>
    </>
  );
};

export default Navigator;
