import Head from "next/head";

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
      </section>
    </>
  );
}
