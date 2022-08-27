import Head from "next/head";
import CoursesPage from "../../components/site/courses/CoursesPage";
import Loading from "../../components/Loading";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCourses } from "../../API/API";
export default function coursesPage() {
  const { data, isLoading } = useQuery(["courses"], getCourses);
  if (isLoading) return <Loading />;
  return (
    <>
      <Head>
        <title>دوره ها</title>
      </Head>
      <CoursesPage courses={data} />
    </>
  );
}
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["courses"], getCourses);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
