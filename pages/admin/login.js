import Head from "next/head";
import Login from "../../components/panel/Login";

export default function login() {
  return (
    <>
      <Head>
        <title>ورود ادمین ها</title>
      </Head>
      <Login />
    </>
  );
}
