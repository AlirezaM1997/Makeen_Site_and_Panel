import Head from "next/head";
import DashboardLayout from "../../../components/adminComponents/DashboardLayout";
import Slider from "../../../components/adminComponents/settingOptions/Slider";

export default function setting() {
  return (
    <>
      <Head>
        <title>اسلایدر</title>
      </Head>
      <DashboardLayout>
       <Slider/>
      </DashboardLayout>
    </>
  );
}
