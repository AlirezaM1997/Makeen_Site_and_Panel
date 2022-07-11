/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useState } from "react";

const AskedQuestion = () => {
  const [dontKnow, setDontKnow] = useState(false);
  const [costOfCourse, setCostOfCourse] = useState(false);
  const [inSixMonth, setInSixMonth] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [courseScale, setCourseScale] = useState(false);
  const [interview, setInterview] = useState(false);

  const showAndHideDontKnowNothing = () => {
    setDontKnow(!dontKnow);
  };

  const showAndHideHazinehDore = () => {
    setCostOfCourse(!costOfCourse);
  };

  const showAndHideInSixMonth = () => {
    setInSixMonth(!inSixMonth);
  };

  const showAndHideSignUp = () => {
    setSignUp(!signUp);
  };

  const showAndHideCourseScale = () => {
    setCourseScale(!courseScale);
  };

  const showAndHideInterview = () => {
    setInterview(!interview);
  };

  return (
    <>
      <div className=" w-full font-iranYekan ">
        <div className="h-[629px] bg-[#001d36] mb-[80px] relative ">
          {/* <div className="absolute bg-red-500">
            <Image width={100} height={100} src={'/assets/images/orangeCircle.png'} alt="Orange Cirle" />
          </div> */}
          <h1 className="text-[#ECF9FD] w-screen flex justify-center mt-[60px] text-[20px] font-extrabold font-iranYekan absolute ">
            سوالات متداول شما
          </h1>

          <div>
            <ul
              className="grid grid-cols-2 gap-[30px] w-full top-[143px] px-[30px]	absolute"
              dir="rtl"
            >
              <li
                onClick={() => showAndHideDontKnowNothing()}
                id="toggle"
                className="flex relative cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]"
              >
                <div className="bg-[#FFD7C0] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                  <Image
                    src="/assets/images/commentRed.png"
                    width={20}
                    height={20}
                    alt="comments"
                  />
                </div>
                {dontKnow ? (
                  <div className="rotate-180 duration-300 absolute left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                ) : (
                  <div className="absolute duration-300 left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                )}
                من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟
                {dontKnow ? (
                  <div
                    style={{ zIndex: 999 }}
                    className=" absolute pl-[200px] pt-[50px] pb-[10px] pr-[10px] text-[#4D6982] rounded-b-[20px]  w-full left-[0px] mt-[35px] bg-inherit "
                  >
                    <hr className="w-[95%] absolute mr-[10px] top-[20px] " />
                    برای شرکت توی دوره های مکین تقریبا به هیچ دانش اولیه ای
                    احتیاج ندارید. ما شما رو .از نقطه صفر به مرحله استخدام
                    میرسونیم. فقط کافیه علاقه داشته باشید
                  </div>
                ) : null}
              </li>

              <li
                onClick={() => showAndHideHazinehDore()}
                className="flex relative cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]"
              >
                <div className="bg-[#CCD4DB] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                  <Image
                    src="/assets/images/commentGrey.png"
                    width={20}
                    height={20}
                    alt="comments"
                  />
                </div>
                {costOfCourse ? (
                  <div className="rotate-180 duration-300 absolute left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                ) : (
                  <div className="absolute duration-300 left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                )}
                هزینه ی دوره ها چقدره؟
                {costOfCourse ? (
                  <div
                    style={{ zIndex: 999 }}
                    className=" bg-inherit absolute px-[20px] pt-[40px] pb-[10px]  text-[#4D6982] w-fit rounded-b-[20px] left-[0px] mt-[35px] "
                  >
                    <hr className="w-[95%] absolute ml-[20px] top-[20px] " />
                    هزینه ی هر دوره به عوامل و شرایط گوناگونی مثل نوع دوره، مدت
                    زمان دوره، نتیجه ی مصاحبه و... بستگی داره اما نحوه ی پرداخت
                    هزینه ها در مکین کاملا: منعطفه! اما شیوه ی متداول در آکادمی
                    مکین اینه پرداخت 30درصد هزینه ها طی دوره و 70 درصد اون بعد
                    از استخدام که همش رو به صورت قسطی .پرداخت می کنید
                  </div>
                ) : null}
              </li>

              <li
                onClick={() => showAndHideInSixMonth()}
                className="flex relative cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px] "
              >
                <div className="bg-[#DAF2FB] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                  <Image src="/assets/svg/message.svg" width={20} height={20} />
                </div>
                {inSixMonth ? (
                  <div className="rotate-180 duration-300 absolute left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                ) : (
                  <div className="absolute  duration-300 left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                )}
                توی این 6 ماه چیکار می کنیم و چی یاد می گیریم؟
                {inSixMonth ? (
                  <div
                    style={{ zIndex: 999 }}
                    className=" bg-inherit absolute px-[20px] pt-[40px] pb-[10px]  text-[#4D6982] w-fit rounded-b-[20px] left-[0px] mt-[35px] "
                  >
                    <hr className="w-[95%] absolute ml-[20px] top-[20px] " />
                    توی سه ماه اول تمام آموزه های فنی برای انجام پروژه رو یاد
                    میگیری و در سه ماه بعدش زیر نظر منتور حرفه ای دوره ، یه
                    پروژه واقعی رو با بچه های دوره های دیگه شروع میکنی. در همین
                    مدت هم کلی کارگاه های جذاب و کاربردی برات برگزار میکنیم .تا
                    برای استخدام کارِت خیلی راحت بشه
                  </div>
                ) : null}
              </li>

              <li
                onClick={() => showAndHideSignUp()}
                className="flex relative cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]"
              >
                <div className="bg-[#DAF2FB] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                  <Image
                    src="/assets/images/commentGrey.png"
                    width={20}
                    height={20}
                    alt="comments"
                  />
                </div>
                {signUp ? (
                  <div className="rotate-180 duration-300 absolute left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                ) : (
                  <div className="absolute  duration-300 left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                )}
                مراحل ثپت نام توی آکادمی مکین چجوریه؟
                {signUp ? (
                  <div
                    style={{ zIndex: 999 }}
                    className=" bg-inherit absolute px-[20px] pt-[40px] pb-[10px]  text-[#4D6982] w-fit rounded-b-[20px] left-[0px] mt-[35px] "
                  >
                    <hr className="w-[95%] absolute ml-[20px] top-[20px] " />
                    بعد از اینکه شما درخواستتو برای ما ارسال مردی ما با شما تماس
                    میگیریم و یه قرار مصاحبه حضوری با .هم میذاریم. اگر توی
                    مصاحبه خودتو خوب نشون بدی، به خانواده مکین اضافه میشی
                  </div>
                ) : null}
              </li>

              <li
                onClick={() => showAndHideCourseScale()}
                className="flex cursor-pointer relative bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]"
              >
                <div className="bg-[#CCD4DB] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                  <Image
                    src="/assets/images/commentGrey.png"
                    width={20}
                    height={20}
                    alt="comments"
                  />
                </div>
                {courseScale ? (
                  <div className="rotate-180 duration-300 absolute left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                ) : (
                  <div className="absolute duration-300 left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                )}
                معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟
                {courseScale ? (
                  <div
                    style={{ zIndex: 999 }}
                    className=" bg-inherit absolute px-[20px] pt-[50px] pb-[15px]  text-[#4D6982] w-fit left-[0px] rounded-b-[20px]  mt-[35px] "
                  >
                    <hr className="w-[95%] absolute ml-[20px] top-[20px] " />
                    برای شرکت توی دوره های مکین تقریبا به هیچ دانش اولیه ای
                    احتیاج ندارید. ما شما رو .از نقطه صفر به مرحله استخدام
                    میرسونیم. فقط کافیه علاقه داشته باشید
                  </div>
                ) : null}
              </li>

              <li
                onClick={() => showAndHideInterview()}
                className="flex relative cursor-pointer bg-[#FFFFFF] border-[1px] rounded-[20px] border-[#CACBCB] p-[20px]"
              >
                <div className="bg-[#FFD7C0] h-fit w-fit px-[6px] ml-[6px] rounded-[8px] pt-[6px] ">
                  <Image
                    src="/assets/images/commentRed.png"
                    width={20}
                    height={20}
                    alt="comments"
                  />
                </div>
                {interview ? (
                  <div className="rotate-180 duration-300 absolute left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                ) : (
                  <div className="absolute duration-300 left-[15px] ">
                    <Image
                      width={8}
                      height={4}
                      src={"/assets/images/arrow-down.png"}
                      alt="arrow-down"
                    />
                  </div>
                )}
                برای مصاحبه حضوری لازمه منابع خاصی رو مطالعه کنم؟
                {interview ? (
                  <div
                    style={{ zIndex: 999 }}
                    className=" bg-inherit absolute px-[20px] pt-[50px] pb-[15px]  text-[#4D6982] w-fit left-[0px] rounded-b-[20px]  mt-[35px] "
                  >
                    <hr className="w-[95%] absolute ml-[20px] top-[20px] " />
                    برای این مصاحبه لازم نیست به مباحث تئوری یا دانش خاصی مسلط
                   .باشی برای ما تلاش و انگیزه شما از همه چیز مهمتره
                  </div>
                ) : null}
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
