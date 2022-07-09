//next
import Image from "next/image";
//other
import { useState } from "react";

const Features = () => {
  const [teacherHover, setTeacherHover] = useState(false);
  const [paymentHover, setPaymentHover] = useState(false);
  const [teachHover, setTeachHover] = useState(false);
  const [workshopHover, setWorkshopHover] = useState(false);
  const [guaranteeHover, setGuaranteeHover] = useState(false);
  const [intimateHover, setIntimateHover] = useState(false);

  const changeColorTeacher = () => {
    setTeacherHover(true);
    document.getElementById("teacherTitle").style.color = "#ECF9FD";
    document.getElementById("teacherDescription").style.color = "#C7ECFA";
  };
  const changeColorPayment = () => {
    setPaymentHover(true);
    document.getElementById("paymentTitle").style.color = "#ECF9FD";
    document.getElementById("paymentDescription").style.color = "#C7ECFA";
  };
  const changeColorTeach = () => {
    setTeachHover(true);
    document.getElementById("teachTitle").style.color = "#ECF9FD";
    document.getElementById("teachDescription").style.color = "#C7ECFA";
  };
  const changeColorWorkshop = () => {
    setWorkshopHover(true);
    document.getElementById("workshopTitle").style.color = "#ECF9FD";
    document.getElementById("workshopDescription").style.color = "#C7ECFA";
  };
  const changeColorGuarantee = () => {
    setGuaranteeHover(true);
    document.getElementById("guaranteeTitle").style.color = "#ECF9FD";
    document.getElementById("guaranteeDescription").style.color = "#C7ECFA";
  };
  const changeColorIntimate = () => {
    setIntimateHover(true);
    document.getElementById("intimateTitle").style.color = "#ECF9FD";
    document.getElementById("intimateDescription").style.color = "#C7ECFA";
  };
  const resetColor = () => {
    setTeacherHover(false);
    setPaymentHover(false);
    setTeachHover(false);
    setWorkshopHover(false);
    setGuaranteeHover(false);
    setIntimateHover(false);
    document.getElementById("teacherTitle").style.color = "initial";
    document.getElementById("teacherDescription").style.color = "initial";
    document.getElementById("paymentTitle").style.color = "initial";
    document.getElementById("paymentDescription").style.color = "initial";
    document.getElementById("teachTitle").style.color = "initial";
    document.getElementById("teachDescription").style.color = "initial";
    document.getElementById("workshopTitle").style.color = "initial";
    document.getElementById("workshopDescription").style.color = "initial";
    document.getElementById("guaranteeTitle").style.color = "initial";
    document.getElementById("guaranteeDescription").style.color = "initial";
    document.getElementById("intimateTitle").style.color = "initial";
    document.getElementById("intimateDescription").style.color = "initial";
  };
  return (
    <>
      <div className="mt-[170px] px-[50px] pt-[26px] relative">
        <div className="absolute right-0 top-0">
          <Image src="/assets/images/feature-r.png" height={85} width={80} />
        </div>
        <div className="absolute right-0 w-[375px] h-[475px] bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] -z-[1] "></div>
        <div className="absolute -left-[115px] top-0 ">
          <Image src="/assets/images/feature-l.png" height={256} width={256} />
        </div>
        <div className="absolute left-0 w-[339px] h-[339px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -z-[1] "></div>
        <header>
          <h1 className="text-[20px] leading-[35px] font-iranYekan text-[#00213E] font-extrabold text-center mb-5">
            ویژگی های مکین
          </h1>
          <h2 className="text-[16px] leading-[28px] font-iranYekan text-[#00213E] font-bold text-center">
            ویژگی هایی که ما رو از بقیه بوت کمپ ها متفاوت میکنه
          </h2>
        </header>
        <section
          dir="rtl"
          className="grid grid-rows-2 grid-cols-3 justify-items-center items-center gap-[27px] mt-[50px] pb-[29px]"
        >
          <div
            className="relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]"
            onMouseOver={changeColorTeacher}
            onMouseLeave={resetColor}
          >
            <div className="bg-gradient-[132deg] from-[#ecf9fd] to-[#DAF2FB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <Image
                src="/assets/images/card1.png"
                className=""
                height={31}
                width={28}
              />
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="teacherTitle"
                className="text-center text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                اساتید حرفه ای
              </span>
            </div>
            <div
              id="teacherDescription"
              className="text-center text-[#4D6982] text-[14px] leading-[30px] font-iranYekan z-[1] transition duration-300"
            >
              در مکین شما با منتور هایی کار می کنید که خودشون این راه را رفتن و
              چندین پروژه انجام شده دارن و ثابت کردن می تونن .شما را به موفقیت
              برسونن
            </div>
            <div
              className={`${
                !teacherHover ? "hidden" : "animate-hoverPaint"
              } absolute top-0 left-0 bg-[#45C0ED] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>

          <div
            className="relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]"
            onMouseOver={changeColorPayment}
            onMouseLeave={resetColor}
          >
            <div className="bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <Image
                src="/assets/images/card2.png"
                className=""
                height={31}
                width={28}
              />
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="paymentTitle"
                className="text-center text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                شرایط پرداخت قسطی
              </span>
            </div>
            <div
              id="paymentDescription"
              className="text-center text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              کارآموزهایی که در این دوره شرکت میکنن تمام هزینه ها را به صورت
              قسطی توی 20 ماه پرداخت میکنند، این خودش یه مزیته که هر کسی که
              مستعده، بتونه بهره ببره
            </div>
            <div
              className={`${
                !paymentHover ? "hidden" : "animate-hoverPaint"
              } absolute top-0 left-0 bg-[#FF792C] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>

          <div
            className="relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]"
            onMouseOver={changeColorTeach}
            onMouseLeave={resetColor}
          >
            <div className="bg-gradient-[132deg] from-[#E6EAED] to-[#CCD4DB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <Image
                src="/assets/images/card3.png"
                className=""
                height={31}
                width={28}
              />
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="teachTitle"
                className="text-center text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                آموزش های کاربردی
              </span>
            </div>
            <div
              id="teachDescription"
              className="text-center text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              در این بوت کمپ چیزهایی آموزش داده میشه که واقعا به درد بازار کار
              میخوره و واقعا نیاز داره، شما بعد از این دوره میتونی خودتو یه
              جونیور بدونی
            </div>
            <div
              className={`${
                !teachHover ? "hidden" : "animate-hoverPaint"
              } absolute top-0 left-0 bg-[#00294D] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
          <div
            className="relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]"
            onMouseOver={changeColorWorkshop}
            onMouseLeave={resetColor}
          >
            <div className="bg-gradient-[132deg] from-[#E6EAED] to-[#CCD4DB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <Image
                src="/assets/images/card4.png"
                className=""
                height={31}
                width={28}
              />
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="workshopTitle"
                className="text-center text-[#00213E] text-[18px]  leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                کارگاه های آموزشی
              </span>
            </div>
            <div
              id="workshopDescription"
              className="text-center text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              در طی این دوره، کارگاه های متنوعی خواهید داشت. کارگاه های رزومه
              نویسی، حضور در جلسه مصاحبه، فرهنگ سازمانی و کارگاه های انتقال
              تجربه، که از شما یه حرفه ای میسازه
            </div>
            <div
              className={`${
                !workshopHover ? "hidden" : "animate-hoverPaint"
              } absolute top-0 left-0 bg-[#00294D] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
          <div
            className="relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]"
            onMouseOver={changeColorGuarantee}
            onMouseLeave={resetColor}
          >
            <div className="bg-gradient-[132deg] from-[#ECF9FD] to-[#DAF2FB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <Image
                src="/assets/images/card5.png"
                className=""
                height={31}
                width={28}
              />
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="guaranteeTitle"
                className="text-center text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                تضمین واقعی
              </span>
            </div>
            <div
              id="guaranteeDescription"
              className="text-center text-[#4D6982] z-[1] text-[14px] leading-[30px] font-iranYekan transition duration-300"
            >
              اینکه 70% هزینه رو بعد از استخدام بعد از پایان دوره، به صورت قسطی
              از حقوقت توی یکسال پس میدی واین بهترین .تضمین برای اینکه ثابت کنه
              روش ما جواب میده
            </div>
            <div
              className={`${
                !guaranteeHover ? "hidden" : "animate-hoverPaint"
              } absolute top-0 left-0 bg-[#45C0ED] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
          <div
            className="relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]"
            onMouseOver={changeColorIntimate}
            onMouseLeave={resetColor}
          >
            <div className="bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <Image
                src="/assets/images/card6.png"
                className=""
                height={31}
                width={28}
              />
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="intimateTitle"
                className="text-center text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                محیطی صمیمی
              </span>
            </div>
            <div
              id="intimateDescription"
              className="text-center text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              کارآموزا در بوت کمپ مکین، توی یک محیط صمیمی با همکاری و هم افزایی،
              سعی میکنن به موفقیت برسن. برای .موفقیت همیشه به دوستای خوب نیاز
              داری
            </div>
            <div
              className={`${
                !intimateHover ? "hidden" : "animate-hoverPaint"
              } absolute top-0 left-0 bg-[#FF792C] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Features;
