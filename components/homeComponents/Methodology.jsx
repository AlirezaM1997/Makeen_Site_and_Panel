import Image from "next/image";
export default function Methdology() {
  return (
    <>
      <div className="relative mt-[200px] flex justify-between h-[464px] mb-[150px] font-iranYekan pr-[120px] pl-[86px]">
        <div className="w-[123px] h-[123px] absolute top-[5px] left-0  bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px]"></div>
        <div className="h-[283px] w-[126px] absolute top-[23px] left-0  bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] blur-[50px] opacity-20"></div>
        <div className="w-[62%] pr-[168px] relative my-auto" dir="rtl">
          <div className="absolute right-[95px] top-[14px] w-[58px] h-[63px]">
            <Image
              layout="fill"
              src={"/assets/images/circleArrow.png"}
              alt="circleArrow"
            />
          </div>
          <h1 className="text-[#00213E] text-[20px] font-black">
            متودولوژی خاص آموزشی
          </h1>
          <p className="text-[#4D6982] leading-9 text-[16px] w-full mt-[20px] ">
            اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر
            اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس مشکلاتی
            که توی این مسیر برات ایجاد میشه هم بر بیای. بتونی راه حل های درست
            پیدا کنی و برای موفقیت در محیط.کاری که بعدها استخدام میشی ، مشکلی
            نداشته باشی
          </p>
        </div>

        <div className="relative w-[38%] pt-[23px]">
          <div className="absolute left-0 top-[160px] w-[220px] h-[250px] z-10">
            <Image
              src={"/assets/images/whyBootcamp.png"}
              className="rounded-[20px]"
              alt="methodology1"
              layout="fill"
            />
          </div>
          <div className="absolute right-0 top-[30px] w-[290px] h-[331px]">
            <Image
              src={"/assets/images/whyBootcamp.png"}
              className="rounded-[20px]"
              alt="methodology2"
              layout="fill"
            />
          </div>
          <div className="absolute h-[261px] w-[261px] top-0 left-[35px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] blur-[50px] opacity-20 -z-[1]"></div>
          <div className="absolute h-[282px] w-[282px] bottom-0 right-[40px] bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] blur-[50px] opacity-20 -z-[1]"></div>
          <div className="absolute top-[60px] left-[52px] w-[248px] h-[248px] -z-[1]">
            <Image
              layout="fill"
              src={"/assets/images/blueCircle1.png"}
              alt="blueCircle1"
            />
          </div>
          <div className="absolute bottom-[71px] right-[173px] w-[69px] h-[69px] -z-[1]">
            <Image
              layout="fill"
              src={"/assets/images/blueCircle2.png"}
              alt="blueCircle2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
