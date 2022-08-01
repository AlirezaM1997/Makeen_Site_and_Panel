import Head from "next/head";
import "../styles/globals.css";
import "../styles/slickSlider.css";
import Header from "../components/commonlyUsedComponents/Header";
import Footer from "../components/commonlyUsedComponents/Footer";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
export default function MyApp({ Component, pageProps }) {
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
<<<<<<< HEAD
      {router.pathname === "/" || router.pathname === "/cooperation" || router.pathname === "/bootcamp" ? (
        <Header />
      ) : null}
      <Component {...pageProps} />
      {router.pathname === "/" || router.pathname === "/cooperation" || router.pathname === "/bootcamp" ? (
        <Footer />
      ) : null}
=======
      <Provider store={store}>
        {router.pathname === "/" ||
        router.pathname === "/cooperation" ||
        router.pathname === "/blogs" ? (
          <Header />
        ) : null}
        <Component {...pageProps} />
        {router.pathname === "/" ||
        router.pathname === "/cooperation" ||
        router.pathname === "/blogs" ? (
          <Footer />
        ) : null}
      </Provider>
>>>>>>> 0acca4be51e6fc1b14b42dbe71ad5ed3ae72387c
    </>
  );
}
