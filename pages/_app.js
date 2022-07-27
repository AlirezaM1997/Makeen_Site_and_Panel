import Head from "next/head";
import "../styles/globals.css";
import "../styles/slickSlider.css";
import Header from "../components/publicComponents/Header";
import Footer from "../components/publicComponents/Footer";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
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
        <link
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          rel="stylesheet"
        />
      </Head>
      {router.pathname === "/" || router.pathname === "/cooperation"|| router.pathname === "/blogs" ? (
        <Header />
      ) : null}
      <Component {...pageProps} />
      {router.pathname === "/" || router.pathname === "/cooperation" || router.pathname === "/blogs" ? (
        <Footer />
      ) : null}
    </>
  );
};
export default MyApp;
