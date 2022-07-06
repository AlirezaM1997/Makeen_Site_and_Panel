//slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//next
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";

//other


const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

useEffect(()=>{
  let theStyle = window.getComputedStyle(document.querySelector('.slick-dots li.slick-active button'), ':before')
// const pie = document.querySelector('.slick-dots li.slick-active button::before')
// pie.style.color = 'red'
// theStyle.background='red'
console.log(theStyle.background);
},[])

  return (
    <>
      <div className="px-[30px] mt-[68px] ">
        <Slider {...settings} className=''>
          <div>
            <Image
              className="rounded-3xl border-[0.5px] border-[#CACBCB] "
              src="/assets/images/slide1.jpg"
              width={1366}
              height={500}
              objectFit="cover"
              alt="slider-img"
            ></Image>
          </div>
          <div>
            <Image
              className="rounded-3xl border-[0.5px] border-[#CACBCB]"
              src="/assets/images/slide2.jpg"
              width={1366}
              height={500}
              objectFit="cover"
              alt="slider-img"
            ></Image>
          </div>
          <div>
            <Image
              className="rounded-3xl border-[0.5px] border-[#CACBCB]"
              src="/assets/images/slide3.jpg"
              width={1366}
              height={500}
              objectFit="cover"
              alt="slider-img"
            ></Image>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
