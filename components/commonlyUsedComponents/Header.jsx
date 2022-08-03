import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { showHideModalAction } from "../../slices/showRegistrationModalSlice";
export default function Header() {
  const modalMode = useSelector((state) => state.modalMode.value);
  const dispatch = useDispatch();
  console.log("mode", modalMode);
  return (
    <>
      <div className="fixed top-0 min-h-[100px] w-full flex justify-center px-[47px] pt-[29px] z-[1000]">
        <Image
          src="/assets/images/header.png"
          layout="fill"
          className="absolute h-[100px] w-full text-white"
          alt="header"
        />
        <div className="w-full absolute top-0 left-0 z-10 h-[30px] bg-gradient-[271deg] from-[#37BBEC] to-[#FF792C] bg-origin-padding blur-[30px] bg-no-repeat opacity-30"></div>
        <div className="w-1/2 mr-8">
          <ul className="list-none flex justify-between font-iranYekan xl:text-[14px] lg:text-[11px] text-[9px]">
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              درخواست مشاوره
            </li>
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              <Link href={"/blogs"}>
                <a>بلاگ</a>
              </Link>
            </li>
            <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              <Link href={"/aboutmakeen"}>
                <a>درباره مکین</a>
              </Link>
            </li>
            <Link href={"/bootcamp"}>
              <li className="xl:mr-[66px] lg:mr-12 mr-10 mb-1 pb-[14px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
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
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              <Link href={"/cooperation"}>
                <a>درخواست همکاری</a>
              </Link>
            </li>
            <li
              className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100"
              onClick={() => dispatch(showHideModalAction(true))}
            >
              ثبت نام دوره
            </li>
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              <Link href={"/courses"}>
                <a>دوره ها</a>
              </Link>
            </li>
            <li className="xl:ml-[66px] lg:ml-12 ml-10 mb-1 pb-[13px] transition font-semibold leading-[25px] text-[#3E4041] opacity-50 relative flex justify-center hover:text-[#363839] hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100">
              <Link href={"/"}>
                <a>صفحه اصلی</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
