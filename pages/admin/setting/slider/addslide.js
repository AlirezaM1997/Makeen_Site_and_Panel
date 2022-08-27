import Head from "next/head";
import DashboardLayout from "../../../../components/panel/DashboardLayout";
import AddSlide from "../../../../components/panel/settingOptions/slider/AddSlide";
export default function addSlide() {
  return (
    <>
      <Head>
        <title>اضافه کردن اسلاید</title>
      </Head>
      <DashboardLayout>
        <AddSlide />
      </DashboardLayout>
    </>
  );
}
