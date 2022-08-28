import { useEffect, useState } from "react";
import Slides from "./Slides";
import Dots from "./Dots";
import MobileSlides from "./MobileSlides";
export default function MentorSlider({mentors}) {
  const len = mentors.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [_activeIndex, _setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const i = 0;
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      _setActiveIndex(_activeIndex === len ? 0 : _activeIndex + 1);
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
  }, [activeIndex,_activeIndex]);
  return (
    <>
      <div className="w-full xl:mt-[71px] mt-[30px] flex flex-col justify-center items-center  rounded-[20px]">
        <div className="bg-[#ECF9FD] rounded-[20px] pt-[40px] pb-[194px] hidden xl:block">
          <Slides
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            mentors={mentors}
          />
        </div>
        <div className="bg-[#ECF9FD] pt-[40px] pb-[194px] block xl:hidden">
          <MobileSlides
            activeIndex={_activeIndex}
            setActiveIndex={_setActiveIndex}
            mentors={mentors}
          />
        </div>
        <Dots
          timer={timer}
          activeIndex={activeIndex}
          mentors={mentors}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </>
  );
}
