import Head from "next/head";
import DashboardLayout from "../../components/panel/DashboardLayout";
import Registeration from "../../components/panel/Registeration";
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
