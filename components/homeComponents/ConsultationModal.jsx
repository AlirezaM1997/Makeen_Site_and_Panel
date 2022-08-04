import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useEffect } from "react";
import { _showHideModalAction } from "../../slices/showConsultationModal";

export default function ConsultationModal() {
  const modalMode = useSelector((state) => state._modalMode.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalMode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalMode]);

  return (
    <>
      <div
        className={`${
          modalMode ? "block" : "-top-full"
        } fixed w-full h-full top-0 left-0 z-[1001] bg-[#4d698266] backdrop-blur-[10px] transition-top duration-500`}
        onClick={() => dispatch(_showHideModalAction(false))}
      >
        <section
          className="bg-white absolute p-[30px] rounded-[20px] shadow-[10px_10px_20px_#00000014] w-[60%] h-[70%] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 animate-comeFromUp font-iranYekan"
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
                <Image src={"/assets/images/quit-modal.png"} layout="fill" />
              </div>
            </div>
            <h1 className="text-[#00213E] text-[20px] leading-[35px] font-extrabold">
              ارتباط با ما
            </h1>
          </div>
          <div className="flex mt-[20px]">
            <div className="w-[45%]">
                {/* map */}
            </div>
            <div className="w-[55%] flex flex-col justify-between">
              <h5 className="text-[#4D6982] text-[14px] leading-[25px] font-bold text-right">
                براي دريافت مشاوره مي توانيد از راه هاي ارتباطی زير استفاده کنيد
              </h5>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
