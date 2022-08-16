import Head from "next/head";
import DashboardLayout from "../../../components/panel/DashboardLayout";
import Setting from "../../../components/panel/Setting";
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
