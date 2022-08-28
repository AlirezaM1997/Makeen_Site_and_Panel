import Image from "next/image";
import { useState } from "react";
export default function AskedQuestion({ questions }) {
  const qLength = questions?.length;
  const [showAndHideAnswer, setShowAndHideAnswer] = useState(null);
  const [count, setCount] = useState(6);
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
  return (
    <>
      <div className="relative h-auto w-full bg-[#001d36] py-[50px] mb-[142px] font-iranYekan">
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
        <h1 className="text-[#ECF9FD] flex justify-center mb-[57px] text-[20px] font-extrabold">
          سوالات متداول شما
        </h1>
        <ul
          className="grid grid-cols-2 gap-[30px] w-full px-[30px] relative"
          dir="rtl"
        >
          {questions.slice(0, count).map((item, index) => (
            <div className="relative" key={index}>
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
                  <div>{item.question}</div>
                </div>
                <div className="mt-[30px]">
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
              className="text-[#c1c4c5] hover:text-[#fdfdfd]"
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
