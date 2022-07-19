import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span
        className="prev group flex justify-center items-center cursor-pointer shadow-[-3px_10px_20px_#00000029] w-[40px] h-[40px] bg-white rounded-full absolute top-1/2 left-[10px] "
        onClick={prevSlide}
      >
        <div className="relative w-5 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.477"
            height="12.545"
            viewBox="0 0 14.477 12.545"
            className="absolute transition duration-300 ease-in-out w-full h-full group-hover:invert-[100%] group-hover:sepia-[125%] group-hover:saturate-[115%] group-hover:hue-rotate-[178deg] group-hover:brightness-[99%] group-hover:contrast-[100%] group-hover:z-[1]"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-0.249 -0.073)"
            >
              <path
                id="Path_13"
                data-name="Path 13"
                d="M1,13.183H13.976"
                transform="translate(0 -6.837)"
                fill="none"
                stroke="#00294d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                id="Path_14"
                data-name="Path 14"
                d="M6.233,11.558,1,6.346,6.233,1.134"
                transform="translate(0)"
                fill="none"
                stroke="#00294d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
        <div className="absolute scale-0 transition duration-300 ease-in-out group-hover:scale-100 bg-[#00294D] w-[40px] h-[40px] rounded-full"></div>
      </span>
      <span
        className="next group flex justify-center items-center cursor-pointer shadow-[-3px_10px_20px_#00000029] w-[40px] h-[40px] bg-white rounded-full absolute top-1/2 right-[10px] "
        onClick={nextSlide}
      >
        <div className="relative w-5 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.477"
            height="12.545"
            viewBox="0 0 14.477 12.545"
            className="absolute rotate-180 transition duration-300 ease-in-out w-full h-full group-hover:invert-[100%] group-hover:sepia-[125%] group-hover:saturate-[115%] group-hover:hue-rotate-[178deg] group-hover:brightness-[99%] group-hover:contrast-[100%] group-hover:z-[1]"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-0.249 -0.073)"
            >
              <path
                id="Path_13"
                data-name="Path 13"
                d="M1,13.183H13.976"
                transform="translate(0 -6.837)"
                fill="none"
                stroke="#00294d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                id="Path_14"
                data-name="Path 14"
                d="M6.233,11.558,1,6.346,6.233,1.134"
                transform="translate(0)"
                fill="none"
                stroke="#00294d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
          </svg>
          <div className="absolute -top-[70%] -right-[10px] scale-0 transition duration-300 ease-in-out group-hover:scale-100 bg-[#00294D] w-[40px] h-[40px] rounded-full"></div>
        </div>
      </span>
    </div>
  );
}

export default Arrows;
