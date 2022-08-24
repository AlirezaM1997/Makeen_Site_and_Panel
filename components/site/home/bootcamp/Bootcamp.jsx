import VideoSlider from "./VideoSlider";
export default function Bootcamp() {
  return (
    <>
      <div className="xl:pt-[115px] xl:px-[30px] xl:mt-[100px] mt-[52px] font-iranYekan">
        <div className="bg-[#FFF2EA] xl:pt-0 pt-[30px] flex xl:flex-row flex-col-reverse rounded-[20px]">
          <div className="xl:w-1/2 w-full xl:pl-[95px] xl:pr-[80px] xl:mb-0 -mb-[25px]">
            <div className="xl:w-[494px] w-full xl:absolute xl:mt-0 mt-[30px]">
              <VideoSlider />
            </div>
          </div>
          <div className="xl:w-1/2 w-full xl:py-[49px] xl:pr-[117px] flex">
            <div>
              <div className="flex justify-center ">
                <p className="text-[#00213e] xl:text-[20px] text-[16px] leading-[34px] font-extrabold xl:text-right text-center">
                  بوت کمپ چیه؟
                </p>
                <div className="xl:hidden ml-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.382"
                    height="48.792"
                    viewBox="0 0 50.382 48.792"
                  >
                    <g
                      id="Arrow"
                      transform="translate(249.232 748.124) rotate(-150)"
                    >
                      <path
                        id="Path_16"
                        data-name="Path 16"
                        d="M40.977,0c-18.284,8.2-3.7,18.9-10.229,22.32s-12.942-3.974-15.906-8.645c-1.355-2.024-.35-4.7,2.406-6.348,3.407-2.035,7.8-.368,10.38,2.7,5.742,6.823-4.407,21.945-31.147,3.255"
                        transform="matrix(0.978, 0.208, -0.208, 0.978, 539.982, 499.584)"
                        fill="none"
                        stroke="#667f94"
                        stroke-linecap="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_17"
                        data-name="Path 17"
                        d="M1.715.1,6.264,4.648a.335.335,0,0,1-.172.567L.4,6.357a.336.336,0,0,1-.4-.4L1.148.27A.336.336,0,0,1,1.715.1Z"
                        transform="translate(537.305 508.733) rotate(95)"
                        fill="#667f94"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <p
                dir="rtl"
                className="text-[#00213E] xl:text-[16px] text-xs xl:leading-[36px] leading-[26px] font-bold mt-5 xl:px-0 px-[37px] xl:text-right text-center"
              >
                همیشه برای اینکه بخوایم وارد محیط جدیدی بشیم و بهش اعتماد کنیم
                بهترین راه اینه که بشینیم پای حرف کسایی که خودشون توی اون محیط
                بودن. اگرشما هم دوست دارید بدونید نظر مکینی ها نسبت به آکادمی
                مکین چیه! یا دوست داری با مدیر آکادمی و اساتیدش آشنا بشی یادوست
                داری از نقشه ی راه مکین مطلع بشی این فیلم رو از دست نده!
              </p>
            </div>
            <div className="hidden xl:block">
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
}
