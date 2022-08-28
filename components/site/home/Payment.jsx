import Image from "next/image";
export default function Payment({ payment }) {
  console.log(payment);
  return (
    <>
      <div className="flex h-[512px] pl-[0px] mt-[40px] relative">
        <div className="w-[130px] h-[339px] absolute bg-gradient-[90deg] from-[#37BBEC] to-[#B5E6F8] opacity-10 blur-[50px] bottom-0 right-0 rounded-full"></div>
        <div className="relative w-[638px] h-full">
          <Image
            src={payment[0].image}
            layout="fill"
            alt="installment-payment"
          />
        </div>
        <div className="w-1/2 pt-[157px] pb-[157px] py-[0px] pr-[120px] flex">
          <div>
            <p
              dir="rtl"
              className="text-[#00213e] text-[20px] leading-[35px] font-black font-iranYekan"
            >
              {payment[0].title}
            </p>
            <p
              dir="rtl"
              className="text-[#00213E] text-[16px] leading-[36px] font-bold mt-5"
            >
              {payment[0].description}
            </p>
          </div>
          <div className="pt-4 pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57.477"
              height="65.274"
              viewBox="0 0 57.477 65.274"
            >
              <g id="Arrow" transform="translate(-1252.43 -4538.118)">
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M1248.2,4541.42s11.944-.326,19.423,0,23.126,7.3,16.589,21.751c-7.587,17.7-19.725,10.858-16.589,2.715s21.656-23.164,31.609-13.03,2.424,38.114-2.679,44.935-12.758,12.141-39.715,0"
                  transform="translate(5 -2.389)"
                  fill="rgba(0,0,0,0)"
                  stroke="#667f94"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M2.264.13,8.269,6.135a.443.443,0,0,1-.227.749L.531,8.391a.444.444,0,0,1-.522-.523L1.515.357A.444.444,0,0,1,2.264.13Z"
                  transform="translate(1263.019 4589.427) rotate(67)"
                  fill="#667f94"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
