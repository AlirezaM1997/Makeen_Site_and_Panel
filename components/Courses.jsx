import Image from "next/image";

const Courses = () => {
  return (
    <>
      <div className="w-full h-[599px] mt-[90px]">
        <div
          dir="rtl"
          className="w-full h-[500px] bg-[#001D36] flex px-[120px] pt-[63px] justify-between items-start"
        >
          {/* <div className="relative w-[596px] h-[596px]">
            <Image src="/assets/images/course-left.png" layout="fill" />
          </div> */}
          <div className="text-[#ECF9FD]">
            <h1 className="text-[20px] leading-[35px] font-extrabold font-iranYekan">
              دوره های بوت کمپ مکین
            </h1>
            <h3 className="text-[16px] leading-[28px] font-bold font-iranYekan mt-5">
              در حال حاضر مکین این دوره ها رو برگزار می کنه
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[#ECF9FD] text-[14px] leading-[25px] font-iranYekan opacity-70">
              اطلاعات بیشتر رو از اینجا ببین
            </div>
            <div className="w-[130px] h-[40px] relative mx-[20px]">
              <Image src="/assets/images/arrow_course.png" layout="fill" />
            </div>
            <div>
              <button className="text-[#00213E] text-[16px] leading-[28px] font-bold px-[21px] py-[14px] bg-[#7DD3F2] rounded-[10px] hover:-translate-y-[6px] transition-all duration-300 hover:ease-out">
                دوره های آکادمی مکین
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
