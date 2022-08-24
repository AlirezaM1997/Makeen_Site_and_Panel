import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseItem } from "./CourseItem";
export default function Courses({ courses }) {
  const setting = {
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    touchThreshold: 6,
    infinite: false,
  };
  const mobileSetting = {
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    touchThreshold: 6,
    infinite: false,
    draggable: true,
  };
  return (
    <>
      <div className="w-full xl:h-[599px]  my-[90px] relative overflow-hidden font-iranYekan">
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
          className="w-full xl:h-[500px] h-[633px] bg-[#001D36] flex flex-col xl:flex-row xl:px-[120px] xl:pt-[63px] pt-[0px] xl:justify-between justify-center xl:items-start items-center"
        >
          <div className="text-[#ECF9FD]">
            <h1 className="xl:text-[20px] text-[16px] leading-[35px] font-extrabold text-center xl:text-right">
              دوره های بوت کمپ مکین
            </h1>
            <h3 className="xl:text-[16px] text-xs leading-[28px] xl:font-bold xl:mt-5 mt-[10px] text-center xl:text-right">
              در حال حاضر مکین این دوره ها رو برگزار می کنه
            </h3>
          </div>
          <div id="mobileCourseSlider" className="block xl:hidden my-[50px]">
            <Slider {...mobileSetting}>
              {courses.map((item, index) => (
                <CourseItem item={item} key={index} />
              ))}
            </Slider>
          </div>
          <div className="flex xl:flex-row flex-col justify-center items-center">
            <div className="text-[#ECF9FD] text-[14px] leading-[25px] opacity-70 mb-5 xl:mb-0">
              اطلاعات بیشتر رو از اینجا ببین
            </div>
            <div className="w-[130px] h-[40px] relative mx-[20px] hidden xl:block">
              <Image
                src="/assets/images/arrow_course.png"
                layout="fill"
                alt="arrow_course"
              />
            </div>
            <div className="z-[1] xl:hover:-translate-y-[6px] transition-all duration-300 ease-out">
              <Link href={"/courses"}>
                <a className="text-[#00213E] xl:text-[16px] text-[12px] xl:leading-[28px] leading-[21px] font-bold px-[21px] xl:py-[14px] py-3 bg-[#7DD3F2] rounded-[10px] ">
                  دوره های آکادمی مکین
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div id="courseSlider" className="-mt-[320px] hidden xl:block">
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
