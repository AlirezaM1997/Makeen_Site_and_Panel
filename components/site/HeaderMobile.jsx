import Image from "next/image";

export default function HeaderMobile() {
  return (
    <>
      <header className="h-[46px] z-[1002] fixed overflow-hidden flex items-center justify-between top-0 w-full py-[11px] px-5 border-[1px] border-[#FFFFFF] bg-white">
        <div className="w-full absolute top-0 left-0 z-10 h-[46px] bg-gradient-[271deg] from-[#37BBEC] to-[#FF792C] bg-origin-padding blur-[20px] bg-no-repeat opacity-20"></div>
        <div className="relative w-[68px] h-6">
          <Image
            src="/assets/images/logo-makeen.png"
            layout="fill"
            alt="logo-makeen"
          />
        </div>
        <div></div>
      </header>
    </>
  );
}
