import Head from "next/head";
import Admin from "../../components/panelComponents/Admin";
import DashboardLayout from "../../components/panelComponents/DashboardLayout";
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
