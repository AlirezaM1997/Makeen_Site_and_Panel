import { useEffect } from "react";
import Image from "next/image";
export default function MobileSlides({ _activeIndex, setActiveIndex, mentors }) {
  useEffect(() => {
    for (let index = 0; index < mentors.length; index++) {
      let element = mentors.splice(index, 1)[0];
      mentors.splice(index - mentors.length, 0, element);
    }
  }, [_activeIndex]);
  return (
    <section className="w-full grid grid-cols-3 grid-rows-1 justify-items-center items-center font-iranYekan">
      <div className="w-[80px] relative h-[80px] inline-block justify-self-start">
        <Image
          src={mentors[0].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="w-[140px] relative h-[140px] flex flex-col items-center content-center">
        <Image
          src={mentors[1].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
        <div className="mt-[10rem] pt-[10px] flex flex-col justify-center items-center w-max">
          <h1 className="text-[16px] text-[#00213E] leading-[28px] font-bold text-center w-max">
            {mentors[1].name}
          </h1>
          <h3 className="text-[14px] text-[#00213E] leading-[25px] font-medium text-center mt-[12px] mb-[9px] w-max">
            {`${mentors[1].specialty} دوره ی`}
          </h3>
          <h5 className="text-[10px] text-[#00213E] leading-[17px] font-medium text-center w-max">
            {mentors[1].records}
          </h5>
        </div>
      </div>
      <div className="w-[80px] relative h-[80px] inline-block justify-self-end">
        <Image
          src={mentors[2].cover}
          alt="slide"
          layout="fill"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
