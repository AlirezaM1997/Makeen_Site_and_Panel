import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContent } from "./SliderContent";
export default function Makeeniha({ makeeniha }) {
  // console.log(makeeniha);
  const pmakeeniha = [1, 2, 3, 4, 5, 6];
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
  };
  const mobileSetting = {
    arrows: false,
    slidesToShow: 0.92,
    slidesToScroll: 1,
    vertical: false,
    centerMode: true,
  };
  return (
    <>
      <div className="h-[454px] relative font-iranYekan mt-[150px] overflow-hidden">
        <div className="w-[339px] h-[339px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-10 blur-[50px] top-[90px] right-[255px] rounded-full"></div>
        <div className="w-[205px] h-[205px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-10 blur-[50px] top-[154px] left-0"></div>
        <div className="absolute top-[45px] -left-[50px] w-[86px] h-[86px] hidden xl:block">
          <Image
            layout="fill"
            src={"/assets/images/blueCircle3.png"}
            alt="blueCircle3"
          />
        </div>
        <div className="absolute bottom-[30px] -right-[82px] w-[144px] h-[144px] hidden xl:block">
          <Image
            layout="fill"
            src={"/assets/images/blueCircle4.png"}
            alt="blueCircle4"
          />
        </div>
        <div className=" text-[#00213E] text-center leading-[50px] ">
          <h1 className="xl:text-[20px] text-[16px] font-extrabold ">مکین از زبان مکینی ها</h1>
          <h4 className="xl:text-[16px] text-[12px]">
            نظر فارغ التحصیلان مکین که حالا متخصص شدن درباره ی مکین
          </h4>
        </div>
        <div className="px-[50px] py-[20px] h-[300px] hidden xl:block" id="makeenihaSlider">
          <Slider {...setting}>
            {pmakeeniha.map((item, index) => (
              <SliderContent index={index}/>
            ))}
          </Slider>
        </div>
        <div className="xl:py-[20px] block xl:hidden" id="makeenihaMobileSlider">
          <Slider {...mobileSetting}>
            {pmakeeniha.map((item, index) => (
              <SliderContent index={index}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
