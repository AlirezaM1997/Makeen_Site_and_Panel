import Head from "next/head";
import Image from "next/image";

const Cooperation = () => {
  return (
    <>
      <Head>
        <title>درخواست همکاری</title>
      </Head>
      <div>
        <header className="px-[30px] relative">
          <div className="h-[302px] relative mt-[71px] rounded-[20px] overflow-hidden">
            <Image
              src="/assets/images/cooperation-header-image.png"
              layout="fill"
              className="bgHeader border-[0.5px] border-[#CACBCB] rounded-[20px]"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[20px] text-[#ECF9FD] font-iranYekan leading-[3px] font-extrabold">
              درخواست همکاری با مکین
            </span>
          </div>
        </header>
        <section></section>
      </div>
      <style>
        {`
          .bgHeader{
            filter:brightness(70%) blur(8px) opacity(0.8) contrast(1.2) drop-shadow(2px 4px 6px black);
          }
          `}
      </style>
    </>
  );
};

export default Cooperation;
