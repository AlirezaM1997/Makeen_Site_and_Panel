//slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//next
import Image from "next/image";

//other


const HomeSlider = () => {
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    touchMove:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:6000,
  };
  
  return (
    <>
      <div className="px-[30px] mt-[68px]">
        <Slider {...settings} className="">
          <Image
            className="rounded-3xl border-[0.5px] border-[#CACBCB]"
            src="/assets/images/slide1.jpg"
            width={1366}
            height={500}
            objectFit="cover"
            alt="slider-img"
          ></Image>
          <Image
            className="rounded-3xl border-[0.5px] border-[#CACBCB]"
            src="/assets/images/slide2.jpg"
            width={1366}
            height={500}
            objectFit="cover"
            alt="slider-img"
          ></Image>
          <Image
            className="rounded-3xl border-[0.5px] border-[#CACBCB]"
            src="/assets/images/slide3.jpg"
            width={1366}
            height={500}
            objectFit="cover"
            alt="slider-img"
          ></Image>
        </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
