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
            className=" "
            layout="fill"
            priority
            src={"/assets/bootcamp/bootcamp.png"}
            alt="bootcamp"
          />
        </div>
        <Navigator />
        <Highlights />
        <div
<<<<<<< HEAD
          className="font-iranYekan pl-[120px] pr-[320px] mt-[-170px] mb-[100px]"
=======
          className="font-iranYekan pl-[120px] pr-[320px] mt-[-345px]"
>>>>>>> c150a5e1205d5223aa8d61c38a4381abaeedcf56
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
