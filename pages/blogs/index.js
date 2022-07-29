import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "../../components/commonlyUsedComponents/BlogCard";
export default function blogs() {
  const allBlogs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Head>
        <title>وبلاگ</title>
      </Head>
      <section className="pt-[140px] px-[50px]">
        <h1 className="text-[#00213e] text-[20px] leading-[35px] font-extrabold font-iranYekan text-center">
          بلاگ
        </h1>
        <h4 className="text-[#00213E] text-[16px] leading-[28px] font-bold font-iranYekan mt-[20px] text-center">
          جدیدترین مطالب و مقالات از مکین
        </h4>
        <div className="flex pt-[57px] pb-[41px]">
          <div className="flex flex-col w-1/2 pr-[30px]">
            <div className="flex justify-end items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="text-[12px] text-[#4D6982] leading-[16px] font-medium font-iranYekan">
                    1400 آبان 4
                  </span>
                  <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-3">
                    <div className="relative w-[14px] h-[16px]">
                      <Image
                        layout="fill"
                        src={"/assets/images/calendar.png"}
                        alt="calendar"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center ml-[30px]">
                  <span className="text-[12px] text-[#4D6982] leading-[16px] font-medium font-iranYekan">
                    320
                  </span>
                  <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-3">
                    <div className="relative w-[20px] h-[12px]">
                      <Image
                        layout="fill"
                        src={"/assets/images/eye.png"}
                        alt="eye"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[12px] text-[#1A3E5F] leading-[21px] font-bold font-iranYekan p-[10px] rounded-[8px] bg-gradient-[106deg] from-[#E6EAED] to-[#CCD4DB] ml-[30px] ">
                {"PHP برنامه نویسی "}•
              </span>
            </div>
            <div className="mt-[32px] mb-[30px] text-[21px] text-[#00213E] leading-[36p] font-bold font-iranYekan text-right">
              چرا طراحان باید به جای استفاده از استفاده کنند؟ + راه px از rem حل
              در فیگما
            </div>
            <div
              dir="rtl"
              className="text-[16px] text-[#4D6982] leading-[42px] font-bold font-iranYekan text-right"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی .می باشد
            </div>
            <div className="flex justify-between items-center mt-[20px]">
              <Link href={"#"}>
                <a className="text-[14px] text-[#94A3B1] leading-[25px] font-bold font-iranYekan">
                  مشاهده ی مطلب
                </a>
              </Link>
              <div className="flex items-center">
                <span className="text-[14px] text-[#4D6982] leading-[25px] font-bold font-iranYekan">
                  کیمیا سادات پیشداد
                </span>
                <div className="relative w-[40px] h-[40px] ml-[10px]">
                  <Image
                    layout="fill"
                    src={"/assets/images/magazineAvatar.png"}
                    alt="magazineAvatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 h-[400px]">
            <Image src={"/assets/images/lastBlog.png"} layout="fill" />
          </div>
        </div>
        <hr className="mb-[39px]" />
        <div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[14px] text-[#94A3B1] text-center font-iranYekan">
                نمایش همه
              </span>
            </div>
            <div>
              <span className="text-[14px] text-[#94A3B1] text-center font-iranYekan">
                دسته بندی ها
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {allBlogs.map((item, index) => (
              <div key={index}>
                <BlogCard item={item} />
              </div>
            ))}
          </div>
          <div className="text-[18px] text-[#94A3B1] text-center font-iranYekan mt-[60px]">
            مطالب بیشتر
          </div>
        </div>
      </section>
    </>
  );
}
