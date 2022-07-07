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

  return (
    <>
      <footer className="w-[1365px] h-[554px] left-[30px] relative -blue-500">
        <div className="w-[1365px] h-[489px]  bg-[#001d36] absolute top-[30px] rounded-[20px]  ">
          <img
            className="w-[118px] h-[42px] ml-[594px] mt-[61px] "
            src="/assets/images/آکادمی مکین بزرگ.png"
            alt="makeen logo"
          />
          <p className="ml-[215px] opacity-70	 mt-[43px] text-[#ECF9FD] w-[876px] h-[97px] text-[14px] text-center font-iranYekan	">
            آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد فرصت های
            شغلی برای جوانان این سرزمینه. ما توی آکادمی مکین با استفاده از
            متدولوژی آموزشی منحصر به فرد ، کمک میکنیم تا آدم های با انگیزه بتونن
            به رویاهاشون .برسن. ما توی مکین ، فقط به دانشجوها آموزش نمیدیم. ما
            .بهشون آینده میدیم
          </p>

          <div className=" -red-500 ml-[360px] mt-[20px] flex justify-between w-[600px]">
            <div className="w-[35px] h-[35px]  flex justify-items-center justify-center rounded-[50%] bg-gradient-[129deg] from-[#FFEEBB]  to-[#fac4bf]  bg-origin-padding bg-no-repeat">
              <img
                onMouseEnter={() => hoverGoogleShow()}
                onMouseLeave={() => hoverGoogleLeave()}
                className="self-center"
                src="/assets/images/google-maps-logo.png"
                alt="google map pic"
              />
            </div>
            <div className="w-[35px] h-[35px] flex justify-items-center justify-center  rounded-[50%] bg-[#ebecec] ">
              <img
                onMouseEnter={() => hoverKeyShow()}
                onMouseLeave={() => hoverKeyLeave()}
                className="self-center"
                src="/assets/images/key.png"
                alt="key pic"
              />
            </div>
            <div className="w-[35px] h-[35px]  flex justify-items-center justify-center  rounded-[50%] bg-gradient-[132deg] from-[#ecf9fd] to-[#DAF2FB] bg-origin-padding bg-no-repeat">
              <img
                onMouseEnter={() => hoverKeyShow()}
                onMouseLeave={() => hoverKeyLeave()}
                className={styles.mask}
                src="/assets/images/phone.png"
                alt="phone pic"
              />
            </div>
            <div className="w-[35px] h-[35px]  flex justify-items-center justify-center rounded-[50%] bg-gradient-[132deg] from-[#FFF2EA] to-[#f8e1d4] bg-origin-padding bg-no-repeat">
              <img
                onMouseEnter={() => hoverMessageShow()}
                onMouseLeave={() => hoverMessageLeave()}
                className="self-center"
                src="/assets/images/message.png"
                alt="message pic"
              />
            </div>
            <div className="w-[35px] h-[35px]  flex justify-items-center justify-center  rounded-[50%]  bg-gradient-[132deg] from-[#E6EAED] to-[#bcc2c7] bg-origin-padding bg-no-repeat">
              <img
                onMouseEnter={() => hoverInstagranShow()}
                onMouseLeave={() => hoverInstagranLeave()}
                className="self-center"
                src="/assets/images/instagram.png"
                alt="instagram pic"
              />
            </div>
          </div>

          <ul className="-green-500 font-iranYekan mt-[60px] flex justify-evenly text-right ml-[215px] w-[876px] h-[80px] text-[16px] border-t-2 border-[#2e4a5e]   ">
            <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[40px] mb-[-15px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
              دوره ها
            </li>
            {instagram ? <p>@makeenacademy</p> : null}
            <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[40px] mb-[-15px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
              ثبت نام دوره
            </li>
            <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[40px] mb-[-15px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
              درخواست همکاری
            </li>
            <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[40px] mb-[-15px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300 ">
              بوت کمپ
            </li>
            <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[40px] mb-[-15px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
              درباره مکین
            </li>
            <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[40px] mb-[-15px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
              بلاگ
            </li>
          </ul>
          <p className="  -red-400 mt-[60px] mb-[20px] text-center text-[#00213E] opacity-50 after:content-['©'] after:ml-2 ">
            .تمام حق و حقوق این سایت متعلق به موسسه ایده آل رسانه مکین می باشد
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
