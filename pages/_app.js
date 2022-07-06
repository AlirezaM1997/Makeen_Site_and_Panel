//components
import Header from "../components/Header";
import HomeSlider from "../components/Slider";

//style
import "../styles/globals.css";
import '../styles/slider.css'
//next
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <HomeSlider />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
