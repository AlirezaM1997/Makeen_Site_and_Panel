import Image from "next/image";
export default function BlogCard({i , index}) {
  return (
    <>
      <div
        key={index}
        className="bg-[#FFFFFF] mt-[50px] xl:p-[20px] p-[14px] border-[0.5px] border-[#CACBCB] rounded-[15px] xl:hover:mt-[40px] transition-spacing duration-300 ease-out"
      >
        <div className="relative xl:h-[220px] h-[201px]">
          <Image
            layout="fill" className="rounded-[6px]"
            src={"/assets/images/lastBlog.png"}
            alt="Magazine"
          />
        </div>
        <div className="flex justify-end my-[20px]">
          <span className="xl:text-[12px] text-[10px] text-[#1A3E5F] leading-[21px] font-bold font-iranYekan p-[10px] rounded-[8px] bg-gradient-[106deg] from-[#E6EAED] to-[#CCD4DB]">
            {"PHP برنامه نویسی "}•
          </span>
        </div>
        <div dir="ltr" className="xl:text-[18px] text-[16px] text-[#00213E] xl:leading-[31px] leading-[28px] font-bold font-iranYekan text-right mb-[42px]">
        rem از px چرا طراحان باید به جای استفاده از استفاده کنند؟ + راه حل در فیگما
        </div>
        <hr />
        <div className="flex justify-between items-center pt-[21px]">
          <div className="relative w-[35px] h-[35px]">
            <Image
              layout="fill"
              className="rounded-full"
              src={"/assets/images/sadeghikia.png"}
              alt="magazineAvatar"
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="xl:text-[12px] text-[10px] text-[#4D6982] leading-[16px] font-medium font-iranYekan">
                1400 آبان 4
              </span>
              <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 xl:w-[35px] xl:h-[35px] w-[32px] h-[32px] flex justify-center items-center ml-3">
                <div className="relative w-[14px] h-[16px]">
                  <Image
                    layout="fill"
                    src={"/assets/images/calendar.png"}
                    alt="calendar"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center ml-[30px]">
              <span className="xl:text-[12px] text-[10px] text-[#4D6982] leading-[16px] font-medium font-iranYekan">
                320
              </span>
              <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 xl:w-[35px] xl:h-[35px] w-[32px] h-[32px] flex justify-center items-center ml-3">
                <div className="relative w-[20px] h-[12px]">
                  <Image
                    layout="fill"
                    src={"/assets/images/eye.png"}
                    alt="eye"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
