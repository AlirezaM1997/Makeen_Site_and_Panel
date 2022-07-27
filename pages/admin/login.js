import Head from "next/head";
import Login from "../../components/adminComponents/Login";

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
