import Image from "next/image";
import { useRouter } from "next/router";
export default function NewRegistrationsTable() {
  const currentRouter = useRouter();
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <table dir="rtl" className="mx-auto relative overflow-hidden w-full">
        <thead>
          <tr className="text-[12px] text-[#103F7B] leading-[21p] font-bold font-iranYekan text-center">
            <td className="text-right max-w-[100px]">نام و نام خانوادگی</td>
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
            <tr
              className={`text-[12px] text-[#292D32] leading-[21p] font-medium font-iranYekan text-center ${
                index % 2 === 0 ? "bg-[#F6F6F6]" : ""
              }`}
            >
              <td className="text-right max-w-[108px] whitespace-normal break-words px-2 py-4">
                {`طاهره هژبری`}
              </td>
              <td className="max-w-[87px] whitespace-normal break-words px-2 py-4">{`React Native`}</td>
              <td className="px-2 py-4">{`09124935140`}</td>
              <td className="px-2 py-4">{`خانم`}</td>
              <td className="px-2 py-4">1367/08/05</td>
              {currentRouter.pathname !== "/admin/dashboard" ? (
                <td>t.hozhbari@live.com</td>
              ) : null}
              <td className="px-2 py-4">{`متوسط`}</td>
              <td className="max-w-[97px] whitespace-normal break-words px-2 py-4">
                {`روحیه کار تیمی`}
              </td>
              <td className="px-2 py-4">{`1367/08/05`}</td>
              {currentRouter.pathname !== "/admin/dashboard" ? (
                <td>{`تهرانپارس`}</td>
              ) : null}
              <td className="px-4 py-4 relative">
                <div className="relative w-4 h-4">
                  <Image
                    src={"/assets/images/delete.png"}
                    layout="fill"
                    alt="delete"
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
