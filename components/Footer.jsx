import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Footer.module.css";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  const [instagram, setInstagram] = useState(false);
  const [message, setMessage] = useState(false);
  const [phone, setPhone] = useState(false);
  const [key, setKey] = useState(false);
  const [google, setGoogle] = useState(false);

  const hoverInstagranShow = () => {
    setInstagram(true);
  };
  const hoverInstagranLeave = () => {
    setInstagram(false);
  };
  const hoverMessageShow = () => {
    setMessage(true);
  };
  const hoverMessageLeave = () => {
    setMessage(false);
  };

  const hoverPhoneShow = () => {
    setPhone(true);
  };
  const hoverPhoneLeave = () => {
    setPhone(false);
  };

  const hoverKeyShow = () => {
    setKey(true);
  };
  const hoverKeyLeave = () => {
    setKey(false);
  };

  const hoverGoogleShow = () => {
    setGoogle(true);
  };
  const hoverGoogleLeave = () => {
    setGoogle(false);
  };

  const scrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w-screen h-[554px] top-[30px] left- relative -blue-500">
        <div className="w-[96%] h-[489px] left-[30px]  bg-[#001d36] absolute top-[30px] rounded-[20px]  ">
          <img src="/public/assets/images/" className="absolute bottom-[0px] left-[40px]"  />
          <img onClick={() => scrollClick()} className="ml-[685px] absolute top-[-14px] cursor-pointer transition ease-in-out delay-150  hover:-translate-y-2 " src="/assets/images/Go Up.png" alt="go up" />
          <img
            className="w-[118px] absolute  h-[42px] ml-[640px] top-[40px] "
            src="/assets/images/makeenFooterLogo.png"
            alt="makeen logo"
          />
          <p className="ml-[255px] opacity-70 leading-[35px] mt-[123px] text-[#ECF9FD] w-[876px] h-[97px] text-[14px] text-center font-iranYekan	">
            آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد فرصت های
            شغلی برای جوانان این سرزمینه. ما توی آکادمی مکین با استفاده از
            متدولوژی آموزشی منحصر به فرد ، کمک میکنیم تا آدم های با انگیزه بتونن
            به رویاهاشون .برسن. ما توی مکین ، فقط به دانشجوها آموزش نمیدیم. ما
            .بهشون آینده میدیم
          </p>

          <div className=" bg--500 absolute ml-[400px] mt-[60px] flex justify-between w-[650px]">
            <div className="relative">
              <div
                onMouseEnter={() => hoverGoogleShow()}
                onMouseLeave={() => hoverGoogleLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0_3px_9px_0px] hover:shadow-[#fff] flex justify-items-center justify-center rounded-[50%] bg-gradient-[129deg] from-[#FFEEBB]  to-[#fac4bf]  bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <img
                  className="self-center shadow-white"
                  src="/assets/images/google-maps-logo.png"
                  alt="google map pic"
                />
              </div>
              {google ? (
                <p className="bg--500 text-[#ECF9FD] w-max absolute top-[50px] right-[-50px] font-iranYekan	 		">
                  موقعیت ما بر روی نقشه
                </p>
              ) : null}
            </div>
            <div className="relative">
              <div
                onMouseEnter={() => hoverKeyShow()}
                onMouseLeave={() => hoverKeyLeave()}
                className="w-[35px] h-[35px]  hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%] bg-[#ebecec] cursor-pointer"
              >
                <img
                  className="self-center"
                  src="/assets/images/key.png"
                  alt="key pic"
                />
                {key ? (
                  <p className="-red-500 text-[#ECF9FD] w-[250px] absolute top-[50px] text-center font-[14px] -[-40px] font-iranYekan">
                    تهران، مترو علم و صنعت، خيابان فرجام، پلاک 495، طبقه پنجم
                  </p>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <div
                onMouseEnter={() => hoverPhoneShow()}
                onMouseLeave={() => hoverPhoneLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%] bg-gradient-[132deg] from-[#ecf9fd] to-[#DAF2FB] bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <img
                  className={styles.mask}
                  src="/assets/images/phone.png"
                  alt="phone pic"
                />
              </div>
              {phone ? (
                <p className="bg--500 text-[#ECF9FD] w-max absolute top-[50px] right-[-40px] font-iranYekan">
                  021-77188185-6
                </p>
              ) : null}
            </div>
            <div className="--400 relative">
              <div
                onMouseEnter={() => hoverMessageShow()}
                onMouseLeave={() => hoverMessageLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center rounded-[50%] bg-gradient-[132deg] from-[#FFF2EA] to-[#f8e1d4] bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <img
                  className="self-center"
                  src="/assets/images/message.png"
                  alt="message pic"
                />
              </div>
              {message ? (
                <p className="bg--500 text-[#ECF9FD] w-fit absolute top-[50px] right-[-40px] font-iranYekan">
                  Info@makeen.ir
                </p>
              ) : null}
            </div>
            <div className="--400 w-[100px] relative">
              <div
                onMouseEnter={() => hoverInstagranShow()}
                onMouseLeave={() => hoverInstagranLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%]  bg-gradient-[132deg] from-[#E6EAED] to-[#bcc2c7] bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <img
                  className="self-center"
                  src="/assets/images/instagram.png"
                  alt="instagram pic"
                />
              </div>
              {instagram ? (
                <p className="bg--500 text-[#ECF9FD] w-fit absolute right-[10px] top-[50px] font-iranYekan ">
                  @makeenacademy
                </p>
              ) : null}
            </div>
          </div>

          <ul className="-green-500 font-iranYekan mt-[160px] flex-row-reverse	 flex justify-evenly text-right ml-[250px] w-[876px] h-[80px] absolute text-[16px] border-t-2 border-[#30495e]   ">
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                دوره ها
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                ثبت نام دوره
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                درخواست همکاری
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300 ">
                بوت کمپ
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                درباره مکین
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                بلاگ
              </li>
            </Link>
          </ul>
          <p className="  -red-400 mt-[280px] pb-[10px] mb-[20px] text-center text-[#00213E] opacity-50 after:content-['©'] after:ml-2 ">
            .تمام حق و حقوق این سایت متعلق به موسسه ایده آل رسانه مکین می باشد
          </p>
        </div>

        {/* <img className=" absolute left-[-40px] w-[500px] top-[200px] " src="/assets/images/Group 115@2x.png" alt="halghe" /> */}
      </footer>
    </>
  );
};

export default Footer;
