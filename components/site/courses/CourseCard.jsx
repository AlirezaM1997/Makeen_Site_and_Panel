import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showHideModalAction } from "../../../slices/showRegistrationModalSlice";
export const CourseCard = ({ index, item }) => {
  const dispatch = useDispatch();
  const [showAndHideCourse, setShowAndHideCourse] = useState(null);
  const showAndHideToggle = (index) => {
    if (showAndHideCourse !== null) {
      setShowAndHideCourse(null);
    } else {
      setShowAndHideCourse(index);
    }
  };
  return (
    <>
      <div className="relative w-full xl:h-[395px]">
        <li
          className={`${
            showAndHideCourse === index
              ? "z-30 h-auto max-h-[950px] absolute"
              : "max-h-[395px] lg:absolute relative"
          }  mt-[0px] w-full flex flex-col items-center bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CACBCB] py-[25px] px-[20px] overflow-hidden transition-maxHeight duration-300 ease-out`}
          key={index}
        >
          <div className="h-full w-full flex justify-center">
            <div className="relative w-[100px] h-[115px]">
              <Image src={item.courses_cover} layout="fill" alt="course" />
            </div>
          </div>
          <div className="text-[#00213E] text-[18px] leading-[36px] font-bold mt-[20px] mb-[11px]">{`دوره ${item.title} `}</div>
          <div className="text-[#4D6982] text-[14px] leading-[36px] font-medium mb-[11px]">
            {item.mentor}
          </div>
          <span
            className={`${
              item.status === "T"
                ? "text-[#AC0000] bg-[#FFE8E8]"
                : "text-[#025D7E] bg-[#E4F6FC]"
            } text-center font-bold text-[14px] w-[130px] leading-[25px]  rounded-[6px] px-[10px] py-1`}
          >
            {item.status === "B"
              ? "بزودی"
              : item.status === "D"
              ? "در حال ثبت نام"
              : "تکمیل ظرفیت"}
          </span>
          <hr className="mt-[30px] mb-[25px] w-full" />
          <div
            className={`${
              showAndHideCourse === index ? "hidden" : ""
            } flex justify-center`}
          >
            <Link href={`/courses/${item.id}`}>
              <a className="text-[#8094A6] text-[16px] leading-[28px] font-bold ml-[40px] hover:text-[#00213E] transition-colors duration-300 ease-in-out">
                اطلاعات بیشتر
              </a>
            </Link>
            <div
              dir="rtl"
              className="flex justify-center items-center cursor-pointer relative"
              onClick={() => showAndHideToggle(index)}
            >
              <span className="text-[#00294D] peer text-[16px] leading-[28px] pl-1">
                ثبت نام دوره
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.041"
                height="8.554"
                viewBox="0 0 5.041 8.554"
                className="peer-hover:-translate-x-[10px] transition-all duration-300 ease-out"
              >
                <path
                  id="Path_58"
                  dataname="Path 58"
                  d="M4.229,7.567,1,4.351l3.23-3.217"
                  transform="translate(-0.249 -0.073)"
                  fill="none"
                  stroke="#8094a6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-[35px] w-full">
            <div className="bg-[#EDEEEE] rounded-[10px] flex items-center justify-between px-[10px] py-[15px] w-full mb-5">
              <div className="flex items-center">
                <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-2">
                  <div className="relative w-[18px] h-[18px] rounded-full">
                    <Image
                      src="/assets/courses/Courselength.png"
                      layout="fill"
                      alt="course"
                    />
                  </div>
                </div>
                <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                  طول دوره
                </span>
              </div>
              <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                {item.length}
              </span>
            </div>
            <div className="bg-[#EDEEEE] rounded-[10px] flex items-center justify-between px-[10px] py-[15px] w-full mb-5">
              <div className="flex items-center">
                <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-2">
                  <div className="relative w-[18px] h-[18px] rounded-full">
                    <Image
                      src="/assets/courses/Courselength.png"
                      layout="fill"
                      alt="course"
                    />
                  </div>
                </div>
                <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                  نحوه ی برگزاری دوره
                </span>
              </div>
              <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                {item.how_to_hold}
              </span>
            </div>
            <div className="bg-[#EDEEEE] rounded-[10px] flex items-center justify-between px-[10px] py-[15px] w-full mb-5">
              <div className="flex items-center">
                <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-2">
                  <div className="relative w-[18px] h-[18px] rounded-full">
                    <Image
                      src="/assets/courses/Courselength.png"
                      layout="fill"
                      alt="course"
                    />
                  </div>
                </div>
                <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                  شروع دوره
                </span>
              </div>
              <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                {item.hold_date}
              </span>
            </div>
            <div className="bg-[#EDEEEE] rounded-[10px] flex items-center justify-between px-[10px] py-[15px] w-full mb-5">
              <div className="flex items-center">
                <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-2">
                  <div className="relative w-[18px] h-[18px] rounded-full">
                    <Image
                      src="/assets/courses/Courselength.png"
                      layout="fill"
                      alt="course"
                    />
                  </div>
                </div>
                <span className="text-[#00213E] text-[14px] leading-[24px] font-bold">
                  پیش نیازها
                </span>
              </div>
              <span className="text-[#00213E] text-[14px] leading-[24px] font-bold text-right">
                {item.prerequisites}
              </span>
            </div>
            <div
              className={`${
                item.status === "T" ? "hidden" : ""
              } flex justify-center`}
            >
              <button
                onClick={() => dispatch(showHideModalAction(true))}
                className="py-[14px] px-[73px] bg-[#00294D] rounded-[10px] text-[#ECF9FD] font-bold text-base"
              >
                ثبت نام
              </button>
            </div>
            <div className="flex justify-center mt-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.041"
                height="8.554"
                viewBox="0 0 5.041 8.554"
                className=" transition-all duration-300 ease-out rotate-90 cursor-pointer"
                onClick={() => showAndHideToggle(index)}
              >
                <path
                  id="Path_58"
                  dataname="Path 58"
                  d="M4.229,7.567,1,4.351l3.23-3.217"
                  transform="translate(-0.249 -0.073)"
                  fill="none"
                  stroke="#8094a6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};
