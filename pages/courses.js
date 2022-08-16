import Head from "next/head";
import CoursesPage from "../components/site/courses/CoursesPage";
export default function coursesPage() {
  return (
    <>
      <Head>
        <title>دوره ها</title>
      </Head>
      <CoursesPage />
    </>
  );
}
