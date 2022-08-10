import Image from "next/image";

export default function NewsletterEmails() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <table className="mx-auto relative overflow-hidden w-full">
        <thead>
          <tr>
            <td className="text-[12px] text-[#103F7B] leading-[21p] font-bold font-iranYekan text-center">
              ایمیل های خبر نامه
            </td>
          </tr>
        </thead>
        <tbody className="before:content-[''] before:border-[1px] before:border-[#103F7B] before:w-full before:block before:absolute">
          {a.map((item, index) => (
            <tr
              key={index}
              className={`text-[13px] text-[#000000] leading-[22p] font-medium font-iranYekan ${
                index % 2 === 0 ? "bg-[#F6F6F6]" : ""
              }`}
            >
              <td className="flex items-center py-3 px-2">
                <div className="relative w-4 h-4 mr-2">
                  <Image src={"/assets/images/panel/newsletters.png"} layout="fill" />
                </div>
                <div>{`Kimia.goudarzi.81@gmail.com`}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
