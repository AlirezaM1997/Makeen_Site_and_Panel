import Image from "next/image";
import Slider from "react-slick";

const Makeeniha = () => {
  const makeeniha = [1, 2, 3, 4, 5, 6];
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // puaseOnHover: true,
  };
  return (
    <>
      <div className="bg-red- h-[454px] relative font-iranYekan ">
        <div className=" text-[#00213E] text-center leading-[50px] ">
          <h1 className="text-[20px] font-extrabold ">مکین از زبان مکینی ها</h1>
          <h4 className="text-[16px]">
            نظر فارغ التحصیلان مکین که حالا متخصص شدن درباره ی مکین
          </h4>
          <div className="absolute bg-white z-10 top-[30px] left-[10px] h-[86px] w-[40px] "></div>
          <div className="absolute top-[30px] rotate-[100deg] left-0 w-[86px] h-[86px] ">
            <Image
              layout="fill"
              src={"/assets/images/methFeature2.png"}
              alt="feature"
            />
          </div>
        </div>
        <div className="-blue-500 px-[50px] py-[20px] h-[300px] ">
          <Slider {...setting}>
            {makeeniha.map((item, index) => {
              return (
                <>
                  <div className="" key={index}>
                    <div className=" rounded-[30px]">
                      <Image
                        className="  "
                        width={420}
                        height={300}
                        src={"/assets/images/makeenihaBackground.webp"}
                        alt="makeeniha"
                      />
                    </div>
                    <div className="flex flex-row-reverse justify-between leading-[35px] w-[35%] ml-[240px] mt-[-40px] ">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={"/assets/images/Arman.png"}
                          alt="Arman"
                        />
                      </div>
                      <div className="text-[#4D6982]  " dir="rtl">
                        <h1>آرمان عبدلی</h1>
                        <h1>ویستا</h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Makeeniha;
