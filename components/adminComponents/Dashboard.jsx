import Image from "next/image";
import RegistrationsTable from "./RegistrationsTable";
import NewsletterEmails from "./NewsletterEmails";
export default function Dashboard() {
  return (
    <>
        <div className="flex mr-[108px] mt-4">
          <div className="w-1/3 shadow-[0px_0px_5px_#00000017] rounded-[14px] pt-[18px] relative px-2">
            <NewsletterEmails />
          </div>
          <div className="w-2/3 shadow-[0px_0px_5px_#00000017] rounded-[14px] pt-[18px] relative px-2 ml-[15px] pb-3">
            <RegistrationsTable />
            <div className="mt-9">
              <button className="flex items-center justify-center border-[1px] border-[#12B428] rounded-[10px] px-4 py-[10px]">
                <div className="relative w-[14px] h-[16px]">
                  <Image
                    src={"/assets/images/panel/excel.png"}
                    layout="fill"
                    alt="logo"
                  />
                </div>
                <span className="text-[#292D32] text-[12px] leading-[21px] font-medium font-iranYekan ml-2">
                  خروجی اکسل
                </span>
              </button>
              <div></div>
            </div>
          </div>
        </div>
    </>
  );
}
