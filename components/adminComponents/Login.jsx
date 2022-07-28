import { useState } from "react";
import { useRouter } from "next/router";
import { setCookies } from "cookies-next";
export default function Login() {
  const navToPanel = useRouter();
  const [currentAdmin, setCurrentAdmin] = useState({
    username: "",
    password: "",
  });
  const [hintUsernameInput, setHintUsernameInput] = useState(false);
  const [hintPasswordInput, setHintPasswordInput] = useState(false);
  const [hintInfoWrong, setHintInfoWrong] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const inputHandler = (e) => {
    setCurrentAdmin({ ...currentAdmin, [e.target.name]: e.target.value });
  };
  const login = async () => {
    if (currentAdmin.username === "") {
      setHintUsernameInput(true);
    } else {
      setHintUsernameInput(false);
    }
    if (currentAdmin.password === "") {
      setHintPasswordInput(true);
    } else {
      setHintPasswordInput(false);
    }
    if (currentAdmin.username !== "" && currentAdmin.password !== "") {
      const getToken = async () => {
        setIsLoaded(true);
        fetch("http://localhost:4000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: currentAdmin.username,
            password: currentAdmin.password,
          }),
        })
          .then((data) => {
            if (data.status === 200) {
              navToPanel.push('/admin/dashboard')
            } else {
              setHintInfoWrong(true);
              setIsLoaded(false);
            }
            return data.json();
          })
          .then(({ token }) => {
            setCookies("token", token);
          });
      };
      getToken();
    }
  };
  return (
    <>
      <section className="px-[406px] mt-[115px]">
        <h1 className="text-[16px] text-[#00213E] leading-[28px] text-center font-bold font-iranYekan relative before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-100_100 before:rounded-[10px] flex justify-center pb-[6px]">
          ورود
        </h1>
        <h1 className="text-[14px] text-[#00213E] leading-[25px] text-center font-bold font-iranYekan mb-[32px] mt-[22px]">
          به پنل ادمین سایت مکین خوش آمدید
        </h1>
        <div className="px-[100px]" dir="rtl">
          <div className="flex flex-col mb-[30px]">
            <label className="text-[14px] text-[#00213E] leading-[25px] font-bold font-iranYekan mb-2">
              نام کاربری
            </label>
            <input
              className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
              placeholder="نام کاربری خود را وارد کنید"
              type="text"
              name="username"
              id="username"
              value={currentAdmin.username}
              onChange={inputHandler}
              autoComplete="off"
              spellcheck="false"
            />
            <div
              className={`${
                hintUsernameInput ? "" : "hidden"
              } text-left text-[chartreuse] text-xs -mt-[14px] mb-2`}
            >
              You missed a spot! Don't forget to add your username.
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] text-[#00213E] leading-[25px] font-bold font-iranYekan mb-2">
              رمز عبور
            </label>
            <input
              className="border-[1px] border-[#CACBCB] rounded-[10px] p-[15px] focus:outline-none"
              placeholder="رمز عبور خود را وارد کنید"
              type="text"
              name="password"
              id="password"
              value={currentAdmin.password}
              onChange={inputHandler}
              autoComplete="off"
              spellcheck="false"
            />
            <div
              className={`${
                hintPasswordInput ? "" : "hidden"
              } text-left text-[chartreuse] text-xs -mt-[14px] mb-2`}
            >
              You missed a spot! Don't forget to add your password.
            </div>
          </div>
          <button
            className="p-[15px] bg-[#37BBEC] rounded-[10px] w-full text-[16px] text-[#FFFFFF] leading-[28px] text-center font-bold font-iranYekan mt-[40px]"
            onClick={login}
          >
            ورود
          </button>
        </div>
      </section>
    </>
  );
}
