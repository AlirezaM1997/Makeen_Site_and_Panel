const AskedQuestion = () => {
  return (
    <>
      <div className=" w-full px-[25px] ">
        <div className="h-[629px] bg-[#001d36] pr-[10px] mb-[80px] relative ">
          <h1 className="text-[#ECF9FD] w-fit -red-500 text-[20px] font-extrabold font-iranYekan absolute left-[600px] top-[51px] ">
            سوالات متداول شما
          </h1>

          <div >
            <ul
              className="grid grid-cols-2 gap-4 w-full top-[143px] px-[10px]	absolute bg-red-500 left-[0px]  "
              dir="rtl"
              data-aos="fade-up"
            >
              <li className="bg-[#FFFFFF] border-[1px] border-[#CACBCB] p-[20px] ">
                من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] border-[#CACBCB] p-[20px] ">
                توی این 6 ماه چیکار می کنیم و چی یاد می گیریم؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] border-[#CACBCB] p-[20px]">
                معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] border-[#CACBCB] p-[20px]">
                هزینه ی دوره ها چقدره؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] border-[#CACBCB] p-[20px]">
                مراحل ثپت نام توی آکادمی مکین چجوریه؟
              </li>
              <li className="bg-[#FFFFFF] border-[1px] border-[#CACBCB] p-[20px]">
                برای مصاحبه حضوری لازمه منابع خاصی رو مطالعه کنم؟
              </li>
            </ul>
          </div>

          <h1 className="text-[#c1c4c5] hover:text-[#fdfdfd] cursor-pointer w-fit absolute bottom-[50px] left-[600px] font-iranYekan -red-400 ">
            مشاهده ی سوالات بیشتر
          </h1>
        </div>
      </div>
    </>
  );
};

export default AskedQuestion;
