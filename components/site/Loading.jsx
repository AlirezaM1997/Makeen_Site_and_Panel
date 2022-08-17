export default function Loading() {
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-screen backdrop-blur-[2px] z-[1003]"></div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="inline-block absolute z-[1004] w-[80px] h-[80px] after:content-[''] after:block after:w-16 after:h-16 after:m-2 after:rounded-full after:border-[#37BBEC_transparent_#37BBEC_transparent] after:border-[6px] after:animate-loading "></div>
      </div>
    </>
  );
}
