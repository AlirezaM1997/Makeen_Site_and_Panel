import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Makeeniha({makeeniha}) {
  // console.log(makeeniha);
  const pmakeeniha = [1, 2, 3, 4, 5, 6];
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable:false,
  };
  return (
    <>
      <div className="h-[454px] relative font-iranYekan mt-[150px] overflow-hidden">
        <div className="w-[339px] h-[339px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-10 blur-[50px] top-[90px] right-[255px] rounded-full"></div>
        <div className="w-[205px] h-[205px] absolute bg-gradient-[90deg] from-[#FF792C] to-[#FDD5BE] opacity-10 blur-[50px] top-[154px] left-0"></div>
        <div className="absolute top-[45px] -left-[50px] w-[86px] h-[86px] ">
          <Image
            layout="fill"
            src={"/assets/images/blueCircle3.png"}
            alt="blueCircle3"
          />
        </div>
        <div className="absolute bottom-[30px] -right-[82px] w-[144px] h-[144px] ">
          <Image
            layout="fill"
            src={"/assets/images/blueCircle4.png"}
            alt="blueCircle4"
          />
        </div>
        <div className=" text-[#00213E] text-center leading-[50px] ">
          <h1 className="text-[20px] font-extrabold ">مکین از زبان مکینی ها</h1>
          <h4 className="text-[16px]">
            نظر فارغ التحصیلان مکین که حالا متخصص شدن درباره ی مکین
          </h4>
        </div>
        <div
          className="px-[50px] py-[20px] h-[300px]"
          id="makeenihaSlider"
        >
          <Slider {...setting}>
            {pmakeeniha.map((item, index) => (
              <div
                className="flex flex-col"
                key={index}
              >
                <div className="w-[420px] h-[300px] relative p-[55px]">
                  <Image
                    className="shadow-[10px_10px_300px_#0000000D]"
                    layout="fill"
                    src={"/assets/images/makeenihaBackground.webp"}
                    alt="makeeniha"
                  />
                  <div className="relative w-[290px] h-[140px] text-[#00213E] text-[16px] leading-[28px] font-medium text-right  overflow-hidden">
                    <div className="absolute">
                      مکین جاییه که یاد میگیری رو پای خودت وایستی و این طوری
                      میتونی از پس هر مشکلی که سر راهت قرار میگیری بر بیای
                    </div>
                  </div>
                </div>
                <div
                  className="flex leading-[35px] -mt-[30px] pr-[20px]"
                  dir="rtl"
                >
                  <div>
                    <Image
                      width={60}
                      height={60}
                      className="rounded-full"
                      src={"/assets/images/Arman.png"}
                      alt="Arman"
                    />
                  </div>
                  <div className="text-[#4D6982] mr-[20px]">
                    <h1 className="">آرمان عبدلی</h1>
                    <h1 className="">ویستا</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}