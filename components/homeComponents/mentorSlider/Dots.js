export default function Dots({ activeIndex, onclick, sliderImage, timer }) {
  return (
    <>
      <div className="all-dots mt-[40px] flex justify-center">
        {sliderImage.map((slide, index) => (
          <span
            key={index}
            className={`${
              activeIndex === index
                ? "active-dot h-[12px] w-[12px] cursor-pointer mx-[5px] rounded-full inline-block"
                : "h-[12px] w-[12px] cursor-pointer mx-[5px] bg-[#CACBCB] rounded-full inline-block"
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