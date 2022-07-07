import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span
        className="prev flex justify-center items-center cursor-pointer shadow-[-3px_10px_20px_#00000029]  w-[40px] h-[40px] bg-white rounded-full absolute top-1/2 left-[10px] before:text-black fa before:content-['\f060'] before:text-[1.3rem] before:font-black"
        onClick={prevSlide}
      ></span>
      <span
        className="next flex justify-center items-center cursor-pointer shadow-[-3px_10px_20px_#00000029]  w-[40px] h-[40px] bg-white rounded-full absolute top-1/2 right-[10px] before:text-black fa before:content-['\f061'] before:text-[1.3rem] before:font-black"
        onClick={nextSlide}
      >

      </span>
    </div>
  );
}

export default Arrows;
