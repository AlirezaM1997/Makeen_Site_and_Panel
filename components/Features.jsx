import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="mt-[170px] px-[50px] pt-[26px] relative">
        <div className="right-0 top-0 h-[85px] w-[80px] absolute">
          <Image
            src="/assets/images/feature-r.png"
            layout="fill"
            alt="feature-design"
          />
        </div>
        <div className="absolute right-0 w-[375px] h-[475px] bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] -z-[1] "></div>
        <div className="absolute -left-[115px] top-0 h-[256px] w-[256px]">
          <Image
            src="/assets/images/feature-l.png"
            layout="fill"
            alt="feature-design"
          />
        </div>
        <div className="absolute left-0 w-[339px] h-[339px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -z-[1] "></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[339px] h-[339px] bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -z-[1] "></div>
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
          <div className="group relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]">
            <div className="bg-gradient-[132deg] from-[#ecf9fd] to-[#DAF2FB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <div className="h-[31px] w-[28px] relative">
                <Image
                  src="/assets/images/card1.png"
                  layout="fill"
                  alt="card1"
                />
              </div>
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="teacherTitle"
                className="group-hover:text-[#ECF9FD] text-center text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                اساتید حرفه ای
              </span>
            </div>
            <div
              id="teacherDescription"
              className="group-hover:text-[#C7ECFA] text-center text-[#4D6982] text-[14px] leading-[30px] font-iranYekan z-[1] transition duration-300"
            >
              در مکین شما با منتور هایی کار می کنید که خودشون این راه را رفتن و
              چندین پروژه انجام شده دارن و ثابت کردن می تونن .شما را به موفقیت
              برسونن
            </div>
            <div
              className={`hidden absolute group-hover:block animate-hoverPaint top-0 left-0 bg-[#45C0ED] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>

          <div className="group relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]">
            <div className="bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <div className="h-[31px] w-[28px] relative">
                <Image
                  src="/assets/images/card2.png"
                  layout="fill"
                  alt="card2"
                />
              </div>
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="paymentTitle"
                className="text-center group-hover:text-[#ECF9FD] text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                شرایط پرداخت قسطی
              </span>
            </div>
            <div
              id="paymentDescription"
              className="text-center group-hover:text-[#C7ECFA] text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              کارآموزهایی که در این دوره شرکت میکنن تمام هزینه ها را به صورت
              قسطی توی 20 ماه پرداخت میکنند، این خودش یه مزیته که هر کسی که
              مستعده، بتونه بهره ببره
            </div>
            <div
              className={`hidden group-hover:block animate-hoverPaint absolute top-0 left-0 bg-[#FF792C] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>

          <div className="group relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]">
            <div className="bg-gradient-[132deg] from-[#E6EAED] to-[#CCD4DB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <div className="h-[31px] w-[28px] relative">
                <Image
                  src="/assets/images/card3.png"
                  layout="fill"
                  alt="card3"
                />
              </div>
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="teachTitle"
                className="text-center group-hover:text-[#ECF9FD] text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                آموزش های کاربردی
              </span>
            </div>
            <div
              id="teachDescription"
              className="text-center group-hover:text-[#C7ECFA] text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              در این بوت کمپ چیزهایی آموزش داده میشه که واقعا به درد بازار کار
              میخوره و واقعا نیاز داره، شما بعد از این دوره میتونی خودتو یه
              جونیور بدونی
            </div>
            <div
              className={`hidden group-hover:block animate-hoverPaint absolute top-0 left-0 bg-[#00294D] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
          <div className="group relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]">
            <div className="bg-gradient-[132deg] from-[#E6EAED] to-[#CCD4DB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <div className="h-[31px] w-[28px] relative">
                <Image
                  src="/assets/images/card4.png"
                  layout="fill"
                  alt="card4"
                />
              </div>
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="workshopTitle"
                className="text-center group-hover:text-[#ECF9FD] text-[#00213E] text-[18px]  leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                کارگاه های آموزشی
              </span>
            </div>
            <div
              id="workshopDescription"
              className="text-center group-hover:text-[#C7ECFA] text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              در طی این دوره، کارگاه های متنوعی خواهید داشت. کارگاه های رزومه
              نویسی، حضور در جلسه مصاحبه، فرهنگ سازمانی و کارگاه های انتقال
              تجربه، که از شما یه حرفه ای میسازه
            </div>
            <div
              className={`hidden group-hover:block animate-hoverPaint absolute top-0 left-0 bg-[#00294D] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
          <div className="group relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]">
            <div className="bg-gradient-[132deg] from-[#ECF9FD] to-[#DAF2FB] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <div className="h-[31px] w-[28px] relative">
                <Image
                  src="/assets/images/card5.png"
                  layout="fill"
                  alt="card5"
                />
              </div>
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="guaranteeTitle"
                className="text-center group-hover:text-[#ECF9FD] text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                تضمین واقعی
              </span>
            </div>
            <div
              id="guaranteeDescription"
              className="text-center group-hover:text-[#C7ECFA] text-[#4D6982] z-[1] text-[14px] leading-[30px] font-iranYekan transition duration-300"
            >
              اینکه 70% هزینه رو بعد از استخدام بعد از پایان دوره، به صورت قسطی
              از حقوقت توی یکسال پس میدی واین بهترین .تضمین برای اینکه ثابت کنه
              روش ما جواب میده
            </div>
            <div
              className={`hidden group-hover:block animate-hoverPaint absolute top-0 left-0 bg-[#45C0ED] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
          <div className="group relative bg-[#FFFFFF] border-[0.5px] border-[#CACBCB] rounded-[20px] shadow-[10px_10px_20px_#00000014] flex flex-col items-center py-[30px] px-[22px]">
            <div className="bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] relative z-[1] rounded-[8px] bg-origin-padding w-[60px] h-[60px] flex justify-center items-center">
              <div className="h-[31px] w-[28px] relative">
                <Image
                  src="/assets/images/card6.png"
                  layout="fill"
                  alt="card6"
                />
              </div>
            </div>
            <div className="mt-[25px] mb-[15px] z-[1]">
              <span
                id="intimateTitle"
                className="text-center group-hover:text-[#ECF9FD] text-[#00213E] text-[18px] leading-[31px] font-bold font-iranYekan transition duration-300 "
              >
                محیطی صمیمی
              </span>
            </div>
            <div
              id="intimateDescription"
              className="text-center group-hover:text-[#C7ECFA] text-[#4D6982] text-[14px] z-[1] leading-[30px] font-iranYekan transition duration-300"
            >
              کارآموزا در بوت کمپ مکین، توی یک محیط صمیمی با همکاری و هم افزایی،
              سعی میکنن به موفقیت برسن. برای .موفقیت همیشه به دوستای خوب نیاز
              داری
            </div>
            <div
              className={`hidden group-hover:block animate-hoverPaint absolute top-0 left-0 bg-[#FF792C] rounded-[20px] w-full h-full z-[0]`}
            ></div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Features;
