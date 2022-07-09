import Image from "next/image";

const Statistics = () => {
  return (
    <>
      <div className="pt-[90px] pb-[56px] px-[50px] relative">
        <div className="absolute h-full w-[180px] top-0 right-0 bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px]"></div>
        <div className="absolute h-[107px] w-[59px] top-0 right-0 bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-40 blur-[50px]"></div>
        <div className="absolute h-[137px] w-[69px] top-0 left-0 bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px]"></div>
        <div className="flex flex-row-reverse justify-between">
          <div className="flex items-center">
            <div className="flex flex-col items-end pr-3">
              <span className="text-[#335471] text-[30px]">500</span>
              <span className="text-[16px] text-[#454849] font-iranYekan leading-[34px]">
                فارغ التحصیل مشغول به کار
              </span>
            </div>
            <div className="bg-gradient-[134deg] from-[#E6EAED] to-[#8094A6] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#CCD4DB] absolute w-[44px] h-[44px] blur-[10px] bottom-0"></div>
              <Image src="/assets/images/student.png" width={31} height={28} alt='student'/>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-end pr-3">
              <span className="text-[#CC6123] text-[30px]">1000</span>
              <span className="text-[16px] text-[#454849] font-iranYekan leading-[34px]">
                ساعت دوره آموزشی حضوری
              </span>
            </div>
            <div className="bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#FFE4D5] absolute w-[44px] h-[44px] blur-[10px] bottom-0"></div>

              <Image src="/assets/images/clock.png" width={30} height={30} alt='clock'/>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-end pr-3">
              <span className="text-[#3086A6] text-[30px]">10</span>
              <span className="text-[16px] text-[#454849] font-iranYekan leading-[34px]">
                استاد برجسته و ماهر
              </span>
            </div>
            <div className="bg-gradient-[132deg] from-[#ECF9FD] to-[#DAF2FB] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#DAF2FB] absolute w-[36px] h-[36px] blur-[10px] bottom-0"></div>

              <Image src="/assets/images/teacher.png" width={30} height={33} alt='teacher'/>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-end pr-3">
              <span className="text-[#4D5051] text-[30px]">6</span>
              <span className="text-[16px] text-[#454849] font-iranYekan leading-[34px]">
                دوره پرطرفدار و به روز
              </span>
            </div>
            <div className="bg-gradient-[129deg] from-[#EDEEEE] to-[#CACBCB] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#DBDCDC] absolute w-[36px] h-[36px] blur-[10px] bottom-0"></div>

              <Image src="/assets/images/course.png" width={30} height={28} alt='course'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
