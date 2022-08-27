import Link from "next/link";
import MentorTable from "./MentorTable";
export default function Mentors({ mentors }) {
  return (
    <>
      <div className="mr-[108px] mt-4 ">
        <div className="shadow-[0px_0px_5px_#00000017] rounded-[14px] p-6 relative ml-[15px]">
          <header>
            <div>
              <Link href={"/admin/setting/slider/addslide"}>
                <div className="flex items-center justify-center w-fit text-[#37BBEC] border-[1px] border-[#12B428] rounded-[10px] px-4 py-[10px] cursor-pointer">
                  <span>+</span>
                  <span className="text-[12px] leading-[21px] font-medium font-iranYekan ml-2">
                    افزودن
                  </span>
                </div>
              </Link>
            </div>
            <div></div>
            <hr className="mt-2 bg-[#103F7B] h-[1.5px]" />
          </header>
          <section className="mt-8 flex items-end" dir="rtl">
            <div className="w-2/3">
              <MentorTable mentors={mentors} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
