import { useState } from "react";
import Image from "next/image";

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
        <div className="bg-[#def4fc] w-[645px] relative rounded-[20px] h-[250px]">
          <div className="absolute right-[5px] top-[-30px] ">
            <div className="w-[91px] h-[91px] relative">
              <Image src={"/assets/images/cap.png"} alt="cap" layout="fill" />
            </div>
          </div>
          <Image
            className="helaleImage"
            src={"/assets/images/estelamVaHamrahsho.png"}
            alt="gerd"
            layout="fill"
          />

          <h1 className="-red-500 w-fit font-iranYekan font-extrabold text-[24px] text-[#00213E] absolute top-[20px] right-[80px] "></h1>
          <h1 className="-red-500  w-fit font-iranYekan font-extrabold text-[24px] text-[#00213E] absolute top-[20px] right-[80px] ">
            استعلام دانشجویان مکین
          </h1>
          <div className="-red-500 w-[383px] absolute top-[70px] right-[80px]">
            <p className="w-fit font-iranYekan text-right text-[#4D6982] text-[16px] ">
              برای استعلام از دانشجویان مکین کد گواهی دانشجویان را .در کادر زیر
              وارد کنید
            </p>
          </div>
          <div className="-red-500 flex justify-between w-[480px] absolute bottom-[35px] right-[80px]">
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
            <input
              type="number"
              placeholder="کد گواهی دوره"
              className="rounded-[10px] text-right focus:w-[330px] focus:placeholder:text-transparent duration-300 w-[380px] outline-black  pr-[15px]	"
            />
          </div>
        </div>

        <div className="bg-[#e6eaed] w-[645px] relative rounded-[20px] h-[250px] ">
          <div className=" absolute right-[5px] top-[-20px] ">
            <div className="w-[96px] h-[73px] relative">
              <Image
                layout="fill"
                src="/assets/images/moshakBozorg.png"
                alt="moshak"
              />
            </div>
          </div>
          <div className=" absolute top-[30px] left-[30px] ">
            <div className="w-[54px] h-[41px] relative">
              <Image
                layout="fill"
                src="/assets/images/moshakeKochak.png"
                alt="moshak kochak"
              />
            </div>
          </div>
          <Image
            className="helaleImage"
            layout="fill"
            src={"/assets/images/hamrahSho.png"}
            alt="gerd"
          />
          <h1 className="-red-500 w-fit font-iranYekan font-extrabold text-[24px] text-[#00213E] absolute top-[20px] right-[80px] ">
            !با مکين همراه شو
          </h1>
          <div className="-red-500 w-[383px] absolute top-[70px] right-[80px]">
            <p className="w-fit font-iranYekan text-right text-[#4D6982] text-[16px] ">
              برای اطلاع از اخبار جدید مکین لطفا ایمیل خود را .در کادر زیر وارد
              کنید
            </p>
          </div>

          <div className="-red-500 flex justify-between w-[480px] absolute bottom-[35px] right-[80px]">
            <button className="p-[10px] text-[#ECF9FD]  font-iranYekan w-[70px] hover:-translate-y-2 duration-150 text-[12px] text-center bg-[#FF8641] rounded-[10px] ">
              عضویت
            </button>
            <input
              type="email"
              placeholder="ایمیل"
              className="rounded-[10px] text-right focus:w-[330px] focus:placeholder:text-transparent duration-300 w-[380px] outline-black  pr-[15px]	"
            />
          </div>
        </div>
      </section>
      <style>
        {`
        .helaleImage {
            filter: opacity(0.1) drop-shadow(0 0 0 #ceeffc); 
          }
          `}
      </style>
    </>
  );
};

export default EstelamVaHamrahsho;
