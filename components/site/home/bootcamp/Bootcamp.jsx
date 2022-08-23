import VideoSlider from "./VideoSlider";
export default function Bootcamp  ()  {
  return (
    <>
      <div className="xl:pt-[115px] px-[30px] xl:mt-[100px] mt-[52px]">
        <div className="bg-[#FFF2EA] xl:pt-0 pt-[30px] flex xl:flex-row flex-col-reverse rounded-[20px]">
          <div className="xl:w-1/2 w-full xl:pl-[95px] xl:pr-[80px] ">
            <div className="xl:w-[494px] w-full xl:absolute">
              <VideoSlider />
            </div>
          </div>
          <div className="xl:w-1/2 w-full xl:py-[49px] xl:pr-[117px] flex">
            <div>
              <p
                dir="rtl"
                className="text-[#00213e] text-[20px] leading-[34px] font-extrabold font-iranYekan"
              >
                بوت کمپ چیه؟
              </p>
              <p
                dir="rtl"
                className="text-[#00213E] text-[16px] leading-[36px] font-bold mt-5"
              >
                همیشه برای اینکه بخوایم وارد محیط جدیدی بشیم و بهش اعتماد کنیم
                بهترین راه اینه که بشینیم پای حرف کسایی که خودشون توی اون محیط
                بودن. اگرشما هم دوست دارید بدونید نظر مکینی ها نسبت به آکادمی
                مکین چیه! یا دوست داری با مدیر آکادمی و اساتیدش آشنا بشی یادوست
                داری از نقشه ی راه مکین مطلع بشی این فیلم رو از دست نده!
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68.44"
                height="68.144"
                viewBox="0 0 68.44 68.144"
              >
                <g
                  id="Arrow"
                  transform="matrix(0.588, -0.809, 0.809, 0.588, -713.157, 189.921)"
                >
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M554.873,493.963s8.4,15.565,17.815,18.029c12.39,5.138,12.362,19.563-5.322,19.585-5.6.007-13.1-.657-17.014-6.823-1.789-2.672-.462-6.206,3.177-8.38,4.5-2.687,10.29-.485,13.7,3.569,7.579,9.007-4.938,24.52-36.47,10.732"
                    transform="matrix(0.978, 0.208, -0.208, 0.978, 128.772, -106.396)"
                    fill="none"
                    stroke="#667f94"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M554.345,527.753l6.005,6.005a.443.443,0,0,1-.227.749l-7.511,1.508a.444.444,0,0,1-.522-.523l1.506-7.512A.444.444,0,0,1,554.345,527.753Z"
                    transform="translate(974.912 -110.773) rotate(81)"
                    fill="#667f94"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

