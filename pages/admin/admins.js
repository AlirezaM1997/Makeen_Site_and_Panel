import Head from "next/head";
import Admins from "../../components/panel/Admins";
import DashboardLayout from "../../components/panel/DashboardLayout";
export default function admin() {
  return (
    <>
      <Head>
        <title>ادمین</title>
      </Head>
      <DashboardLayout>
        <Admins/>
      </DashboardLayout>
    </>
  );
}
