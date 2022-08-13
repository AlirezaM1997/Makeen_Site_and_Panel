import Image from "next/image";

export default function Slider() {
  const allSlides = [1, 2];
  return (
    <>
      <div className="mr-[108px] mt-4 ">
        <div className="shadow-[0px_0px_5px_#00000017] rounded-[14px] p-6 relative ml-[15px]">
          <header>
            <div>
              <button className="flex items-center justify-center text-[#37BBEC] border-[1px] border-[#12B428] rounded-[10px] px-4 py-[10px]">
                <span>+</span>
                <span className="text-[12px] leading-[21px] font-medium font-iranYekan ml-2">
                  افزودن عکس
                </span>
              </button>
            </div>
            <div></div>
            <hr className="mt-2 bg-[#103F7B] h-[1.5px]" />
          </header>
          <section className="grid grid-cols-3 gap-[30px] mt-8" dir="rtl">
            {allSlides.map((item, index) => (
              <div className="py-4 px-[10px] border-[1px] border-[#37BBEC] rounded-[10px] flex items-center">
                <div className="w-[35%] h-full">
                  <div className="relative w-full h-[92px]">
                    <Image
                      src={"/assets/images/slide1.png"}
                      layout="fill"
                      objectFit="cover"
                      alt="slide"
                      className="rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="w-[65%] flex"></div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
