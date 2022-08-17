import Image from "next/image";
import { useState } from "react";
export default function Admins() {
  const [hintUsernameInput, setHintUsernameInput] = useState(false);
  const [hintPasswordInput, setHintPasswordInput] = useState(false);
  const [hintRepeatPasswordInput, setHintRepeatPasswordInput] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [hintNameInput, setHintNameInput] = useState(false);
  const [hintEmailInput, setHintEmailInput] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    name: "",
    email: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const inputHandler = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  const register = async () => {
    if (newAdmin.username === "") {
      setHintUsernameInput(true);
    } else {
      setHintUsernameInput(false);
    }
    if (newAdmin.password === "") {
      setHintPasswordInput(true);
    } else {
      setHintPasswordInput(false);
    }
    if (newAdmin.repeatPassword === "") {
      setHintRepeatPasswordInput(true);
    } else {
      setHintRepeatPasswordInput(false);
    }
    if (newAdmin.email === "") {
      setHintEmailInput(true);
    } else {
      setHintEmailInput(false);
    }
    if (newAdmin.name === "") {
      setHintNameInput(true);
    } else {
      setHintNameInput(false);
    }
    if (
      newAdmin.password !== newAdmin.repeatPassword &&
      newAdmin.repeatPassword !== ""
    ) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
    if (
      newAdmin.username !== "" &&
      newAdmin.password !== "" &&
      newAdmin.name !== "" &&
      newAdmin.email !== ""
    ) {
      const addNewAdmin = () => {
        setIsLoaded(true);
        fetch(`${process.env.domain}/accounts/register`, {
          method: "POST",
          body: JSON.stringify({
            username: newAdmin.username,
            password: newAdmin.password,
            password2: newAdmin.password,
            name: newAdmin.name,
            email: newAdmin.email,
            phone: "09385277300",
          }),
        })
          .then((data) => {
            if (data.status === 200) {
              console.log("new admin add");
              console.log(data);
            } else {
              console.log("new admin not add");
            }
            setIsLoaded(false);
            return data.json();
          })
          // .then(({ token }) => {
          //   setCookies("token", token);
          // });
        setIsLoaded(false);
      };
      addNewAdmin();
    }
  };
  return (
    <>
      <div className="mr-[108px] relative">
        <section className="px-[300px] mt-[50px] mx-auto font-iranYekan relative mb-16">
          <h1 className="text-[16px] text-[#00213E] leading-[28px] text-center font-bold relative before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-100_100 before:rounded-[10px] flex justify-center pb-[6px]">
            ثبت نام
          </h1>
          <h1 className="text-[14px] text-[#00213E] leading-[25px] text-center font-bold mb-[32px] mt-[22px]">
            به پنل افزودن ادمین سایت مکین خوش آمدید
          </h1>
          <div className="w-[155px] h-[152px] -z-[1] relative left-1/2 -translate-x-1/2">
            <Image
              src={"/assets/images/panel/loginPic.png"}
              layout="fill"
              alt="registerBg"
            />
          </div>
          <div
            className="grid grid-cols-2 grid-rows-4 gap-6 mt-[33px]"
            dir="rtl"
          >
            <div className="flex flex-col">
              <label className="text-[14px] text-[#00213E] leading-[25px] font-bold mb-2">
                نام و نام خانوادگی
              </label>
              <input
                className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                type="text"
                name="name"
                value={newAdmin.name}
                onChange={inputHandler}
                autoComplete="off"
                spellCheck={false}
              />
              <div
                className={`${
                  hintNameInput ? "" : "hidden"
                } text-[10px] text-[#B80000] leading-[17px] font-bold mt-[7px] -mb-6`}
              >
                نام و نام خانوادگی خود را وارد نمایید
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] text-[#00213E] leading-[25px] font-bold mb-2">
                نام کاربری
              </label>
              <input
                className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
                placeholder="نام کاربری خود را وارد کنید"
                type="text"
                name="username"
                value={newAdmin.username}
                onChange={inputHandler}
                autoComplete="off"
                spellCheck={false}
              />
              <div
                className={`${
                  hintUsernameInput ? "" : "hidden"
                } text-[10px] text-[#B80000] leading-[17px] font-bold mt-[7px] -mb-6`}
              >
                نام کاربری خود را وارد کنید
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-[14px] text-[#00213E] leading-[25px] font-bold mb-2">
                ایمیل
              </label>
              <input
                className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
                placeholder="لطفا ایمیل خود را وارد کنید"
                type="text"
                name="email"
                value={newAdmin.email}
                onChange={inputHandler}
                autoComplete="off"
                spellCheck={false}
              />
              <div
                className={`${
                  hintEmailInput ? "" : "hidden"
                } text-[10px] text-[#B80000] leading-[17px] font-bold mt-[7px] -mb-6`}
              >
                لطفا ایمیل خود را وارد کنید
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] text-[#00213E] leading-[25px] font-bold mb-2">
                رمز عبور
              </label>
              <input
                className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
                placeholder="لطفا رمز عبور خود را وارد کنید"
                type="password"
                name="password"
                value={newAdmin.password}
                onChange={inputHandler}
                autoComplete="off"
                spellCheck={false}
              />
              <div
                className={`${
                  hintPasswordInput ? "" : "hidden"
                } text-[10px] text-[#B80000] leading-[17px] font-bold mt-[7px] -mb-6`}
              >
                لطفا رمز عبور خود را وارد کنید
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] text-[#00213E] leading-[25px] font-bold mb-2">
                تکرار رمز عبور
              </label>
              <input
                className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
                placeholder="لطفا رمز عبور خود را وارد کنید"
                type="password"
                name="repeatPassword"
                value={newAdmin.repeatPassword}
                onChange={inputHandler}
                autoComplete="off"
                spellCheck={false}
              />
              <div
                className={`${
                  hintRepeatPasswordInput ? "" : "hidden"
                } text-[10px] text-[#B80000] leading-[17px] font-bold mt-[7px] -mb-6`}
              >
                لطفا رمز عبور خود را وارد کنید
              </div>
              <div
                className={`${
                  checkPassword ? "" : "hidden"
                } text-[10px] text-[#B80000] leading-[17px] font-bold mt-[7px] -mb-6`}
              >
                لطفا رمز عبور صحیح وارد کنید
              </div>
            </div>
            <div className="col-span-2 mx-auto mt-4">
              <button
                className={`${
                  isLoaded ? "bg-red-600" : "bg-[#37BBEC]"
                } py-[15px] px-[145px]   rounded-[10px] text-[16px] text-[#FFFFFF] leading-[28px] text-center font-bold`}
                onClick={register}
              >
                ثبت نام
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
