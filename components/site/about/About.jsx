import Image from "next/image";
import Highlights from "./Highlights";
import Navigator from "./Navigator";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
const About = () => {
  return (
    <>
      <section className="mb-[80px]">
        <div className="relative mx-[30px] h-[250px] mt-[71px] ">
          <Image
            layout="fill"
            priority
            src={"/assets/aboutmakeen/aboutmakeen.png"}
            alt="aboutmakeen"
          />
        </div>
        <Navigator />
        <Highlights />
        <div
          className="font-iranYekan pl-[120px] pr-[320px] mt-[-260px]"
          dir="rtl"
        >
          <PartOne />
          <PartTwo />
        </div>
      </section>
    </>
  );
};
export default About;
