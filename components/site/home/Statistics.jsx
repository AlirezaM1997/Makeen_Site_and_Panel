import Image from "next/image";
export default function Statistics({counter}) {
  return (
    <>
      <div className="pt-[90px] pb-[56px] px-[50px] relative">
        <div className="absolute h-full w-[180px] top-0 right-0 bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px]"></div>
        <div className="absolute h-[107px] w-[59px] top-0 right-0 bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-40 blur-[50px]"></div>
        <div className="absolute h-[137px] w-[69px] top-0 left-0 bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-30 blur-[50px]"></div>
        <div className="grid lg:grid-cols-4 grid-cols-2 font-iranYekan gap-x-9 gap-y-[50px] lg:gap-x-[unset] lg:gap-y-[unset]">
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center">
            <div className="flex flex-col xl:items-end items-center xl:pr-3 mt-[6px] lg:mt-0">
              <span className="text-[#4D5051] text-[30px]">
                {counter.filter((i) => i.obj === "N").map((i) => i.value)}
              </span>
              <span className="xl:text-[16px] text-[12px] text-[#454849] xl:leading-[34px] text-center">
                دوره پرطرفدار و به روز
              </span>
            </div>
            <div className="bg-gradient-[129deg] from-[#EDEEEE] to-[#CACBCB] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#DBDCDC] absolute w-[36px] h-[36px] blur-[10px] bottom-0"></div>
              <div className="w-[30px] h-[28px] relative">
                <Image
                  src="/assets/images/course.png"
                  layout="fill"
                  alt="course"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center">
            <div className="flex flex-col xl:items-end items-center xl:pr-3 mt-[6px] lg:mt-0">
              <span className="text-[#3086A6] text-[30px]">
                {counter.filter((i) => i.obj === "T").map((i) => i.value)}
              </span>
              <span className="xl:text-[16px] text-[12px] text-[#454849] xl:leading-[34px] text-center">
                استاد برجسته و ماهر
              </span>
            </div>
            <div className="bg-gradient-[132deg] from-[#ECF9FD] to-[#DAF2FB] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#DAF2FB] absolute w-[36px] h-[36px] blur-[10px] bottom-0"></div>
              <div className="w-[30px] h-[33px] relative">
                <Image
                  src="/assets/images/teacher.png"
                  layout="fill"
                  alt="teacher"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center">
            <div className="flex flex-col xl:items-end items-center xl:pr-3 mt-[6px] lg:mt-0">
              <span className="text-[#CC6123] text-[30px]">
                {counter.filter((i) => i.obj === "S").map((i) => i.value)}
              </span>
              <span className="xl:text-[16px] text-[12px] text-[#454849] xl:leading-[34px] xl:text-right text-center">
                ساعت دوره آموزشی حضوری
              </span>
            </div>
            <div className="bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#FFE4D5] absolute w-[44px] h-[44px] blur-[10px] bottom-0"></div>
              <div className="w-[30px] h-[30px] relative">
                <Image
                  src="/assets/images/clock.png"
                  layout="fill"
                  alt="clock"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center">
            <div className="flex flex-col xl:items-end items-center xl:pr-3 mt-[6px] lg:mt-0">
              <span className="text-[#335471] text-[30px]">
                {counter.filter((i) => i.obj === "F").map((i) => i.value)}
              </span>
              <span className="xl:text-[16px] text-[12px] text-[#454849] xl:leading-[34px] xl:text-right text-center">
                فارغ التحصیل مشغول به کار
              </span>
            </div>
            <div className="bg-gradient-[134deg] from-[#E6EAED] to-[#8094A6] relative rounded-[10px] bg-origin-padding bg-no-repeat flex justify-center items-center w-[60px] h-[60px]">
              <div className="bg-[#CCD4DB] absolute w-[44px] h-[44px] blur-[10px] bottom-0"></div>
              <div className="w-[31px] h-[28px] relative">
                <Image
                  src="/assets/images/student.png"
                  layout="fill"
                  alt="student"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

