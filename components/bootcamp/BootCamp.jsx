import Image from "next/image";
import headerImg from "../../public/assets/bootcamp/bootcamp.png";
import Highlights from "./Highlights";
import Navigator from "./Navigator";
import PartFour from "./PartFour";
import PartOne from "./PartOne";
import PartThree from "./PartThree";
import PartTwo from "./PartTwo";

const BootCamp = () => {
  return (
    <>
      <section className=" ">

        <div className="relative mx-[30px] h-[200px] mt-[80px] ">
          <Image
            className=" "
            layout="fill"
            objectFit="fill"
            priority
            src={"/assets/bootcamp/bootcamp.png"}
            alt="bootcamp image"
          />
        </div>

        <Navigator />

        <Highlights />
        <div
          className="font-iranYekan pl-[120px] pr-[320px] mt-[-170px] mb-[100px]"
          dir="rtl"
        >
          <PartOne />
          <PartTwo />
          <PartThree />
          <PartFour />
        </div>
      </section>
    </>
  );
};

export default BootCamp;
