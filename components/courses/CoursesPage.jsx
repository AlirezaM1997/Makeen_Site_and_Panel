import { CourseCard } from "./CourseCard";

export default function CoursesPage() {
  const a =[1,2,3,4,5]
  return (
    <>
      <section className="pt-[140px] px-[50px]">
        <h1 className="text-[#00213e] text-[20px] leading-[35px] font-extrabold font-iranYekan text-center">
          دوره های آکادمی مکین
        </h1>
        <h4 className="text-[#00213E] text-[16px] leading-[28px] font-bold font-iranYekan mt-[20px] text-center">
          همه ی دوره هایی که در حال حاضر مکین برگزار می کنه
        </h4>
        <div className="grid grid-cols-3 gap-[30px] justify-items-center items-center mt-[40px]" dir="rtl">
          {a.map((item, index) => (
            <CourseCard key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
