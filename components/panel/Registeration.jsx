import Image from "next/image";
import RegistrationsTable from "./RegistrationsTable";
export default function Registeration() {
  return (
    <>
      <div className="mr-[108px] mt-4 ">
        <div className="shadow-[0px_0px_5px_#00000017] rounded-[14px] pt-[18px] relative px-2 ml-[15px] pb-3">
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
              <button className="text-[#292D32] text-[12px] leading-[21px] font-medium font-iranYekan ml-2">
                خروجی اکسل
              </button>
            </button>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
