import Image from "next/image";
export default function MentorTable({mentors}) {
  return (
    <>
      <table dir="rtl" className="mx-auto relative overflow-hidden w-full font-iranYekan">
        <thead>
          <tr className="text-[12px] text-[#103F7B] leading-[21px] font-bold text-center">
            <td className="">عکس</td>
            <td>نام منتور</td>
            <td>سمت منتور</td>
            <td>سوابق منتور</td>
            <td>حذف</td>
            <td>ویرایش</td>
          </tr>
        </thead>
        <tbody className="before:content-[''] before:border-[1px] before:border-[#103F7B] before:w-full before:block before:absolute">
          {mentors.map((item, index) => (
            <tr
              className={`text-[12px] text-[#292D32] leading-[21p] font-medium text-center bg-[#F6F6F6]`}
              key={index}
            >
              <td className="px-2 py-4">
              <div className="relative w-[52px] h-[52px]">
                  <Image
                    src={item.cover}
                    layout="fill"
                    alt="cover"
                    className="rounded-full"
                  />
                </div>
              </td>
              <td className="px-2 py-4">{item.name}</td>
              <td className="px-2 py-4">{item.specialty}</td>
              <td className="px-2 py-4">{item.records}</td>
              <td className="px-4 py-4 relative">
                <div className="relative w-4 h-4">
                  <Image
                    src={"/assets/images/panel/delete.png"}
                    layout="fill"
                    alt="delete"
                    className="cursor-pointer"
                  />
                </div>
              </td>
              <td className="px-4 py-4 relative">
                <div className="relative w-4 h-4">
                  <Image
                    src={"/assets/images/panel/delete.png"}
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
