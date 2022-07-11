//next
import Head from "next/head";

//style
import "../styles/globals.css";
import "../styles/slickSlider.css";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
       
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </>
  );
};
export default MyApp;
