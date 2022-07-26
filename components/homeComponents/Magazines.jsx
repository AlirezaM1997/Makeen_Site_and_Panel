import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Magazines() {
  const magazines = [1, 2, 3, 4, 5, 6];
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mb-[68px] relative px-[50px]">
        <div className="mb-[50px] flex items-center">
          <div className="flex flex-row-reverse w-fit ml-[30px] justify-start cursor-pointer ">
            <h4 className="text-[#8094A6] peer font-iranYekan text-[16px]  ">
              مشاهده ی همه
            </h4>
            {/* <img
              className="inline-block -fuchsia-500 opacity-40 mr-1 peer-hover:-translate-x-2 	"
              src="/assets/svg/rightArrow.svg"
              alt="right arrow"
            /> */}
          </div>
          <h1 className="font-iranYekan text-[#00213E] text-[20px] font-extrabold	absolute right-[80px] top-0 ">
            جدیدترین مقالات و مطالب از مکین
          </h1>
        </div>
        <Slider {...setting}>
          {magazines.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-[20px] border-[0.5px] border-[#CACBCB] rounded-[15px]"
            >
              <div className="relative h-[220px]">
                <Image
                  layout="fill"
                  src={"/assets/images/magazine1.png"}
                  alt="Magazine"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
