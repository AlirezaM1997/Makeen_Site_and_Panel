import Image from "next/image";
export default function Estelam() {
  return (
    <>
      <section className="flex xl:flex-row-reverse flex-col xl:px-[30px] justify-evenly mb-[85px] font-iranYekan">
        <div className="bg-[#def4fc] xl:w-1/2 w-full relative rounded-[20px] ml-2 flex flex-col items-end px-[72px] py-5">
          <div className="w-[91px] h-[91px] absolute right-[5px] top-[-30px]">
            <Image src={"/assets/images/cap.png"} alt="cap" layout="fill" />
          </div>
          <div className="opacity-10">
            <Image
              src={"/assets/images/estelamVaHamrahsho.png"}
              alt="estelamVaHamrahshoPic"
              layout="fill"
            />
          </div>
          <h1 className=" w-fit font-extrabold text-[24px] text-[#00213E] z-10">
            استعلام دانشجویان مکین
          </h1>
          <p className="w-fit text-right text-[#4D6982] text-[16px] xl:leading-[28px] mt-[17px] mb-[45px] z-10 xl:pl-[115px]">
            برای استعلام از دانشجویان مکین کد گواهی دانشجویان را در کادر زیر
            وارد کنید
          </p>
          <div className="flex justify-between w-full z-10">
            <button className="px-[33px] py-[14px] text-[#ECF9FD] hover:-translate-y-2 duration-150 text-[12px] text-center bg-[#FF8641] rounded-[10px] ">
              تایید
            </button>
            <input
              type="number"
              placeholder="کد گواهی دوره"
              className="rounded-[10px] w-[75%] text-right outline-black py-[16px] pr-[15px] ml-5"
            />
          </div>
        </div>
        <div className="bg-[#e6eaed] xl:w-1/2 w-full relative rounded-[20px] ml-2 flex flex-col items-end px-[72px] py-5">
          <div className="w-[91px] h-[91px] absolute right-[5px] top-[-30px]">
            <Image
              src={"/assets/images/moshakBozorg.png"}
              alt="cap"
              layout="fill"
            />
          </div>
          <div className="w-[54px] h-[41px] absolute top-[30px] left-[30px]">
            <Image
              layout="fill"
              src="/assets/images/moshakeKochak.png"
              alt="moshak kochak"
            />
          </div>
          <div className="opacity-10">
            <Image
              src={"/assets/images/hamrahSho.png"}
              alt="estelamVaHamrahshoPic"
              layout="fill"
            />
          </div>
          <h1 className=" w-fit font-extrabold text-[24px] text-[#00213E] z-10">
            !با مکين همراه شو
          </h1>
          <p className="w-fit text-right text-[#4D6982] text-[16px] xl:leading-[28px] mt-[17px] mb-[45px] z-10 xl:pl-[115px]">
            برای اطلاع از اخبار جدید مکین لطفا ایمیل خود را در کادر زیر وارد
            کنید
          </p>
          <div className="flex justify-between w-full z-10">
            <button className="px-[33px] py-[14px] text-[#ECF9FD] hover:-translate-y-2 duration-150 text-[12px] text-center bg-[#FF8641] rounded-[10px] ">
              عضویت
            </button>
            <input
              type="number"
              placeholder="ایمیل"
              className="rounded-[10px] w-[75%] text-right outline-black py-[16px] pr-[15px] ml-5"
            />
          </div>
        </div>
      </section>
    </>
  );
}
