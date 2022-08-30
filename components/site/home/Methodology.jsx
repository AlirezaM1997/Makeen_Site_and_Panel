import Image from "next/image";
export default function Methdology({methodology}) {
  console.log(methodology);
  return (
    <>
      <div className="relative xl:mt-[200px] mt-[90px] flex xl:flex-row flex-col-reverse justify-between xl:h-[464px] mb-[150px] font-iranYekan xl:pr-[120px] xl:pl-[86px]">
        <div className="xl:w-[123px] xl:h-[123px] w-[261px] h-[261px] absolute top-[5px] xl:left-0 left-1/4 bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px]"></div>
        <div className="h-[283px] w-[126px] absolute top-[23px] left-0  bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] blur-[50px] opacity-20 hidden xl:block"></div>
        <div className="xl:w-[62%] xl:pr-[168px] pr-[57px] xl:pl-0 pl-[57px] relative xl:my-auto" dir="rtl">
          <div className="absolute right-[95px] top-[14px] w-[58px] h-[63px] hidden xl:block">
            <Image
              layout="fill"
              src={"/assets/images/circleArrow.png"}
              alt="circleArrow"
            />
          </div>
          <h1 className="text-[#00213E] xl:text-[16px] text-[20px] font-black xl:text-right text-center">
            متودولوژی خاص آموزشی
          </h1>
          <p className="xl:text-[#4D6982] text-[#00213E] xl:leading-9 xl:text-[16px] text-[12px] leading-[26px] w-full mt-[20px] xl:text-right text-center">
            اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر
            اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس مشکلاتی
            که توی این مسیر برات ایجاد میشه هم بر بیای. بتونی راه حل های درست
            پیدا کنی و برای موفقیت در محیط.کاری که بعدها استخدام میشی ، مشکلی
            نداشته باشی
          </p>
        </div>

        <div className="relative xl:w-[38%] pt-[23px] h-[306px] xl:h-full">
          <div className="absolute xl:left-0 left-[87px] xl:top-[160px] top-[115px] xl:w-[220px] xl:h-[250px] w-[130px] h-[148px] z-10">
            <Image
              src={"/assets/images/whyBootcamp.png"}
              className="xl:rounded-[20px] rounded-[10px]"
              alt="methodology1"
              layout="fill"
            />
          </div>
          <div className="absolute xl:right-0 right-[87px] xl:top-[30px] xl:w-[290px] xl:h-[331px] w-[175px] h-[200px]">
            <Image
              src={"/assets/images/whyBootcamp.png"}
              className="xl:rounded-[20px] rounded-[10px]"
              alt="methodology2"
              layout="fill"
            />
          </div>
          <div className="absolute h-[261px] w-[261px] top-0 left-[35px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] blur-[50px] opacity-20 -z-[1] hidden xl:block"></div>
          <div className="absolute h-[282px] w-[282px] bottom-0 right-[40px] bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] blur-[50px] opacity-20 -z-[1] hidden xl:block"></div>
          <div className="absolute top-[60px] left-[52px] w-[248px] h-[248px] -z-[1] hidden xl:block">
            <Image
              layout="fill"
              src={"/assets/images/blueCircle1.png"}
              alt="blueCircle1"
            />
          </div>
          <div className="absolute bottom-[71px] right-[173px] w-[69px] h-[69px] -z-[1] hidden xl:block">
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
