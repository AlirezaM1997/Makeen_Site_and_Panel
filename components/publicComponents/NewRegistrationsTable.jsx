import { useRouter } from "next/router";
export default function NewRegistrationsTable() {
  const currentRouter = useRouter();
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <table dir="rtl" className="border-separate border-spacing-3 mx-auto relative overflow-hidden">
        <thead>
          <tr className="text-[12px] text-[#103F7B] leading-[21p] font-bold font-iranYekan text-center">
            <td className="text-right">نام و نام خانوادگی</td>
            <td>دوره</td>
            <td>شماره تماس</td>
            <td>جنسیت</td>
            <td>تاریخ تولد</td>
            {currentRouter.pathname !== "/admin/dashboard" ? (
              <td>ایمیل</td>
            ) : null}
            <td>زبان انگلیسی</td>
            <td>توصیف</td>
            <td>تاریخ ثبت نام در سایت</td>
            {currentRouter.pathname !== "/admin/dashboard" ? (
              <td>آدرس محل سکونت</td>
            ) : null}
            <td>حذف</td>
          </tr>
        </thead>
        <tbody className="before:content-[''] before:border-[1px] before:border-[#103F7B] before:w-full before:block before:absolute">
          {a.map((item, index) => (
            <tr className="text-[12px] text-[#292D32] leading-[21p] font-medium font-iranYekan text-center">
              <td className="text-right">طاهره هژبری</td>
              <td>React Native</td>
              <td>09124935140</td>
              <td>خانم</td>
              <td>1367/08/05</td>
              {currentRouter.pathname !== "/admin/dashboard" ? (
                <td>t.hozhbari@live.com</td>
              ) : null}
              <td>متوسط</td>
              <td>روحیه کار تیمی</td>
              <td>1367/08/05</td>
              {currentRouter.pathname !== "/admin/dashboard" ? (
                <td>تهرانپارس</td>
              ) : null}
              <td>
                <button>del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}