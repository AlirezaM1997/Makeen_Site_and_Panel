/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

const Statistics = () => {
  return (
    <>
      <div className="pt-[70px] pb-[76px]">
        <div className="flex flex-row-reverse justify-between">
          <div className="flex">
            <div className="flex flex-col items-end"><span>500</span><span>فارغ التحصیل مشغول به کار</span></div>
            <div><Image src="/assets/images/student.png" width={31} height={28}/></div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-end"><span>1000</span><span>ساعت دوره آموزشی حضوری</span></div>
            <div><Image src="/assets/images/clock.png" width={30} height={30}/></div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-end"><span>10</span><span>استاد برجسته و ماهر</span></div>
            <div><Image src="/assets/images/teacher.png" width={30} height={33}/></div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-end"><span>6</span><span>دوره پرطرفدار و به روز</span></div>
            <div><Image src="/assets/images/course.png" width={30} height={28}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
