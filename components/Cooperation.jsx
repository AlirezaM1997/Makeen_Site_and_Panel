import Head from "next/head";
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
const methodOfIntroduction = [
  {
    value: "معرفی توسط دیگران",
    label: "معرفی توسط دیگران",
  },
  {
    value: "توسط پرسنل خودتون",
    label: "توسط پرسنل خودتون",
  },
  {
    value: "از طریق آگهی سایت های کاریابی",
    label: "از طریق آگهی سایت های کاریابی",
  },
  {
    value: "راه های دیگر",
    label: "راه های دیگر",
  },
];
export default function Cooperation () {
  Yup.addMethod(Yup.string, "stripEmptyString", function () {
    return this.transform((value) => (value === "" ? undefined : value));
  });
  const validationSchema = Yup.object().shape({
    companyName: Yup.string("لطفا نام شرکت خود را وارد کنید").required(
      "لطفا نام شرکت خود را وارد کنید"
    ),
    representative: Yup.string(
      "لطفا نام نماینده شرکت خود را وارد کنید"
    ).required("لطفا نام نماینده شرکت خود را وارد کنید"),
    establishedYear: Yup.string("لطفا سال تاسیس شرکت را وارد کنید")
      .required("لطفا سال تاسیس شرکت را وارد کنید")
      .matches(
        /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
        "سال تاسیس شرکت را به صورت 1300/01/1 وارد کنید"
      ),
    phone: Yup.string("لطفا شماره تماس خود را وارد کنید")
      .required("لطفا شماره تماس خود را وارد کنید")
      .min(11, "لطفا شماره تماس صحیح وارد نمایید")
      .max(11, "لطفا شماره تماس صحیح وارد نمایید"),
    workingTitle: Yup.string("لطفا عنوان کاری شرکت را وارد کنید").required(
      "لطفا عنوان کاری شرکت را وارد کنید"
    ),
    numberOfPersonnel: Yup.string("لطفا تعداد پرسنل خود را وارد کنید").required(
      "لطفا تعداد پرسنل خود را وارد کنید"
    ),
    numberOfEmployees: Yup.string(
      "لطفا تعداد نیروی مورد نظر خود را وارد کنید"
    ).required("لطفا تعداد نیروی مورد نظر خود را وارد کنید"),
    jobApplicant: Yup.string().required("لطفا یک مورد را انتخاب کنید"),
    methodOfIntroduction: Yup.string()
      .required("لطفا یک مورد را انتخاب کنید")
      .stripEmptyString()
      .default("معرفی توسط دیگران"),
  });
  const { register, handleSubmit, control, reset, formState, setValue } =
    useForm({
      resolver: yupResolver(validationSchema),
    });
  const { errors } = formState;
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Head>
        <title>درخواست همکاری</title>
      </Head>
      <div>
        <header className="px-[30px] relative">
          <div className="h-[302px] relative mt-[71px] rounded-[20px] overflow-hidden">
            <Image
              src="/assets/images/cooperation-header-image.png"
              layout="fill"
              alt="cooperation-header"
              className="bgHeader border-[0.5px] border-[#CACBCB] rounded-[20px]"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[20px] text-[#ECF9FD] font-iranYekan leading-[3px] font-extrabold">
              درخواست همکاری با مکین
            </span>
          </div>
        </header>
        <form className="px-[244.5px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[40px]">
            <h1 className="text-[18px] text-[#4D6982] font-iranYekan leading-[40px] font-extrabold text-center">
              !همکار گرامی با سلام
            </h1>
            <h3 className="text-[16px] text-[#4D6982] font-iranYekan leading-[40px] font-bold text-center my-5">
              لطفا در صورتی که برای تکمیل تیم خود درخواست جذب نیرو از آکادمی
              مکین را دارید فرم زیر را تکمیل کنید
              <br />
              همکاران ما در اولین فرصت با شما تماس خواهند گرفت
            </h3>
            <hr />
          </div>
          <div
            dir="rtl"
            className="grid grid-cols-2 grid-rows-5 gap-[30px] justify-items-center items-center mt-[50px]"
          >
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                نام شرکت
              </label>
              <input
                type="text"
                className={`${
                  errors.companyName ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("companyName")}
                placeholder="نام شرکت خود را وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.companyName?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                نام نماینده شرکت
              </label>
              <input
                type="text"
                className={`${
                  errors.representative ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("representative")}
                placeholder="نام نماینده شرکت را وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.representative?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                سال تاسیس شرکت
              </label>
              <input
                type="text"
                className={`${
                  errors.establishedYear ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("establishedYear")}
                placeholder="سال تاسیس شرکت را به صورت 1300/01/1 وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.establishedYear?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                شماره تماس
              </label>
              <input
                type="number"
                className={`${
                  errors.phone ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("phone")}
                placeholder="شماره تماس خود را وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.phone?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                متقاضی استخدام برای
              </label>
              <Controller
                control={control}
                name="jobApplicant"
                render={({ field: { onChange } }) => (
                  <Select
                    menuPlacement="bottom"
                    name="jobApplicant"
                    {...register("jobApplicant")}
                    placeholder="دوره ی مورد نظر خود را انتخاب کنید"
                    options={courses}
                    onChange={(e) => {
                      onChange(e);
                      setValue("jobApplicant", e.value, {
                        shouldValidate: true,
                      });
                    }}
                    className={`${
                      errors.jobApplicant ? "border-[#B80000]" : ""
                    } border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none`}
                    isSearchable={false}
                  />
                )}
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.jobApplicant?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                عنوان کاری شرکت
              </label>
              <input
                type="text"
                className={`${
                  errors.workingTitle ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("workingTitle")}
                placeholder="عنوان کاری شرکت خود را وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.workingTitle?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                تعداد پرسنل
              </label>
              <input
                type="number"
                className={`${
                  errors.numberOfPersonnel ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("numberOfPersonnel")}
                placeholder="تعداد پرسنل شرکت خود را وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.numberOfPersonnel?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                تعداد نیروی استخدامی
              </label>
              <input
                type="text"
                className={`${
                  errors.numberOfEmployees ? "border-[#B80000]" : ""
                } border-[#CACBCB] border-[1px] rounded-[10px] p-[15px] w-full focus:outline-none`}
                {...register("numberOfEmployees")}
                placeholder="تعداد نیروی مورد نظر خود را وارد کنید"
              />
              <span className="text-[10px] text-[#B80000] leading-[36px] font-bold -mt-[5px] -mb-8">
                {errors.numberOfEmployees?.message}
              </span>
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] text-[#00213E] font-iranYekan leading-[36px] font-bold">
                نحوه ی آشنایی با بوت کمپ مکین
              </label>
              <Controller
                control={control}
                name="methodOfIntroduction"
                render={({ field: { onChange } }) => (
                  <Select
                    menuPlacement="bottom"
                    name="methodOfIntroduction"
                    {...register("methodOfIntroduction")}
                    options={methodOfIntroduction}
                    defaultValue={{
                      label: "معرفی توسط دیگران",
                      value: "معرفی توسط دیگران",
                    }}
                    onChange={(e) => {
                      onChange(e);
                      setValue("methodOfIntroduction", e.value, {
                        shouldValidate: true,
                      });
                    }}
                    className={`${
                      errors.methodOfIntroduction ? "border-[#B80000]" : ""
                    } border-[#CACBCB] border-[1px] rounded-[10px] w-full focus:outline-none`}
                    isSearchable={false}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#00294D] text-[#ECF9FD] py-[14px] px-[51px] rounded-[10px] text-[16px] font-iranYekan leading-[28px] font-bold mt-[65px] hover:mt-[59px] hover:mb-[6px] transition-spacing duration-300 ease-out"
              type="submit"
            >
              ثبت درخواست
            </button>
          </div>
        </form>
      </div>
      <style>
        {`
          .bgHeader{
            filter:brightness(70%) blur(8px) opacity(0.8) contrast(1.2) drop-shadow(2px 4px 6px black);
          }
          `}
      </style>
    </>
  );
};