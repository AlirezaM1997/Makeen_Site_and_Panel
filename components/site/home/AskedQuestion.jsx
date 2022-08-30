import Image from "next/image";
import { useEffect, useState } from "react";
export default function AskedQuestion({ questions }) {
  const qLength = questions?.length;
  const [showAndHideAnswer, setShowAndHideAnswer] = useState(null);
  const [count, setCount] = useState(6);
  const [h, setH] = useState();
  const showAndHideToggle = (index) => {
    if (showAndHideAnswer !== null) {
      setShowAndHideAnswer(null);
    } else {
      setShowAndHideAnswer(index);
    }
  };
  const loadMore = () => {
    setCount(count + 2);
  };
  const loadLess = () => {
    setCount(6);
  };
  useEffect(() => {
    if (window.innerWidth < 1280) {
      setCount(3);
    }
  }, []);
  return (
    <>
      <div
        className={`relative h-auto w-full bg-[#001d36] py-[50px] xl:mb-[142px] mb-[82px] font-iranYekan`}
      >
        <div className="absolute -left-[290px] top-0 h-[390px] w-[390px] mix-blend-lighten">
          <Image
            layout="fill"
            src={"/assets/images/course-left.png"}
            alt="orangeCircle"
          />
        </div>
        <div className="absolute right-0 bottom-[4px] h-[230px] w-[188px] mix-blend-lighten">
          <Image
            layout="fill"
            src={"/assets/images/course-left-cut.png"}
            alt="orangeCircle"
          />
        </div>
        <h1 className="text-[#ECF9FD] flex justify-center mb-[57px] xl:text-[20px] text-[16px] font-extrabold">
          سوالات متداول شما
        </h1>
        <ul
          className="grid xl:grid-cols-2 grid-cols-1 gap-[30px] w-full px-[30px] relative"
          dir="rtl"
        >
          {questions.slice(0, count).map((item, index) => (
            <div className="relative" key={index}>
              <li
                className={`${
                  showAndHideAnswer === index
                    ? "z-10 h-auto xl:absolute"
                    : "relative xl:h-[100px] h-[140px]"
                }  flex flex-col items-center cursor-pointer bg-[#FFFFFF] border-[1px] xl:rounded-[20px] rounded-[10px] border-[#CACBCB] xl:py-[30px] py-[20px] px-[20px] overflow-hidden transition-height duration-300 ease-out`}
                onClick={() => showAndHideToggle(index)}
                key={index}
              >
                <div className="w-full flex xl:flex-row flex-col justify-start items-center mb-[20px]">
                  <div className="bg-[#FFD7C0] xl:ml-[6px] rounded-[8px] w-[40px] h-[40px] flex justify-center items-center">
                    <div className="w-[20px] h-[20px] relative">
                      <Image
                        src="/assets/images/commentRed.png"
                        layout="fill"
                        alt="question"
                      />
                    </div>
                  </div>
                  {showAndHideAnswer === index ? (
                    <div className="absolute duration-300 left-1/2 bottom-[20px] xl:bottom-[unset] xl:translate-x-[unset] -translate-x-1/2  xl:left-[15px] w-[12px] h-[6px] rotate-180">
                      <Image
                        layout="fill"
                        src={"/assets/images/arrow-down.png"}
                        alt="arrow-down"
                      />
                    </div>
                  ) : (
                    <div className="absolute duration-300 left-1/2 bottom-[20px] xl:bottom-[unset] xl:translate-x-[unset] -translate-x-1/2 xl:left-[15px] w-[12px] h-[6px]">
                      <Image
                        layout="fill"
                        src={"/assets/images/arrow-down.png"}
                        alt="arrow-down"
                      />
                    </div>
                  )}
                  <div className={`${
                    showAndHideAnswer === index ? "text-[11px]" : "text-[12px]"
                  } xl:text-[16px]  text-[#00294D] xl:leading-[28px] leading-[21px] xl:mt-0 mt-[10px] xl:text-right text-center transition-all duration-300 ease-out`}>
                    {item.question}
                  </div>
                </div>
                <div
                  className={`${
                    showAndHideAnswer === index ? "pb-5" : "mt-[30px] "
                  } xl:text-[14px] text-[12px] text-[#4D6982] xl:leading-[30px] leading-[21px] `}
                >
                  <hr className="mb-[20px]" />
                  {item.answer}
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className="mt-[50px] text-center">
          {qLength != count ? (
            <button
              className="text-[#c1c4c5] hover:text-[#fdfdfd]"
              onClick={() => loadMore()}
            >
              مشاهده ی سوالات بیشتر
            </button>
          ) : (
            <button
              className="text-[#c1c4c5] text-[14px] hover:text-[#fdfdfd]"
              onClick={() => loadLess()}
            >
              مشاهده ی سوالات کمتر
            </button>
          )}
        </div>
      </div>
    </>
  );
}
