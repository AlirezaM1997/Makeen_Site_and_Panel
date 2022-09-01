import Head from "next/head";
import Blogs from "../../components/site/blogs/Blogs";
export default function blogs() {
  return (
    <>
      <Head>
        <title>بلاگ</title>
      </Head>
      <Blogs />
    </>
  );
}
