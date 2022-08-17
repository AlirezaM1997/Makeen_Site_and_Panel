import { useGetSliderImages } from "../../../../hooks/panelHooks";
import Loading from "../../../site/Loading";
import SlideItem from "./SlideItem";
export default function Slider() {
  const {data,isLoading} = useGetSliderImages()
  if (isLoading) return <Loading/>
  return (
    <>
      <div className="mr-[108px] mt-4 ">
        <div className="shadow-[0px_0px_5px_#00000017] rounded-[14px] p-6 relative ml-[15px]">
          <header>
            <div>
              <button className="flex items-center justify-center text-[#37BBEC] border-[1px] border-[#12B428] rounded-[10px] px-4 py-[10px]">
                <span>+</span>
                <span className="text-[12px] leading-[21px] font-medium font-iranYekan ml-2">
                  افزودن عکس
                </span>
              </button>
            </div>
            <div></div>
            <hr className="mt-2 bg-[#103F7B] h-[1.5px]" />
          </header>
          <section className="grid grid-cols-3 gap-[30px] mt-8" dir="rtl">
            {data.map((item, index) => (
              <SlideItem item={item} key={index} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
