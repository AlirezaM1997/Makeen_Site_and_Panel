import Image from "next/image";
import Highlights from "./Highlights";
import Navigator from "./Navigator";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";

const AboutMakeen = () => {
  return (
    <>
      <section>
        <div className="relative mx-[30px] h-[200px] mt-[100px] ">
          <Image
            layout="fill"
            objectFit="fill"
            priority
            src={"/assets/aboutmakeen/aboutmakeen.png"}
            alt="bootcamp image"
          />
        </div>
        <Navigator />

        <Highlights />

        <div
          className="font-iranYekan pl-[120px] pr-[320px] mt-[100px]"
          dir="rtl"
        >
          <PartOne />
          <PartTwo />
        </div>
      </section>
    </>
  );
};

export default AboutMakeen;
