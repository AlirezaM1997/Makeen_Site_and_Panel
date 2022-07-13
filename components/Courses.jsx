//next
import Image from "next/image";
import Link from "next/link";

//slider
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
    slidesToScroll: 1,
    touchThreshold: 5,
  };
  return (
    <>
      <div className="w-full h-[599px] my-[90px]">
        <div
          dir="rtl"
          className="w-full h-[500px] bg-[#001D36] flex px-[120px] pt-[63px] justify-between items-start"
        >
          {/* <div className="relative w-[596px] h-[596px]">
            <Image src="/assets/images/course-left.png" layout="fill" />
          </div> */}
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
            <div>
              <button className="text-[#00213E] text-[16px] leading-[28px] font-bold px-[21px] py-[14px] bg-[#7DD3F2] rounded-[10px] hover:-translate-y-[6px] transition-all duration-300 hover:ease-out">
                دوره های آکادمی مکین
              </button>
            </div>
          </div>
        </div>
        <div id="courseSlider" className="-mt-[280px]">
          <Slider {...setting}>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="group rounded-b-[10px] p-[20px] pt-[7px] w-[200px] relative shadow-[0px_0px_10px_#00000014] bg-[#FFFFFF] transition-all border-[0.5px] border-[#CACBCB] duration-300 font-iranYekan cursor-grab"
              >
                <div className="h-1 rounded-t-[10px] absolute bottom-full left-0 group-hover:h-3 w-full transition-height duration-300 ease-out bg-[#FFFFFF]"></div>
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
                      <div className="flex justify-center items-center group relative">
                        <a className="peer  text-[#8094A6] text-[14px] leading-[25px] before:text-black hover:text-[#00213E] transition-spacing duration-[0.4s] ease-in-out hover:pl-4">
                          بیشتر بدانید
                        </a>
                        <div className="absolute fa -left-[10px] before:transition-colors duration-[0.4s] ease-in-out before:content-['\F104'] before:text-[#8094A6] peer-hover:before:text-[#00213E]" />
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
