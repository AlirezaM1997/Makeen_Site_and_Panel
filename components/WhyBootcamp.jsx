import Image from "next/image";

const WhyBootcamp = () => {
  return (
    <>
      <section className="flex px-[120px] pt-[80px] pb-[130px] relative">
        <div className="w-[130px] h-[339px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] top-0 right-0 rounded-full"></div>
        <div className="w-[120px] h-[205px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] -bottom-[50px] right-0 rounded-full"></div>
        <div className="w-[282px] h-[282px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] bottom-0 -left-[64px]"></div>
        <div className="w-[45%] relative">
          <div className="h-[400px] w-[350px] absolute right-0">
            <Image
              src="/assets/images/whyBootcamp-img2.png"
              layout="fill"
              alt="whyBootcamp"
            />
          </div>
          <div className="w-[260px] h-[296px] absolute -bottom-[85px]">
            <Image
              src="/assets/images/whyBootcamp-img1.png"
              layout="fill"
              alt="whyBootcamp"
            />
          </div>
          <div className="w-[220px] h-[220px] absolute top-5 left-5 -z-[1]">
            <Image
              src="/assets/images/methFeature2.png"
              layout="fill"
              alt="whyBootcamp"
            />
          </div>
          <div className="w-[261px] h-[261px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] top-8 left-8 -z-[1]"></div>
          <div className="w-[261px] h-[261px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -bottom-[130px] -right-[130px] -z-[1]"></div>
        </div>
        <div dir="rtl" className="flex flex-col relative w-[55%] py-4">
          <h1 className="text-[20px] text-[#00213E] font-iranYekan leading-[35px] font-black">
            چرا بوت کمپ مکین؟
          </h1>
          <h6 className="text-[16px] text-[#4D6982] font-iranYekan leading-[36px] font-bold mt-[21px] mb-[35px]">
            بوت کمپ مکین حدود 10 ساله که در حال پرورش نیروهای متخصص و آماده به
            کار برای بازار کاره و از نیازهای بازار کار به خوبی با خبره و میدونی
            که چه مهارت هایی برای استخدام شدن لازمه. ما دوره های مختلفی رو
            برگزار می کنیم که اساتید خیلی از این دوره ها یه روزی خودشون توی مکین
            بودن و این راهو رفتن و حالا متخصص شدن. فقط کافیه همین امروز تصمیم
            خودتو بگیری و با ثبت نام تو یکی از دوره های ما قدم تو راه متخصص شدن
            بذاری.
          </h6>
          <div className="flex justify-center items-center">
            <div className="text-[#4D6982] text-[16px] leading-[36px] font-iranYekan font-bold">
              برای شروع رو این دکمه کلیک کن
            </div>
            <div className="w-[130px] h-[40px] relative mx-[20px]">
              <Image
                src="/assets/images/whyBootcamp-arrow.png"
                layout="fill"
                alt="whyBootcamp-arrow"
              />
            </div>
            <div className="z-[1]">
              <button
                dir="ltr"
                className="text-[#ECF9FD] text-[16px] leading-[28px] font-bold px-[26px] py-[14px] bg-[#00294D] rounded-[10px] hover:-translate-y-[6px] transition-all duration-300 hover:ease-out"
              >
                !همین حالا مکینی شو
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyBootcamp;
