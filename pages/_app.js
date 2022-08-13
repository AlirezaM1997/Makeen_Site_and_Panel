import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/slickSlider.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
const Header = dynamic(() => import("../components/webComponents/commonlyUsedComponents/Header"), { ssr: false });
import Footer from "../components/webComponents/commonlyUsedComponents/Footer";
import RegisterationModal from "../components/webComponents/homeComponents/RegisterationModal";
import ConsultationModal from "../components/webComponents/homeComponents/consultation/Modal";
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
      <Provider store={store}>
        {router.pathname === "/" ||
        router.pathname === "/cooperation" ||
        router.pathname === "/courses" ||
        router.pathname === "/bootcamp" ||
        router.pathname === "/blogs" ||
        router.pathname === "/aboutmakeen" ? (
          <Header />
        ) : null}
        <RegisterationModal/>
        <ConsultationModal/>
        <Component {...pageProps} />
        {router.pathname === "/" ||
        router.pathname === "/cooperation" ||
        router.pathname === "/courses" ||
        router.pathname === "/bootcamp" ||
        router.pathname === "/blogs" ||
        router.pathname === "/aboutmakeen" ? (
          <Footer />
        ) : null}
      </Provider>
    </>
  );
}
