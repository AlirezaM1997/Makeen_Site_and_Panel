import Head from "next/head";
import Collaboration from "../../components/panelComponents/Collaboration";
import DashboardLayout from "../../components/panelComponents/DashboardLayout";
export default function collaboration() {
  return (
    <>
      <Head>
        <title>همکاری</title>
      </Head>
      <DashboardLayout>
        <Collaboration />
      </DashboardLayout>
    </>
  );
}
