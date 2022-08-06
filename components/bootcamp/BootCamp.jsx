import Image from "next/image";
import Highlights from "./Highlights";
import Navigator from "./Navigator";
import PartFour from "./PartFour";
import PartOne from "./PartOne";
import PartThree from "./PartThree";
import PartTwo from "./PartTwo";

const BootCamp = () => {
  return (
    <>
      <section className="mb-[80px]">
        <div className="relative mx-[30px] h-[250px] mt-[71px] ">
          <Image
            layout="fill"
            priority
            src={"/assets/bootcamp/bootcamp.png"}
            alt="bootcamp"
          />
        </div>
        <Navigator />
        <Highlights />
        <div
          className="font-iranYekan pl-[120px] pr-[320px] mt-[-345px]"
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
