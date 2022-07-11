const AskedQuestion = () => {
  return (
    <>
      <div className=" w-full bg-red-400 ">
        <div className="h-[629px] bg-[#001d36] mb-[80px] relative ">
          <h1 className="text-[#ECF9FD] w-full flex justify-center mt-[60px] text-[20px] font-extrabold font-iranYekan absolute ">
            سوالات متداول شما
          </h1>

          <div >
            <ul
              className="grid grid-cols-2 gap-[30px] w-full top-[143px] px-[30px]	absolute"
              dir="rtl"
              data-aos="fade-up"
            >
              <li className="bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px] ">
                من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px] ">
                توی این 6 ماه چیکار می کنیم و چی یاد می گیریم؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]">
                معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]">
                هزینه ی دوره ها چقدره؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]">
                مراحل ثپت نام توی آکادمی مکین چجوریه؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]">
                برای مصاحبه حضوری لازمه منابع خاصی رو مطالعه کنم؟
              </li>
            </ul>
          </div>

          <h1 className="text-[#c1c4c5] hover:text-[#fdfdfd] cursor-pointer w-full flex justify-center bottom-[100px] absolute font-iranYekan">
            مشاهده ی سوالات بیشتر
          </h1>
        </div>
      </div>
    </>
  );
};

export default AskedQuestion;
