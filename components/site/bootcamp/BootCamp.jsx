import Image from "next/image";
import Highlights from "./Highlights";
import Navigator from "./Navigator";
export default function BootCamp () {
  return (
    <>
      <section className="mb-[80px]">
        <div className="relative xl:mx-[30px] mx-[10px] h-[250px] mt-[71px] ">
          <Image
            layout="fill"
            priority
            src={"/assets/bootcamp/bootcamp.png"}
            alt="bootcamp"
          />
        </div>
        <div className="hidden xl:block">
          <Navigator />
          <Highlights />
        </div>
        <div
          className="font-iranYekan xl:pl-[120px] xl:pr-[320px] xl:mt-[-345px] px-6"
          dir="rtl"
        >
          <div className="">
            <h1
              className=" text-[#00213E] mb-[40px] text-[24px] font-bold "
              id="makeenTitle"
            >
              بوت کمپ مکین
            </h1>
            <p className=" leading-[42px] text-[#4D6982] font-bold text-[16px] ">
              امروزه با رشد چشم گیر فضای فناوری اطلاعات در کشور ، نیاز مبرم این
              صنعت به نیروهای متخصص و کاربلد ، روز به روز در حال افزایشه. از طرف
              دیگه اما به دلیل نقص سیستم آموزشی در اکثر دانشگاه ها در یاد دادن
              مهارت های کاربردی، نیروی مورد نیاز شرکت های حوزه فناوری اطلاعات،
              تامین نمیشه. به عبارت ساده تر، بازار کار به شدت دنبال نیروی متخصص
              میگرده اما نیروی مطلبوش رو پیدا نمیکنه. از طرفی فارغ التحصیلان
              رشته های مهندسی کامپیوتر و ... به شدت دنبال کار میگردن و در اکثر
              مواقع پیدا نمیکنن. آکادمی مکین این حفره ی بین بازار کار و کارجو رو
              با دوره های فشرده ی شش ماهه ی پروژه محور اصلاح کرده.
            </p>
          </div>
          <div className=" mt-[50px] ">
            <h1
              className=" text-[#00213E] mb-[20px] text-[24px] font-bold "
              id="bootcampTitle"
            >
              بوت کمپ چیست؟
            </h1>
            <p className=" leading-[40px] text-[#4D6982] font-bold text-[16px] ">
              بوت کمپ يه محيط يه محيط صميميه، يه جايي که با کمک استاد راهنما تو
              يه مدت مشخص تحت آموزش قرار مي گيريم
            </p>
          </div>
          <div className=" mt-[50px] ">
            <h1
              className=" text-[#00213E] mb-[20px] text-[24px] font-bold "
              id="differentTitle"
            >
              فرق بوت کمپ با آموزشگاه
            </h1>
            <p className=" leading-[40px] text-[#4D6982] font-bold text-[16px] ">
              ) آموزشگاه ها توي بازه محدود (36ساعته) رو براي آموزش اختصاص ميدن
              ولي توي بوت کمپ 540 ساعت کنار مايی و زیر نظر یک استاد راهنما
              (منتور تحت آموزش قرار میگیری توي بوت کمپ مکین علاوه بر آموزش فني
              .کارگاه هاي مفيد و جذابي هم برگزار ميشه .هدف این کارگاه ها ایجاد و
              تقویت . .مهارت هاییه که یک نیروی متخصص و حرفه ای باید در محیط کار
              بلد باشه
            </p>
          </div>
          <div className=" mt-[50px] ">
            <h1
              className=" text-[#00213E] mb-[20px] text-[24px] font-bold "
              id="projectTitle"
            >
              دوره های بوت کمپ کاملا پروژه محوره ، یعنی چی؟{" "}
            </h1>
            <p className=" leading-[40px] text-[#4D6982] font-bold text-[16px] ">
              یعنی شما تمام مباحث فنی و مهارت ها رو حین اجرای پروژه های واقعی
              یاد می گیری .این پروژه ها بعدا برات رزومه هم محسوب میشه! و آخر سر
              ، بعد از تموم شدن دوره، یه کارشناس استخدام کنارت قرار میگیره و قدم
              به قدم وضعیت مصاحبه هاتو پیگیری میکنه و بهت مشورت میده که دیگه
              خیالت برای استخدام راحتِ راحت باشه !{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
