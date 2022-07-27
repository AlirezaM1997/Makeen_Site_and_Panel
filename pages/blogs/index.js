import Head from "next/head";
import Image from "next/image";

export default function blogs() {
  return (
    <>
      <Head>
        <title>وبلاگ</title>
      </Head>
      <section className="pt-[140px]">
        <h1 className="text-[#00213e] text-[20px] leading-[35px] font-extrabold font-iranYekan text-center">
          بلاگ
        </h1>
        <h4 className="text-[#00213E] text-[16px] leading-[28px] font-bold font-iranYekan mt-[20px] text-center">
          جدیدترین مطالب و مقالات از مکین
        </h4>
        <div className="flex px-[50px] pt-[57px] pb-[41px]">
            <div className="flex">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="relative w-1/2 h-[400px]">
                <Image src={"/assets/images/lastBlog.png"} layout="fill"/>
            </div>
        </div>
      </section>
    </>
  );
}
