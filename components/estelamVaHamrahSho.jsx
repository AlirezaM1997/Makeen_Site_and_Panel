/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../styles/estelamVaHamrahSho.module.css";

const EstelamVaHamrahsho = () => {
  const [estelam, setEstelam] = useState(true);

  const estelamBtnShow = () => {
    setEstelam(true);
  };

  const estelamBtnLeave = () => {
    setEstelam(false);
  };

  return (
    <>
      <section className="flex flex-row-reverse justify-evenly">
        <div className="bg-[#def4fc] w-[645px] relative rounded-[20px] h-[250px] ">
          <img
            className={styles.helaleImage}
            src={"/assets/images/estelamVaHamrahsho.png"}
            alt="gerd"
          />
          <h1 className="-red-500 hover:hidden w-fit font-iranYekan font-extrabold text-[24px] text-[#00213E] absolute top-[20px] right-[80px] ">
            استعلام دانشجویان مکین
          </h1>
          <div className="-red-500 w-[383px] absolute top-[70px] right-[80px]">
            <p className="w-fit font-iranYekan text-right text-[#4D6982] text-[16px] ">
              برای استعلام از دانشجویان مکین کد گواهی دانشجویان را .در کادر زیر
              وارد کنید
            </p>
          </div>
          <div className="-red-500 flex justify-between w-[480px] absolute bottom-[20px] right-[80px]">
            <button
              onMouseEnter={() => estelamBtnShow()}
              onMouseLeave={() => estelamBtnLeave()}
              className="p-[10px] text-[#ECF9FD] w-[70px] hover:-translate-y-2 duration-150 text-[12px] text-center bg-[#FF8641] rounded-[10px] "
            >
              {estelam ? (
                <span className="-red-500 font-iranYekan ">عضویت</span>
              ) : (
                <span className="-red-500 font-iranYekan ">تایید</span>
              )}
            </button>
            <input placeholder="کد گواهی دوره" className="rounded-[10px] text-right focus:w-[330px] focus:placeholder:text-transparent duration-300 w-[380px] outline-black  pr-[15px]	" />
          </div>
        </div>

        <div className="bg-[#e6eaed] w-[645px] rounded-[20px] h-[250px] ">
          <img
            className="opacity-30"
            src={"/assets/images/hamrahSho.png"}
            alt="gerd"
          />
        </div>
      </section>
    </>
  );
};

export default EstelamVaHamrahsho;
