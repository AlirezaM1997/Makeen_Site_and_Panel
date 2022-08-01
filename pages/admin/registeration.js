import Head from "next/head";
import DashboardLayout from "../../components/adminComponents/DashboardLayout";
import Registeration from "../../components/adminComponents/Registeration";
export default function setting() {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
      </Head>
      <DashboardLayout>
        <Registeration />
      </DashboardLayout>
    </>
  );
}
