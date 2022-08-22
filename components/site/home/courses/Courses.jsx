import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseItem } from "./CourseItem";
export default function Courses({courses}) {
  const setting = {
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    touchThreshold: 6,
    infinite: false,
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
            <div className="z-[1] hover:-translate-y-[6px] transition-all duration-300 ease-out">
              <Link href={"/courses"}>
                <a className="text-[#00213E] text-[16px] leading-[28px] font-bold px-[21px] py-[14px] bg-[#7DD3F2] rounded-[10px] ">
                  دوره های آکادمی مکین
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div id="courseSlider" className="-mt-[320px]">
          <Slider {...setting}>
            {courses.map((item, index) => (
              <CourseItem item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
