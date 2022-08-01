import Head from "next/head";
import Dashboard from "../../components/adminComponents/Dashboard";
import DashboardLayout from "../../components/adminComponents/DashboardLayout";
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
