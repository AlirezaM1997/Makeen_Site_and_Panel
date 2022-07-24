import Image from "next/image";
import { PrevArrow } from "./Arrows";
import { NextArrow } from "./Arrows";
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="w-full grid grid-cols-9 grid-rows-1 justify-items-center items-center">
      <div className="w-[40px] relative h-[40px] inline-block">
        <Image
          src={sliderImage[0].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>

      <div className="w-[60px] relative h-[60px] inline-block">
        <Image
          src={sliderImage[1].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>
      <div className="w-[80px] relative h-[80px] inline-block">
        <Image
          src={sliderImage[2].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>
      <div className=" relative w-[35px] h-[35px]  inline-block">
        <PrevArrow prevSlide={() => console.log("prev")} />
      </div>
      <div className="w-[140px] relative h-[140px] inline-block">
        <Image
          src={sliderImage[3].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>
      <div className=" relative w-[35px] h-[35px]  inline-block">
        <NextArrow nextSlide={() => console.log("next")} />
      </div>
      <div className="w-[80px] relative h-[80px] inline-block">
        <Image
          src={sliderImage[4].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>
      <div className="w-[60px] relative h-[60px] inline-block">
        <Image
          src={sliderImage[5].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>
      <div className="w-[40px] relative h-[40px] inline-block">
        <Image
          src={sliderImage[6].urls}
          alt="slide"
          layout="fill"
          className="rounded-[20px]"
        />
      </div>
    </section>
  );
}

export default SliderContent;
