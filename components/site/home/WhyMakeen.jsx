import Image from "next/image";
export default function WhyMakeen() {
  return (
    <>
      <section className="flex xl:flex-row flex-col xl:px-[120px] xl:pt-[80px] xl:pb-[130px] relative font-iranYekan">
        <div className="xl:w-[130px] xl:h-[130px] w-[130px] h-[339px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] top-0 right-0 rounded-full"></div>
        <div className="w-[120px] h-[205px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] -bottom-[50px] right-0 rounded-full hidden xl:block"></div>
        <div className="xl:w-[282px] xl:h-[282px] w-[120px] h-[120px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-20 blur-[50px] xl:bottom-0 xl:-left-[64px] left-0"></div>
        <div className="xl:w-[50%] w-full h-[230px] xl:h-[unset] relative">
          <div className="xl:h-[400px] xl:w-[350px] h-[200px] w-[175px] absolute xl:right-[30px] right-[61px]">
            <Image
              src="/assets/images/whyBootcamp.png"
              className="xl:rounded-[20px] rounded-[10px]"
              layout="fill"
              alt="whyBootcamp"
            />
          </div>
          <div className="xl:w-[260px] xl:h-[296px] h-[130px] w-[148px] absolute xl:-bottom-[45px] left-[71px] xl:-left-[5px] bottom-0">
            <Image
              src="/assets/images/whyBootcamp.png"
              className="xl:rounded-[20px] rounded-[10px]"
              layout="fill"
              alt="whyBootcamp"
            />
          </div>
          <div className="w-[220px] h-[220px] absolute top-[13px] left-[17px] -z-[1] hidden xl:block">
            <Image
              src="/assets/images/methFeature2.png"
              layout="fill"
              alt="whyBootcamp"
            />
          </div>
          <div className="w-[261px] h-[261px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] top-8 left-8 -z-[1] hidden xl:block"></div>
          <div className="w-[261px] h-[261px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-20 blur-[50px] -bottom-[130px] -right-[130px] -z-[1] hidden xl:block"></div>
        </div>
        <div
          dir="rtl"
          className="flex flex-col relative xl:w-[50%] w-full xl:py-5 xl:pl-8 pl-12 xl:pr-0 pr-12 mt-[40px] xl:mt-0"
        >
          <h1 className="xl:text-[20px] text-[16px] text-[#00213E] leading-[35px] font-black text-center xl:text-right">
            چرا بوت کمپ مکین؟
          </h1>
          <h6 className="xl:text-[16px] text-[12px] text-[#4D6982] xl:leading-[36px] leading-[26px] font-bold mt-[21px] mb-[35px]">
            بوت کمپ مکین حدود 10 ساله که در حال پرورش نیروهای متخصص و آماده به
            کار برای بازار کاره و از نیازهای بازار کار به خوبی با خبره و میدونی
            که چه مهارت هایی برای استخدام شدن لازمه. ما دوره های مختلفی رو
            برگزار می کنیم که اساتید خیلی از این دوره ها یه روزی خودشون توی مکین
            بودن و این راهو رفتن و حالا متخصص شدن. فقط کافیه همین امروز تصمیم
            خودتو بگیری و با ثبت نام تو یکی از دوره های ما قدم تو راه متخصص شدن
            بذاری.
          </h6>
          <div className="flex justify-center items-center">
            <div className="text-[#4D6982] text-[16px] leading-[36px] font-bold hidden xl:block xl:whitespace-nowrap">
              برای شروع رو این دکمه کلیک کن
            </div>
            <div className="w-[71px] h-[28px] relative mx-[20px] hidden xl:block">
              <Image
                src="/assets/images/whyBootcamp-arrow.png"
                layout="fill"
                alt="whyBootcamp-arrow"
              />
            </div>
            <div className="z-[1]">
              <button
                dir="ltr"
                className="text-[#ECF9FD] xl:text-[16px] text-[12px] leading-[28px] font-bold xl:px-[26px] xl:py-[14px] px-[25px] py-[12.5px] bg-[#00294D] rounded-[10px] xl:hover:-translate-y-[6px] transition-all duration-300 hover:ease-out xl:whitespace-nowrap"
              >
                !همین حالا مکینی شو
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
