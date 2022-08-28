import { useEffect, useState } from "react";
import Image from "next/image";
import { PrevArrow } from "./Arrows";
import { NextArrow } from "./Arrows";
export default function SliderContent({
  activeIndex,
  setActiveIndex,
  mentors,
}) {
  const [flag, setFlag] = useState(false);
  const prevSlide = () => {
    setFlag(true);
    setActiveIndex(activeIndex < 1 ? mentors.length - 1 : activeIndex - 1);
    for (let index = 0; index < mentors.length; index++) {
      let element = mentors.splice(index, 1)[0];
      mentors.splice(index + 1, 0, element);
    }
  };
  const nextSlide = () => {
    setFlag(true);
    setActiveIndex(activeIndex === mentors.length - 1 ? 0 : activeIndex + 1);
    for (let index = 0; index < mentors.length; index++) {
      let element = mentors.splice(index, 1)[0];
      mentors.splice(index - mentors.length, 0, element);
    }
  };
  useEffect(() => {
    setFlag(false);
    if (!flag) {
      for (let index = 0; index < mentors.length; index++) {
        let element = mentors.splice(index, 1)[0];
        mentors.splice(index - mentors.length, 0, element);
      }
    }
  }, [activeIndex]);
  return (
    <section className="w-full grid grid-cols-9 grid-rows-1 justify-items-center items-center font-iranYekan">
      <div className="w-[40px] relative h-[40px] inline-block">
        <Image
          src={mentors[0].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[60px] relative h-[60px] inline-block">
        <Image
          src={mentors[1].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[80px] relative h-[80px] inline-block">
        <Image
          src={mentors[2].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="relative w-[35px] h-[35px] hidden xl:inline-block">
        <PrevArrow prevSlide={prevSlide} />
      </div>
      <div className="w-[140px] relative h-[140px] flex flex-col items-center content-center">
        <Image
          src={mentors[3].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
        <div className="mt-[10rem] pt-[10px] flex flex-col justify-center items-center w-max">
          <h1 className="text-[24px] text-[#00213E] leading-[41px] font-bold text-center w-max">
            {mentors[3].name}
          </h1>
          <h3 className="text-[20px] text-[#00213E] leading-[35px] font-medium text-center mt-[20px] mb-[11px] w-max">
            {`${mentors[3].specialty} دوره ی`}
          </h3>
          <h5 className="text-[16px] text-[#00213E] leading-[28px] font-medium text-center w-max">
            {mentors[3].records}
          </h5>
        </div>
      </div>
      <div className="relative w-[35px] h-[35px] hidden xl:inline-block">
        <NextArrow nextSlide={nextSlide} />
      </div>
      <div className="w-[80px] relative h-[80px] inline-block">
        <Image
          src={mentors[4].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[60px] relative h-[60px] inline-block">
        <Image
          src={mentors[5].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[40px] relative h-[40px] inline-block">
        <Image
          src={mentors[6].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
