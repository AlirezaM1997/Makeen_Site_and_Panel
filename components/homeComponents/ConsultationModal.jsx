import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useEffect } from "react";
import { _showHideModalAction } from "../../slices/showConsultationModal";

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
          className="bg-white absolute p-[30px] rounded-[20px] py-[70px] shadow-[10px_10px_20px_#00000014] w-[60%] h-[70%] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 animate-comeFromUp font-iranYekan"
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

          <div className="-red-500 w-full h-full flex justify-between  ">
            <div className="w-[296px] h-[341px] ml-[10px] mt-[40px] bg-white ">
              {/* <MapWithNoSsr /> */}
            </div>

            <div>
              <h1 className="text-[14px] mt-[25px] text-[#4D6982] pl-[150px]">
                براي دريافت مشاوره مي توانيد از راه هاي ارتباطی زير استفاده کنيد
              </h1>

              <div className="flex justify-end mt-[50px] mr-[20px]">
                <h1 className="pr-[30px] relative self-center text-[#00294D]">
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

              <div className="flex justify-end mt-[50px] mr-[20px]">
                <h1 className="pr-[30px] relative self-center text-[#00294D]">
                  @Info@makeen.ir
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

              <div className="flex justify-end mt-[50px] mr-[20px]">
                <h1 className="pr-[30px] relative self-center text-[#00294D]">
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

              <div className="flex justify-end mt-[50px] mr-[20px]">
                <h1
                  dir="rtl"
                  className="pr-[30px] px-[150px] relative self-center text-[#00294D]"
                >
                  تهران، مترو علم و صنعت، خيابان فرجام، پلاک 495، طبقه پنجم
                </h1>
                <div className=" w-[50px] h-[40px] rounded-[50%] flex justify-center bg-gradient-[132deg] from-[#EDEEEE] to-[#CACBCB] bg-origin-padding bg-no-repeat ">
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
