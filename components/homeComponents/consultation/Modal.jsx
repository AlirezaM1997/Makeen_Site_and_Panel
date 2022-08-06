import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { _showHideModalAction } from "../../../slices/showConsultationModal";
import { useEffect } from "react";

export default function ConsultationModal() {
  const modalMode = useSelector((state) => state._modalMode.value);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${
          modalMode ? "block" : "-top-full"
        } fixed w-full h-full top-0 left-0 z-[1001] bg-[#4d698266] backdrop-blur-[10px] transition-top duration-500`}
        onClick={() => dispatch(_showHideModalAction(false))}
      >
        <section
          className="bg-white absolute p-[30px] rounded-[20px] shadow-[10px_10px_20px_#00000014] w-[60%] h-[72%] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 animate-comeFromUp font-iranYekan"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <div
              className="rounded-full border-[#707070] border-[1px] border-opacity-20 w-[35px] h-[35px] flex justify-center items-center cursor-pointer"
              onClick={() => {
                dispatch(_showHideModalAction(false));
              }}
            >
              <div className="relative w-[13px] h-[13px]">
                <Image
                  src={"/assets/images/quit-modal.png"}
                  layout="fill"
                  alt="zarbdar"
                />
              </div>
            </div>
            <h1 className="text-[#00213E] text-[20px] leading-[35px] font-extrabold">
              ارتباط با ما
            </h1>
          </div>

          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              {/* <MapWithNoSsr /> */}
            </div>

            <div className="w-[55%] mt-[20px]">
              <h1 className="text-[14px] text-[#4D6982] text-right leading-[25px] font-bold">
                براي دريافت مشاوره مي توانيد از راه هاي ارتباطی زير استفاده کنيد
              </h1>

              <div className="flex justify-end mt-[35px]">
                <h1 className="mr-[20px] relative self-center text-[#00294D] text-[16px] leading-[36px] font-bold">
                  @makeenacademy
                </h1>
                <div className=" w-[40px] h-[40px] rounded-[50%] flex justify-center bg-gradient-[132deg] from-[#E6EAED] to-[#c0d0dd] bg-origin-padding bg-no-repeat ">
                  <div className="w-[16px] h-[16px] relative self-center">
                    <Image
                      alt="instagram icon"
                      src="/assets/images/Instagram.png"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-[30px]">
                <h1 className="mr-[20px] relative self-center text-[#00294D] text-[16px] leading-[36px] font-bold">
                  Info@makeen.ir
                </h1>
                <div className=" w-[40px] h-[40px] rounded-[50%] flex justify-center bg-gradient-[132deg] from-[#FFF2EA] to-[#FFD7C0] bg-origin-padding bg-no-repeat ">
                  <div className="w-[16px] h-[16px] relative self-center">
                    <Image
                      alt="instagram icon"
                      src="/assets/images/message.png"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-[30px]">
                <h1 className="mr-[20px] relative self-center text-[#00294D] text-[16px] leading-[36px] font-bold">
                  021-77188185-6
                </h1>
                <div className=" w-[40px] h-[40px] rounded-[50%] flex justify-center bg-gradient-[132deg] from-[#ECF9FD] to-[#DAF2FB] bg-origin-padding bg-no-repeat ">
                  <div className="w-[16px] h-[16px] relative self-center">
                    <Image
                      alt="instagram icon"
                      src="/assets/images/phone.png"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-[30px]">
                <h1 className="mr-[20px] relative self-center text-[#00294D] text-right text-[16px] leading-[36px] font-bold">
                  تهران، مترو علم و صنعت، خيابان فرجام، پلاک 495، طبقه پنجم
                </h1>
                <div className=" w-[40px] h-[40px] rounded-[50%] flex justify-center bg-gradient-[132deg] from-[#EDEEEE] to-[#CACBCB] bg-origin-padding bg-no-repeat ">
                  <div className="w-[16px] h-[16px] relative self-center">
                    <Image
                      alt="instagram icon"
                      src="/assets/images/key.png"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
