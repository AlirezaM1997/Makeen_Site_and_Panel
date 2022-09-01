import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { showHideModalAction } from "../../slices/showRegistrationModalSlice";
import { _showHideModalAction } from "../../slices/showConsultationModal";
export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <header className="fixed hidden xl:flex top-0 min-h-[100px] w-full justify-center px-[47px] pt-[29px] z-[1000]">
        <Image
          src="/assets/images/header.png"
          layout="fill"
          className="absolute h-[100px] w-full text-black opacity-[97%]"
          alt="header"
        />
        <div className="w-full absolute top-0 left-0 z-10 h-[30px] bg-gradient-[271deg] from-[#37BBEC] to-[#FF792C] bg-origin-padding blur-[30px] bg-no-repeat opacity-30"></div>
        <div className="w-1/2 mr-8">
          <ul className="list-none flex justify-between font-iranYekan text-[14px]">
            <li
              className="mr-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100"
              onClick={() => dispatch(_showHideModalAction(true))}
            >
              درخواست مشاوره
            </li>
            <Link href={"/blogs"}>
              <li
                className={`${
                  router.pathname === "/blogs" ? "currentMenu" : ""
                } mr-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100`}
              >
                بلاگ
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                className={`${
                  router.pathname === "/about" ? "currentMenu" : ""
                } mr-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100`}
              >
                درباره مکین
              </li>
            </Link>
            <Link href={"/bootcamp"}>
              <li
                className={`${
                  router.pathname === "/bootcamp" ? "currentMenu" : ""
                } mr-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100`}
              >
                بوت کمپ
              </li>
            </Link>
          </ul>
        </div>
        <div className="z-10 w-[62px] h-[63px] relative">
          <Image
            src="/assets/images/logo.png"
            layout="fill"
            className="z-10"
            alt="logo"
          ></Image>
        </div>
        <div className="w-1/2 ml-8">
          <ul className="list-none flex justify-between font-iranYekan xl:text-[14px] lg:text-[11px] text-[9px]">
            <Link href={"/cooperation"}>
              <li
                className={`${
                  router.pathname === "/cooperation" ? "currentMenu" : ""
                } ml-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100`}
              >
                درخواست همکاری
              </li>
            </Link>
            <li
              className="ml-[66px] mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100"
              onClick={() => dispatch(showHideModalAction(true))}
            >
              ثبت نام دوره
            </li>
            <Link href={"/courses"}>
              <li
                className={`${
                  router.pathname === "/courses" ? "currentMenu" : ""
                } ml-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100`}
              >
                دوره ها
              </li>
            </Link>
            <li>
              <Link href={"/"}>
                <a
                  className={`${
                    router.pathname === "/" ? "currentMenu" : ""
                  } ml-[66px] mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100`}
                >
                  صفحه اصلی
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <style>
        {`
        .currentMenu:before {
          content: '';
          position :absolute;
          height : 4px;
          width : 80px;
          top:100%;
          background : linear-gradient(#37BBEC, #37BBEC);
          background-position: 50% 50%;
          border-radius : 10px;
        }
        .currentMenu{
          opacity:100%;
        }
        `}
      </style>
    </>
  );
}
