import Image from "next/image";

const Methdology = () => {
  return (
    <>
      <div className="relative -red-500">
        <div className=" flex justify-between h-[464px] mb-[150px] font-iranYekan p-[20px]  ">
          <div className="w-[45%] pl-[100px] " dir="rtl">
            <div className="h-[40%] w-[15%] top-[80px] left-8 absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] bg-origin-padding blur-[50px] bg-no-repeat opacity-20"></div>
            <div className="w-fit relative left-[65px] top-[85px] ">
              <Image
                width={58}
                height={63}
                src={"/assets/images/circleArrow.png"}
                alt="Curly Arrow"
              />
            </div>
            <h1 className="text-[#00213E] text-[20px] font-black">
              متودولوژی خاص آموزشی
            </h1>
            <p className="text-[#4D6982] -slate-500 leading-9 text-[16px] -blue-500 w-full mt-[20px] ">
              اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه
              بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس
              مشکلاتی که توی این مسیر برات ایجاد میشه هم بر بیای. بتونی راه حل
              های درست پیدا کنی و برای موفقیت در محیط.کاری که بعدها استخدام میشی
              ، مشکلی نداشته باشی
            </p>
          </div>

          <div className="relative w-[50%]">
            <div
              style={{ zIndex: 999 }}
              className="absolute right-[380px] top-[160px] "
            >
              <Image
                src={"/assets/images/methImage1.png"}
                alt="Image 1"
                width={220}
                height={250}
              />
            </div>
            <div
              style={{ zIndex: 888 }}
              className="absolute right-[180px] top-[30px] "
            >
              <Image
                src={"/assets/images/methImage2.png"}
                alt="Image 2"
                width={290}
                height={331}
              />
            </div>
            <div className="h-[40%] w-[15%] top-[80px] left-[150px] absolute bg-[#37BBEC] bg-gradient-[90deg] bg-origin-padding blur-[50px] bg-no-repeat opacity-20"></div>
            <div className="absolute top-[60px] left-[160px]  ">
              <Image
                width={248}
                height={248}
                src={"/assets/images/methFeature2@2x.png"}
                alt="feature"
              />
            </div>
            <div className="h-[40%] w-[15%] bottom-[0px] left-[260px] absolute bg-[#FF792C] bg-gradient-[90deg] bg-origin-padding blur-[50px] bg-no-repeat opacity-20"></div>
            <div className="absolute rotate-[220deg]  bottom-[60px] left-[260px] ">
              <Image
                width={69}
                height={69}
                src={"/assets/images/methFeature2.png"}
                alt="feature"
              />
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Methdology;
