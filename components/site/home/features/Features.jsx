import Image from "next/image";
import { FeatureItem } from "./FeatureItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Features({ features }) {
  const setting = {
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplaySpeed: 6000,
    rtl:true,
  };
  return (
    <>
      <div className="mt-[170px] xl:px-[50px] pt-[26px] relative">
        <div className="right-0 top-0 h-[85px] w-[80px] absolute hidden xl:block">
          <Image
            src="/assets/images/feature-r.png"
            layout="fill"
            alt="feature-design"
          />
        </div>
        <div className="absolute right-0 w-[375px] h-[475px] bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] -z-[1] hidden xl:block"></div>
        <div className="absolute left-0 w-[205px] h-[205px] bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] -z-[1] block xl:hidden"></div>
        <div className="absolute -left-[115px] top-0 h-[256px] w-[256px] hidden xl:block">
          <Image
            src="/assets/images/feature-l.png"
            layout="fill"
            alt="feature-design"
          />
        </div>
        <div className="absolute left-0 w-[339px] h-[339px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -z-[1] hidden xl:block"></div>
        <div className="absolute right-0 bottom-0 w-[221px] h-[221px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -z-[1] block xl:hidden"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[339px] h-[339px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -z-[1] hidden xl:block"></div>
        <header>
          <h1 className="xl:text-[20px] text-[16px] leading-[35px] font-iranYekan text-[#00213E] font-extrabold text-center xl:mb-5 mb-[10px]c">
            ویژگی های مکین
          </h1>
          <h2 className="xl:text-[16px] text-xs leading-[28px] font-iranYekan text-[#00213E] font-bold text-center">
            ویژگی هایی که ما رو از بقیه بوت کمپ ها متفاوت میکنه
          </h2>
        </header>
        <section
          dir="rtl"
          className="hidden xl:grid grid-rows-2 grid-cols-3 justify-items-center items-center gap-[27px] mt-[50px] pb-[29px]"
        >
          {features.map((item, index) => (
            <FeatureItem item={item} index={index} key={index} />
          ))}
        </section>
        <section className="xl:hidden mt-[52px]">
          <Slider {...setting}>
            {features.map((item, index) => (
              <FeatureItem item={item} index={index} key={index} />
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
}
