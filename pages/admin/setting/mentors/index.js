import Head from "next/head";
import { getMentors } from "../../../../API/API";
import Loading from "../../../../components/Loading";
import DashboardLayout from "../../../../components/panel/DashboardLayout";
import Mentors from "../../../../components/panel/settingOptions/mentors/Mentors";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
export default function mentors() {
  const { data, isLoading } = useQuery(["getMentors"], getMentors);
  if (isLoading) return <Loading />;
  return (
    <>
      <Head>
        <title>منتورها</title>
      </Head>
      <DashboardLayout>
        <Mentors mentors={data} />
      </DashboardLayout>
    </>
  );
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getMentors"], getMentors);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
