export default function Navigator() {
  const goToTitle = (title) => {
    const scrollDiv = document.getElementById(`${title}`).offsetTop;
    window.scrollTo({
      top: scrollDiv -100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        dir="rtl"
        className="w-[211px] h-[255px] pr-[20px] pt-[35px] mr-[30px] mt-[170px] z-40 bg-[#FFFFFF] rounded-[10px] 
                  sticky top-[310px] left-[1200px] border-[#CACBCB] border-[0.5px] text-[#4D6982] "
      >
        <div className=" border-r-[1.5px] border-[#EDEEEE] pr-[10px] font-iranYekan font-bold leading-[20px] text-[14px] ">
          <h4
            onClick={() => goToTitle("makeenTitle")}
            
            className={`hover:text-[#00213E] mb-[35px] cursor-pointer `}
          >
            بوت کمپ مکین
          </h4>
          <h4
            onClick={() => goToTitle("bootcampTitle")}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
            بوت کمپ چیست؟
          </h4>
          <h4
            onClick={() => goToTitle("differentTitle")}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
            فرق بوت کمپ با آموزشگاه
          </h4>
          <h4
            onClick={() => goToTitle("projectTitle")}
            className="hover:text-[#00213E] mb-[35px] cursor-pointer "
          >
            پروژه محور بودن
          </h4>
        </div>
      </div>
    </>
  );
}
