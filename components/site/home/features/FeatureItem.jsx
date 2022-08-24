import Image from "next/image";
export const FeatureItem = ({ item, index }) => {
  return (
    <>
      <div
        className={`group relative mx-auto bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] xl:shadow-[10px_10px_20px_#00000014] flex flex-col items-center xl:py-[30px] py-[19px] px-[22px] xl:w-[unset] xl:h-[unset] w-[300px] h-[205px] xl:cursor-default cursor-grab`}
      >
        <div
          className={`bg-gradient-[132deg] ${
            index === 0 || index === 4
              ? "from-[#ecf9fd] to-[#DAF2FB]"
              : index === 1 || index === 5
              ? "from-[#FFF2EA] to-[#FFD7C0]"
              : "from-[#E6EAED] to-[#CCD4DB]"
          } relative z-[1] rounded-[8px] bg-origin-padding xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] flex justify-center items-center`}
        >
          <div className="xl:h-[31px] xl:w-[28px] h-[29px] w-[26px] relative">
            <Image src={item.image} layout="fill" alt="card" />
          </div>
        </div>
        <div className="xl:mt-[25px] xl:mb-[15px] mt-5 mb-[10px] z-[1]">
          <span
            id="teacherTitle"
            className={`xl:group-hover:text-[#ECF9FD] text-center text-[#00213E] xl:text-[18px] text-[14px] xl:leading-[31px] leading-[25px] font-bold font-iranYekan transition duration-300`}
          >
            {item.obj}
          </span>
        </div>
        <div
          id="teacherDescription"
          className={`xl:group-hover:text-[#C7ECFA] text-center text-[#4D6982] xl:text-[14px] text-[10px] xl:leading-[30px] leading-[22px] font-iranYekan z-[1] transition duration-300`}
        >
          {item.description}
        </div>
        <div
          className={`${
            index === 0 || index === 4
              ? "bg-[#45C0ED]"
              : index === 1 || index === 5
              ? "bg-[#FF792C]"
              : "bg-[#00294D]"
          } xl:block hidden absolute scale-0 transition duration-300 group-hover:scale-100 group-hover:animate-mouseInPaint top-0 left-0 rounded-[20px] w-full h-full z-[0]`}
        ></div>
      </div>
    </>
  );
};
