import Head from "next/head";
import Collaboration from "../../components/adminComponents/Collaboration";
import DashboardLayout from "../../components/adminComponents/DashboardLayout";
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
