import Head from "next/head";
import Admin from "../../components/adminComponents/Admin";
import DashboardLayout from "../../components/adminComponents/DashboardLayout";
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
