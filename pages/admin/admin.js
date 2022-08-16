import Head from "next/head";
import Admin from "../../components/panel/Admin";
import DashboardLayout from "../../components/panel/DashboardLayout";
export default function admin() {
  return (
    <>
      <Head>
        <title>ادمین</title>
      </Head>
      <DashboardLayout>
        <Admin />
      </DashboardLayout>
    </>
  );
}
