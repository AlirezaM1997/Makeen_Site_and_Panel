import Head from "next/head";
import DashboardLayout from "../../../components/panelComponents/DashboardLayout";
import Slider from "../../../components/panelComponents/settingOptions/Slider";
export default function setting() {
  return (
    <>
      <Head>
        <title>اسلایدر</title>
      </Head>
      <DashboardLayout>
        <Slider />
      </DashboardLayout>
    </>
  );
}
