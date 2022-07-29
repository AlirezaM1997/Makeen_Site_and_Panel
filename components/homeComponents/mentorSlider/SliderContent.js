import { useEffect, useState } from "react";
import Image from "next/image";
import { PrevArrow } from "./Arrows";
import { NextArrow } from "./Arrows";
export default function SliderContent({
  activeIndex,
  setActiveIndex,
  sliderImage,
}) {
  const [flag, setFlag] = useState(false);
  const prevSlide = () => {
    setFlag(true);
    setActiveIndex(activeIndex < 1 ? sliderImage.length - 1 : activeIndex - 1);
    for (let index = 0; index < sliderImage.length; index++) {
      let element = sliderImage.splice(index, 1)[0];
      sliderImage.splice(index + 1, 0, element);
    }
  };
  const nextSlide = () => {
    setFlag(true);
    setActiveIndex(
      activeIndex === sliderImage.length - 1 ? 0 : activeIndex + 1
    );
    for (let index = 0; index < sliderImage.length; index++) {
      let element = sliderImage.splice(index, 1)[0];
      sliderImage.splice(index - 6, 0, element);
    }
  };
  useEffect(() => {
    console.log(activeIndex);
    setFlag(false);
    if (!flag) {
      for (let index = 0; index < sliderImage.length; index++) {
        let element = sliderImage.splice(index, 1)[0];
        sliderImage.splice(index - 6, 0, element);
      }
    }
  }, [activeIndex]);
  return (
    <section className="w-full grid grid-cols-9 grid-rows-1 justify-items-center items-center">
      <div className="w-[40px] relative h-[40px] inline-block">
        <Image
          src={sliderImage[0].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[60px] relative h-[60px] inline-block">
        <Image
          src={sliderImage[1].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[80px] relative h-[80px] inline-block">
        <Image
          src={sliderImage[2].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className=" relative w-[35px] h-[35px]  inline-block">
        <PrevArrow prevSlide={prevSlide} />
      </div>
      <div className="w-[140px] relative h-[140px] inline-block">
        <Image
          src={sliderImage[3].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
        <div className="mt-[10rem] pt-[10px]">
          <h1 className="text-[24px] text-[#00213E] font-iranYekan leading-[41px] font-bold text-center">
          {sliderImage[3].name}
          </h1>
          <h3 className="text-[20px] text-[#00213E] font-iranYekan leading-[35px] font-medium text-center mt-[20px] mb-[11px]">
            UI/UX دوره ی
          </h3>
          <h5 className="text-[16px] text-[#00213E] font-iranYekan leading-[28px] font-medium text-center">
            مدیر آکادمی مکین
          </h5>
        </div>
      </div>
      <div className=" relative w-[35px] h-[35px]  inline-block">
        <NextArrow nextSlide={nextSlide} />
      </div>
      <div className="w-[80px] relative h-[80px] inline-block">
        <Image
          src={sliderImage[4].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[60px] relative h-[60px] inline-block">
        <Image
          src={sliderImage[5].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[40px] relative h-[40px] inline-block">
        <Image
          src={sliderImage[6].urls}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
