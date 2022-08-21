import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/slickSlider.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
const Header = dynamic(() => import("../components/site/Header"), {
  ssr: false,
});
import Footer from "../components/site/Footer";
import RegisterationModal from "../components/site/home/RegisterationModal";
import ConsultationModal from "../components/site/home/consultation/Modal";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
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
        String(router.pathname).includes("courses") ||
        router.pathname === "/bootcamp" ||
        router.pathname === "/blogs" ||
        router.pathname === "/about" ? (
          <Header />
        ) : null}
        <RegisterationModal />
        <ConsultationModal />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
        {router.pathname === "/" ||
        router.pathname === "/cooperation" ||
        String(router.pathname).includes("courses") ||
        router.pathname === "/bootcamp" ||
        router.pathname === "/blogs" ||
        router.pathname === "/about" ? (
          <Footer />
        ) : null}
      </Provider>
    </>
  );
}
