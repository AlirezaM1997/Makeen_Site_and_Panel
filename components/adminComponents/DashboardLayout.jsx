import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function DashboardLayout({ children }) {
  const router = useRouter()
  // className="invert-[100%] sepia-[125%] saturate-[115%] hue-rotate-[178deg] brightness-[99%] contrast-[100%]"
  return (
    <>
      <section className="px-[30px] py-4 relative">
        <header
          dir="rtl"
          className="mr-[108px] py-[28px] pr-6 shadow-[0px_0px_5px_#00000017] rounded-[14px] text-[20px] text-[#00213E] leading-[35px] font-bold font-iranYekan"
        >
          موسسه ایده آل رسانه مکین
        </header>
        <aside className="fixed right-[30px] top-4 w-[92px] p-[20px] shadow-[0px_0px_5px_#00000017] rounded-[14px]">
          <div className="relative w-[52px] h-[52px]">
            <Image src={"/assets/images/logo.png"} layout="fill" alt="logo" />
          </div>
          <div className="flex flex-col justify-between items-center relative">
            <div className="flex flex-col mt-[51px] text-[#292D32] text-[12px] leading-[21px] font-medium font-iranYekan">
              <Link href={"/admin/dashboard"}>
                <a className="flex flex-col items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="vuesax_outline_home-2"
                      data-name="vuesax/outline/home-2"
                      transform="translate(-620 -188)"
                    >
                      <g id="home-2" transform="translate(620 188)">
                        <path
                          id="Vector"
                          d="M16.049,20.832H4.813A4.819,4.819,0,0,1,0,16.011V8.824A5.336,5.336,0,0,1,1.863,5.031L7.093.957A5.045,5.045,0,0,1,12.808.821l6,4.2a5.3,5.3,0,0,1,2.057,3.938v7.062A4.817,4.817,0,0,1,16.049,20.832ZM7.986,2.1,2.756,6.176a3.942,3.942,0,0,0-1.3,2.648v7.188a3.366,3.366,0,0,0,3.357,3.366H16.049a3.358,3.358,0,0,0,3.357-3.356V8.959A3.848,3.848,0,0,0,17.97,6.214l-6-4.2A3.613,3.613,0,0,0,7.986,2.1Z"
                          transform="translate(1.569 1.599)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M.941,5.649A.948.948,0,0,1,0,4.707V.941A.948.948,0,0,1,.941,0a.948.948,0,0,1,.941.941V4.707A.948.948,0,0,1,.941,5.649Z"
                          transform="translate(11.059 13.41)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M0,0H24V24H0Z"
                          fill="none"
                          opacity="0"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>داشبورد</span>
                </a>
              </Link>
              <Link href={"/admin/setting"}>
                <a className="flex flex-col items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="vuesax_outline_setting-2"
                      data-name="vuesax/outline/setting-2"
                      transform="translate(-300 -190)"
                    >
                      <g id="setting-2">
                        <path
                          id="Vector"
                          d="M3.75,7.5A3.75,3.75,0,1,1,7.5,3.75,3.751,3.751,0,0,1,3.75,7.5Zm0-6A2.25,2.25,0,1,0,6,3.75,2.253,2.253,0,0,0,3.75,1.5Z"
                          transform="translate(308.25 198.25)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M13.96,20.378a2.719,2.719,0,0,1-.63-.08,2.456,2.456,0,0,1-1.47-1.11l-.12-.2c-.59-1.02-1.4-1.02-1.99,0l-.11.19A2.4,2.4,0,0,1,8.17,20.3a2.341,2.341,0,0,1-1.83-.25l-1.72-.99a2.653,2.653,0,0,1-.98-3.62,1.338,1.338,0,0,0,.2-1.26,1.333,1.333,0,0,0-1.19-.46A2.655,2.655,0,0,1,0,11.068V9.308a2.655,2.655,0,0,1,2.65-2.65A1.333,1.333,0,0,0,3.84,6.2a1.311,1.311,0,0,0-.2-1.26,2.661,2.661,0,0,1-.26-2.01,2.58,2.58,0,0,1,1.24-1.61L6.35.328a2.422,2.422,0,0,1,3.3.87l.12.2c.59,1.02,1.4,1.02,1.99,0l.11-.19a2.414,2.414,0,0,1,3.31-.87l1.72.99a2.653,2.653,0,0,1,.98,3.62,1.338,1.338,0,0,0-.2,1.26,1.333,1.333,0,0,0,1.19.46,2.655,2.655,0,0,1,2.65,2.65v1.76a2.655,2.655,0,0,1-2.65,2.65,1.333,1.333,0,0,0-1.19.46,1.311,1.311,0,0,0,.2,1.26,2.617,2.617,0,0,1,.26,2.01,2.58,2.58,0,0,1-1.24,1.61l-1.73.99A2.488,2.488,0,0,1,13.96,20.378Zm-3.21-3.7a2.725,2.725,0,0,1,2.29,1.55l.11.19a.917.917,0,0,0,1.24.33l1.73-1a1.157,1.157,0,0,0,.54-.7,1.143,1.143,0,0,0-.11-.87,2.746,2.746,0,0,1-.2-2.76,2.732,2.732,0,0,1,2.49-1.21,1.144,1.144,0,0,0,1.15-1.15V9.3a1.15,1.15,0,0,0-1.15-1.15,2.732,2.732,0,0,1-2.49-1.21,2.746,2.746,0,0,1,.2-2.76,1.143,1.143,0,0,0,.11-.87,1.17,1.17,0,0,0-.53-.7l-1.73-.99a.92.92,0,0,0-1.26.33l-.11.19a2.725,2.725,0,0,1-2.29,1.55,2.725,2.725,0,0,1-2.29-1.55l-.11-.2a.918.918,0,0,0-1.24-.32l-1.73,1a1.157,1.157,0,0,0-.54.7,1.143,1.143,0,0,0,.11.87,2.746,2.746,0,0,1,.2,2.76,2.732,2.732,0,0,1-2.49,1.21A1.144,1.144,0,0,0,1.5,9.308v1.76a1.15,1.15,0,0,0,1.15,1.15,2.732,2.732,0,0,1,2.49,1.21,2.746,2.746,0,0,1-.2,2.76,1.143,1.143,0,0,0-.11.87,1.17,1.17,0,0,0,.53.7l1.73.99a.885.885,0,0,0,.69.1.949.949,0,0,0,.57-.43l.11-.19A2.745,2.745,0,0,1,10.75,16.678Z"
                          transform="translate(301.25 191.812)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M0,0H24V24H0Z"
                          transform="translate(300 190)"
                          fill="none"
                          opacity="0"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>تنظیمات</span>
                </a>
              </Link>
              <Link href={"/admin/registeration"}>
                <a className="flex flex-col items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="vuesax_outline_clipboard-text"
                      data-name="vuesax/outline/clipboard-text"
                      transform="translate(-108 -252)"
                    >
                      <g id="clipboard-text">
                        <path
                          id="Vector"
                          d="M7.75,1.5h-7A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h7A.755.755,0,0,1,8.5.75.755.755,0,0,1,7.75,1.5Z"
                          transform="translate(115.25 263.45)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M5.13,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H5.13a.755.755,0,0,1,.75.75A.755.755,0,0,1,5.13,1.5Z"
                          transform="translate(115.25 267.45)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M6.75,5.5h-4C1.79,5.5,0,5.5,0,2.75S1.79,0,2.75,0h4C7.71,0,9.5,0,9.5,2.75,9.5,3.71,9.5,5.5,6.75,5.5Zm-4-4c-.99,0-1.25,0-1.25,1.25S1.76,4,2.75,4h4C8,4,8,3.74,8,2.75,8,1.5,7.74,1.5,6.75,1.5Z"
                          transform="translate(115.25 253.25)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M12.75,19.481h-6C1.13,19.481,0,16.9,0,12.731v-6C0,2.171,1.65.221,5.71.011a.756.756,0,0,1,.79.71.742.742,0,0,1-.71.78c-2.84.16-4.29,1.01-4.29,5.23v6c0,3.7.73,5.25,5.25,5.25h6c4.52,0,5.25-1.55,5.25-5.25v-6c0-4.22-1.45-5.07-4.29-5.23A.757.757,0,0,1,13,.711.757.757,0,0,1,13.79,0c4.06.22,5.71,2.17,5.71,6.72v6C19.5,16.9,18.37,19.481,12.75,19.481Z"
                          transform="translate(110.25 255.269)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H24V24H0Z"
                          transform="translate(108 252)"
                          fill="none"
                          opacity="0"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>ثبت نام</span>
                </a>
              </Link>
              <Link href={"#"}>
                <a className="flex flex-col items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="vuesax_outline_home-2"
                      data-name="vuesax/outline/home-2"
                      transform="translate(-620 -188)"
                    >
                      <g id="home-2" transform="translate(620 188)">
                        <path
                          id="Vector"
                          d="M16.049,20.832H4.813A4.819,4.819,0,0,1,0,16.011V8.824A5.336,5.336,0,0,1,1.863,5.031L7.093.957A5.045,5.045,0,0,1,12.808.821l6,4.2a5.3,5.3,0,0,1,2.057,3.938v7.062A4.817,4.817,0,0,1,16.049,20.832ZM7.986,2.1,2.756,6.176a3.942,3.942,0,0,0-1.3,2.648v7.188a3.366,3.366,0,0,0,3.357,3.366H16.049a3.358,3.358,0,0,0,3.357-3.356V8.959A3.848,3.848,0,0,0,17.97,6.214l-6-4.2A3.613,3.613,0,0,0,7.986,2.1Z"
                          transform="translate(1.569 1.599)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M.941,5.649A.948.948,0,0,1,0,4.707V.941A.948.948,0,0,1,.941,0a.948.948,0,0,1,.941.941V4.707A.948.948,0,0,1,.941,5.649Z"
                          transform="translate(11.059 13.41)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M0,0H24V24H0Z"
                          fill="none"
                          opacity="0"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>همکاری</span>
                </a>
              </Link>
              <Link href={"#"}>
                <a className="flex flex-col items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="vuesax_outline_home-2"
                      data-name="vuesax/outline/home-2"
                      transform="translate(-620 -188)"
                    >
                      <g id="home-2" transform="translate(620 188)">
                        <path
                          id="Vector"
                          d="M16.049,20.832H4.813A4.819,4.819,0,0,1,0,16.011V8.824A5.336,5.336,0,0,1,1.863,5.031L7.093.957A5.045,5.045,0,0,1,12.808.821l6,4.2a5.3,5.3,0,0,1,2.057,3.938v7.062A4.817,4.817,0,0,1,16.049,20.832ZM7.986,2.1,2.756,6.176a3.942,3.942,0,0,0-1.3,2.648v7.188a3.366,3.366,0,0,0,3.357,3.366H16.049a3.358,3.358,0,0,0,3.357-3.356V8.959A3.848,3.848,0,0,0,17.97,6.214l-6-4.2A3.613,3.613,0,0,0,7.986,2.1Z"
                          transform="translate(1.569 1.599)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M.941,5.649A.948.948,0,0,1,0,4.707V.941A.948.948,0,0,1,.941,0a.948.948,0,0,1,.941.941V4.707A.948.948,0,0,1,.941,5.649Z"
                          transform="translate(11.059 13.41)"
                          fill="#292d32"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M0,0H24V24H0Z"
                          fill="none"
                          opacity="0"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>ادمین</span>
                </a>
              </Link>
            </div>
            <div className="relative w-6 h-6 mt-[85px]">
              <Image
                src={"/assets/images/logout.png"}
                layout="fill"
                alt="logout"
              />
            </div>
          </div>
        </aside>
        {children}
      </section>
    </>
  );
}
