//next
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 min-h-[100px] w-full flex justify-center px-[47px] pt-[29px] z-10">
        <Image
          src="/assets/images/header.png"
          layout="fill"
          className="absolute h-[100px] w-full text-white"
          alt="header"
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1366"
          height="100"
          viewBox="0 0 1366 100"
          className="absolute h-[100px] w-full text-white shadow-2xl"

        >
          <path
            id="Path_12"
            data-name="Path 12"
            d="M101.785-200.411v70.755H710v.078a116.574,116.574,0,0,1,21.792,1.6,38.489,38.489,0,0,1,22.914,13.621,38.756,38.756,0,0,0,30.079,13.951c14.431,0,23.215-5.273,33.417-18.768h0c7.72-8.783,27.761-10.273,37.064-10.477h612.519v-70.755Z"
            transform="translate(-101.785 200.411)"
            fill="#fff"
          />
        </svg> */}
        <div className="w-full absolute top-0 left-0 z-10 h-[30px] bg-gradient-[271deg] from-[#37BBEC] to-[#FF792C] bg-origin-padding blur-[30px] bg-no-repeat opacity-30"></div>

        <div className="w-1/2 mr-8">
          <ul className="list-none flex justify-between font-iranYekan xl:text-[14px] lg:text-[11px] text-[9px]">
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              درخواست مشاوره
            </li>
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              بلاگ
            </li>
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              درباره مکین
            </li>
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              بوت کمپ
            </li>
          </ul>
        </div>
        <div className="z-10">
          <Image
            src="/assets/images/logo.png"
            width={62}
            height={63}
            className="z-10"
            alt="logo"
          ></Image>
        </div>
        <div className="w-1/2 ml-8">
          <ul className="list-none flex justify-between font-iranYekan xl:text-[14px] lg:text-[11px] text-[9px]">
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              درخواست همکاری
            </li>
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              ثبت نام دوره
            </li>
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              دوره ها
            </li>
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              صفحه اصلی
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
