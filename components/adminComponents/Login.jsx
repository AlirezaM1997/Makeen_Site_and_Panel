export default function Login() {
  return (
    <>
      <section className="px-[406px] mt-[115px]">
        <h1 className="text-[16px] text-[#00213E] leading-[28px] text-center font-bold font-iranYekan relative before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-100_100 before:rounded-[10px] flex justify-center pb-[6px]">
          ورود
        </h1>
        <h1 className="text-[14px] text-[#00213E] leading-[25px] text-center font-bold font-iranYekan mb-[32px] mt-[22px]">
          به پنل ادمین سایت مکین خوش آمدید
        </h1>
        <div className="px-[100px]" dir="rtl">
          <div className="flex flex-col mb-[30px]">
            <label className="text-[14px] text-[#00213E] leading-[25px] font-bold font-iranYekan mb-2">
              نام کاربری
            </label>
            <input className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none" placeholder="نام کاربری خود را وارد کنید" />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] text-[#00213E] leading-[25px] font-bold font-iranYekan mb-2">
             رمز عبور
            </label>
            <input className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none" placeholder="رمز عبور خود را وارد کنید" />
          </div>
          <button className="p-[15px] bg-[#37BBEC] rounded-[10px] w-full text-[16px] text-[#FFFFFF] leading-[28px] text-center font-bold font-iranYekan mt-[40px]">ورود</button>
        </div>
      </section>
    </>
  );
}
