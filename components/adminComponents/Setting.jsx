import Image from "next/image";
import Link from "next/link";
export default function Setting() {
  return (
    <>
      <div className="mr-[108px] mt-4">
        <div className="shadow-[0px_0px_5px_#00000017] rounded-[14px] p-6 relative ml-[15px]">
          <section
            className="grid grid-cols-5 gap-x-8 gap-y-9 font-iranYekan"
            dir="rtl"
          >
            <Link href={"/admin/setting/slider"} >
              <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
                <div className="relative w-[16px] h-[16px] ml-2">
                  <Image
                    src={"/assets/images/panel/folder.png"}
                    layout="fill"
                    alt="folder"
                  />
                </div>
                <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                  اسلایدر
                </span>
              </div>
            </Link>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                کانتر
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                بوت کمپ چیه
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                ویژگی های مکین
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                چرا بوت کمپ مکین
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                منتور ها
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                پرداخت قسطی
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                مکینی ها
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                متودولوژی خاص
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                سوالات متداول
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                اطلاعات فوتر
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                مشاوره
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                بلاگ
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                دوره ها
              </span>
            </div>
            <div className="flex items-center justify-start border-[1px] border-[#37BBEC] rounded-[10px] w-full h-6 py-6 pr-4 cursor-pointer">
              <div className="relative w-[16px] h-[16px] ml-2">
                <Image
                  src={"/assets/images/panel/folder.png"}
                  layout="fill"
                  alt="folder"
                />
              </div>
              <span className="text-[13px] text-[#292D32] leading-[22px] font-bold">
                بوت کمپ
              </span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
