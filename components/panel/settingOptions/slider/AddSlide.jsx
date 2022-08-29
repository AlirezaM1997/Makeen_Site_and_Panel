import Image from "next/image";
import { useState } from "react";
import Loading from "../../../Loading";
export default function AddSlide() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [file, setFile] = useState(null);
  const submitSlide = async () => {
    try {
      if (!file) return;
      setIsLoaded(true);
      const formData = new FormData();
      formData.append("slide", file);
      console.log(formData);
      fetch(`${process.env.domain}/firstpage/add_sliders`, {
        method: "POST",
        body: { cover: formData, select: true },
      })
        .then((response) => {
          console.log(response);
          setIsLoaded(false);
          return response.json();
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log("error");
    }
  };
  if (isLoaded) return <Loading />;
  return (
    <>
      <div className="mr-[108px] mt-4 font-iranYekan ">
        <div
          dir="rtl"
          className="shadow-[0px_0px_5px_#00000017] rounded-[14px] p-6 relative ml-[15px]"
        >
          <header>
            <div></div>
            <hr className="mt-2 bg-[#103F7B] h-[1.5px]" />
          </header>
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="files"
              className="text-[14px] text-[#00213E] leading-[25px] font-bold my-4"
            >
              آپلود تصویر
            </label>
            <div className="flex items-center">
              <input
                className="bg-[#F6F6F6] py-4 pr-2 cursor-pointer w-full pl-6"
                placeholder="فایلی انتخاب نشده"
                id="files"
                type={"file"}
                // value={file}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <div
                className="relative w-4 h-4 -mr-[25px]"
                onClick={() => (document.getElementById("files").value = null)}
              >
                <Image
                  src={"/assets/images/panel/delete.png"}
                  layout="fill"
                  alt="delete"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[50px]">
            <button
              className="w-fit text-[#37BBEC] border-[1px] border-[#12B428] rounded-[10px] px-9 py-2"
              onClick={() => submitSlide()}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
