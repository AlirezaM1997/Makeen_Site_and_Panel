export default function Dots({ activeIndex, onclick, mentors, timer }) {
  return (
    <>
      <div className="all-dots xl:mt-[40px] -mt-[40px] flex justify-center">
        {mentors.map((slide, index) => (
          <span
            key={index}
            className={`${
              activeIndex === index
                ? "active-dot xl:h-[12px] xl:w-[12px] h-2 w-2 cursor-pointer xl:mx-[5px] mx-[2px] rounded-full inline-block"
                : "xl:h-[12px] xl:w-[12px] h-2 w-2 cursor-pointer mx-[5px] bg-[#CACBCB] rounded-full inline-block"
            }`}
            // onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
      <style>
        {`.active-dot{
            background: conic-gradient(#00294D ${timer}% , white 0 60%);
        }`}
      </style>
    </>
  );
}