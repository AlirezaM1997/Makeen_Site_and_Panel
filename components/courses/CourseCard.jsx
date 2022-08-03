import Image from "next/image";
import Link from "next/link";
export const CourseCard = () => {
  return (
    <>
      <div className="pt-[30px] pb-[25px] px-[30px] flex flex-col w-full h-full items-center shadow-[10px_10px_20px_#00000014] rounded-[20px] border-[0.5px] border-[#00000014]">
        <div className="relative w-[100px] h-[115px] top-0 group-hover:-top-[20px] transition-top duration-300 ease-out">
          <Image
            src="/assets/images/course-ui.png"
            layout="fill"
            alt="course"
          />
        </div>
        <div className="text-[#00213E] text-[18px] leading-[36px] font-bold mt-[20px] mb-[11px]">{`UI/UX دوره`}</div>
        <div className="text-[#4D6982] text-[14px] leading-[36px] font-medium mb-[11px]">{`امیرحسین آل احمد`}</div>
        <span className="text-center text-[#025D7E] text-[14px] w-[130px] leading-[25px] bg-[#E4F6FC] rounded-[6px] px-[10px] py-1">{`بزودی`}</span>
        <hr className="my-[30px] w-full" />
        <div className="flex justify-center">
          <Link href={"#"}>
            <a className="text-[#8094A6] text-[16px] leading-[28px] font-bold ml-[40px] hover:text-[#00213E] transition-colors duration-300 ease-in-out">
              اطلاعات بیشتر
            </a>
          </Link>
          <Link href={"#"}>
            <a className="cursor-pointer relative">
              <div dir="rtl" className="flex justify-center items-center ">
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
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
