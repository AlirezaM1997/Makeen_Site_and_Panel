import Image from "next/image";
import { useState } from "react";
export default function AskedQuestion() {
  const Q = [1, 2, 3, 4, 5, 6];
  const [showAndHideAnswer, setShowAndHideAnswer] = useState(false);
  return (
    <>
      <div className=" w-full font-iranYekan ">
        <div className="h-[629px] bg-[#001d36] mb-[80px] relative ">
          {/* <div className="absolute bg-red-500">
            <Image width={100} height={100} src={'/assets/images/orangeCircle.png'} alt="Orange Cirle" />
          </div> */}
          <h1 className="text-[#ECF9FD] w-full flex justify-center mt-[60px] text-[20px] font-extrabold font-iranYekan absolute ">
            سوالات متداول شما
          </h1>
          <div>
            <ul
              className="grid grid-cols-2 gap-[30px] w-full top-[143px] px-[30px]	absolute"
              dir="rtl"
            >
              {Q.map((item, index) => (
                <li
                  onClick={() => setShowAndHideAnswer(!showAndHideAnswer)}
                  id="toggle"
                  key={index}
                  className="flex relative cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]"
                >
                  <div className="bg-[#FFD7C0] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                    <Image
                      src="/assets/images/commentRed.png"
                      width={20}
                      height={20}
                      alt="comments"
                    />
                  </div>
                  {showAndHideAnswer ? (
                    <div className="rotate-180 duration-300 absolute left-[15px] ">
                      <Image
                        width={8}
                        height={4}
                        src={"/assets/images/arrow-down.png"}
                        alt="arrow-down"
                      />
                    </div>
                  ) : (
                    <div className="absolute duration-300 left-[15px] ">
                      <Image
                        width={8}
                        height={4}
                        src={"/assets/images/arrow-down.png"}
                        alt="arrow-down"
                      />
                    </div>
                  )}
                  من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟
                  {showAndHideAnswer ? (
                    <div
                      style={{ zIndex: 999 }}
                      className=" absolute pl-[200px] pt-[50px] pb-[10px] pr-[10px] text-[#4D6982] rounded-b-[20px]  w-full left-[0px] mt-[35px] bg-inherit "
                    >
                      <hr className="w-[95%] absolute mr-[10px] top-[20px] " />
                      برای شرکت توی دوره های مکین تقریبا به هیچ دانش اولیه ای
                      احتیاج ندارید. ما شما رو .از نقطه صفر به مرحله استخدام
                      میرسونیم. فقط کافیه علاقه داشته باشید
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="text-[#c1c4c5] hover:text-[#fdfdfd] cursor-pointer w-full flex justify-center bottom-[100px] absolute font-iranYekan">
            مشاهده ی سوالات بیشتر
          </h1>
        </div>
      </div>
    </>
  );
}
