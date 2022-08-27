import Head from "next/head";
import DashboardLayout from "../../../../components/panel/DashboardLayout";
import Slider from "../../../../components/panel/settingOptions/slider/Slider";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Loading from "../../../../components/Loading";
import { getSliderImages } from "../../../../API/API";
export default function slider() {
  const { data, isLoading } = useQuery(["sliderImage"], getSliderImages);
  if (isLoading) return <Loading />;
  return (
    <>
      <Head>
        <title>اسلایدر</title>
      </Head>
      <DashboardLayout>
        <Slider slider={data}/>
      </DashboardLayout>
    </>
  );
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["sliderImage"], getSliderImages);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
