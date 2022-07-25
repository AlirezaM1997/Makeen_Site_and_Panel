import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import sliderImage from "./sliderImage";

const len = sliderImage.length - 1;

const MentorSlider = () => {
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
      <div className="w-full mt-[71px] pr-[30px] pl-[30px] flex flex-col justify-center items-center">
        <SliderContent activeIndex={activeIndex} setActiveIndex={setActiveIndex} sliderImage={sliderImage} />
        <Dots
          timer={timer}
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </>
  );
};
export default MentorSlider;
