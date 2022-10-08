import { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
export default function Slider({ sliderImage }) {
  console.log(sliderImage);
  const len = sliderImage.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const i = 0;
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    const interval = setInterval(() => {
      if (i === 100) {
        i = 0;
      } else {
        i++;
      }
      setTimer(i);
    }, 50);
    return () => {
      clearInterval(interval);
      clearInterval(slideInterval);
    };
  }, [activeIndex]);
  return (
    <>
      <div className="w-full xl:mt-[71px] mt-[56px] xl:px-[30px] px-[10px]">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          timer={timer}
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </>
  );
}
