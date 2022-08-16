import Head from "next/head";
import Dashboard from "../../components/panel/Dashboard";
import DashboardLayout from "../../components/panel/DashboardLayout";
export default function dashboard() {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );
}
