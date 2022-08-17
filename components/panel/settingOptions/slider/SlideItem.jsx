import Image from "next/image";
import { parsIsoDate } from "../../../../features/usefullFunctions";
export default function SlideItem({item}) {
  return (
    <>
      <div className="py-4 px-[10px] border-[1px] border-[#37BBEC] rounded-[10px] flex items-center">
        <div className="w-[35%] h-full">
          <div className="relative w-full h-[92px]">
            <Image
              src={item.cover}
              layout="fill"
              objectFit="cover"
              alt="slide"
              className="rounded-[10px]"
            />
          </div>
        </div>
        <div className="w-[65%] flex justify-between items-center pr-5">
          <div>
            <div>{parsIsoDate(item.date_time)}</div>
            {/* <div>{"name"}</div> */}
          </div>
          <div>
            <div className="relative w-4 h-4">
              <Image
                src={"/assets/images/panel/delete.png"}
                layout="fill"
                alt="delete"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
