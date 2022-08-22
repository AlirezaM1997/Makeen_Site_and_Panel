function Dots({ activeIndex, onclick, sliderImage, timer }) {
  return (
    <>
      <div className="all-dots mt-[30px] flex justify-center">
        {sliderImage.map((slide, index) => (
          <span
            key={index}
            className={`${
              activeIndex === index
                ? "_active-dot xl:h-3 xl:w-3 h-2 w-2 cursor-pointer mx-[5px] rounded-full inline-block"
                : "xl:h-3 xl:w-3 h-2 w-2 cursor-pointer mx-[5px] bg-[#CACBCB] rounded-full inline-block"
            }`}
            onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
      <style>
        {`._active-dot{
            background: conic-gradient(#00294D ${timer}% , white 0 60%);
        }`}
      </style>
    </>
  );
}

export default Dots;
