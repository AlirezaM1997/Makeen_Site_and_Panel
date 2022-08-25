import Link from "next/link";
import Image from "next/image";
export const CourseItem = ({ item }) => {
  return (
    <>
      <div className="group rounded-b-[10px] rounded-t-[10px] xl:p-[20px] xl:pt-[7px] pb-[30px] pt-[40px] px-5 w-[220px] relative shadow-[0px_0px_10px_#00000014] bg-[#FFFFFF] transition-all border-[0.5px] border-[#CACBCB] duration-300 font-iranYekan xl:cursor-grab xl:hover:-mt-[10px]">
        <div className="absolute -top-[11px] left-[10px] block xl:hidden rounded-[5px]">
          <span
            className={`${
              item.status === "T"
                ? "text-[#AC0000] bg-[#FFE8E8]"
                : "text-[#025D7E] bg-[#E4F6FC]"
            } text-center text-[14px] leading-[25px] rounded-[6px] px-[10px] py-1`}
          >
            {item.status === "B"
              ? "بزودی"
              : item.status === "D"
              ? "در حال ثبت نام"
              : "تکمیل ظرفیت"}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="px-6 w-full">
            <div className="relative min-w-[100px] w-full h-[115px] top-0 xl:group-hover:-top-[20px] transition-top duration-300 ease-out">
              <Image src={item.courses_cover} layout="fill" alt="course" />
            </div>
          </div>
          <div className="text-[#00213E] text-[18px] leading-[36px] font-bold my-2">{`${item.title} دوره`}</div>
          <p
            dir="rtl"
            className="aboutCourse overflow-hidden text-ellipsis text-center text-[#4D6982] xl:text-[14px] text-[12px] xl:leading-[25px] leading-[21px] xl:mb-2 xl:h-[75px] h-[63px]"
          >
            {item.about}
          </p>
          <span
            className={`${
              item.status === "T"
                ? "text-[#AC0000] bg-[#FFE8E8]"
                : "text-[#025D7E] bg-[#E4F6FC]"
            } text-center text-[14px] leading-[25px] rounded-[6px] px-[10px] py-1 hidden xl:inline`}
          >
            {item.status === "B"
              ? "بزودی"
              : item.status === "D"
              ? "در حال ثبت نام"
              : "تکمیل ظرفیت"}
          </span>
          <div className="flex justify-center h-0 xl:group-hover:h-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:mt-4 transition-height duration-300 ease-out hover:text-[#00213E] cursor-pointer">
            <Link href={`/courses/${item.id}`}>
              <a className="relative">
                <div dir="rtl" className="flex justify-center items-center">
                  <span className="text-[#8094A6] peer text-[14px] leading-[25px] hover:text-[#00213E] transition-spacing duration-[0.4s] ease-in-out hover:pl-4 pl-1">
                    بیشتر بدانید
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5.041"
                    height="8.554"
                    viewBox="0 0 5.041 8.554"
                    className="filter peer-hover:invert-0 peer-hover:sepia-[23%] peer-hover:saturate-0 peer-hover:hue-rotate-[192deg] peer-hover:brightness-[45%] peer-hover:contrast-[42%] transition-colors duration-300 ease-out"
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
      </div>
      <style>
        {`
        .aboutCourse{
          display: -webkit-box !important;
          -webkit-line-clamp: 3 !important;
          line-clamp: 3 !important;
          -webkit-box-orient: vertical !important;
        }
        `}
      </style>
    </>
  );
};
