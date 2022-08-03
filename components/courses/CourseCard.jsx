import Image from "next/image";
export const CourseCard = () => {
  return (
    <>
      <div className="pt-[30px] pb-[25px] flex flex-col w-full h-full items-center shadow-[10px_10px_20px_#00000014] rounded-[20px] border-[0.5px] border-[#00000014]">
        <div className="relative w-[100px] h-[115px] top-0 group-hover:-top-[20px] transition-top duration-300 ease-out">
          <Image
            src="/assets/images/course-ui.png"
            layout="fill"
            alt="course"
          />
        </div>
        <div className="text-[#00213E] text-[18px] leading-[36px] font-bold mt-[20px] mb-[11px]">{`UI/UX دوره`}</div>
        <div className="text-[#4D6982] text-[14px] leading-[36px] font-medium mb-[11px]">{`امیرحسین آل احمد`}</div>
        <span className="text-center text-[#025D7E] text-[14px] leading-[25px] bg-[#E4F6FC] rounded-[6px] px-[10px] py-1">{`بزودی`}</span>

      </div>
    </>
  );
};
