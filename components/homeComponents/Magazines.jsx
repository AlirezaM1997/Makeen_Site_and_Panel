import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../commonlyUsedComponents/BlogCard";
export default function Magazines() {
  const magazines = [1, 2, 3, 4, 5, 6];
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
  };
  return (
    <>
      <div
        className="mb-[130px] relative px-[50px] overflow-hidden"
        id="magazines"
      >
        <div className="flex items-center">
          <div className="flex flex-row-reverse w-fit ml-[30px] justify-start cursor-pointer">
            <h4 className="text-[#8094A6] peer font-iranYekan text-[16px]">
              مشاهده ی همه
            </h4>
            <div className="relative w-[5px] h-[10px]">{/*svg*/}</div>
          </div>
          <h1 className="font-iranYekan text-[#00213E] text-[20px] font-extrabold	absolute right-[80px] top-0 ">
            جدیدترین مقالات و مطالب از مکین
          </h1>
        </div>
        <div className="-right-[37px] top-[127px] h-[71px] w-[71px] absolute">
          <Image
            src="/assets/images/feature-r.png"
            layout="fill"
            alt="feature-design"
          />
        </div>
        <div className="-left-[75px] top-[199px] h-[108px] w-[108px] absolute">
          <Image
            src="/assets/images/blueCircle3.png"
            layout="fill"
            alt="blueCircle3"
          />
        </div>
        <div className="w-[198px] h-[261px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] bottom-[40px] right-0 rounded-full"></div>
        <div className="w-[81px] h-[193px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] bottom-[205px] right-0 rounded-full"></div>
        <div className="w-[183px] h-[193px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] bottom-[12px] left-0 rounded-full"></div>
        <Slider {...setting}>
          {magazines.map((item, index) => (
            <BlogCard item={item} index={index} key={index}/>
          ))}
        </Slider>
      </div>
    </>
  );
}
