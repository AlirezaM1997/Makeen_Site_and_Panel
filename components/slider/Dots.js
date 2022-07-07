
function Dots({ activeIndex, onclick, sliderImage , timer}) {

  return (
    <>
      <div className="all-dots mt-[30px] flex justify-center">
        {sliderImage.map((slide, index) => (
          <span
            key={index}
            className={`${activeIndex === index ? "active-dot" : "dot"}`}
            onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
      <style >
        {`.active-dot{
            background: conic-gradient(#00294D ${timer}% , white 0 60%);
        }`}
      </style>
    </>
  );
}

export default Dots;
