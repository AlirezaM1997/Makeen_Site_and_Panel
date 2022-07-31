import { useSelector, useDispatch } from "react-redux";
import { showHideModalAction } from "../../slices/showRegistrationModalSlice";
import Image from "next/image";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

  Yup.addMethod(Yup.string, "stripEmptyString", function () {
    return this.transform((value) => (value === "" ? undefined : value));
  });
  const validationSchema = Yup.object().shape({
    fullname: Yup.string("لطفا نام خود را وارد کنید").required(
      "لطفا نام خود را وارد کنید"
    ),
    phone: Yup.string("لطفا شماره تماس خود را وارد کنید")
      .required("لطفا شماره تماس خود را وارد کنید")
      .min(11, "لطفا شماره تماس صحیح وارد نمایید")
      .max(11, "لطفا شماره تماس صحیح وارد نمایید"),
    email: Yup.string()
      .email("لطفا یک ایمیل صحیح وارد کنید")
      .required("لطفا ایمیل خود را وارد کنید"),
    course: Yup.string()
      .required("لطفا یک مورد را انتخاب کنید")
      .stripEmptyString()
      .default("React / React Native دوره ی"),
    birthday: Yup.string("لطفا تاریخ تولد خود را وارد کنید")
      .required("لطفا تاریخ تولد خود را وارد کنید")
      .matches(
        /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
        "تاریخ تولد خود را به صورت 1300/01/01 وارد کنید"
      ),
    gender: Yup.string()
      .required("لطفا یک مورد را انتخاب کنید")
      .stripEmptyString()
      .default("خانم"),
    address: Yup.string("لطفا آدرس خودتونو وارد کنید").required(
      "لطفا آدرس خودتونو وارد کنید"
    ),
    feutures: Yup.string("ویژکی های خود را وارد کنید").required(
      "ویژکی های خود را وارد کنید"
    ),
  });
  const { register, handleSubmit, control, reset, formState, setValue } =
    useForm({
      resolver: yupResolver(validationSchema),
    });
  const { errors } = formState;
  const onSubmit = (data) => console.log(data);

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
          <form
            className="font-iranYekan w-[65%] pr-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between items-center">
              <div
                className="relative w-[10px] h-[10px] cursor-pointer"
                onClick={() => {
                  dispatch(showHideModalAction(false));
                  reset({
                    fullname: "",
                    phone: "",
                    email: "",
                    birthday: "",
                    address: "",
                    feutures: "",
                  });
                }}
              >
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
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="fullname"
                  className={`${
                    errors.fullname ? "border-[#B80000]" : ""
                  } border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]`}
                  {...register("fullname")}
                  placeholder="نام خودتونو کامل وارد کنید"
                  autoComplete="off"
                />
                <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                  {errors.fullname?.message}
                </span>
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  شماره تماس
                </label>
                <input
                  type="number"
                  name="phone"
                  className={`${
                    errors.phone ? "border-[#B80000]" : ""
                  } border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]`}
                  {...register("phone")}
                  placeholder="شماره تماس خود را وارد کنید"
                  autoComplete="off"
                />
                <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                  {errors.phone?.message}
                </span>
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  ایمیل
                </label>
                <input
                  type="text"
                  name="email"
                  className={`${
                    errors.email ? "border-[#B80000]" : ""
                  } border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]`}
                  {...register("email")}
                  placeholder="ایمیل خود را وارد کنید"
                  autoComplete="off"
                />
                <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                  {errors.email?.message}
                </span>
              </div>
              <div
                className="flex flex-col items-start w-full"
                id="modal-course-select"
              >
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  دوره ی مورد نظر
                </label>
                <Controller
                  control={control}
                  name="course"
                  render={({ field: { onChange } }) => (
                    <Select
                      menuPlacement="bottom"
                      name="course"
                      {...register("course")}
                      defaultValue={{
                        label: "React / React Native دوره ی",
                        value: "React / React Native دوره ی",
                      }}
                      options={courses}
                      onChange={(e) => {
                        onChange(e);
                        setValue("course", e.value, {
                          shouldValidate: true,
                        });
                      }}
                      className={`border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none py-[5px] ${
                        errors.course ? "invalidSelectInput" : ""
                      }`}
                      isSearchable={false}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  تاریخ تولد
                </label>
                <input
                  type="text"
                  name="birthday"
                  className={`${
                    errors.birthday ? "border-[#B80000]" : ""
                  } border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]`}
                  {...register("birthday")}
                  placeholder="تاریخ تولد خود را به صورت 1300/01/01 وارد کنید"
                  autoComplete="off"
                />
                <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                  {errors.birthday?.message}
                </span>
              </div>
              <div
                className="flex flex-col items-start w-full"
                id="modal-course-select"
              >
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  جنسیت
                </label>
                <Controller
                  control={control}
                  name="gender"
                  render={({ field: { onChange } }) => (
                    <Select
                      menuPlacement="bottom"
                      name="gender"
                      {...register("gender")}
                      defaultValue={{
                        label: "خانم",
                        value: "خانم",
                      }}
                      options={gender}
                      onChange={(e) => {
                        onChange(e);
                        setValue("gender", e.value, {
                          shouldValidate: true,
                        });
                      }}
                      className="border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none py-[5px]"
                      isSearchable={false}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  آدرس محل سکونت
                </label>
                <input
                  type="text"
                  name="address"
                  className={`${
                    errors.address ? "border-[#B80000]" : ""
                  } border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]`}
                  {...register("address")}
                  placeholder="آدرس خودتون رو وارد کنید"
                  autoComplete="off"
                />
                <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                  {errors.address?.message}
                </span>
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-[14px] text-[#00213E] leading-[36px] font-bold">
                  ویژگی های بارز شما
                </label>
                <input
                  type="text"
                  name="feutures"
                  className={`${
                    errors.feutures ? "border-[#B80000]" : ""
                  } border-[#CACBCB] border-[1px] rounded-[10px] p-[11px] w-full focus:outline-none placeholder:text-[12px] placeholder:leading-[36px]`}
                  {...register("feutures")}
                  placeholder="ویژگی های بارز خود را وارد کنید"
                  autoComplete="off"
                />
                <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                  {errors.feutures?.message}
                </span>
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                className="bg-[#00294D] text-[#ECF9FD] py-[11px] px-[63px] mt-[40px] rounded-[10px] text-[16px] leading-[28px] font-bold hover:py-[17px] hover:mt-[37px] transition-spacing duration-300 ease-in-out"
                type="submit"
              >
                ثبت نام
              </button>
            </div>
          </form>
          <div className="w-[35%] rounded-[15px] bg-registrationModal h-full p-5"></div>
        </section>
      </div>
    </>
  );
}
