import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
const len = sliderImage.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const i = 0;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);

    const interval = setInterval(() => {
      if (i === 100) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

        <div className="w-full mt-[71px] pr-[30px] pl-[30px]">
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
};
export default Slider;
