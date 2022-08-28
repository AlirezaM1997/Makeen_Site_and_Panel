import MentorSlider from "./mentorSlider/Slider";
export default function OurMentors({ mentors }) {
  return (
    <>
      <section className="mt-[130px] px-[30px] font-iranYekan">
        <h1 className="text-[#00213E] xl:text-[20px] text-[16px] leading-[35px] font-extrabold text-center">
          منتورهای ما
        </h1>
        <h3 className="text-[#00213E] xl:text-[16px] text-[12px] leading-[28px] font-bold text-center xl:mt-5 mt-[10px] mb-[50px]">
          منتورهای ما بهترین متخصص ها توی زمینه ی کاری خودشون هستن
        </h3>
        <MentorSlider mentors={mentors} />
      </section>
    </>
  );
}
