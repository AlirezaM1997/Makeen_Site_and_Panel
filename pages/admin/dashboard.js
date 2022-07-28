import Head from "next/head";
import Dashboard from "../../components/adminComponents/Dashboard";
export default function dashboard() {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>
      <Dashboard />
    </>
  );
}
