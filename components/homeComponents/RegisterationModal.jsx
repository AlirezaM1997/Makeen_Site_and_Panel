import { useSelector, useDispatch } from "react-redux";
import { showHideModalAction } from "../../slices/showRegistrationModalSlice";
import Image from "next/image";
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
const gender = [
  {
    value: "خانم",
    label: "خانم",
  },
  {
    value: "آقا",
    label: "آقا",
  },
];
export default function RegisterationModal() {
  const modalMode = useSelector((state) => state.modalMode.value);
  const dispatch = useDispatch();
  const register = () => {};
  return (
    <>
      <div
        className={`${
          modalMode ? "block" : "hidden"
        } fixed w-full h-full top-0 left-0 z-[1001] p-[48px] bg-[#4d698266] backdrop-blur-[10px]`}
        onClick={() => dispatch(showHideModalAction(false))}
      >
        <section
          className="bg-white absolute px-16 py-6 flex rounded-[20px] shadow-[10px_10px_20px_#00000014] w-[90%] h-[95%] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="font-iranYekan w-[65%] pr-16">
            <div className="flex justify-between items-center">
              <div className="relative w-[10px] h-[10px] cursor-pointer">
                <Image src={"/assets/images/quit-modal.png"} layout="fill" />
              </div>
              <h1 className="text-[#00213E] text-[20px] leading-[35px] font-extrabold">
                !مکینی شو
              </h1>
            </div>
            <div
              className="grid grid-cols-2 grid-rows-4 gap-x-[58px] gap-y-[18px] mt-[21px]"
              dir="rtl"
            >
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]"
                  placeholder="نام خودتونو کامل وارد کنید"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  شماره تماس
                </label>
                <input
                  type="text"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]"
                  placeholder="شماره تماس خود را وارد کنید"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  ایمیل
                </label>
                <input
                  type="text"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
              <div
                className="flex flex-col items-start w-full"
                id="modal-course-select"
              >
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  دوره ی مورد نظر
                </label>
                <Select
                  menuPlacement="bottom"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none py-[5px]"
                  options={courses}
                  defaultValue={{
                    label: "React / React Native دوره ی",
                    value: "React / React Native دوره ی",
                  }}
                  //value={}
                  // onChange={}
                  isSearchable={false}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  تاریخ تولد
                </label>
                <input
                  type="text"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]"
                  placeholder="تاریخ تولد خود را به صورت 1300/01/01 وارد کنید"
                />
              </div>
              <div
                className="flex flex-col items-start w-full"
                id="modal-course-select"
              >
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  جنسیت
                </label>
                <Select
                  menuPlacement="bottom"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none py-[5px] placeholder:text-[12px]"
                  options={gender}
                  defaultValue={{
                    label: "خانم",
                    value: "خانم",
                  }}
                  //value={}
                  // onChange={}
                  isSearchable={false}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  آدرس محل سکونت
                </label>
                <input
                  type="text"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none  placeholder:text-[12px] placeholder:leading-[36px]"
                  placeholder="آدرس خودتون رو وارد کنید"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                  ویژگی های بارز شما
                </label>
                <input
                  type="text"
                  className="border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]"
                  placeholder="ویژگی های بارز خود را وارد کنید"
                />
              </div>
            </div>
            <div className="flex justify-center mt-[40px]">
              <button
                className="bg-[#00294D] text-[#ECF9FD] py-[6px] px-[63px] rounded-[10px] text-[16px] font-iranYekan leading-[28px] font-bold"
                onClick={() => register()}
              >
                ثبت نام
              </button>
            </div>
          </div>
          <div className="w-[35%] rounded-[15px] bg-registrationModal h-full p-5"></div>
        </section>
      </div>
    </>
  );
}
