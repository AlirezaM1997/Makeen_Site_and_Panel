import Head from "next/head";
import CoursePage from "../../../components/site/courses/CoursePage";
import Loading from "../../../components/Loading";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../API/API";
import axios from "axios";
const client = axios.create({ baseURL: `${process.env.domain}` });
export default function coursesPage(props) {
  const { data, isLoading } = useQuery(["courses"], getCourses);
  if (isLoading) return <Loading />;
  const courseName = data.filter((i)=>i.id==props.params.id)[0].title
  return (
    <>
      <Head>
        <title>{`دوره ${courseName}`}</title>
      </Head>
      <CoursePage course={data.filter((i)=>i.id==props.params.id)}/>
    </>
  );
}
export async function getStaticPaths() {
  const { data } = await client.get("/courses/all_courses");
  const paths = data.map((course) => ({
    params: { id: `${course.id}` },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const { data } = await client.get("/courses/all_courses");
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["courses"], data);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      params,
    },
  };
}
