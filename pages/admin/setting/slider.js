import Head from "next/head";
import DashboardLayout from "../../../components/panel/DashboardLayout";
import Slider from "../../../components/panel/settingOptions/slider/Slider";
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
