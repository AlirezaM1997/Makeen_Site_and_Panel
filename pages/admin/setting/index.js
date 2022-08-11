import Head from "next/head";
import DashboardLayout from "../../../components/adminComponents/DashboardLayout";
import Setting from "../../../components/adminComponents/Setting";
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
