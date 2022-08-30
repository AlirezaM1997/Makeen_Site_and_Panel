import Image from "next/image";
export function SliderContent({ index }) {
  return (
    <>
      <div className="flex flex-col" key={index}>
        <div className="xl:w-[420px] w-[400px]  xl:h-[300px] h-[274px] relative xl:p-[55px] p-[63px]">
          <div className="hidden xl:block">
            <Image
              className="shadow-[10px_10px_300px_#0000000D] "
              layout="fill"
              src={"/assets/images/makeenihaBackground.webp"}
              alt="makeeniha"
            />
          </div>
          <div className=" block xl:hidden">
            <Image
              className="shadow-[10px_10px_300px_#0000000D]"
              layout="fill"
              src={"/assets/images/makeenihaMobileBackground.png"}
              alt="makeeniha"
            />
          </div>
          <div className="relative xl:w-[290px] w-[250px] xl:h-[140px] h-[77px] text-[#00213E] xl:text-[16px] text-[14px] xl:leading-[28px] leading-[26px] font-medium xl:text-right text-center overflow-hidden">
            <div className="absolute">
              مکین جاییه که یاد میگیری رو پای خودت وایستی و این طوری میتونی از
              پس هر مشکلی که سر راهت قرار میگیری بر بیای
              پس هر مشکلی که سر راهت قرار میگیری بر بیای
            </div>
          </div>
        </div>
        <div
          className="flex xl:flex-row flex-col items-center xl:items-start leading-[35px] -mt-[30px] xl:pr-[20px] xl:ml-0 ml-[57px]"
          dir="rtl"
        >
          <div className="xl:w-[60px] w-[50px]  xl:h-[60px] h-[50px] relative">
            <Image
              className="rounded-full"
              src={"/assets/images/Arman.png"}
              alt="Arman"
              layout="fill"
            />
          </div>
          <div className="text-[#4D6982] xl:mr-[20px] text-center xl:text-right">
            <h1 className="text-[14px]">آرمان عبدلی</h1>
            <h1 className="text-[12px]">ویستا</h1>
          </div>
        </div>
      </div>
    </>
  );
}
