import Head from "next/head";
import CoursesPage from "../../components/site/courses/CoursesPage";
import Loading from "../../components/Loading";
import { dehydrate, QueryClient ,useQueries} from '@tanstack/react-query';
import { getCourses } from "../../API/API";
export default function coursesPage() {
  const results = useQueries({
    queries: [
      { queryKey: ['courses', 1], queryFn: getCourses, staleTime: Infinity},
    ]
  })
  if (results.some(r => r.isLoading)) return <Loading/>
  return (
    <>
      <Head>
        <title>دوره ها</title>
      </Head>
      <CoursesPage courses={results[0].data} />
    </>
  );
}
export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['courses'], getCourses)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}