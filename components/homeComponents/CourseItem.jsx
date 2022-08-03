import Link from "next/link";
import Image from "next/image";

export const CourseItem = () => {
  return (
    <div className="group rounded-b-[10px] rounded-t-[10px] p-[20px] pt-[7px] w-[200px] relative shadow-[0px_0px_10px_#00000014] bg-[#FFFFFF] transition-all border-[0.5px] border-[#CACBCB] duration-300 font-iranYekan hover:cursor-grab active:cursor-grabbing hover:-mt-[10px]">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative w-[100px] h-[115px] top-0 group-hover:-top-[20px] transition-top duration-300 ease-out">
          <Image
            src="/assets/images/course-ui.png"
            layout="fill"
            alt="course"
          />
        </div>
        <div className="text-[#00213E] text-[18px] leading-[36px] font-bold mb-2">{`UI/UX دوره`}</div>
        <div className="text-center text-[#4D6982] text-[14px] leading-[25px] mb-2">{`یه دوره حرفه ای و کاربردی برای یادگیری هر چیزی که در طراحی رابط و تجربه کاربری نیاز دارید`}</div>
        <span className="text-center text-[#025D7E] text-[14px] leading-[25px] bg-[#E4F6FC] rounded-[6px] px-[10px] py-1">{`بزودی`}</span>
        <div className="flex justify-center h-0 group-hover:h-4 opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-height duration-300 ease-out hover:text-[#00213E] cursor-pointer">
          <Link href={"#"}>
            <div className=" relative">
              <a className="">
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
