import Head from "next/head";
import DashboardLayout from "../../../components/panelComponents/DashboardLayout";
import Setting from "../../../components/panelComponents/Setting";
export default function setting() {
  return (
    <>
      <Head>
        <title>تنظیمات</title>
      </Head>
      <DashboardLayout>
        <Setting />
      </DashboardLayout>
    </>
  );
}
