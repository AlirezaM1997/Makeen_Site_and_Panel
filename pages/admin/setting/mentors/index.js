import Head from "next/head";
import DashboardLayout from "../../../../components/panel/DashboardLayout";
import Mentors from "../../../../components/panel/settingOptions/mentors/Mentors";
export default function mentors() {
  return (
    <>
      <Head>
        <title>منتورها</title>
      </Head>
      <DashboardLayout>
        <Mentors />
      </DashboardLayout>
    </>
  );
}
