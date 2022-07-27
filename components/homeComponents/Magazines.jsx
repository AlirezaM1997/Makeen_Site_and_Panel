import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Magazines() {
  const magazines = [1, 2, 3, 4, 5, 6];
  const setting = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mb-[130px] relative px-[50px]" id="magazines">
        <div className="flex items-center">
          <div className="flex flex-row-reverse w-fit ml-[30px] justify-start cursor-pointer">
            <h4 className="text-[#8094A6] peer font-iranYekan text-[16px]">
              مشاهده ی همه
            </h4>
          </div>
          <h1 className="font-iranYekan text-[#00213E] text-[20px] font-extrabold	absolute right-[80px] top-0 ">
            جدیدترین مقالات و مطالب از مکین
          </h1>
        </div>
        <Slider {...setting}>
          {magazines.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] mt-[50px]  p-[20px] border-[0.5px] border-[#CACBCB] rounded-[15px] hover:mt-[40px] transition-spacing duration-300 ease-out"
            >
              <div className="relative h-[220px]">
                <Image
                  layout="fill"
                  src={"/assets/images/magazine1.png"}
                  alt="Magazine"
                />
              </div>
              <div className="flex justify-end my-[20px]">
                <span className="text-[12px] text-[#1A3E5F] leading-[21px] font-bold font-iranYekan p-[10px] rounded-[8px] bg-gradient-[106deg] from-[#E6EAED] to-[#CCD4DB]">
                  {'PHP برنامه نویسی '}•
                </span>
              </div>
              <div className="text-[18px] text-[#00213E] leading-[31p] font-bold font-iranYekan text-right mb-[42px]">
                وردپرس بستری مناسب برای پیاده CMS آیا سازی وب سایت هاست؟
              </div>
              <hr />
              <div className="flex justify-between items-center pt-[21px]">
                <div className="relative w-[35px] h-[35px]">
                  <Image
                    layout="fill"
                    src={"/assets/images/magazineAvatar.png"}
                    alt="magazineAvatar"
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="text-[12px] text-[#4D6982] leading-[16px] font-medium font-iranYekan">
                    1400 آبان 4
                    </span>
                    <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-3">
                      <div className="relative w-[14px] h-[16px]">
                        <Image
                          layout="fill"
                          src={"/assets/images/calendar.png"}
                          alt="calendar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center ml-[30px]">
                    <span className="text-[12px] text-[#4D6982] leading-[16px] font-medium font-iranYekan">
                     320
                    </span>
                    <div className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center ml-3">
                      <div className="relative w-[20px] h-[12px]">
                        <Image
                          layout="fill"
                          src={"/assets/images/eye.png"}
                          alt="eye"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
