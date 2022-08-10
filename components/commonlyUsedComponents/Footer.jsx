import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { showHideModalAction } from "../../slices/showRegistrationModalSlice";
export default function Footer() {
  const scrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const dispatch = useDispatch();
  return (
    <>
      <footer className="w-full px-[30px] relative font-iranYekan">
        <div className="flex justify-center relative overflow-hidden">
          <div className="absolute -left-[145px] -bottom-[345px] w-[625px] h-[625px] z-10 mix-blend-lighten">
            <Image
              layout="fill"
              src={"/assets/images/footer_left_whiteCircle.png"}
              alt="footer_left_whiteCircle"
            />
          </div>
          <div className="absolute -right-[175px] top-[30px] w-[396px] h-[396px] z-10 mix-blend-lighten">
            <Image
              layout="fill"
              src={"/assets/images/footer_right_whiteCircle.png"}
              alt="footer_left_whiteCircle"
            />
          </div>
          <div className="h-[489px]">
            <Image
              src="/assets/images/backgroundFooter.png"
              alt="footer"
              layout="fill"
            />
          </div>
          <div className="h-fit absolute flex justify-center pt-[10px] cursor-pointer transition  delay-150  hover:-translate-y-1   ">
            <div className="w-[10px] h-[13px] relative">
              <Image
                onClick={() => scrollClick()}
                layout="fill"
                src="/assets/images/goUp.png"
                alt="go-up"
              />
            </div>
          </div>
          <div className="flex justify-center w-full mt-[60px] absolute">
            <div className="w-[118px] h-[42px] relative">
              <Image
                layout="fill"
                src="/assets/images/makeenFooterLogo.png"
                alt="makeen-logo"
              />
            </div>
          </div>
          <p className="absolute opacity-70 leading-[35px] mt-[123px] text-[#ECF9FD] w-full flex justify-center h-fit px-[280px] text-[10px] lg:text-[14px] text-center	">
            آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد فرصت های
            شغلی برای جوانان این سرزمینه. ما توی آکادمی مکین با استفاده از
            متدولوژی آموزشی منحصر به فرد ، کمک میکنیم تا آدم های با انگیزه بتونن
            به رویاهاشون .برسن. ما توی مکین ، فقط به دانشجوها آموزش نمیدیم. ما
            .بهشون آینده میدیم
          </p>
          <div className="absolute mt-[270px] flex justify-between px-[390px] w-full">
            <div className="relative flex flex-col items-center z-10">
              <div className="w-[35px] h-[35px] hover:shadow-[0_3px_9px_0px] hover:shadow-[#fff] peer flex justify-items-center justify-center rounded-[50%] bg-gradient-[129deg] from-[#FFEEBB]  to-[#fac4bf]  bg-origin-padding bg-no-repeat cursor-pointer">
                <div className="w-[16px] h-[16px] self-center shadow-white relative">
                  <Image
                    src="/assets/images/google-maps-logo.png"
                    layout="fill"
                    objectFit={"contain"}
                    alt="google-map"
                    className="self-center shadow-white"
                  />
                </div>
              </div>
              <p className="text-[#ECF9FD] w-max absolute top-[50px] hidden peer-hover:block">
                موقعیت ما بر روی نقشه
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="w-[35px] h-[35px]  hover:shadow-[0px_3px_9px_px] peer hover:shadow-[#fff] flex justify-items-center justify-center rounded-[50%] bg-[#ebecec] cursor-pointer">
                <div className="w-[16px] h-[16px] self-center relative">
                  <Image
                    src="/assets/images/key.png"
                    layout="fill"
                    objectFit={"contain"}
                    alt="key"
                  />
                </div>
              </div>
              <p className="text-[#ECF9FD] text-center absolute top-[50px] hidden w-[190px] peer-hover:block">
                تهران، مترو علم و صنعت، خيابان فرجام، پلاک 495، طبقه پنجم
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] peer hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%] bg-gradient-[132deg] from-[#ecf9fd] to-[#DAF2FB] bg-origin-padding bg-no-repeat cursor-pointer">
                <div className="w-[16px] h-[16px] self-center relative">
                  <Image
                    src="/assets/images/phone.png"
                    layout="fill"
                    objectFit={"contain"}
                    alt="phone"
                  />
                </div>
              </div>
              <p className="bg--500 text-[#ECF9FD] w-max absolute top-[50px] hidden peer-hover:block">
                021-77188185-6
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] peer hover:shadow-[#fff] flex justify-items-center justify-center rounded-[50%] bg-gradient-[132deg] from-[#FFF2EA] to-[#f8e1d4] bg-origin-padding bg-no-repeat cursor-pointer">
                <div className="w-[16px] h-[16px] self-center relative">
                  <Image
                    src="/assets/images/message.png"
                    layout="fill"
                    objectFit={"contain"}
                    alt="message"
                  />
                </div>
              </div>
              <p className="text-[#ECF9FD] w-fit absolute top-[50px] hidden peer-hover:block">
                Info@makeen.ir
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="w-[35px] h-[35px] relative hover:shadow-[0px_3px_9px_px] peer hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%]  bg-gradient-[132deg] from-[#E6EAED] to-[#bcc2c7] bg-origin-padding bg-no-repeat cursor-pointer">
                <div className="w-[16px] h-[16px] self-center relative">
                  <Image
                    src="/assets/images/instagram.png"
                    layout="fill"
                    objectFit={"contain"}
                    alt="instagram"
                  />
                </div>
              </div>
              <p className="text-[#ECF9FD] w-fit absolute top-[50px] hidden peer-hover:block">
                @makeenacademy
              </p>
            </div>
          </div>
          <ul className=" mt-[340px] flex-row-reverse z-10	px-[290px] pt-[60px] flex justify-evenly text-right w-full h-fit absolute text-[16px] ">
            <hr className="absolute w-[60%] px-[120px] border-[#294359] " />
            <Link href="/cooperation">
              <li className=" flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer  pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                دوره ها
              </li>
            </Link>
            <li
              className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300"
              onClick={() => dispatch(showHideModalAction(true))}
            >
              ثبت نام دوره
            </li>
            <Link href="/cooperation">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                درخواست همکاری
              </li>
            </Link>
            <Link href="/bootcamp">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300 ">
                بوت کمپ
              </li>
            </Link>
            <Link href="/aboutmakeen">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                درباره مکین
              </li>
            </Link>
            <Link href="/blogs">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                بلاگ
              </li>
            </Link>
          </ul>
        </div>
        <div className="pb-[10px] my-4 text-center text-[#00213E] opacity-50 after:content-['©'] after:ml-2 ">
          .تمام حق و حقوق این سایت متعلق به موسسه ایده آل رسانه مکین می باشد
        </div>
      </footer>
    </>
  );
}
