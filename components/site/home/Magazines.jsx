import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../BlogCard";
import Link from "next/link";
export default function Magazines({ blogs }) {
  const magazines = [1, 2, 3, 4, 5, 6];
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
  };
  const mobileSetting = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    centerMode: true,
  };
  return (
    <>
      <div
        className="mb-[130px] relative xl:px-[50px] overflow-hidden"
        id="magazines"
      >
        <div  className="flex items-center justify-between">
          <Link href={"/blogs"}>
            <a dir="rtl" className=" items-center cursor-pointer relative w-fit ml-[30px] justify-start hidden xl:flex">
              <span className="text-[#8094A6] peer font-iranYekan text-[16px] pl-2 xl:hover:text-[#00213E] transition-colors duration-300">
                مشاهده ی همه
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.041"
                height="8.554"
                viewBox="0 0 5.041 8.554"
                className="peer-hover:-translate-x-[10px] transition-all duration-300 ease-out"
              >
                <path
                  id="Path_58"
                  dataname="Path 58"
                  d="M4.229,7.567,1,4.351l3.23-3.217"
                  transform="translate(-0.249 -0.073)"
                  fill="none"
                  stroke="#8094a6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </Link>

          <h1 className="font-iranYekan text-[#00213E] xl:text-[20px] text-[16px] text-center font-extrabold	xl:absolute xl:right-[80px] xl:top-0 ">
            جدیدترین مقالات و مطالب از مکین
          </h1>
        </div>
        <div className="-right-[37px] top-[127px] h-[71px] w-[71px] absolute hidden xl:block">
          <Image
            src="/assets/images/feature-r.png"
            layout="fill"
            alt="feature-design"
          />
        </div>
        <div className="-left-[75px] top-[199px] h-[108px] w-[108px] absolute hidden xl:block">
          <Image
            src="/assets/images/blueCircle3.png"
            layout="fill"
            alt="blueCircle3"
          />
        </div>
        <div className="w-[198px] h-[261px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] bottom-[40px] right-0 rounded-full hidden xl:block"></div>
        <div className="w-[81px] h-[193px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] bottom-[205px] right-0 rounded-full hidden xl:block"></div>
        <div className="w-[183px] h-[193px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] bottom-[12px] left-0 rounded-full hidden xl:block"></div>
        <div className="hidden xl:block">
          <Slider {...setting}>
            {magazines.map((item, index) => (
              <BlogCard item={item} index={index} key={index} />
            ))}
          </Slider>
        </div>
        <div className="block xl:hidden">
          <Slider {...mobileSetting}>
            {magazines.map((item, index) => (
              <BlogCard item={item} index={index} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
