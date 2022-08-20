import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CourseCard } from "./CourseCard";
export default function CoursesPage() {
  const a = [1, 2, 3, 4, 5];
  const [showAndHideCourse, setShowAndHideCourse] = useState(null);
  const showAndHideToggle = (index) => {
    if (showAndHideCourse !== null) {
      setShowAndHideCourse(null);
    } else {
      setShowAndHideCourse(index);
    }
  };
  return (
    <>
      <section className="pt-[140px] px-[50px] font-iranYekan mb-[460px]">
        <h1 className="text-[#00213e] text-[20px] leading-[35px] font-extrabold text-center">
          دوره های آکادمی مکین
        </h1>
        <h4 className="text-[#00213E] text-[16px] leading-[28px] font-bold mt-[20px] text-center">
          همه ی دوره هایی که در حال حاضر مکین برگزار می کنه
        </h4>
        <ul
          className="grid grid-cols-3 gap-[30px] w-full px-[30px] relative mt-[40px]"
          dir="rtl"
        >
          {a.map((item, index) => (
            <CourseCard index={index} />
          ))}
          <div>
            <li className="flex flex-col items-center justify-center rounded-[10px] bg-gradient-[134deg] from-[#E6EAED] to-[#8094A6] w-full h-full">
              <div className="relative w-[35px] h-[44px]">
                <Image
                  src="/assets/images/new_course_is_coming.png"
                  layout="fill"
                  alt="new_course"
                />
              </div>
              <p
                className="text-[#00213E] text-[16px] leading-[28px] font-bold mt-[31px] text-center"
                dir="ltr"
              >
                !دوره های جدید به زودی اضافه میشن
              </p>
            </li>
          </div>
        </ul>
      </section>
    </>
  );
}
