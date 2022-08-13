import Head from "next/head";
import DashboardLayout from "../../components/panelComponents/DashboardLayout";
import Registeration from "../../components/panelComponents/Registeration";
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
