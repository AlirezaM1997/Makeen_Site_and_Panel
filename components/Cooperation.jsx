//next
import Head from "next/head";
import Image from "next/image";

//form
import Select from "react-select";

const courses = [
  {
    value: "React / React Native دوره ی",
    label: "React / React Native دوره ی",
  },
  {
    value: "Net .دوره ی",
    label: "Net .دوره ی",
  },
  {
    value: "Vue.js دوره ی",
    label: "Vue.js دوره ی",
  },
  {
    value: "Python دوره ی",
    label: "Python دوره ی",
  },
  {
    value: "UI/UX دوره ی",
    label: "UI/UX دوره ی",
  },
];
const methodOfIntroduction = [
  {
    value: "معرفی توسط دیگران",
    label: "معرفی توسط دیگران",
  },
  {
    value: "توسط پرسنل خودتون",
    label: "توسط پرسنل خودتون",
  },
  {
    value: "از طریق آگهی سایت های کاریابی",
    label: "از طریق آگهی سایت های کاریابی",
  },
  {
    value: "راه های دیگر",
    label: "راه های دیگر",
  },
];
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
              alt="cooperation-header"
              className="bgHeader border-[0.5px] border-[#CACBCB] rounded-[20px]"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[20px] text-[#ECF9FD] font-iranYekan leading-[3px] font-extrabold">
              درخواست همکاری با مکین
            </span>
          </div>
        </header>
        <section className="px-[244.5px]">
          <div className="mt-[40px]">
            <h1 className="text-[18px] text-[#4D6982] font-iranYekan leading-[40px] font-extrabold text-center">
              !همکار گرامی با سلام
            </h1>
            <h3 className="text-[16px] text-[#4D6982] font-iranYekan leading-[40px] font-bold text-center my-5">
              لطفا در صورتی که برای تکمیل تیم خود درخواست جذب نیرو از آکادمی
              مکین را دارید فرم زیر را تکمیل کنید
              <br />
              همکاران ما در اولین فرصت با شما تماس خواهند گرفت
            </h3>
            <hr />
          </div>
          <div
            dir="rtl"
            className="grid grid-cols-2 grid-rows-5 gap-[30px] justify-items-center items-center mt-[50px]"
          >
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                نام شرکت
              </label>
              <input
                type="text"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="نام شرکت خود را وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                نام نماینده شرکت
              </label>
              <input
                type="text"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="نام نماینده شرکت را وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                سال تاسیس شرکت
              </label>
              <input
                type="text"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="سال تاسیس شرکت را به صورت 1300/01/1 وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                شماره تماس
              </label>
              <input
                type="number"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                متقاضی استخدام برای
              </label>
              <Select
                menuPlacement="bottom"
                className="border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none"
                placeholder="دوره ی مورد نظر خود را انتخاب کنید"
                //value={}
                // onChange={}
                options={courses}
                isSearchable={false}
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                عنوان کاری شرکت
              </label>
              <input
                type="text"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="عنوان کاری شرکت خود را وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                تعداد پرسنل
              </label>
              <input
                type="number"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="تعداد پرسنل شرکت خود را وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                تعداد نیروی استخدامی
              </label>
              <input
                type="text"
                className="border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none"
                placeholder="تعداد نیروی مورد نظر خود را وارد کنید"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                نحوه ی آشنایی با بوت کمپ مکین
              </label>
              <Select
                menuPlacement="bottom"
                className="border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none"
                options={methodOfIntroduction}
                defaultValue={{
                  label: "معرفی توسط دیگران",
                  value: "معرفی توسط دیگران",
                }}
                //value={}
                // onChange={}
                isSearchable={false}
              />
            </div>
          </div>
          <div className="flex justify-center mt-[65px]">
            <button className="bg-[#00294D] text-[#ECF9FD] py-[14px] px-[51px] rounded-[10px] text-[16px] font-iranYekan leading-[28px] font-bold">
              ثبت درخواست
            </button>
          </div>
        </section>
      </div>
      <style>
        {`
          .bgHeader{
            filter:brightness(70%) blur(8px) opacity(0.8) contrast(1.2) drop-shadow(2px 4px 6px black);
          }
          .css-1s2u09g-control , .css-1pahdxg-control{
            padding: 8px;
            background-color: transparent !important;
            border-color:transparent !important;
            border-width: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          .css-1pahdxg-control:focus , .css-1pahdxg-control:hover , .css-1pahdxg-control:active{
            border-color:transparent !important;
            border-width: 0 !important;
            box-shadow: none !important;
          }
          `}
      </style>
    </>
  );
};

export default Cooperation;
