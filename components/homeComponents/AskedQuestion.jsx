import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function AskedQuestion() {
  const Q = [1, 2, 3, 4, 5, 6];
  const [showAndHideAnswer, setShowAndHideAnswer] = useState(null);
  const showAndHideToggle = (index) => {
    if (showAndHideAnswer !== null) {
      setShowAndHideAnswer(null);
    } else {
      setShowAndHideAnswer(index);
    }
  };
  return (
    <>
      <div className="relative h-[629px] w-full bg-[#001d36] pt-[50px] mb-[142px] font-iranYekan">
        {/* <div className="absolute bg-red-500">
            <Image width={100} height={100} src={'/assets/images/orangeCircle.png'} alt="Orange Cirle" />
          </div> */}
        <h1 className="text-[#ECF9FD] flex justify-center mb-[57px] text-[20px] font-extrabold">
          سوالات متداول شما
        </h1>
        <ul
          className="grid grid-cols-2 gap-[30px] w-full px-[30px] relative"
          dir="rtl"
        >
          {Q.map((item, index) => (
            <div className="relative">
              <li
                className={`${
                  showAndHideAnswer === index
                    ? "z-10 h-auto absolute"
                    : "relative"
                } h-[100px] flex flex-col items-center  cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] py-[30px] px-[20px] overflow-hidden transition-height duration-300 ease-out`}
                onClick={() => showAndHideToggle(index)}
                key={index}
              >
                <div className="w-full flex justify-start items-center">
                  <div className="bg-[#FFD7C0] ml-[6px] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
                    <div className="w-[20px] h-[20px] relative">
                      <Image
                        src="/assets/images/commentRed.png"
                        layout="fill"
                        alt="question"
                      />
                    </div>
                  </div>
                  {showAndHideAnswer === index ? (
                    <div className="absolute duration-300 left-[15px] w-[12px] h-[6px] rotate-180">
                      <Image
                        layout="fill"
                        src={"/assets/images/arrow-down.png"}
                        alt="arrow-down"
                      />
                    </div>
                  ) : (
                    <div className="absolute duration-300 left-[15px] w-[12px] h-[6px]">
                      <Image
                        layout="fill"
                        src={"/assets/images/arrow-down.png"}
                        alt="arrow-down"
                      />
                    </div>
                  )}
                  <div>
                    من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟
                  </div>
                </div>
                <div className="mt-[30px]">
                  <hr className="mb-[20px]" />
                  برای شرکت توی دوره های مکین تقریبا به هیچ دانش اولیه ای احتیاج
                  ندارید. ما شما رو .از نقطه صفر به مرحله استخدام میرسونیم. فقط
                  کافیه علاقه داشته باشید برای شرکت توی دوره های مکین تقریبا به
                  هیچ دانش اولیه ای احتیاج ندارید. ما شما رو .از نقطه صفر به
                  مرحله استخدام میرسونیم. فقط کافیه علاقه داشته باشید
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className="mt-[50px] text-center">
          <Link href={"#"}>
            <a className="text-[#c1c4c5] hover:text-[#fdfdfd]">
              مشاهده ی سوالات بیشتر
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}