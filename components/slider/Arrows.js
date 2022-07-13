import Image from "next/image";
import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <div
        className="prev flex justify-center items-center cursor-pointer shadow-[-3px_10px_20px_#00000029]  w-[40px] h-[40px] bg-white rounded-full absolute top-1/2 left-[10px] "
        onClick={prevSlide}
      >
        <div className="relative w-5 h-4 rotate-180">
          <Image src="/assets/images/arrow-right.png" layout="fill" />
        </div>
      </div>
      <span
        className="next flex justify-center items-center cursor-pointer shadow-[-3px_10px_20px_#00000029]  w-[40px] h-[40px] bg-white rounded-full absolute top-1/2 right-[10px] "
        onClick={nextSlide}
      >
        <div className="relative w-5 h-4">
          <Image src="/assets/images/arrow-right.png" layout="fill" />
        </div>
      </span>
    </div>
  );
}

export default Arrows;
