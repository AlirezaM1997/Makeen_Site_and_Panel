import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
  const slidesData = [1, 2, 3, 4, 5, 6, 7, 8];
  const setting = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 5.5,
    slidesToScroll: 2,
    touchThreshold: 6,
  };
  return (
    <>
      <div className="w-full h-[599px] my-[90px] relative overflow-hidden">
        <div className="w-[596px] h-[596px] absolute -left-[387px] -top-[100px] mix-blend-lighten">
          <Image
            src="/assets/images/course-left.png"
            className="left-0 top-0"
            layout="fill"
            alt="bg-design-left"
          />
        </div>
        <div
          dir="rtl"
          className="w-full h-[500px] bg-[#001D36] flex px-[120px] pt-[63px] justify-between items-start"
        >
          <div className="text-[#ECF9FD]">
            <h1 className="text-[20px] leading-[35px] font-extrabold font-iranYekan">
              دوره های بوت کمپ مکین
            </h1>
            <h3 className="text-[16px] leading-[28px] font-bold font-iranYekan mt-5">
              در حال حاضر مکین این دوره ها رو برگزار می کنه
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[#ECF9FD] text-[14px] leading-[25px] font-iranYekan opacity-70">
              اطلاعات بیشتر رو از اینجا ببین
            </div>
            <div className="w-[130px] h-[40px] relative mx-[20px]">
              <Image
                src="/assets/images/arrow_course.png"
                layout="fill"
                alt="arrow_course"
              />
            </div>
            <div className="z-[1]">
              <button className="text-[#00213E] text-[16px] leading-[28px] font-bold px-[21px] py-[14px] bg-[#7DD3F2] rounded-[10px] hover:-translate-y-[6px] transition-all duration-300 hover:ease-out">
                دوره های آکادمی مکین
              </button>
            </div>
          </div>
        </div>q
        <div id="courseSlider" className="-mt-[320px]">
          <Slider {...setting}>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="group rounded-b-[10px] rounded-t-[10px] p-[20px] pt-[7px] w-[200px] relative shadow-[0px_0px_10px_#00000014] bg-[#FFFFFF] transition-all border-[0.5px] border-[#CACBCB] duration-300 font-iranYekan hover:cursor-grab active:cursor-grabbing hover:-mt-[10px]"
              >
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
                          <div
                            dir="rtl"
                            className="flex justify-center items-center"
                          >
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
                                dataName="Path 58"
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
                        {/* <div className="-left-[10px] relative transition-colors duration-[0.4s] ease-in-out text-[#8094A6] peer-hover:text-[#00213E]"> */}
                        {/* </div> */}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Courses;
