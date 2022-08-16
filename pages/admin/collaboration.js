import Head from "next/head";
import Collaboration from "../../components/panel/Collaboration";
import DashboardLayout from "../../components/panel/DashboardLayout";
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
