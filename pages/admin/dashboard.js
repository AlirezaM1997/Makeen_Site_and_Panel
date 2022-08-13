import Head from "next/head";
import Dashboard from "../../components/panelComponents/Dashboard";
import DashboardLayout from "../../components/panelComponents/DashboardLayout";
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
